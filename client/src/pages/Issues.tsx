import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function Issues() {
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

        <h1 className="text-4xl font-bold text-slate-900 mb-4">ガバナンス欠陥の分析</h1>
        <p className="text-lg text-slate-600 mb-4">なぜ不正事件が起きたのか？経営学的な視点から分析します</p>
        
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
            （第3章 原因の分析 p.168-187）
          </p>
          <p className="text-xs text-slate-600 mt-2">
            このページの分析は、上記の公式調査報告書に基づいています。
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">ガバナンスの欠陥が不正を生む</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                日本大学で起きた不正事件は、単なる個人の不正ではなく、<strong>組織的な仕組みの欠陥</strong>に起因しています。
              </p>
              <p className="font-semibold text-slate-900">
                本来あるべき大学の運営体制が機能していなかったために、不正が発生・継続・拡大しました。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Issue 1: Excessive Authority Concentration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">欠陥1：理事長権限の過度な集中</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  本来あるべき姿
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✓ 理事会が最高意思決定機関</p>
                  <p>✓ 理事長の権限は制限される</p>
                  <p>✓ 重要決定は理事会の承認が必要</p>
                  <p>✓ 定期的な評価と交代</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  日本大学の実態
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✗ 理事長が理事会を支配</p>
                  <p>✗ 理事長の一存で決定可能</p>
                  <p>✗ 報告なく実行される</p>
                  <p>✗ 長期間の権力保持</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">この欠陥がもたらした結果</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                田中英壽理事長が権力を独占し、井ノ口忠男氏に過度な権限を委譲しました。その結果、井ノ口氏は採点の改ざんや不正な取引を、チェックされることなく実行できました。
              </p>
              <div className="bg-red-50 p-3 rounded text-sm">
                <strong>影響：</strong> 約4億円以上の不正取引が発生・継続
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Issue 2: Audit Function Failure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">欠陥2：監査機能の不全</h2>
          
          {/* Report Quote */}
          <Card className="mb-6 bg-amber-50 border-amber-300">
            <CardHeader>
              <CardTitle className="text-lg">調査報告書の指摘（第7章 p.183-186）</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p className="text-sm">
                報告書は、不正が発生した8つの原因のうち、<strong>「第7 調達要件の緩和と日大による監督の不全」</strong>を明確に指摘しています。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h4 className="font-semibold text-slate-900 mb-2">監査体制の実態：</h4>
                <ul className="text-sm space-y-2 ml-4 list-disc">
                  <li><strong>日本大学監査団</strong>：機能していなかった</li>
                  <li><strong>日大監事</strong>：監査が形骸化していた</li>
                  <li><strong>事業部の監査役</strong>：監査範囲は会計に限定されておらず、業務監査も含まれていたが、実際には機能していなかった</li>
                </ul>
              </div>
              <p className="text-sm italic">
                これらの監査機関が適切に機能していれば、不正は早期に発見され、防止できたはずです。
              </p>
            </CardContent>
          </Card>       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  本来あるべき姿
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✓ 監査役は理事長から独立</p>
                  <p>✓ 全ての取引を監査可能</p>
                  <p>✓ 理事会に直接報告</p>
                  <p>✓ 十分な監査スタッフ</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  日本大学の実態
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✗ 監査役が理事長の支配下</p>
                  <p>✗ 監査権限が限定的</p>
                  <p>✗ 理事長を通じて報告</p>
                  <p>✗ 人員不足</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">この欠陥がもたらした結果</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                監査役が理事長の影響下にあったため、採点の改ざんや不正な取引が発見されませんでした。本来は監査役が「これは不正だ」と指摘すべきでしたが、その機能が果たされませんでした。
              </p>
              <div className="bg-red-50 p-3 rounded text-sm">
                <strong>影響：</strong> 不正が発見されず、継続・拡大
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Issue 3: Lack of Student Participation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">欠陥3：学生・教職員の参加機会の不足</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  本来あるべき姿
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✓ 学生自治会が独立して機能</p>
                  <p>✓ 定期的な協議の場がある</p>
                  <p>✓ 学生の声が経営に反映</p>
                  <p>✓ 経営情報が開示される</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  日本大学の実態
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✗ 学生自治会が形骸化</p>
                  <p>✗ 一方的な通知のみ</p>
                  <p>✗ 学生の声が無視される</p>
                  <p>✗ 情報が隠蔽される</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">この欠陥がもたらした結果</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                学生が大学運営に参加できないため、不正が学生に知られませんでした。学生が知っていれば、「これはおかしい」と声を上げることができたはずです。
              </p>
              <div className="bg-red-50 p-3 rounded text-sm">
                <strong>影響：</strong> 不正が学生に知られず、改善の機会が失われた
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Issue 4: Internal Control Deficiency */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">欠陥4：内部統制の欠陥</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  本来あるべき姿
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✓ 複数承認制（複数人の承認が必要）</p>
                  <p>✓ 職務分離（同一人物が承認と実行をしない）</p>
                  <p>✓ 定期的なチェック</p>
                  <p>✓ 全ての取引を記録</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  日本大学の実態
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✗ 一人の判断で決定可能</p>
                  <p>✗ 井ノ口氏が承認と実行を兼任</p>
                  <p>✗ チェック機能がない</p>
                  <p>✗ 記録が改ざんされた</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">この欠陥がもたらした結果</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                井ノ口氏が採点を改ざんしても、誰もチェックしませんでした。複数の人が関わっていれば、「これはおかしい」と指摘できたはずです。
              </p>
              <div className="bg-red-50 p-3 rounded text-sm">
                <strong>影響：</strong> 不正が発見されず、継続・拡大
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Issue 5: Whistleblower System */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">欠陥5：公益通報制度の不信</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  本来あるべき姿
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✓ 複数の通報窓口</p>
                  <p>✓ 通報者が保護される</p>
                  <p>✓ 秘密が守られる</p>
                  <p>✓ 迅速に調査・対応</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  日本大学の実態
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <div className="space-y-2 text-sm">
                  <p>✗ 通報窓口がない</p>
                  <p>✗ 報復の懸念がある</p>
                  <p>✗ 秘密が守られない</p>
                  <p>✗ 隠蔽される</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg">この欠陥がもたらした結果</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                不正を見つけた人が、報告できる仕組みがありませんでした。また、報告すれば報復されるという懸念もありました。その結果、不正が隠蔽されました。
              </p>
              <div className="bg-red-50 p-3 rounded text-sm">
                <strong>影響：</strong> 不正が隠蔽され、改善の機会が失われた
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Causal Relationship */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">ガバナンス欠陥が不正につながった因果関係</h2>
          
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-300">
            <CardContent className="text-slate-700 space-y-4 pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">理事長権限の過度な集中</h4>
                    <p className="text-sm">→ 井ノ口氏に権限を委譲</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">監査機能の不全</h4>
                    <p className="text-sm">→ 採点改ざんが発見されない</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">学生・教職員の参加機会の不足</h4>
                    <p className="text-sm">→ 学生が不正を知らない</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">内部統制の欠陥</h4>
                    <p className="text-sm">→ 複数承認制がない</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">5</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">公益通報制度の不信</h4>
                    <p className="text-sm">→ 不正を見つけても報告できない</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-red-300 pt-4 mt-4">
                <p className="font-semibold text-red-900 text-center">
                  結果：不正が継続・拡大し、約5億円以上の損害が発生
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">これからどうすべきか？</h3>
          <p className="text-slate-700 mb-6">
            これらのガバナンス欠陥を改善することが、日本大学の改革に必要です。
          </p>
          <Link href="/roadmap" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            改革案と学生の役割を見る
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
