# دليل مختصر ومبسّط لفهم كيفية بناء نظام تشغيل مفتوح المصدر

## مقدمة عن بناء أنظمة التشغيل

بناء نظام تشغيل من الصفر هو أحد أكثر التحديات إثارة وتعقيداً في عالم البرمجة وعلوم الحاسوب. إنه مشروع يتطلب فهماً عميقاً لمعمارية الحاسوب، لغات البرمجة منخفضة المستوى، وإدارة الموارد. رغم التعقيد، فإن بناء نظام تشغيل بسيط يمكن أن يكون تجربة تعليمية لا تقدر بثمن.

في هذا الدليل، سنستكشف الخطوات الأساسية والمفاهيم المطلوبة لبناء نظام تشغيل مبسط. لن نتعمق في التفاصيل التقنية المعقدة، بل سنركز على فهم المبادئ الأساسية والخطوات العملية التي يمكن للمبتدئين اتباعها.

## المتطلبات الأساسية

### المعرفة التقنية المطلوبة

**لغة البرمجة C**: معظم أنظمة التشغيل مكتوبة بلغة C لأنها توفر تحكماً مباشراً في العتاد وكفاءة عالية في الأداء.

**لغة التجميع (Assembly)**: ضرورية للتعامل مع العمليات منخفضة المستوى مثل بدء تشغيل النظام وإدارة المقاطعات.

**معمارية الحاسوب**: فهم كيفية عمل المعالج، الذاكرة، والأجهزة الطرفية.

**أنظمة التشغيل النظرية**: فهم المفاهيم الأساسية مثل إدارة الذاكرة، جدولة العمليات، وإدارة الملفات.

### الأدوات المطلوبة

**مترجم C**: مثل GCC الذي يدعم التطوير للمنصات المختلفة.

**مجمع Assembly**: مثل NASM أو GAS لتجميع كود لغة التجميع.

**محرر النصوص أو IDE**: مثل Visual Studio Code أو Vim لكتابة الكود.

**محاكي أو آلة افتراضية**: مثل QEMU أو VirtualBox لاختبار النظام دون المخاطرة بالجهاز الحقيقي.

**أدوات البناء**: مثل Make لأتمتة عملية التجميع والربط.

## الخطوات الأساسية لبناء نظام تشغيل

### الخطوة الأولى: إنشاء Bootloader

Bootloader هو أول برنامج يتم تشغيله عند بدء تشغيل الحاسوب. مهمته الأساسية هي تحميل نظام التشغيل من جهاز التخزين إلى الذاكرة وتشغيله.

**مهام Bootloader**:
- التحقق من سلامة النظام
- إعداد البيئة الأساسية للمعالج
- تحميل النواة إلى الذاكرة
- نقل التحكم إلى النواة

**مثال مبسط لـ Bootloader**:
```assembly
; bootloader.asm
[BITS 16]
[ORG 0x7C00]

start:
    mov si, msg
    call print_string
    jmp $

print_string:
    mov ah, 0x0E
.loop:
    lodsb
    cmp al, 0
    je .done
    int 0x10
    jmp .loop
.done:
    ret

msg db 'Hello, OS World!', 0

times 510-($-$$) db 0
dw 0xAA55
```

### الخطوة الثانية: إنشاء النواة الأساسية

النواة هي قلب نظام التشغيل. في البداية، ستكون نواة بسيطة جداً تقوم بالمهام الأساسية فقط.

**مكونات النواة الأساسية**:
- إدارة الذاكرة البسيطة
- إدارة المقاطعات
- إدارة العمليات الأساسية
- واجهة بسيطة للمستخدم

**مثال لنواة بسيطة**:
```c
// kernel.c
void kernel_main() {
    // تنظيف الشاشة
    clear_screen();
    
    // طباعة رسالة ترحيب
    print("Welcome to MyOS!\n");
    
    // حلقة لا نهائية لمنع إنهاء النواة
    while(1) {
        // انتظار الأوامر
        handle_input();
    }
}

void clear_screen() {
    char *video_memory = (char*)0xB8000;
    for(int i = 0; i < 80*25*2; i++) {
        video_memory[i] = 0;
    }
}

void print(char *str) {
    char *video_memory = (char*)0xB8000;
    static int cursor_pos = 0;
    
    while(*str) {
        video_memory[cursor_pos] = *str;
        video_memory[cursor_pos + 1] = 0x07; // لون أبيض على خلفية سوداء
        str++;
        cursor_pos += 2;
    }
}
```

