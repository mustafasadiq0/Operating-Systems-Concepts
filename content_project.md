# ابدأ مشروعك: بناء نظام تشغيل مبسط

## مقدمة المشروع

مرحباً بك في أكثر الرحلات إثارة في عالم البرمجة وعلوم الحاسوب! بناء نظام تشغيل من الصفر ليس مجرد مشروع برمجي، بل هو رحلة استكشافية عميقة في قلب الحاسوب وكيفية عمله. في هذا القسم، سنأخذك خطوة بخطوة لبناء نظام تشغيل بسيط ولكن وظيفي يمكنك تشغيله على جهازك الخاص.

لا تقلق إذا كنت مبتدئاً، فقد صممنا هذا المشروع ليكون تعليمياً وتدريجياً. ستبدأ بأبسط المكونات وتبني عليها تدريجياً حتى تحصل على نظام تشغيل يمكنه التفاعل معك وتنفيذ أوامر بسيطة.

## أهداف المشروع

### الأهداف التعليمية

**فهم عميق لأنظمة التشغيل**: ستتعلم كيف تعمل أنظمة التشغيل من الداخل، وليس فقط كيفية استخدامها.

**مهارات البرمجة منخفضة المستوى**: ستطور مهاراتك في لغة C ولغة التجميع، وهي مهارات قيمة في عالم البرمجة.

**فهم معمارية الحاسوب**: ستتعلم كيف يتفاعل البرنامج مع العتاد مباشرة.

**حل المشاكل المعقدة**: ستواجه تحديات تقنية حقيقية وتتعلم كيفية حلها.

### الأهداف العملية

**نظام تشغيل وظيفي**: في نهاية المشروع، ستحصل على نظام تشغيل يمكنه:
- التشغيل على جهاز حقيقي أو محاكي
- عرض واجهة نصية
- قبول أوامر من المستخدم
- إدارة الذاكرة بشكل أساسي
- التفاعل مع لوحة المفاتيح

**مشروع للسيرة الذاتية**: مشروع بناء نظام تشغيل سيكون إضافة مميزة لسيرتك الذاتية ومحفظة أعمالك.

## الخطوات التفصيلية

### المرحلة الأولى: الإعداد والتحضير

#### إعداد بيئة التطوير

**تثبيت الأدوات الأساسية**:

على Ubuntu/Debian:
```bash
sudo apt-get update
sudo apt-get install build-essential nasm qemu-system-x86 gdb
```

على macOS:
```bash
brew install nasm qemu gcc
```

على Windows:
- تثبيت WSL (Windows Subsystem for Linux)
- تثبيت الأدوات داخل WSL كما في Ubuntu

**إنشاء مساحة العمل**:
```bash
mkdir MyOS
cd MyOS
mkdir boot kernel include tools
```

#### فهم البنية الأساسية

**هيكل المشروع**:
```
MyOS/
├── boot/           # ملفات الإقلاع
│   ├── bootloader.asm
│   └── boot.asm
├── kernel/         # النواة الأساسية
│   ├── kernel.c
│   ├── screen.c
│   ├── keyboard.c
│   └── memory.c
├── include/        # ملفات الرؤوس
│   ├── kernel.h
│   ├── screen.h
│   └── types.h
├── tools/          # أدوات البناء
│   └── Makefile
└── README.md
```

### المرحلة الثانية: بناء Bootloader

#### فهم عملية الإقلاع

عندما تشغل الحاسوب، يحدث التسلسل التالي:
1. BIOS/UEFI يبحث عن جهاز قابل للإقلاع
2. يقرأ أول 512 بايت (Boot Sector)
3. ينفذ الكود الموجود في هذا القطاع
4. هذا الكود هو Bootloader الخاص بنا

#### كتابة Bootloader بسيط

