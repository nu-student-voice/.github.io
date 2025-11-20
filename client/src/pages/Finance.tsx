import SiteNav from "@/components/SiteNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";

export default function Finance() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const isMobile = useIsMobile();
  const sankeyDiagramSrc = useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL ?? "/";
    const normalizedBase =
      baseUrl === "/" || baseUrl === "./"
        ? ""
        : baseUrl.startsWith("/")
          ? baseUrl.replace(/\/$/, "")
          : `/${baseUrl.replace(/\/$/, "")}`;

    if (typeof window === "undefined") {
      return `${normalizedBase}/sankey_diagram.html`;
    }

    const origin = window.location.origin;
    return `${origin}${normalizedBase}/sankey_diagram.html`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <SiteNav />

      <main id="main-content" className="flex-1 max-w-6xl mx-auto px-4 py-6 md:py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 md:mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-8">日大のお金の流れを見える化する</h1>
        <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-12">令和5年度（2023年度）資金收支計算書から見える、日大の財務構造</p>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>サンキー図について</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                下のサンキー図は、日本大学がどのようにお金を集め、何に使っているかを視覚化したものです。左側が「収入」、中央が「総資金」、右側が「支出」を表しています。
              </p>
              <p>
                流れの太さは金額の大きさを表しており、太い流れほど大きな金額が流れていることを示しています。
              </p>
              <p className="text-sm text-slate-600 italic">
                💡 <strong>重要：</strong> 支出が収入を上回っているように見えますが、これは大学会計の特殊性によるものです。基本金、減価償却費、内部留保などの概念を理解することが重要です。
              </p>
              <Link href="/finance-learn" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold text-sm">
                大学会計の基礎を学ぶ →
              </Link>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 md:mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-3 md:p-4 border border-slate-100">
            <div
              className="relative w-full rounded-xl overflow-hidden bg-slate-50"
              style={{ minHeight: isMobile ? 520 : 820 }}
            >
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white/70 backdrop-blur-sm">
                  <div className="h-10 w-10 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin" />
                  <p className="text-sm font-medium">サンキー図を読み込み中...</p>
                </div>
              )}
              <iframe
                title="日本大学資金フロー"
                src={sankeyDiagramSrc}
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card>
            <CardHeader>
              <CardTitle>主要な収入源</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <div>
                <p className="font-semibold">学生生徒等納付金（学費）</p>
                <p className="text-sm">約1,128億6048万円</p>
              </div>
              <div>
                <p className="font-semibold">病院収入</p>
                <p className="text-sm">約307億8827万円</p>
              </div>
              <div>
                <p className="font-semibold">補助金収入</p>
                <p className="text-sm">約120億2284万円</p>
              </div>
              <div>
                <p className="font-semibold">その他（寄付金、手数料など）</p>
                <p className="text-sm">約80億6000万円</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>主要な支出項目</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <div>
                <p className="font-semibold">人件費（給与・福利厚生）</p>
                <p className="text-sm">約934億7019万円</p>
              </div>
              <div>
                <p className="font-semibold">教育研究経費</p>
                <p className="text-sm">約693億2211万円</p>
              </div>
              <div>
                <p className="font-semibold">管理経費</p>
                <p className="text-sm">約190億7036万円</p>
              </div>
              <div>
                <p className="font-semibold">病院経費</p>
                <p className="text-sm">約181億4174万円</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">サンキー図から見える重要なポイント</h3>
          <div className="space-y-4 text-slate-700">
            <p>
              <span className="font-semibold">1. 学費の大部分は人件費に充てられている</span> - これは、教育を提供するための教職員の給与に充てられています。
            </p>
            <p>
              <span className="font-semibold">2. 教育研究経費が相応の規模</span> - 教育の質を維持するための経費です。
            </p>
            <p>
              <span className="font-semibold">3. 管理経費の規模</span> - 大学の運営に必要な経費ですが、ここに不正事案に関連する費用が含まれていた可能性があります。
            </p>
          </div>
        </section>

        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">学生への問いかけ</h3>
          <div className="space-y-3 text-slate-700">
            <p>このサンキー図を見て、皆さんは何を感じますか？</p>
            <ul className="list-disc list-inside space-y-2">
              <li>学費がどのように使われているか、理解できましたか？</li>
              <li>管理経費が適切に使われているか、確認する仕組みはありますか？</li>
              <li>学生が、この財務情報に基づいて、大学運営に意見を言う機会はありますか？</li>
            </ul>
          </div>
        </section>

        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">もし学生が大学運営に関われたら？</h3>
          <div className="space-y-6 text-slate-700">
            <p className="text-lg font-semibold text-green-700">
              不正事案によって失われた資金が、学生のために使われていたら、どのような改善ができたでしょうか？
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">学食の値下げ</h4>
                <p className="text-sm mb-3">
                  毎年数億円の不正資金が適切に管理されていれば、学食の食材費補助に充てることで、学生の食事代を大幅に削減できたはずです。
                </p>
                <p className="text-xs text-green-700 font-semibold">例：昼食代を100円削減</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">サークル活動への補助金増額</h4>
                <p className="text-sm mb-3">
                  学生の課外活動を支援するための予算を大幅に増やし、より充実した学生生活を実現できたはずです。
                </p>
                <p className="text-xs text-green-700 font-semibold">例：サークル予算を30%増額</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">図書館・施設の充実</h4>
                <p className="text-sm mb-3">
                  図書館の蔵書拡充、自習スペースの整備、キャンパス施設のリノベーションなど、学習環境を大幅に改善できたはずです。
                </p>
                <p className="text-xs text-green-700 font-semibold">例：図書購入費を50%増額</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">奨学金制度の拡充</h4>
                <p className="text-sm mb-3">
                  経済的に困難な学生への奨学金を増やし、より多くの学生が安心して学べる環境を作ることができたはずです。
                </p>
                <p className="text-xs text-green-700 font-semibold">例：奨学金予算を倍増</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">学生向けイベントの充実</h4>
                <p className="text-sm mb-3">
                  文化祭、スポーツ大会、講演会など、学生が主体的に参加できるイベントを大幅に拡充できたはずです。
                </p>
                <p className="text-xs text-green-700 font-semibold">例：イベント予算を2倍に</p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">学生の声が反映される仕組み</h4>
                <p className="text-sm mb-3">
                  学生自治会が強化され、学生の意見が大学運営に直接反映される仕組みが構築でき、より良い大学環境が実現できたはずです。
                </p>
                <p className="text-xs text-green-700 font-semibold">例：学生参加型の予算編成</p>
              </div>
            </div>

            <div className="bg-green-100 border-l-4 border-green-600 p-4 mt-6">
              <p className="font-semibold text-slate-900">
                💡 重要なポイント
              </p>
              <p className="text-sm mt-2">
                これらは、もし学生が大学運営に参加し、財務情報の透明性が確保されていたら実現できた改善の例です。学生自治の復活は、単なる「権利」ではなく、皆さんの学生生活をより豊かにするための「必要な仕組み」なのです。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">次のステップ</h3>
          <p className="text-slate-700 mb-6">
            大学会計の基礎を理解した上で、学生自治を復活させるための具体的なアクションについて知りたいですか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/finance-learn" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 font-semibold border-2 border-blue-600">
              大学会計を詳しく学ぶ
            </Link>
            <Link href="/roadmap" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
              ロードマップを見る
            </Link>
          </div>
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