### الخطوة الثالثة: إدارة الذاكرة

إدارة الذاكرة هي إحدى أهم وظائف نظام التشغيل. في البداية، يمكن تطبيق نظام إدارة ذاكرة بسيط.

**مفاهيم أساسية**:
- تقسيم الذاكرة إلى أجزاء
- تتبع الأجزاء المستخدمة والحرة
- تخصيص وتحرير الذاكرة للعمليات

**مثال لإدارة ذاكرة بسيطة**:
```c
// memory.c
#define MEMORY_SIZE 1024*1024  // 1MB
#define BLOCK_SIZE 4096        // 4KB blocks

typedef struct memory_block {
    int is_free;
    int size;
    struct memory_block *next;
} memory_block_t;

memory_block_t *memory_list = NULL;

void init_memory() {
    memory_list = (memory_block_t*)0x100000; // بداية الذاكرة المتاحة
    memory_list->is_free = 1;
    memory_list->size = MEMORY_SIZE;
    memory_list->next = NULL;
}

void* malloc(int size) {
    memory_block_t *current = memory_list;
    
    while(current) {
        if(current->is_free && current->size >= size) {
            current->is_free = 0;
            return (void*)(current + 1);
        }
        current = current->next;
    }
    
    return NULL; // لا توجد ذاكرة متاحة
}

void free(void *ptr) {
    memory_block_t *block = (memory_block_t*)ptr - 1;
    block->is_free = 1;
}
```

### الخطوة الرابعة: إدارة العمليات

إدارة العمليات تتضمن إنشاء وجدولة وإنهاء العمليات. في نظام بسيط، يمكن البدء بدعم عملية واحدة فقط.

**مكونات إدارة العمليات**:
- هيكل بيانات لتمثيل العملية
- جدولة العمليات
- تبديل السياق

**مثال لإدارة عمليات بسيطة**:
```c
// process.c
typedef struct process {
    int pid;
    int state; // 0: running, 1: ready, 2: blocked
    void *stack_pointer;
    struct process *next;
} process_t;

process_t *current_process = NULL;
process_t *process_list = NULL;
int next_pid = 1;

process_t* create_process(void (*entry_point)()) {
    process_t *new_process = malloc(sizeof(process_t));
    new_process->pid = next_pid++;
    new_process->state = 1; // ready
    
    // تخصيص مكدس للعملية
    new_process->stack_pointer = malloc(4096) + 4096;
    
    // إضافة العملية للقائمة
    new_process->next = process_list;
    process_list = new_process;
    
    return new_process;
}

void schedule() {
    if(!current_process) {
        current_process = process_list;
        return;
    }
    
    // جدولة دائرية بسيطة
    current_process = current_process->next;
    if(!current_process) {
        current_process = process_list;
    }
}
```

### الخطوة الخامسة: إدارة الأجهزة

إدارة الأجهزة تتضمن التواصل مع الأجهزة الطرفية مثل لوحة المفاتيح والشاشة.

**مفاهيم أساسية**:
- المقاطعات (Interrupts)
- منافذ الإدخال/الإخراج (I/O Ports)
- برامج تشغيل الأجهزة