```assembly
; boot/bootloader.asm
[BITS 16]           ; نحن في وضع 16-bit
[ORG 0x7C00]        ; BIOS يحمل الكود هنا

start:
    ; تنظيف المسجلات
    xor ax, ax
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7C00
    
    ; طباعة رسالة ترحيب
    mov si, welcome_msg
    call print_string
    
    ; تحميل النواة من القطاع التالي
    call load_kernel
    
    ; القفز للنواة
    jmp 0x1000:0x0000

print_string:
    mov ah, 0x0E        ; وظيفة طباعة BIOS
.loop:
    lodsb               ; تحميل الحرف التالي
    cmp al, 0           ; هل وصلنا لنهاية النص؟
    je .done
    int 0x10            ; طباعة الحرف
    jmp .loop
.done:
    ret

load_kernel:
    ; قراءة القطاع الثاني (النواة)
    mov ah, 0x02        ; وظيفة قراءة القطاع
    mov al, 1           ; عدد القطاعات
    mov ch, 0           ; رقم الأسطوانة
    mov cl, 2           ; رقم القطاع (يبدأ من 1)
    mov dh, 0           ; رقم الرأس
    mov bx, 0x1000      ; عنوان التحميل
    mov es, bx
    mov bx, 0x0000
    int 0x13            ; استدعاء BIOS
    
    jc disk_error       ; إذا حدث خطأ
    ret

disk_error:
    mov si, error_msg
    call print_string
    hlt                 ; توقف

welcome_msg db 'Loading MyOS...', 13, 10, 0
error_msg db 'Disk read error!', 13, 10, 0

; ملء باقي القطاع بالأصفار
times 510-($-$$) db 0
; توقيع Boot Sector
dw 0xAA55
```

#### تجميع وتشغيل Bootloader

```bash
# تجميع Bootloader
nasm -f bin boot/bootloader.asm -o bootloader.bin

# إنشاء صورة قرص مرن
dd if=/dev/zero of=myos.img bs=1024 count=1440
dd if=bootloader.bin of=myos.img conv=notrunc

# تشغيل في المحاكي
qemu-system-i386 -fda myos.img
```

### المرحلة الثالثة: بناء النواة الأساسية

#### إنشاء نقطة دخول النواة

```c
// kernel/kernel.c
#include "../include/screen.h"
#include "../include/keyboard.h"
#include "../include/memory.h"

void kernel_main() {
    // تنظيف الشاشة
    clear_screen();
    
    // رسالة ترحيب
    print("MyOS v1.0 - Built by You!\n");
    print("Type 'help' for available commands.\n\n");
    
    // تهيئة النظام
    init_memory();
    init_keyboard();
    
    // حلقة الأوامر الرئيسية
    command_loop();
}

void command_loop() {
    char input[256];
    
    while(1) {
        print("MyOS> ");
        read_line(input, sizeof(input));
        process_command(input);
    }
}

void process_command(char *cmd) {
    if(strcmp(cmd, "help") == 0) {
        show_help();
    }
    else if(strcmp(cmd, "clear") == 0) {
        clear_screen();
    }
    else if(strcmp(cmd, "memory") == 0) {
        show_memory_info();
    }
    else if(strcmp(cmd, "time") == 0) {
        show_time();
    }
    else if(strcmp(cmd, "reboot") == 0) {
        reboot_system();
    }
    else if(strlen(cmd) > 0) {
        print("Unknown command: ");
        print(cmd);
        print("\nType 'help' for available commands.\n");
    }
}

void show_help() {
    print("Available commands:\n");
    print("  help     - Show this help message\n");
    print("  clear    - Clear the screen\n");
    print("  memory   - Show memory information\n");
    print("  time     - Show system time\n");
    print("  reboot   - Restart the system\n");
}
```

#### إدارة الشاشة

