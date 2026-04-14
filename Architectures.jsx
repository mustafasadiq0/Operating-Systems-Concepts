import React from 'react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';

const Architectures = () => {
  return (
    <ContentRenderer title="معماريات أنظمة التشغيل">
      <SectionHeader level={2}>مقدمة عن معماريات أنظمة التشغيل</SectionHeader>
      
      <Paragraph>
        معمارية نظام التشغيل تحدد كيفية تنظيم وترتيب مكونات النظام المختلفة، وكيفية تفاعلها مع بعضها البعض. 
        اختيار المعمارية المناسبة يؤثر بشكل كبير على أداء النظام، استقراره، أمانه، وسهولة صيانته وتطويره.
      </Paragraph>

      <SectionHeader level={2}>المعمارية الأحادية (Monolithic Kernel)</SectionHeader>
      
      <Paragraph>
        في هذه المعمارية، جميع خدمات نظام التشغيل تعمل في مساحة النواة (Kernel Space) كوحدة واحدة كبيرة. 
        هذا يعني أن إدارة الذاكرة، نظام الملفات، برامج تشغيل الأجهزة، وجميع الخدمات الأخرى تعمل في نفس 
        المساحة مع امتيازات كاملة للوصول للعتاد.
      </Paragraph>

      <SectionHeader level={2}>المعمارية الدقيقة (Microkernel)</SectionHeader>
      
      <Paragraph>
        المعمارية الدقيقة تحتفظ بأقل قدر ممكن من الوظائف في النواة، وتنقل معظم الخدمات إلى مساحة المستخدم. 
        النواة تحتوي فقط على الوظائف الأساسية مثل إدارة العمليات الأساسية والتواصل بين العمليات.
      </Paragraph>

      <SectionHeader level={2}>المعمارية الهجينة (Hybrid Kernel)</SectionHeader>
      
      <Paragraph>
        المعمارية الهجينة تجمع بين مزايا المعماريتين السابقتين. تحتفظ ببعض الخدمات في النواة للحصول على 
        أداء أفضل، بينما تنقل خدمات أخرى إلى مساحة المستخدم للحصول على استقرار وأمان أفضل.
      </Paragraph>
    </ContentRenderer>
  );
};

export default Architectures;