**مثال لإدارة لوحة المفاتيح**:
```c
// keyboard.c
#define KEYBOARD_PORT 0x60

void keyboard_handler() {
    unsigned char scancode = inb(KEYBOARD_PORT);
    
    // تحويل scancode إلى حرف
    char key = scancode_to_char(scancode);
    
    if(key) {
        handle_keypress(key);
    }
}

char scancode_to_char(unsigned char scancode) {
    char keymap[] = {
        0, 0, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '-', '=', 0, 0, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
        'o', 'p', '[', ']', '\n', 0, 'a', 's', 'd', 'f', 'g',
        'h', 'j', 'k', 'l', ';', '\'', '`', 0, '\\', 'z', 'x',
        'c', 'v', 'b', 'n', 'm', ',', '.', '/', 0, 0, 0, ' '
    };
    
    if(scancode < sizeof(keymap)) {
        return keymap[scancode];
    }
    
    return 0;
}
```

## مشروع عملي: نظام تشغيل مبسط

### هدف المشروع

بناء نظام تشغيل بسيط يسمى "SimpleOS" يحتوي على:
- Bootloader أساسي
- نواة تدعم طباعة النصوص
- إدارة ذاكرة بسيطة
- واجهة سطر أوامر أساسية

### هيكل المشروع

```
SimpleOS/
├── boot/
│   └── bootloader.asm
├── kernel/
│   ├── kernel.c
│   ├── memory.c
│   ├── screen.c
│   └── keyboard.c
├── include/
│   ├── kernel.h
│   ├── memory.h
│   └── screen.h
├── Makefile
└── README.md
```

### خطوات التنفيذ

**الخطوة 1: إعداد البيئة**
```bash
# تثبيت الأدوات المطلوبة (على Ubuntu/Debian)
sudo apt-get install build-essential nasm qemu-system-x86

# إنشاء مجلد المشروع
mkdir SimpleOS
cd SimpleOS
```

**الخطوة 2: كتابة Bootloader**
```assembly
; boot/bootloader.asm
[BITS 16]
[ORG 0x7C00]

start:
    ; إعداد المكدس
    mov ax, 0x07C0
    add ax, 288
    mov ss, ax
    mov sp, 4096
    
    ; إعداد البيانات
    mov ax, 0x07C0
    mov ds, ax
    
    ; طباعة رسالة
    mov si, boot_msg
    call print_string
    
    ; تحميل النواة
    call load_kernel
    
    ; القفز للنواة
    jmp 0x1000:0x0000

print_string:
    mov ah, 0x0E
.loop:
    lodsb
    cmp al, 0
    je .done
    int 0x10
    jmp .loop
.done:
    ret

load_kernel:
    ; تحميل النواة من القطاع الثاني
    mov ah, 0x02
    mov al, 1
    mov ch, 0
    mov cl, 2
    mov dh, 0
    mov bx, 0x1000
    mov es, bx
    mov bx, 0x0000
    int 0x13
    ret

boot_msg db 'Loading SimpleOS...', 13, 10, 0

times 510-($-$$) db 0
dw 0xAA55
```

**الخطوة 3: كتابة النواة الأساسية**
```c
// kernel/kernel.c
#include "screen.h"
#include "memory.h"

void kernel_main() {
    clear_screen();
    print("SimpleOS v1.0\n");
    print("Welcome to your first operating system!\n");
    print("Type 'help' for available commands.\n\n");
    
    init_memory();
    
    // حلقة الأوامر الرئيسية
    command_loop();
}

void command_loop() {
    char input[256];
    
    while(1) {
        print("SimpleOS> ");
        read_input(input, sizeof(input));
        process_command(input);
    }
}

void process_command(char *cmd) {
    if(strcmp(cmd, "help") == 0) {
        print("Available commands:\n");
        print("  help    - Show this help\n");
        print("  clear   - Clear screen\n");
        print("  memory  - Show memory info\n");
        print("  reboot  - Restart system\n");
    }
    else if(strcmp(cmd, "clear") == 0) {
        clear_screen();
    }
    else if(strcmp(cmd, "memory") == 0) {
        show_memory_info();
    }
    else if(strcmp(cmd, "reboot") == 0) {
        reboot();
    }
    else if(strlen(cmd) > 0) {
        print("Unknown command: ");
        print(cmd);
        print("\nType 'help' for available commands.\n");
    }
}
```

**الخطوة 4: إنشاء Makefile**
```makefile
# Makefile
CC = gcc
CFLAGS = -m32 -nostdlib -nostdinc -fno-builtin -fno-stack-protector
ASM = nasm
ASMFLAGS = -f bin

all: simpleos.img

bootloader.bin: boot/bootloader.asm
	$(ASM) $(ASMFLAGS) $< -o $@

kernel.bin: kernel/kernel.c kernel/screen.c kernel/memory.c
	$(CC) $(CFLAGS) -c kernel/kernel.c -o kernel.o
	$(CC) $(CFLAGS) -c kernel/screen.c -o screen.o
	$(CC) $(CFLAGS) -c kernel/memory.c -o memory.o
	ld -m elf_i386 -Ttext 0x1000 --oformat binary kernel.o screen.o memory.o -o kernel.bin

