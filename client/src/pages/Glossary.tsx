import SiteNav from "@/components/SiteNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { glossaryEntries } from "@/data/glossary";
import { ChevronLeft, BookText } from "lucide-react";
import { Link } from "wouter";

export default function Glossary() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <SiteNav />

      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-4 py-10 sm:py-12 w-full space-y-10">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-slate-500">Glossary</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">日大ガバナンス・財務 用語集</h1>
          <p className="text-base sm:text-lg text-slate-700">
            寄附行為、評議員会、基本金、内部留保など、レポートや議事録に頻出する用語を簡潔にまとめました。
            詳細ページではツールチップでも参照できます。
          </p>
        </header>

        <section className="grid gap-4">
          {glossaryEntries.map((entry) => (
            <Card key={entry.id} className="border border-slate-200">
              <CardHeader className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                  <BookText className="w-5 h-5 text-blue-600" />
                  {entry.term}
                  {entry.reading && <span className="text-sm font-normal text-slate-500">（{entry.reading}）</span>}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm space-y-2">
                <p>{entry.description}</p>
                {entry.note && <p className="text-xs text-slate-500">※ {entry.note}</p>}
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
        </div>
      </footer>
    </div>
  );
}
