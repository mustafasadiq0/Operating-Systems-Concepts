import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BookOpen, GraduationCap, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:mr-64">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Monitor className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground">ابدأ من هنا</span>
                <span className="text-xs text-muted-foreground">دليلك لأنظمة التشغيل</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground arabic-text">
              دليل شامل ومبسّط للبدء في عالم أنظمة التشغيل، موجه للمتعلمين والمهتمين بالتقنية من طلاب الجامعات والمطورين.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">روابط سريعة</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/introduction" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                مقدمة عن أنظمة التشغيل
              </Link>
              <Link 
                to="/types" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                أنواع الأنظمة
              </Link>
              <Link 
                to="/courses" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                الكورسات التعليمية
              </Link>
              <Link 
                to="/project" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ابدأ مشروعك
              </Link>
            </nav>
          </div>

          {/* Learning Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">مصادر التعلم</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/building-os" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                بناء نظام تشغيل
              </Link>
              <Link 
                to="/functions" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                وظائف الأنظمة
              </Link>
              <Link 
                to="/architectures" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                معماريات الأنظمة
              </Link>
              <Link 
                to="/recommendations" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                التوصيات
              </Link>
            </nav>
          </div>

          {/* External Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">مصادر خارجية</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://mustafasadiq0.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>مدونة د. مصطفى صادق</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.youtube.com/mustafasadiq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
                <span>قناة YouTube</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>مشاريع GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ابدأ من هنا: دليلك لفهم وبناء أنظمة التشغيل. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center space-x-4 space-x-reverse text-sm text-muted-foreground">
              <span>مصمم للمتعلمين العرب</span>
              <span>•</span>
              <span>محتوى تعليمي مجاني</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

