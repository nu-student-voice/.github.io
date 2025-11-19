import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Roadmap() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">ホーム</Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">問題の経緯</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">現状の課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務情報</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">ロードマップ</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">学生自治を復活させるために</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">学生自治とは何か</h2>
          <Card>
            <CardContent className="text-slate-700 space-y-4 pt-6">
              <p>
                学生自治とは、学生が主体的に大学運営に関わり、自分たちの学生生活をより良くするために、意見を述べ、行動する仕組みです。
              </p>
              <p>
                かつての日本大学には、このような自治組織がありました。学生が、学費、施設、課外活動など、自分たちに関わる事柄について、意見を述べることができました。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">学生自治復活へのアクション</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-lg">1. 学生自治会設立に向けた署名活動</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  学生の意思を示すために、学生自治会設立に向けた署名活動を行います。多くの学生の署名が集まれば、大学当局に対して、学生の声の重要性を示すことができます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-lg">2. 意見交換会の開催</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  学生同士が、大学運営に関する意見を交換し、共通の課題を認識する機会を作ります。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-lg">3. 大学当局への情報公開要求</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  財務情報、ガバナンス体制、不正事案の改善状況など、学生が知るべき情報の公開を大学当局に要求します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-lg">4. 他大学の学生自治との連携</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  他大学の学生自治の成功事例を学び、日大での実現に向けた知見を得ます。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">学生へのメッセージ</h2>
          <div className="text-slate-700 space-y-4">
            <p className="text-lg">皆さんの大学です。皆さんの学費です。皆さんの学生生活です。</p>
            <p>
              大学運営に関わるのは、大学当局だけではありません。学生が主体的に関わることで、より良い大学、より良い学生生活を実現することができます。
            </p>
            <p className="font-semibold text-lg">
              学生自治の復活は、皆さんの行動から始まります。
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">今、行動しましょう</h3>
          <p className="mb-6">
            学生自治会設立に向けた署名活動や意見交換会に参加してください。皆さんの声が、日大を変えます。
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9JGWRppBHczwj1ruRSvRkaLetJgvtQWbT7ywmvodQtZHweA/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
            学生自治復活に参加する
          </a>
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
