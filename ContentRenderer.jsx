import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ContentRenderer = ({ title, children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 py-8 max-w-4xl ${className}`}>
      {title && (
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground arabic-text mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      )}
      
      <Card className="shadow-lg">
        <CardContent className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none arabic-text">
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Component for section headers
export const SectionHeader = ({ children, level = 2 }) => {
  const Tag = `h${level}`;
  const sizeClasses = {
    1: "text-3xl md:text-4xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
    4: "text-lg md:text-xl",
    5: "text-base md:text-lg",
    6: "text-sm md:text-base"
  };
  
  return (
    <Tag className={`${sizeClasses[level]} font-bold text-foreground arabic-text mb-6 mt-8 first:mt-0`}>
      {children}
    </Tag>
  );
};

// Component for paragraphs
export const Paragraph = ({ children, className = "" }) => {
  return (
    <p className={`text-muted-foreground arabic-text leading-relaxed mb-6 ${className}`}>
      {children}
    </p>
  );
};

// Component for lists
export const List = ({ children, ordered = false, className = "" }) => {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`text-muted-foreground arabic-text leading-relaxed mb-6 space-y-2 ${ordered ? 'list-decimal' : 'list-disc'} list-inside ${className}`}>
      {children}
    </Tag>
  );
};

export const ListItem = ({ children, className = "" }) => {
  return (
    <li className={`${className}`}>
      {children}
    </li>
  );
};

// Component for highlighted boxes
export const HighlightBox = ({ children, type = "info", title }) => {
  const typeStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    success: "bg-green-50 border-green-200 text-green-900",
    error: "bg-red-50 border-red-200 text-red-900"
  };
  
  return (
    <div className={`border-r-4 p-6 mb-6 rounded-lg ${typeStyles[type]}`}>
      {title && (
        <h4 className="font-bold text-lg mb-3 arabic-text">{title}</h4>
      )}
      <div className="arabic-text leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// Component for code blocks
export const CodeBlock = ({ children, language = "", className = "" }) => {
  return (
    <div className="mb-6">
      {language && (
        <div className="bg-muted px-4 py-2 text-sm text-muted-foreground border-b">
          {language}
        </div>
      )}
      <pre className={`bg-muted p-4 rounded-b-lg overflow-x-auto text-sm ${className}`}>
        <code className="text-foreground font-mono">
          {children}
        </code>
      </pre>
    </div>
  );
};

// Component for tables
export const Table = ({ children, className = "" }) => {
  return (
    <div className="overflow-x-auto mb-6">
      <table className={`w-full border-collapse border border-border ${className}`}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <thead className="bg-muted">
      {children}
    </thead>
  );
};

export const TableBody = ({ children }) => {
  return (
    <tbody>
      {children}
    </tbody>
  );
};

export const TableRow = ({ children, className = "" }) => {
  return (
    <tr className={`border-b border-border ${className}`}>
      {children}
    </tr>
  );
};

export const TableCell = ({ children, header = false, className = "" }) => {
  const Tag = header ? 'th' : 'td';
  return (
    <Tag className={`p-3 text-right arabic-text ${header ? 'font-semibold text-foreground' : 'text-muted-foreground'} ${className}`}>
      {children}
    </Tag>
  );
};

export default ContentRenderer;

