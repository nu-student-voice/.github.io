import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, BookOpen, BarChart3, Lightbulb, Users } from "lucide-react";
import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">ホーム</Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">問題の経緯</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">現状の課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務情報</Link>
            <Link href="/business-division" className="text-slate-700 hover:text-slate-900 font-medium">事業部問題</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">ロードマップ</Link>
          </div>
          <div className="md:hidden flex gap-3 text-xs">
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">経緯</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務</Link>
            <Link href="/business-division" className="text-slate-700 hover:text-slate-900 font-medium">事業部</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">行動</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">日大の「自治」を取り戻そう</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">学生が主体的に大学運営に関わることの重要性</p>
          <p className="text-base md:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
            大学は、学生の学習と成長の場です。しかし、その大学がどのように運営されているか、学生の声が本当に反映されているか、考えたことはありますか？
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-16 w-full">
        {/* Introduction Section */}
        <section className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">日本大学で何が起きたのか</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                日本大学では、かつて学生自治が機能していました。しかし、現在、その自治は形骸化しています。同時に、大学の運営上の問題が明らかになり、学生の信頼が揺らいでいます。
              </p>
              <p>
                2022年3月31日、日本大学は「元理事及び前理事長による不正事案に係る第三者委員会」の調査報告書を公開しました。この報告書は、日大の運営上の深刻な問題を明らかにしました。
              </p>
            </div>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">問題の核心</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">事業部を通じた不透明な取引</p>
                  <p>特定の関係者に対し、不正な契約が行われていました。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">一部役員による強圧的支配</p>
                  <p>ガバナンスが完全に欠如していました。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">学生が関わることのメリット</h3>
          <p className="text-center text-slate-700 mb-10 max-w-3xl mx-auto">
            学生自治が復活し、学生が大学運営に関わることで、あなたの学生生活は大きく変わります。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">🍽️ 学食の値下げ</h4>
              <p className="text-slate-700 mb-2">
                現在、学食の利益は大学の収入になっています。学生の声が反映されれば、昼食代を100円程度削減することも可能です。
              </p>
              <p className="text-sm text-slate-600">年間で約1万円の節約に</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">🎭 サークル補助金の増額</h4>
              <p className="text-slate-700 mb-2">
                現在、サークル活動への補助金は限定的です。学生が予算配分に関わることで、補助金を30%以上増額できる可能性があります。
              </p>
              <p className="text-sm text-slate-600">より充実した活動が実現</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">📚 図書館・施設の充実</h4>
              <p className="text-slate-700 mb-2">
                図書購入費や施設改善費の予算を、学生の要望に基づいて配分。図書購入費を50%増額することも可能です。
              </p>
              <p className="text-sm text-slate-600">より快適な学習環境へ</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">💰 奨学金制度の拡充</h4>
              <p className="text-slate-700 mb-2">
                奨学金予算を倍増させることで、より多くの学生が経済的支援を受けられるようになります。
              </p>
              <p className="text-sm text-slate-600">経済的不安なく学べる環境</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">🎉 学生向けイベントの充実</h4>
              <p className="text-slate-700 mb-2">
                学園祭やイベント予算を2倍に増額。より充実した学生生活を実現できます。
              </p>
              <p className="text-sm text-slate-600">思い出に残るキャンパスライフ</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">🗣️ 学生の声が反映される仕組み</h4>
              <p className="text-slate-700 mb-2">
                学生参加型の予算編成により、あなたの意見が大学運営に直接反映されます。
              </p>
              <p className="text-sm text-slate-600">真の民主的な大学へ</p>
            </div>
          </div>
          <div className="mt-10 p-6 bg-blue-100 rounded-lg border-l-4 border-blue-600">
            <p className="text-slate-900 font-semibold mb-2">💡 重要なポイント</p>
            <p className="text-slate-700">
              これらのメリットは、学生が大学運営に関わることで初めて実現します。現在、これらの資源は学生の声が反映されない形で使われています。あなたの参加が、すべてを変えるきっかけになります。
            </p>
          </div>
        </section>

        {/* Key Sections Grid */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">このサイトで学べること</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: History */}
            <Link href="/history">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        問題の経緯
                      </CardTitle>
                      <CardDescription>不正事案の背景と関係者</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    元理事長・元理事による不正事案の具体的な内容、関係者、調査報告書の概要を学生向けにわかりやすく説明します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく読む <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 2: Current Issues */}
            <Link href="/issues">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                        現状の課題
                      </CardTitle>
                      <CardDescription>日大が抱える問題</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    ガバナンスの不全、学生自治の形骸化、財務の透明性など、日大が今抱えている具体的な問題を解説します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく読む <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 3: Finance */}
            <Link href="/finance">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-green-600" />
                        財務情報
                      </CardTitle>
                      <CardDescription>学費の流れを可視化</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    サンキー図を使って、日大がどのようにお金を集め、何に使っているかを視覚化します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく読む <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 4: Roadmap */}
            <Link href="/roadmap">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        ロードマップ
                      </CardTitle>
                      <CardDescription>学生自治復活へのアクション</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    学生自治を復活させるための具体的なアクション案と、学生が取るべき行動を提案します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく読む <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-100 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">学生自治の復活は、皆さんの行動から始まります</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            皆さんの大学です。皆さんの学費です。皆さんの学生生活です。
            大学運営に関わるのは、大学当局だけではありません。学生が主体的に関わることで、より良い大学、より良い学生生活を実現することができます。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9JGWRppBHczwj1ruRSvRkaLetJgvtQWbT7ywmvodQtZHweA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            学生自治復活に学生自治復活に参加する
          </a>
        </section>

        {/* Next Steps Section */}
        <section className="mt-16 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">次のステップ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">理解する</h4>
              <p className="text-slate-700">このサイトで、日大の問題とガバナンスについて学びましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">学生自治復活に参加する</h4>
              <p className="text-slate-700">Google Formで、あなたの意見や要望を送りましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">広める</h4>
              <p className="text-slate-700">友人や同級生にこのサイトを共有し、一緒に考えましょう。</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-block text-blue-600 font-semibold hover:text-blue-700">
              よくある質問を見る →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
          <p className="mt-2">このサイトは、学生による学生のための情報提供サイトです。</p>
        </div>
      </footer>
    </div>
  );
}