```c
// kernel/screen.c
#include "../include/screen.h"

#define VIDEO_MEMORY 0xB8000
#define SCREEN_WIDTH 80
#define SCREEN_HEIGHT 25
#define WHITE_ON_BLACK 0x07

static int cursor_x = 0;
static int cursor_y = 0;

void clear_screen() {
    char *video_memory = (char*)VIDEO_MEMORY;
    
    for(int i = 0; i < SCREEN_WIDTH * SCREEN_HEIGHT * 2; i += 2) {
        video_memory[i] = ' ';
        video_memory[i + 1] = WHITE_ON_BLACK;
    }
    
    cursor_x = 0;
    cursor_y = 0;
    update_cursor();
}

void print(char *str) {
    while(*str) {
        print_char(*str);
        str++;
    }
}

void print_char(char c) {
    char *video_memory = (char*)VIDEO_MEMORY;
    
    if(c == '\n') {
        cursor_x = 0;
        cursor_y++;
    }
    else if(c == '\t') {
        cursor_x = (cursor_x + 8) & ~7;
    }
    else {
        int offset = (cursor_y * SCREEN_WIDTH + cursor_x) * 2;
        video_memory[offset] = c;
        video_memory[offset + 1] = WHITE_ON_BLACK;
        cursor_x++;
    }
    
    if(cursor_x >= SCREEN_WIDTH) {
        cursor_x = 0;
        cursor_y++;
    }
    
    if(cursor_y >= SCREEN_HEIGHT) {
        scroll_screen();
        cursor_y = SCREEN_HEIGHT - 1;
    }
    
    update_cursor();
}

void scroll_screen() {
    char *video_memory = (char*)VIDEO_MEMORY;
    
    // نقل جميع الأسطر للأعلى
    for(int i = 0; i < (SCREEN_HEIGHT - 1) * SCREEN_WIDTH * 2; i++) {
        video_memory[i] = video_memory[i + SCREEN_WIDTH * 2];
    }
    
    // تنظيف السطر الأخير
    for(int i = (SCREEN_HEIGHT - 1) * SCREEN_WIDTH * 2; 
        i < SCREEN_HEIGHT * SCREEN_WIDTH * 2; i += 2) {
        video_memory[i] = ' ';
        video_memory[i + 1] = WHITE_ON_BLACK;
    }
}

void update_cursor() {
    int position = cursor_y * SCREEN_WIDTH + cursor_x;
    
    // إرسال الموقع لمنافذ VGA
    outb(0x3D4, 0x0F);
    outb(0x3D5, (unsigned char)(position & 0xFF));
    outb(0x3D4, 0x0E);
    outb(0x3D5, (unsigned char)((position >> 8) & 0xFF));
}
```

### المرحلة الرابعة: إدارة الإدخال

#### التعامل مع لوحة المفاتيح

```c
// kernel/keyboard.c
#include "../include/keyboard.h"

#define KEYBOARD_DATA_PORT 0x60
#define KEYBOARD_STATUS_PORT 0x64

static char scancode_to_ascii[] = {
    0, 0, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\b',
    '\t', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\n',
    0, 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '`',
    0, '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 0,
    '*', 0, ' '
};

void init_keyboard() {
    // تهيئة لوحة المفاتيح
    // في نظام حقيقي، نحتاج لإعداد المقاطعات هنا
}

char read_key() {
    unsigned char scancode;
    
    // انتظار حتى يصبح هناك مفتاح متاح
    while(!(inb(KEYBOARD_STATUS_PORT) & 1));
    
    scancode = inb(KEYBOARD_DATA_PORT);
    
    // تحويل scancode إلى ASCII
    if(scancode < sizeof(scancode_to_ascii)) {
        return scancode_to_ascii[scancode];
    }
    
    return 0;
}

void read_line(char *buffer, int max_length) {
    int index = 0;
    char key;
    
    while(index < max_length - 1) {
        key = read_key();
        
        if(key == '\n') {
            buffer[index] = '\0';
            print_char('\n');
            break;
        }
        else if(key == '\b' && index > 0) {
            index--;
            print_char('\b');
            print_char(' ');
            print_char('\b');
        }
        else if(key >= 32 && key <= 126) {
            buffer[index] = key;
            index++;
            print_char(key);
        }
    }
    
    buffer[index] = '\0';
}
```

### المرحلة الخامسة: إدارة الذاكرة

#### نظام إدارة ذاكرة بسيط

```c
// kernel/memory.c
#include "../include/memory.h"

