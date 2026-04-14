import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Cpu, 
  HardDrive, 
  Settings, 
  Code, 
  GraduationCap, 
  Rocket,
  Star,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'مقدمة مبسطة',
      description: 'تعرف على أنظمة التشغيل من الأساسيات وفهم أهميتها في عالم التكنولوجيا',
      link: '/introduction'
    },
    {
      icon: Cpu,
      title: 'معماريات الأنظمة',
      description: 'استكشف أنواع المعماريات المختلفة: Monolithic، Microkernel، Hybrid وغيرها',
      link: '/architectures'
    },
    {
      icon: HardDrive,
      title: 'أنواع الأنظمة',
      description: 'تعلم عن Windows، Linux، macOS، Unix، Android وخصائص كل نظام',
      link: '/types'
    },
    {
      icon: Settings,
      title: 'وظائف الأنظمة',
      description: 'فهم إدارة الذاكرة، المهام، الملفات، الأجهزة والأمان في أنظمة التشغيل',
      link: '/functions'
    },
    {
      icon: Code,
      title: 'بناء نظام تشغيل',
      description: 'دليل عملي مبسط لفهم كيفية بناء نظام تشغيل مفتوح المصدر من الصفر',
      link: '/building-os'
    },
    {
      icon: GraduationCap,
      title: 'كورسات مجانية',
      description: 'مجموعة شاملة من الكورسات المجانية لتعلم إدارة أنظمة التشغيل المختلفة',
      link: '/courses'
    }
  ];

  const targetAudience = [
    {
      icon: Users,
      title: 'طلاب الجامعات',
      description: 'طلاب تقنية المعلومات والهندسة الذين يدرسون أنظمة التشغيل'
    },
    {
      icon: Target,
      title: 'الخريجون الجدد',
      description: 'الخريجون الجدد الذين يريدون تعميق فهمهم لأنظمة التشغيل'
    },
    {
      icon: Code,
      title: 'مطوري البرمجيات',
      description: 'المطورون الذين يريدون فهم كيفية تفاعل برامجهم مع النظام'
    },
    {
      icon: Lightbulb,
      title: 'المهتمون بالتقنية',
      description: 'كل من يريد فهم كيف تعمل الحواسيب من الداخل'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground arabic-text">
            ابدأ من هنا
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground arabic-text">
            دليلك الشامل لفهم وبناء أنظمة التشغيل
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto arabic-text leading-relaxed">
          دليل شامل ومبسّط للبدء في عالم أنظمة التشغيل، موجه للمتعلمين والمهتمين بالتقنية من طلاب الجامعات، 
          الخريجين الجدد، ومطوري البرمجيات. يقدم محتوى تأسيسي ومركّز يساعدك على فهم الأساسيات بشكل تدريجي.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/introduction" className="flex items-center space-x-2 space-x-reverse">
              <BookOpen className="h-5 w-5" />
              <span>ابدأ التعلم الآن</span>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link to="/project" className="flex items-center space-x-2 space-x-reverse">
              <Rocket className="h-5 w-5" />
              <span>ابدأ مشروعك</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">المحتوى الأساسي للموقع</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto arabic-text">
            محتوى شامل ومنظم يغطي جميع جوانب أنظمة التشغيل من الأساسيات إلى التطبيق العملي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-hover cursor-pointer">
                <Link to={feature.link}>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl arabic-text">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center arabic-text leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Target Audience */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">الجمهور المستهدف</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto arabic-text">
            هذا الموقع مصمم خصيصاً للمتعلمين والمهتمين بالتقنية من خلفيات مختلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/20 rounded-full w-fit">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg arabic-text">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="arabic-text leading-relaxed">
                    {audience.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Special Sections */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">أقسام خاصة</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto arabic-text">
            محتوى متخصص ومشاريع عملية لتطبيق ما تعلمته
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Section */}
          <Card className="card-hover">
            <Link to="/project">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl arabic-text">ابدأ مشروعك: بناء نظام تشغيل مبسط</CardTitle>
                    <CardDescription className="arabic-text">
                      مشروع عملي شامل مع الخطوات والأدوات والمصادر
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground arabic-text leading-relaxed">
                  يشمل الخطوات التفصيلية، الأدوات المطلوبة، المصادر التعليمية، والتجربة الواقعية لبناء نظام تشغيل بسيط ووظيفي.
                </p>
              </CardContent>
            </Link>
          </Card>

          {/* Recommendations Section */}
          <Card className="card-hover">
            <Link to="/recommendations">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Star className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl arabic-text">توصيات المحتوى التعليمي</CardTitle>
                    <CardDescription className="arabic-text">
                      محتوى د. مصطفى صادق لطيف المتميز
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground arabic-text leading-relaxed">
                  مدونته العلمية وقناته التعليمية على YouTube تقدم محتوى عالي الجودة في أنظمة التشغيل وعلوم الحاسوب.
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-accent/5 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground arabic-text">
          هل أنت مستعد لبدء رحلتك؟
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto arabic-text leading-relaxed">
          ابدأ بالمقدمة البسيطة عن أنظمة التشغيل، أو انتقل مباشرة إلى المشروع العملي لبناء نظام تشغيل بسيط.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/introduction" className="flex items-center space-x-2 space-x-reverse">
              <BookOpen className="h-5 w-5" />
              <span>ابدأ من الأساسيات</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link to="/courses" className="flex items-center space-x-2 space-x-reverse">
              <GraduationCap className="h-5 w-5" />
              <span>تصفح الكورسات</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

