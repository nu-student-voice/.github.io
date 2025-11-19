import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, BookOpen, Users, Shield, TrendingUp } from "lucide-react";

export default function Governance() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">ホーム</Link>
            <Link href="/governance" className="text-slate-700 hover:text-slate-900 font-medium">ガバナンスとは</Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">不正事案の詳細</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">ガバナンス欠陥</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務情報</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">改革と行動</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">ガバナンスとは何か？</h1>
        <p className="text-lg text-slate-600 mb-8">大学を適切に運営するための仕組みを学ぼう</p>

        {/* Definition Section */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                ガバナンスの定義
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p className="text-lg font-semibold">
                ガバナンスとは、組織が適切に運営・統治されるための仕組みのことです。
              </p>
              <p>
                簡単に言うと、「誰が、どのように、大学を管理するのか」というルールです。会社や政府と同じように、大学も適切に運営されるための仕組みが必要です。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Questions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">ガバナンスが答える5つの質問</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. 誰が大学の最高責任者なのか？</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>大学には理事長と学長がいます。それぞれの役割は何か、権限はどこまでか、が明確に定義されるべきです。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. その人の権限はどこまでなのか？</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>理事長が全ての決定を一人でできるのか、それとも理事会の承認が必要なのか。権限の範囲が明確に定義されるべきです。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. 誰がその人を監督するのか？</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>理事長を監督する仕組みが必要です。監査役や理事会が、理事長の不正をチェックする責任があります。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. 学生の声は経営に反映されるのか？</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>大学は学生のための組織です。学生の意見が経営に反映される仕組みが必要です。学生自治会がその役割を果たします。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. 財務情報は公開されるのか？</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>学費がどのように集められ、何に使われているか。学生や保護者が理解できる形で公開されるべきです。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* University Governance Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">大学ガバナンスの構造</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                本来あるべき大学の仕組み
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">理事会（最高意思決定機関）</h4>
                  <p className="text-sm">
                    複数の理事で構成される。大学の最高意思決定機関として、学長の選任、重要な決定の承認、予算の承認などを行う。
                  </p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">学長（最高執行責任者）</h4>
                  <p className="text-sm">
                    理事会の監督下で、大学を日常的に運営する。教育・研究の方針を決定し、各部門を指揮する。
                  </p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">監査役（監視機能）</h4>
                  <p className="text-sm">
                    理事会から独立して、不正がないか監視する。財務監査、内部統制の評価などを行う。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">学生・教職員（参加と監視）</h4>
                  <p className="text-sm">
                    大学運営に参加し、声を上げることができる。学生自治会が学生の代表として機能する。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Governance Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">なぜガバナンスが大切なのか？</h2>
          
          <div className="space-y-4">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">1. 学費が不正に使われるのを防ぐ</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  ガバナンスが機能していないと、あなたの学費が本来の目的に使われません。不正な取引で大学から金銭が流出します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">2. 学生の声が無視されるのを防ぐ</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  ガバナンスが機能していないと、学生自治会が形骸化し、学生の意見が経営に反映されません。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">3. 不正が隠蔽されるのを防ぐ</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  ガバナンスが機能していないと、不正を見つけても報告できません。通報者が報復される懸念もあります。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">4. 大学の信用が失われるのを防ぐ</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <p>
                  ガバナンスが機能していないと、大学の信用が失われます。学位の価値が低下し、就職に影響します。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real-World Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">日本大学の事例</h2>
          
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <Shield className="w-5 h-5" />
                ガバナンスが機能していなかった結果
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                日本大学では、ガバナンスが機能していなかったために、以下のようなことが起きました：
              </p>
              <ul className="space-y-2">
                <li>✗ 理事長が権力を独占し、井ノ口氏に過度な権限を委譲</li>
                <li>✗ 監査役が理事長の支配下にあり、不正を発見できない</li>
                <li>✗ 学生自治会が形骸化し、学生が不正を知らない</li>
                <li>✗ 採点が改ざんされても、誰もチェックしない</li>
                <li>✗ 不正を見つけても、報告できる仕組みがない</li>
              </ul>
              <p className="font-semibold text-red-900 mt-4">
                結果：約5億円以上の損害が発生
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">日本大学で何が起きたのか？</h3>
          <p className="text-slate-700 mb-6">
            ガバナンスの欠陥が、具体的にどのような不正につながったのかを学びましょう。
          </p>
          <Link href="/history" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            不正事案の詳細を見る
          </Link>
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