simpleos.img: bootloader.bin kernel.bin
	cat bootloader.bin kernel.bin > simpleos.img
	truncate -s 1440k simpleos.img

run: simpleos.img
	qemu-system-i386 -fda simpleos.img

clean:
	rm -f *.bin *.o *.img kernel/*.o

.PHONY: all run clean
```

**الخطوة 5: البناء والاختبار**
```bash
# بناء النظام
make

# تشغيل النظام في المحاكي
make run
```

## التحديات والصعوبات

### التحديات التقنية

**إدارة الذاكرة المعقدة**: تطبيق تقنيات متقدمة مثل الذاكرة الافتراضية والصفحات.

**دعم الأجهزة المتعددة**: كتابة برامج تشغيل لأجهزة مختلفة.

**الأمان والحماية**: تطبيق آليات حماية متقدمة.

**الأداء**: تحسين أداء النظام للتطبيقات الحقيقية.

### التحديات العملية

**التصحيح (Debugging)**: صعوبة في تصحيح الأخطاء في بيئة منخفضة المستوى.

**الاختبار**: اختبار النظام على أجهزة مختلفة ومعماريات متنوعة.

**التوثيق**: توثيق النظام بطريقة تسهل على المطورين الآخرين فهمه.

**الصيانة**: الحفاظ على النظام وتطويره مع مرور الوقت.

## الموارد والمراجع

### كتب مفيدة

**"Operating System Concepts" by Silberschatz**: مرجع شامل لمفاهيم أنظمة التشغيل.

**"Modern Operating Systems" by Tanenbaum**: كتاب ممتاز لفهم الأنظمة الحديثة.

**"The Design and Implementation of the FreeBSD Operating System"**: دراسة عملية لنظام حقيقي.

### مشاريع مفتوحة المصدر للتعلم

**Minix**: نظام تعليمي بسيط ومفهوم.

**xv6**: نظام تعليمي من MIT، بسيط وموثق جيداً.

**Linux Kernel**: للمطورين المتقدمين، مصدر لا ينضب للتعلم.

**SerenityOS**: مشروع حديث لبناء نظام تشغيل من الصفر.

### مجتمعات ومنتديات

**OSDev.org**: مجتمع مطوري أنظمة التشغيل.

**Reddit r/osdev**: منتدى نشط لمناقشة تطوير الأنظمة.

**Stack Overflow**: للأسئلة التقنية المحددة.

## نصائح للمبتدئين

### ابدأ بسيط

لا تحاول بناء نظام معقد من البداية. ابدأ بنظام بسيط جداً يطبع "Hello World" ثم أضف الميزات تدريجياً.

### استخدم المحاكيات

اختبر نظامك دائماً في محاكي قبل تجربته على جهاز حقيقي. هذا يحميك من إتلاف النظام الأساسي.

### ادرس الأنظمة الموجودة

اقرأ كود أنظمة مفتوحة المصدر مثل xv6 أو Minix لفهم كيفية تطبيق المفاهيم النظرية.

### اطلب المساعدة

لا تتردد في طلب المساعدة من المجتمعات المتخصصة. مطوري أنظمة التشغيل مجتمع متعاون ومساعد.

### كن صبوراً

بناء نظام تشغيل عملية طويلة ومعقدة. لا تتوقع نتائج سريعة، واستمتع بعملية التعلم.

## الخلاصة

بناء نظام تشغيل من الصفر هو تحدٍ كبير ولكنه مجزٍ جداً. إنه يوفر فهماً عميقاً لكيفية عمل الحواسيب على المستوى الأساسي، ويطور مهارات البرمجة منخفضة المستوى.

رغم أن الأنظمة التي ستبنيها في البداية ستكون بسيطة جداً مقارنة بالأنظمة التجارية، إلا أن المبادئ والمفاهيم التي ستتعلمها هي نفسها المستخدمة في الأنظمة المعقدة.

الهدف ليس بناء نظام ينافس Windows أو Linux، بل فهم كيفية عملها وتطوير مهاراتك التقنية. كل خطوة في هذه الرحلة ستعلمك شيئاً جديداً وتقربك أكثر من فهم عالم أنظمة التشغيل الرائع.

