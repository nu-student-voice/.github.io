import { APP_TITLE } from "@/const";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const navSections = [
  {
    label: "課題を知る",
    links: [
      { label: "問題の経緯", href: "/history" },
      { label: "現状の課題", href: "/issues" },
      { label: "ガバナンスとは", href: "/governance" },
      { label: "評議員会を知る", href: "/council" },
      { label: "事業部の課題", href: "/business-division" },
    ],
  },
  {
    label: "財務を理解",
    links: [
      { label: "財務情報（サンキー図）", href: "/finance" },
      { label: "大学会計の基礎", href: "/finance-learn" },
    ],
  },
  {
    label: "サポート情報",
    links: [
      { label: "よくある質問", href: "/faq" },
      { label: "自治復活ロードマップ", href: "/roadmap" },
    ],
  },
];

const quickLinks = [{ label: "ホーム", href: "/" }];

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
  className?: string;
};

function NavLink({ href, children, onNavigate, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={className}
    >
      {children}
    </Link>
  );
}

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:border focus:border-slate-300 focus:rounded-lg focus:shadow"
      >
        メインコンテンツへスキップ
      </a>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <NavLink
            href="/"
            className="text-lg md:text-xl font-bold text-slate-900"
            onNavigate={closeMobile}
          >
            {APP_TITLE || "日大 学生自治復活"}
          </NavLink>

        <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-700">
          {quickLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </NavLink>
          ))}

          {navSections.map((section) => (
            <div key={section.label} className="relative group">
              <button
                className="flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors"
                type="button"
              >
                {section.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <div className="absolute left-0 mt-3 hidden group-hover:flex group-focus-within:flex">
                <div className="min-w-[220px] rounded-xl border border-slate-200 bg-white shadow-xl p-3 space-y-1">
                  {section.links.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-sm transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="lg:hidden p-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="メニューを開閉"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-4 text-base text-slate-700">
            {quickLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="block font-semibold"
                onNavigate={closeMobile}
              >
                {link.label}
              </NavLink>
            ))}

            {navSections.map((section) => (
              <details key={section.label} className="border border-slate-200 rounded-lg">
                <summary className="cursor-pointer select-none px-3 py-2 font-semibold">
                  {section.label}
                </summary>
                <div className="flex flex-col px-4 pb-3 pt-1 space-y-2">
                  {section.links.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900"
                      onNavigate={closeMobile}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
