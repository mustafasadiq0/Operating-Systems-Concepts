import React from 'react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';

const Project = () => {
  return (
    <ContentRenderer title="ابدأ مشروعك: بناء نظام تشغيل مبسط">
      <SectionHeader level={2}>مقدمة المشروع</SectionHeader>
      
      <Paragraph>
        مرحباً بك في أكثر الرحلات إثارة في عالم البرمجة وعلوم الحاسوب! بناء نظام تشغيل من الصفر ليس 
        مجرد مشروع برمجي، بل هو رحلة استكشافية عميقة في قلب الحاسوب وكيفية عمله.
      </Paragraph>

      <SectionHeader level={2}>أهداف المشروع</SectionHeader>
      
      <Paragraph>
        الهدف من هذا المشروع هو بناء نظام تشغيل بسيط ولكن وظيفي يمكنه التشغيل على جهاز حقيقي أو محاكي، 
        عرض واجهة نصية، قبول أوامر من المستخدم، وإدارة الذاكرة بشكل أساسي.
      </Paragraph>

      <SectionHeader level={2}>الخطوات التفصيلية</SectionHeader>
      
      <Paragraph>
        المشروع مقسم إلى مراحل متدرجة: إعداد بيئة التطوير، بناء Bootloader، إنشاء النواة الأساسية، 
        إدارة الذاكرة، إدارة الإدخال، والبناء والاختبار.
      </Paragraph>

      <SectionHeader level={2}>الأدوات والمصادر</SectionHeader>
      
      <Paragraph>
        ستحتاج لأدوات التطوير الأساسية مثل NASM و GCC و QEMU، بالإضافة إلى مصادر التعلم والمراجع 
        التقنية لمساعدتك في رحلة البناء.
      </Paragraph>

      <SectionHeader level={2}>التجربة الواقعية</SectionHeader>
      
      <Paragraph>
        المشروع يتضمن تحديات حقيقية مثل تصحيح الأخطاء في بيئة منخفضة المستوى، إدارة الذاكرة، 
        والتوافقية مع الأجهزة المختلفة.
      </Paragraph>
    </ContentRenderer>
  );
};

export default Project;