#define HEAP_START 0x100000  // 1MB
#define HEAP_SIZE 0x100000   // 1MB heap

typedef struct memory_block {
    unsigned int size;
    int is_free;
    struct memory_block *next;
} memory_block_t;

static memory_block_t *heap_start = NULL;
static unsigned int total_memory = 0;
static unsigned int used_memory = 0;

void init_memory() {
    heap_start = (memory_block_t*)HEAP_START;
    heap_start->size = HEAP_SIZE - sizeof(memory_block_t);
    heap_start->is_free = 1;
    heap_start->next = NULL;
    
    total_memory = HEAP_SIZE;
    used_memory = sizeof(memory_block_t);
}

void* malloc(unsigned int size) {
    memory_block_t *current = heap_start;
    
    // محاذاة الحجم لـ 4 بايت
    size = (size + 3) & ~3;
    
    while(current) {
        if(current->is_free && current->size >= size) {
            // إذا كان الحجم أكبر بكثير، قسم الكتلة
            if(current->size > size + sizeof(memory_block_t) + 16) {
                memory_block_t *new_block = (memory_block_t*)
                    ((char*)current + sizeof(memory_block_t) + size);
                new_block->size = current->size - size - sizeof(memory_block_t);
                new_block->is_free = 1;
                new_block->next = current->next;
                
                current->size = size;
                current->next = new_block;
            }
            
            current->is_free = 0;
            used_memory += current->size + sizeof(memory_block_t);
            
            return (void*)((char*)current + sizeof(memory_block_t));
        }
        current = current->next;
    }
    
    return NULL; // لا توجد ذاكرة متاحة
}

void free(void *ptr) {
    if(!ptr) return;
    
    memory_block_t *block = (memory_block_t*)
        ((char*)ptr - sizeof(memory_block_t));
    
    block->is_free = 1;
    used_memory -= block->size + sizeof(memory_block_t);
    
    // دمج الكتل المجاورة الحرة
    merge_free_blocks();
}

void merge_free_blocks() {
    memory_block_t *current = heap_start;
    
    while(current && current->next) {
        if(current->is_free && current->next->is_free) {
            current->size += current->next->size + sizeof(memory_block_t);
            current->next = current->next->next;
        } else {
            current = current->next;
        }
    }
}

void show_memory_info() {
    print("Memory Information:\n");
    print("Total Memory: ");
    print_int(total_memory);
    print(" bytes\n");
    print("Used Memory: ");
    print_int(used_memory);
    print(" bytes\n");
    print("Free Memory: ");
    print_int(total_memory - used_memory);
    print(" bytes\n");
}
```

### المرحلة السادسة: البناء والاختبار

#### إنشاء Makefile

```makefile
# tools/Makefile
CC = gcc
CFLAGS = -m32 -nostdlib -nostdinc -fno-builtin -fno-stack-protector -nostartfiles -nodefaultlibs -Wall -Wextra -Werror -c
LDFLAGS = -m elf_i386 -T link.ld
ASM = nasm
ASMFLAGS = -f elf

SOURCES = kernel/kernel.c kernel/screen.c kernel/keyboard.c kernel/memory.c
OBJECTS = $(SOURCES:.c=.o)

all: myos.img

bootloader.bin: boot/bootloader.asm
	$(ASM) -f bin $< -o $@

kernel.bin: $(OBJECTS) kernel/kernel_entry.o
	ld $(LDFLAGS) -o $@ $^

kernel/kernel_entry.o: kernel/kernel_entry.asm
	$(ASM) $(ASMFLAGS) $< -o $@

%.o: %.c
	$(CC) $(CFLAGS) $< -o $@

myos.img: bootloader.bin kernel.bin
	cat bootloader.bin kernel.bin > myos.img
	truncate -s 1440k myos.img

run: myos.img
	qemu-system-i386 -fda myos.img

debug: myos.img
	qemu-system-i386 -fda myos.img -s -S &
	gdb -ex "target remote localhost:1234" -ex "symbol-file kernel.bin"

