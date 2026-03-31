import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background" dir="rtl">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground font-arabic">الصفحة غير موجودة</p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-arabic hover:opacity-90 transition-opacity"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
