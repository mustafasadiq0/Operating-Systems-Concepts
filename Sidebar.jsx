import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Cpu, 
  HardDrive, 
  Settings, 
  Code, 
  GraduationCap, 
  Rocket,
  Star,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'الرئيسية',
      href: '/',
      icon: Home,
      description: 'الصفحة الرئيسية'
    },
    {
      title: 'مقدمة عن أنظمة التشغيل',
      href: '/introduction',
      icon: BookOpen,
      description: 'ما هي أنظمة التشغيل ولماذا نحتاجها؟'
    },
    {
      title: 'معماريات الأنظمة',
      href: '/architectures',
      icon: Cpu,
      description: 'Monolithic، Microkernel، Hybrid'
    },
    {
      title: 'أنواع أنظمة التشغيل',
      href: '/types',
      icon: HardDrive,
      description: 'Windows، Linux، macOS، Unix، Android'
    },
    {
      title: 'وظائف الأنظمة الأساسية',
      href: '/functions',
      icon: Settings,
      description: 'إدارة الذاكرة، المهام، الملفات، الأجهزة'
    },
    {
      title: 'بناء نظام تشغيل',
      href: '/building-os',
      icon: Code,
      description: 'دليل مبسط لبناء نظام تشغيل مفتوح المصدر'
    },
    {
      title: 'الكورسات التعليمية',
      href: '/courses',
      icon: GraduationCap,
      description: 'كورسات مجانية لتعلم إدارة الأنظمة'
    },
    {
      title: 'ابدأ مشروعك',
      href: '/project',
      icon: Rocket,
      description: 'بناء نظام تشغيل مبسط - مشروع عملي'
    },
    {
      title: 'التوصيات',
      href: '/recommendations',
      icon: Star,
      description: 'محتوى د. مصطفى صادق لطيف'
    }
  ];

  return (
    <aside className="fixed right-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-l bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
      <div className="h-full overflow-y-auto p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 space-x-reverse rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group",
                  isActive 
                    ? "bg-accent text-accent-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn(
                  "h-4 w-4 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "font-medium",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {item.description}
                  </div>
                </div>
                {isActive && (
                  <ChevronLeft className="h-4 w-4 text-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quick Links Section */}
        <div className="mt-8 pt-4 border-t">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            روابط سريعة
          </h3>
          <div className="space-y-2">
            <a
              href="https://mustafasadiq0.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="h-3 w-3" />
              <span>مدونة د. مصطفى صادق</span>
            </a>
            <a
              href="https://www.youtube.com/mustafasadiq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <GraduationCap className="h-3 w-3" />
              <span>قناة YouTube</span>
            </a>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 pt-4 border-t">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            تقدمك في التعلم
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">المحتوى المكتمل</span>
              <span className="text-foreground font-medium">0%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-xs text-muted-foreground">
              ابدأ رحلتك في تعلم أنظمة التشغيل
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