clean:
	rm -f *.bin *.img kernel/*.o

.PHONY: all run debug clean
```

#### نقطة دخول النواة بلغة التجميع

```assembly
; kernel/kernel_entry.asm
[BITS 32]
[EXTERN kernel_main]

start:
    call kernel_main
    jmp $
```

#### ملف الربط

```ld
/* link.ld */
ENTRY(start)

SECTIONS
{
    . = 0x1000;
    
    .text : {
        *(.text)
    }
    
    .data : {
        *(.data)
    }
    
    .bss : {
        *(.bss)
    }
}
```

## الأدوات والمصادر

### أدوات التطوير الأساسية

**NASM (Netwide Assembler)**: لتجميع كود لغة التجميع
**GCC**: مترجم C مع دعم cross-compilation
**QEMU**: محاكي سريع وموثوق لاختبار النظام
**GDB**: مصحح الأخطاء للتصحيح المتقدم

### أدوات مساعدة

**Bochs**: محاكي آخر مع ميزات تصحيح متقدمة
**VirtualBox**: لاختبار النظام في بيئة أكثر واقعية
**Hex Editor**: لفحص الملفات الثنائية
**Disassembler**: لفهم الكود المجمع

### مصادر التعلم

**OSDev Wiki**: مصدر شامل لتطوير أنظمة التشغيل
**Intel Manuals**: دليل معمارية x86 الرسمي
**AMD64 Architecture**: للتطوير على معمارية 64-bit
**UEFI Specification**: للأنظمة الحديثة

## التجربة الواقعية

### التحديات المتوقعة

**تصحيح الأخطاء**: صعوبة في تتبع الأخطاء في بيئة منخفضة المستوى
**إدارة الذاكرة**: تجنب تسريب الذاكرة وتلف البيانات
**التوافقية**: ضمان عمل النظام على أجهزة مختلفة
**الأداء**: تحسين سرعة النظام واستجابته

### نصائح للنجاح

**ابدأ بسيط**: لا تحاول إضافة ميزات معقدة من البداية
**اختبر كثيراً**: اختبر كل تغيير صغير قبل المتابعة
**احتفظ بنسخ احتياطية**: احفظ نسخاً من الكود العامل
**اطلب المساعدة**: لا تتردد في السؤال في المجتمعات المتخصصة

### مراحل التطوير المقترحة

**الأسبوع الأول**: إعداد البيئة وبناء bootloader أساسي
**الأسبوع الثاني**: إنشاء النواة وإدارة الشاشة
**الأسبوع الثالث**: إضافة دعم لوحة المفاتيح والأوامر
**الأسبوع الرابع**: تطبيق إدارة الذاكرة الأساسية
**الأسبوع الخامس**: إضافة ميزات متقدمة واختبار شامل

## التطوير المستقبلي

### ميزات يمكن إضافتها

**نظام الملفات**: إضافة دعم لحفظ وقراءة الملفات
**الشبكات**: دعم أساسي للاتصال بالشبكة
**الرسوميات**: واجهة رسومية بسيطة
**تعدد المهام**: تشغيل عدة برامج في نفس الوقت
**برامج التشغيل**: دعم أجهزة إضافية

### مسارات التخصص

**أنظمة مدمجة**: تطوير النظام للأجهزة المدمجة
**أنظمة الوقت الحقيقي**: إضافة ضمانات زمنية
**الأمان**: تطبيق ميزات أمان متقدمة
**الأداء**: تحسين النظام للسرعة القصوى

## الخلاصة

بناء نظام تشغيل مشروع طموح ومثير، ولكنه قابل للتحقيق مع الصبر والمثابرة. هذا المشروع سيعلمك أكثر من أي كتاب أو كورس عن كيفية عمل الحواسيب حقاً.

تذكر أن الهدف ليس بناء نظام ينافس Windows أو Linux، بل فهم المبادئ الأساسية وتطوير مهاراتك التقنية. كل خطوة في هذه الرحلة ستجعلك مبرمجاً أفضل وأكثر فهماً للتكنولوجيا.

ابدأ اليوم، واستمتع بالرحلة!

