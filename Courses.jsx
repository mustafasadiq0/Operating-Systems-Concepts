import React from 'react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';

const Courses = () => {
  return (
    <ContentRenderer title="الكورسات التعليمية المجانية">
      <SectionHeader level={2}>مقدمة عن الكورسات التعليمية</SectionHeader>
      
      <Paragraph>
        في عصر التعلم الرقمي، أصبحت الكورسات المجانية عبر الإنترنت مصدراً قيماً للمعرفة والتطوير المهني. 
        هذا القسم يجمع أفضل الكورسات التعليمية المجانية المتاحة باللغة العربية والإنجليزية لتعلم إدارة 
        أنظمة التشغيل المختلفة.
      </Paragraph>

      <SectionHeader level={2}>كورسات إدارة Windows</SectionHeader>
      
      <Paragraph>
        مجموعة شاملة من الكورسات العربية والإنجليزية لتعلم إدارة Windows من الأساسيات إلى المستوى المتقدم، 
        بما في ذلك Windows Server وإدارة الشبكات.
      </Paragraph>

      <SectionHeader level={2}>كورسات Linux من الأساسيات إلى المتقدم</SectionHeader>
      
      <Paragraph>
        كورسات شاملة لتعلم Linux بدءاً من الأساسيات وصولاً إلى إدارة الخوادم والأمان. تشمل توزيعات 
        مختلفة مثل Ubuntu و CentOS و Kali Linux.
      </Paragraph>

      <SectionHeader level={2}>كورسات macOS للمطورين</SectionHeader>
      
      <Paragraph>
        كورسات متخصصة لتعلم تطوير التطبيقات على macOS باستخدام Swift و SwiftUI، بالإضافة إلى 
        إدارة النظام والتحسين.
      </Paragraph>

      <SectionHeader level={2}>مصادر تعليمية إضافية</SectionHeader>
      
      <Paragraph>
        منصات تعليمية عربية ودولية تقدم محتوى عالي الجودة في أنظمة التشغيل، مع شهادات معتمدة 
        ومجتمعات تعلم نشطة.
      </Paragraph>
    </ContentRenderer>
  );
};

export default Courses;

