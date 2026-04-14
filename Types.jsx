import React from 'react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';

const Types = () => {
  return (
    <ContentRenderer title="أنواع أنظمة التشغيل">
      <SectionHeader level={2}>مقدمة عن تنوع أنظمة التشغيل</SectionHeader>
      
      <Paragraph>
        عالم أنظمة التشغيل متنوع ومتطور باستمرار، حيث تم تطوير أنظمة مختلفة لتلبية احتياجات متنوعة ومتخصصة. 
        من الحواسيب الشخصية إلى الخوادم العملاقة، ومن الهواتف الذكية إلى الأجهزة المدمجة في السيارات والأجهزة المنزلية.
      </Paragraph>

      <SectionHeader level={2}>نظام التشغيل Windows</SectionHeader>
      
      <Paragraph>
        Windows هو نظام التشغيل الأكثر انتشاراً في العالم للحواسيب الشخصية. يتميز بواجهته الرسومية السهلة 
        والبديهية، ودعمه الواسع للبرمجيات والألعاب، وتوافقيته مع معظم الأجهزة والبرامج التجارية.
      </Paragraph>

      <SectionHeader level={2}>نظام التشغيل Linux</SectionHeader>
      
      <Paragraph>
        Linux هو نظام تشغيل مفتوح المصدر يتميز بالاستقرار والأمان والمرونة. يستخدم بكثرة في الخوادم 
        والأنظمة المدمجة، ويوفر مئات التوزيعات المختلفة لتلبية احتياجات متنوعة.
      </Paragraph>

      <SectionHeader level={2}>نظام التشغيل macOS</SectionHeader>
      
      <Paragraph>
        macOS هو نظام التشغيل الخاص بأجهزة Mac من شركة Apple. يتميز بتصميمه الأنيق والمتطور، 
        وتكامله المثالي مع النظام البيئي لـ Apple، وأدواته المتقدمة للإبداع والتطوير.
      </Paragraph>

      <SectionHeader level={2}>نظام التشغيل Android</SectionHeader>
      
      <Paragraph>
        Android هو نظام التشغيل الأكثر انتشاراً في العالم للأجهزة المحمولة. مبني على نواة Linux 
        ومطور من قبل Google، يتميز بمرونته وتنوع الأجهزة التي يدعمها.
      </Paragraph>
    </ContentRenderer>
  );
};

export default Types;

