import React from 'react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';

const Functions = () => {
  return (
    <ContentRenderer title="وظائف أنظمة التشغيل الأساسية">
      <SectionHeader level={2}>مقدمة عن وظائف أنظمة التشغيل</SectionHeader>
      
      <Paragraph>
        نظام التشغيل هو المدير الأساسي لجميع موارد الحاسوب، وهو المسؤول عن تنسيق وإدارة جميع العمليات 
        التي تحدث داخل النظام. هذه الوظائف تشمل إدارة الذاكرة، إدارة المهام والعمليات، إدارة الملفات، 
        إدارة الأجهزة، والأمان والحماية.
      </Paragraph>

      <SectionHeader level={2}>إدارة الذاكرة (Memory Management)</SectionHeader>
      
      <Paragraph>
        إدارة الذاكرة هي إحدى أهم وظائف نظام التشغيل، حيث تتضمن تخصيص وإدارة ومراقبة استخدام الذاكرة 
        الرئيسية (RAM) في النظام. نظام التشغيل يجب أن يضمن أن كل برنامج يحصل على الذاكرة التي يحتاجها.
      </Paragraph>

      <SectionHeader level={2}>إدارة المهام والعمليات (Process Management)</SectionHeader>
      
      <Paragraph>
        إدارة العمليات تتضمن إنشاء وجدولة وإنهاء العمليات. نظام التشغيل مسؤول عن تحديد أي عملية 
        ستحصل على المعالج في أي وقت، وضمان أن جميع العمليات تعمل بكفاءة دون تضارب.
      </Paragraph>

      <SectionHeader level={2}>إدارة الملفات (File Management)</SectionHeader>
      
      <Paragraph>
        نظام الملفات هو الطريقة التي ينظم بها نظام التشغيل وتخزين البيانات على أجهزة التخزين. 
        يوفر واجهة موحدة للتطبيقات للوصول إلى البيانات، بغض النظر عن نوع جهاز التخزين.
      </Paragraph>

      <SectionHeader level={2}>إدارة الأجهزة (Device Management)</SectionHeader>
      
      <Paragraph>
        إدارة الأجهزة هي وظيفة نظام التشغيل المسؤولة عن التحكم في جميع الأجهزة المتصلة بالحاسوب 
        والتواصل معها. يستخدم برامج تشغيل الأجهزة للتواصل مع كل نوع من الأجهزة.
      </Paragraph>

      <SectionHeader level={2}>الأمان والحماية (Security and Protection)</SectionHeader>
      
      <Paragraph>
        الأمان والحماية في أنظمة التشغيل يشيران إلى الآليات والسياسات المصممة لحماية النظام والبيانات 
        من الوصول غير المصرح به، التلاعب، أو التدمير.
      </Paragraph>
    </ContentRenderer>
  );
};

export default Functions;

