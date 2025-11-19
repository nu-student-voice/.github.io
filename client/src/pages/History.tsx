import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertCircle, TrendingDown, DollarSign } from "lucide-react";

export default function History() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
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

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">不正事案の詳細</h1>
        <p className="text-lg text-slate-600 mb-4">日本大学で何が起きたのか、具体的な事件を詳しく解説します</p>
        
        {/* Source Reference */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
          <p className="text-sm text-slate-700">
            <strong>情報源：</strong>
            <a 
              href="https://www.nihon-u.ac.jp/uploads/files/20220331152658.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline ml-2"
            >
              元理事及び前理事長による不正事案に係る調査報告書
            </a>
            （令和4年3月31日、第三者委員会、全238ページ）
          </p>
          <p className="text-xs text-slate-600 mt-2">
            このページの内容は、上記の公式調査報告書に基づいています。
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900">
                <AlertCircle className="w-5 h-5" />
                3つの不正事件が発覚
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                2022年3月31日、日本大学は「元理事及び前理事長による不正事案に係る第三者委員会」の調査報告書を公開しました。この報告書により、日大の運営上の深刻な問題が明らかになりました。
              </p>
              <p className="font-semibold text-slate-900">
                合計で約5億円以上の損害が確認されました。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Event 1: Design Company Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">第1事件：板橋病院設計会社選定</h2>
          
          <Card className="mb-6 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">背景：何が必要だったのか</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                日本大学医学部附属板橋病院は老朽化のため、新しい建物に建て替える必要がありました。そこで、複数の設計会社にプレゼンテーションをさせて、最も良い会社を選ぶプロポーザル形式を採用することにしました。
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">不正の仕組み：何が起きたのか</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ1：プレゼンテーション</h4>
                  <p className="text-sm">4つの設計会社がプレゼンテーションを実施。審査員が採点した結果、会社タが1位、会社キが2位でした。</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ2：不正な圧力</h4>
                  <p className="text-sm">事業部取締役・井ノ口忠男氏が採点結果に不満を示し、「空気を読まん奴がいる。こんなんじゃあかん、直せ」と圧力をかけました。</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ3：採点の改ざん</h4>
                  <p className="text-sm">採点を改ざんして、会社キを1位に変更しました。これは完全な不正です。</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ4：不正な管理費用の支払い</h4>
                  <p className="text-sm">井ノ口氏は日本大学には「管理費用を支払わない」と説明しながら、会社キには「管理費用を支払え」と指示。実際の支払い先は、藪本雅巳氏が実質的オーナーの「インテリジェンス」という会社でした。</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                損害額：2億2000万円
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p>
                あなたの学費の一部が、本来は病院の建替えに使われるべき金銭が、個人の懐に入りました。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Event 2: Medical Equipment Procurement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">第2事件：医療機器等調達</h2>
          
          <Card className="mb-6 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">背景：何が必要だったのか</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                日本大学医学部は、古い医療機器（MRIなど）を新しいものに買い替える必要がありました。また、電子カルテシステムも更新が必要でした。これは正当な医療機関の運営に必要な投資です。
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">不正の仕組み：複数の会社を介在させたスキーム</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">医療機器7式の購入</h4>
                  <p className="text-sm mb-2">本来：会社テ → 事業部（直接購入）</p>
                  <p className="text-sm font-semibold text-red-600">実際：会社テ → 会社二 → FHI → ニシキ → 会社ク → 事業部</p>
                  <p className="text-sm mt-2">
                    <strong>問題：</strong> ニシキ（藪本氏が実質的オーナー）は、商流に入る必要がないのに、<strong>1億3860万円の利益</strong>を得ました。
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">電子カルテシステムの購入</h4>
                  <p className="text-sm mb-2">本来：ベンダー → 事業部（直接購入）</p>
                  <p className="text-sm font-semibold text-red-600">実際：各ベンダー → FHI → インテリジェンス → 会社フ → 事業部</p>
                  <p className="text-sm mt-2">
                    <strong>問題：</strong> インテリジェンス（藪本氏が実質的オーナー）は、商流に入る必要がないのに、<strong>6740万円の利益</strong>を得ました。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="text-lg">背景にある個人的な恨み</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                平成30年5月のアメフト危険タックル事件で、タックルを実行した学生が会社ヌに就職したことを知った井ノ口氏は、会社ヌのシステムを使いたくないと判断しました。
              </p>
              <p className="font-semibold text-red-600">
                個人的な恨みで、医療機器の購入方法を変更し、その結果、不正な利益供与が発生しました。
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                損害額：約2億600万円
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p>
                あなたの学費が、医療機器の購入という名目で流出。本来は医療機器に使われるべき金銭が、個人の懐に入りました。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Event 3: Tax Evasion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">第3事件：理事長による脱税</h2>
          
          <Card className="mb-6 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">事件の概要</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <div className="space-y-2">
                <p><strong>被告人：</strong> 田中英壽氏（日本大学理事長）</p>
                <p><strong>罪名：</strong> 所得税法違反（脱税）</p>
                <p><strong>脱税額：</strong> 5233万円</p>
                <p><strong>判決：</strong> 執行猶予付き懲役1年（確定）</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">脱税の仕組み</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ1：リベート収入の受け取り</h4>
                  <p className="text-sm">日大の関係業社等からリベート収入等を受け取りました。総額は約1億2000万円でした。</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ2：税務申告をしない</h4>
                  <p className="text-sm">これらのリベート収入を、所得として税務申告しませんでした。</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">ステップ3：脱税</h4>
                  <p className="text-sm font-semibold text-red-600">結果として、5233万円の脱税が発生しました。</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                脱税額：5233万円
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p>
                理事長が個人的な利益のために、税金を脱税。本来は国庫に納められるべき税金が、個人の懐に入りました。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Figures Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">主要な関係者と役割</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-lg">田中英壽氏（元理事長・常務理事）</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p>
                  長期間にわたり日本大学の理事長を務め、大学の運営に強い影響力を持っていました。
                </p>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <strong>責任：</strong> 事業部に対する監督体制を構築し、それを機能させる義務があったにもかかわらず、全く履行しませんでした。また、脱税罪により懲役1年（執行猶予付き）の判決を受けました。
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-lg">井ノ口忠男氏（元理事・事業部取締役）</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p>
                  事業部の実質的なトップとして機能し、業者選定や契約に関して強い影響力を行使していました。
                </p>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <strong>責任：</strong> 第1事件及び第2事件を主導実行。日本大学に約4億円以上の損害を与えた背任罪で起訴されました。
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-lg">藪本雅巳氏（医療法人前理事長）</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p>
                  井ノ口氏と関係を持ち、複数の企業（インテリジェンス、ニシキなど）を通じて日大から多額の金銭を受け取っていました。
                </p>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <strong>責任：</strong> 井ノ口氏と共謀して、複数の不正な取引スキームに参加。約2億円以上の不正利益を得ました。
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">その他の不正事案</h2>
          
          <Card className="mb-6 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-lg">調査報告書で明らかになった多数の不正</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                第三者委員会の調査報告書（第2章第4節 p.111-130）は、上記3つの事件以外にも、多数の不正事案があったことを明らかにしています。
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">1. 不公正な調達手続を行った案件</h4>
                  <p className="text-sm">複数の案件で、競争入札や相見積もりを行わず、特定の業者に発注。井ノ口氏の指示により、不公正な手続きが常態化していました。</p>
                </div>
                
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">2. 特定の業者に不当な利益を得させた案件</h4>
                  <p className="text-sm">特定の業者に対し、不当に高額な発注を行った疑い。リベートの見返りとして、業者に利益を供与していました。</p>
                </div>
                
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">3. 事業部の私物化行為</h4>
                  <p className="text-sm mb-2">報告書（p.172）は、「事業部の私物化」を以下のように指摘しています：</p>
                  <ul className="text-sm space-y-1 ml-4 list-disc">
                    <li>取引先に対し、田中氏等の就任祝いを要求</li>
                    <li>相撲関係団体への寄付を要求</li>
                    <li>田中氏夫人のお世話係を事業部で雇用</li>
                    <li>事業部の社宅に井ノ口氏の親族を居住させる</li>
                    <li>田中氏の休憩用にマンションの一室を事業部が賃借</li>
                  </ul>
                </div>
                
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-semibold text-slate-900 mb-2">4. 「日大を食い物にする行為」</h4>
                  <p className="text-sm">報告書（p.172）は、さらに重要な指摘をしています：</p>
                  <blockquote className="text-sm italic bg-white p-3 rounded mt-2 border-l-4 border-red-500">
                    「事業部は日大の100%子会社であることや、本件一連の不正行為が日大の発注する取引について行われていたこと等に照らせば、井ノ口氏、田中氏らに供与された現金・利益等の原資はもともと日大に帰属していたものということができ、『事業部の私物化』は、<strong>日大を『食い物』にする行為</strong>でもある。」
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Total Damage */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-red-900">
                <DollarSign className="w-6 h-6" />
                合計損害額：約5億円以上
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <div className="space-y-2">
                <p>• 第1事件（設計会社選定）：2億2000万円</p>
                <p>• 第2事件（医療機器等調達）：約2億600万円</p>
                <p>• 第3事件（脱税）：5233万円</p>
                <p>• その他の不正事案：金額不明（多数）</p>
              </div>
              <p className="font-semibold text-red-900 mt-4">
                これはあなたの学費から流出した金銭です。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">なぜこのようなことが起きたのか？</h3>
          <p className="text-slate-700 mb-6">
            これらの不正事件の根本原因は、日本大学のガバナンス（運営体制）の欠陥にあります。
          </p>
          <Link href="/issues" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            ガバナンス欠陥を詳しく読む
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
        </div>
      </footer>
    </div>
  );
}
