import React from 'react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';

const BuildingOS = () => {
  return (
    <ContentRenderer title="دليل مختصر ومبسّط لفهم كيفية بناء نظام تشغيل مفتوح المصدر">
      <SectionHeader level={2}>مقدمة عن بناء أنظمة التشغيل</SectionHeader>
      
      <Paragraph>
        بناء نظام تشغيل من الصفر هو أحد أكثر التحديات إثارة وتعقيداً في عالم البرمجة وعلوم الحاسوب. 
        إنه مشروع يتطلب فهماً عميقاً لمعمارية الحاسوب، لغات البرمجة منخفضة المستوى، وإدارة الموارد.
      </Paragraph>

      <SectionHeader level={2}>المتطلبات الأساسية</SectionHeader>
      
      <Paragraph>
        لبناء نظام تشغيل، تحتاج إلى معرفة لغة البرمجة C، لغة التجميع (Assembly)، فهم معمارية الحاسوب، 
        ومفاهيم أنظمة التشغيل النظرية. كما تحتاج لأدوات مثل مترجم C، مجمع Assembly، ومحاكي لاختبار النظام.
      </Paragraph>

      <SectionHeader level={2}>الخطوات الأساسية</SectionHeader>
      
      <Paragraph>
        البناء يبدأ بإنشاء Bootloader، ثم النواة الأساسية، إدارة الذاكرة، إدارة العمليات، وإدارة الأجهزة. 
        كل خطوة تبني على السابقة لتكوين نظام تشغيل وظيفي.
      </Paragraph>

      <SectionHeader level={2}>التحديات والصعوبات</SectionHeader>
      
      <Paragraph>
        التحديات تشمل تصحيح الأخطاء في بيئة منخفضة المستوى، إدارة الذاكرة المعقدة، دعم الأجهزة المتعددة، 
        والحفاظ على الأداء والاستقرار.
      </Paragraph>
    </ContentRenderer>
  );
};

export default BuildingOS;

