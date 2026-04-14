import React from 'react';
import { ExternalLink, BookOpen, GraduationCap, Star } from 'lucide-react';
import ContentRenderer, { SectionHeader, Paragraph } from '../components/ContentRenderer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Recommendations = () => {
  return (
    <ContentRenderer title="توصيات وروابط لمحتوى المستخدم">
      <SectionHeader level={2}>د. مصطفى صادق لطيف</SectionHeader>
      
      <Paragraph>
        د. مصطفى صادق لطيف هو أحد أبرز المتخصصين في مجال أنظمة التشغيل وعلوم الحاسوب في العالم العربي. 
        يقدم محتوى تعليمي عالي الجودة ومتخصص يساعد الطلاب والمهتمين على فهم المفاهيم المعقدة بطريقة 
        مبسطة وعملية.
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl arabic-text">المدونة العلمية</CardTitle>
                <CardDescription className="arabic-text">
                  محتوى تقني متخصص ومقالات علمية
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Paragraph>
              مدونة د. مصطفى صادق تحتوي على مقالات متخصصة في أنظمة التشغيل، البرمجة، وعلوم الحاسوب. 
              المحتوى مكتوب بأسلوب أكاديمي ولكن مفهوم، مع أمثلة عملية وتطبيقات واقعية.
            </Paragraph>
            
            <Button asChild className="w-full mt-4">
              <a 
                href="https://mustafasadiq0.wordpress.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 space-x-reverse"
              >
                <BookOpen className="h-4 w-4" />
                <span>زيارة المدونة</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="p-2 bg-accent/20 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl arabic-text">القناة التعليمية</CardTitle>
                <CardDescription className="arabic-text">
                  فيديوهات تعليمية وشروحات مفصلة
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Paragraph>
              قناة YouTube تحتوي على شروحات مفصلة ومحاضرات في أنظمة التشغيل والبرمجة. 
              الفيديوهات مصممة للطلاب والمهتمين بالتقنية، مع تركيز على الجانب العملي والتطبيقي.
            </Paragraph>
            
            <Button asChild variant="outline" className="w-full mt-4">
              <a 
                href="https://www.youtube.com/mustafasadiq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 space-x-reverse"
              >
                <GraduationCap className="h-4 w-4" />
                <span>زيارة القناة</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <SectionHeader level={2}>لماذا نوصي بهذا المحتوى؟</SectionHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <Card>
          <CardHeader className="text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <CardTitle className="text-lg arabic-text">جودة عالية</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph className="text-center mb-0">
              محتوى مدروس ومراجع بعناية من متخصص في المجال
            </Paragraph>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <CardTitle className="text-lg arabic-text">محتوى عربي</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph className="text-center mb-0">
              مصدر نادر للمحتوى التقني المتخصص باللغة العربية
            </Paragraph>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <GraduationCap className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <CardTitle className="text-lg arabic-text">أسلوب تعليمي</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph className="text-center mb-0">
              شرح مبسط للمفاهيم المعقدة مع أمثلة عملية
            </Paragraph>
          </CardContent>
        </Card>
      </div>

      <SectionHeader level={2}>مواضيع مميزة في المحتوى</SectionHeader>
      
      <Paragraph>
        المحتوى يغطي مواضيع متنوعة ومتخصصة في أنظمة التشغيل مثل:
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground arabic-text">المواضيع النظرية:</h4>
          <ul className="text-muted-foreground arabic-text space-y-1 text-sm">
            <li>• معماريات أنظمة التشغيل المختلفة</li>
            <li>• خوارزميات جدولة العمليات</li>
            <li>• إدارة الذاكرة والذاكرة الافتراضية</li>
            <li>• أنظمة الملفات وتنظيم البيانات</li>
            <li>• الأمان والحماية في الأنظمة</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground arabic-text">المواضيع العملية:</h4>
          <ul className="text-muted-foreground arabic-text space-y-1 text-sm">
            <li>• برمجة أنظمة التشغيل بلغة C</li>
            <li>• استخدام أدوات التطوير والتصحيح</li>
            <li>• بناء مشاريع عملية صغيرة</li>
            <li>• تحليل أداء الأنظمة</li>
            <li>• حل المشاكل التقنية الشائعة</li>
          </ul>
        </div>
      </div>

      <SectionHeader level={2}>كيفية الاستفادة القصوى من المحتوى</SectionHeader>
      
      <Paragraph>
        للحصول على أقصى استفادة من محتوى د. مصطفى صادق، ننصح بـ:
      </Paragraph>

      <div className="bg-accent/5 p-6 rounded-lg my-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
            <div>
              <h4 className="font-semibold text-foreground arabic-text">البدء بالأساسيات</h4>
              <p className="text-muted-foreground arabic-text text-sm">ابدأ بالمقالات والفيديوهات التأسيسية قبل الانتقال للمواضيع المتقدمة</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
            <div>
              <h4 className="font-semibold text-foreground arabic-text">التطبيق العملي</h4>
              <p className="text-muted-foreground arabic-text text-sm">جرب الأمثلة والتمارين المقترحة لترسيخ المفاهيم</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
            <div>
              <h4 className="font-semibold text-foreground arabic-text">التفاعل والأسئلة</h4>
              <p className="text-muted-foreground arabic-text text-sm">لا تتردد في طرح الأسئلة والتفاعل مع المحتوى</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
            <div>
              <h4 className="font-semibold text-foreground arabic-text">المتابعة المستمرة</h4>
              <p className="text-muted-foreground arabic-text text-sm">تابع المحتوى الجديد والتحديثات بانتظام</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-primary/5 p-8 rounded-lg my-8">
        <h3 className="text-2xl font-bold text-foreground arabic-text mb-4">
          ابدأ رحلة التعلم الآن
        </h3>
        <Paragraph className="mb-6">
          استكشف المحتوى الغني والمتخصص واستفد من خبرة د. مصطفى صادق في أنظمة التشغيل
        </Paragraph>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a 
              href="https://mustafasadiq0.wordpress.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse"
            >
              <BookOpen className="h-5 w-5" />
              <span>زيارة المدونة</span>
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <a 
              href="https://www.youtube.com/mustafasadiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse"
            >
              <GraduationCap className="h-5 w-5" />
              <span>مشاهدة الفيديوهات</span>
            </a>
          </Button>
        </div>
      </div>
    </ContentRenderer>
  );
};

export default Recommendations;

