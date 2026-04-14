import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Monitor, BookOpen, Users } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <Monitor className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">ابدأ من هنا</span>
              <span className="text-xs text-muted-foreground">دليلك لأنظمة التشغيل</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              الرئيسية
            </Link>
            <Link 
              to="/introduction" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              مقدمة
            </Link>
            <Link 
              to="/courses" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              الكورسات
            </Link>
            <Link 
              to="/project" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              ابدأ مشروعك
            </Link>
            <Link 
              to="/recommendations" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              التوصيات
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            <Button asChild>
              <Link to="/project" className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="h-4 w-4" />
                <span>ابدأ التعلم</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/introduction" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                مقدمة عن أنظمة التشغيل
              </Link>
              <Link 
                to="/architectures" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                معماريات الأنظمة
              </Link>
              <Link 
                to="/types" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                أنواع أنظمة التشغيل
              </Link>
              <Link 
                to="/functions" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                وظائف الأنظمة
              </Link>
              <Link 
                to="/building-os" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                بناء نظام تشغيل
              </Link>
              <Link 
                to="/courses" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الكورسات التعليمية
              </Link>
              <Link 
                to="/project" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ابدأ مشروعك
              </Link>
              <Link 
                to="/recommendations" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                التوصيات
              </Link>
              
              <div className="pt-4 border-t">
                <Button asChild className="w-full">
                  <Link 
                    to="/project" 
                    className="flex items-center justify-center space-x-2 space-x-reverse"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>ابدأ التعلم الآن</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

