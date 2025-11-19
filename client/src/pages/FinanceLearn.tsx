import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function FinanceLearn() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setLocation("/finance")}
            className="flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            財務情報に戻る
          </button>
          <h1 className="text-4xl font-bold mb-4">財務について学ぶ</h1>
          <p className="text-blue-100 text-lg">
            大学会計の基礎知識と日本大学の財務状況を理解しよう
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Section 1: 大学会計の基本 */}
        <Card className="mb-8 border-l-4 border-l-blue-600">
          <CardHeader>
            <CardTitle className="text-2xl">1. 大学会計の基本的な仕組み</CardTitle>
            <CardDescription>企業会計との違いを理解しよう</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">大学会計が企業会計と異なる理由</h3>
              <p className="text-gray-700 mb-3">
                大学は営利を目的としない学校法人であるため、企業会計とは異なる「学校法人会計基準」に基づいて会計処理を行います。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-bold text-blue-900">企業</p>
                  <p className="text-sm text-gray-600">利益を追求し、株主に配当を行う</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-bold text-blue-900">大学</p>
                  <p className="text-sm text-gray-600">教育・研究を永続的に行うため、「収支の均衡」を目指す</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-3">大学会計の3つの主要な計算書</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-l-green-500 pl-4 py-2">
                  <p className="font-bold text-green-700">①資金収支計算書</p>
                  <p className="text-sm text-gray-600">現金の「入りと出」を明らかにする（企業会計のキャッシュフロー計算書に相当）</p>
                </div>
                <div className="border-l-4 border-l-yellow-500 pl-4 py-2">
                  <p className="font-bold text-yellow-700">②消費収支計算書</p>
                  <p className="text-sm text-gray-600">教育・研究活動の収支の均衡を明らかにする（企業会計の損益計算書に相当）</p>
                </div>
                <div className="border-l-4 border-l-purple-500 pl-4 py-2">
                  <p className="font-bold text-purple-700">③貸借対照表</p>
                  <p className="text-sm text-gray-600">一定時点での資産・負債・純資産を明らかにする</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: なぜ支出が収入を上回るのか */}
        <Card className="mb-8 border-l-4 border-l-orange-600">
          <CardHeader>
            <CardTitle className="text-2xl">2. なぜ支出が収入を上回るのか？</CardTitle>
            <CardDescription>日本大学の財務を理解するために重要な3つの概念</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-2">日本大学の令和5年度決算</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div className="bg-white p-3 rounded border border-orange-200">
                  <p className="text-sm text-gray-600">総収入</p>
                  <p className="text-2xl font-bold text-blue-600">186.8億円</p>
                </div>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <p className="text-sm text-gray-600">総支出</p>
                  <p className="text-2xl font-bold text-red-600">239.1億円</p>
                </div>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <p className="text-sm text-gray-600">差額</p>
                  <p className="text-2xl font-bold text-gray-600">-52.3億円</p>
                </div>
              </div>
            </div>

            {/* Concept 1: 基本金 */}
            <div className="border-2 border-orange-300 p-4 rounded-lg">
              <h4 className="font-bold text-lg text-orange-900 mb-2">①基本金組入（きほんきんくみいれ）</h4>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">基本金とは：</span> 大学が永続的に教育・研究を行うために必要な資産（土地、建物、設備など）
              </p>
              <div className="bg-orange-50 p-3 rounded mb-3">
                <p className="text-sm font-bold text-orange-900">資金フロー上の影響</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• 新しい建物や設備を購入する際、その購入費が「支出」として計上される</li>
                  <li>• しかし、その資産は「基本金」として組み入れられ、将来の教育活動を支える</li>
                  <li>• つまり、<span className="font-bold">今年度の「支出」は、将来の教育活動への「投資」</span></li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                例：日本大学が令和5年度に新しい校舎や設備を購入した場合、その費用が支出として計上されます。これらは基本金として組み入れられ、今後数十年にわたって教育に使用されます。
              </p>
            </div>

            {/* Concept 2: 減価償却 */}
            <div className="border-2 border-yellow-300 p-4 rounded-lg">
              <h4 className="font-bold text-lg text-yellow-900 mb-2">②減価償却費（げんかしょうきゃくひ）</h4>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">減価償却とは：</span> 建物や設備などの固定資産は、時間とともに価値が減少する。その減少分を毎年「費用」として計上する仕組み
              </p>
              <div className="bg-yellow-50 p-3 rounded mb-3">
                <p className="text-sm font-bold text-yellow-900">資金フロー上の特徴</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• 消費収支計算書には「減価償却費」が費用として計上される</li>
                  <li>• しかし、資金収支計算書では現金が動かないため、この費用は計上されない</li>
                  <li>• つまり、<span className="font-bold">減価償却費は「現金を伴わない費用」</span></li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                例：日本大学の過去に建設した校舎の減価償却費は年間約50億円以上。この費用は、過去の資本投資を現在の教育活動に配分するもので、実際には現金が出ていません。
              </p>
            </div>

            {/* Concept 3: 内部留保 */}
            <div className="border-2 border-green-300 p-4 rounded-lg">
              <h4 className="font-bold text-lg text-green-900 mb-2">③内部留保（ないぶりゅうほ）</h4>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">内部留保とは：</span> 大学が毎年の運営で生じた余剰金を蓄積したもの。将来の施設改修や設備更新のための「貯蓄」
              </p>
              <div className="bg-green-50 p-3 rounded mb-3">
                <p className="text-sm font-bold text-green-900">役割</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• 減価償却費などの現金を伴わない費用が、内部留保として蓄積される</li>
                  <li>• この蓄積により、大学は新しい施設・設備への投資が可能になる</li>
                  <li>• 企業の「利益剰余金」に相当する概念</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                例：内部留保が適切に管理されていれば、長期的な経営基盤の安定につながります。しかし、透明性の欠如や不適切な使途があれば、経営危機につながります。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: 学生が知るべきこと */}
        <Card className="mb-8 border-l-4 border-l-purple-600">
          <CardHeader>
            <CardTitle className="text-2xl">3. 学生が知るべき重要なポイント</CardTitle>
            <CardDescription>大学の財務を理解し、学生自治に参加しよう</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-bold text-purple-900 mb-2">①基本金は「投資」である</p>
                <p className="text-sm text-gray-700">
                  施設建設費は、単なる「支出」ではなく、将来の教育活動への「投資」です。これが基本金として組み入れられることで、大学の資産となります。
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-bold text-purple-900 mb-2">②減価償却費は「内部留保」を生む</p>
                <p className="text-sm text-gray-700">
                  現金を伴わない費用が、内部留保として蓄積されます。この蓄積が、次の投資を可能にします。
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-bold text-purple-900 mb-2">③透明性が重要</p>
                <p className="text-sm text-gray-700">
                  大学の財務状況を学生や社会に開示することが、信頼構築の基本です。不正事案の再発防止には、財務の透明性が不可欠です。
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-bold text-purple-900 mb-2">④学生自治の役割</p>
                <p className="text-sm text-gray-700">
                  学生が大学の経営に学生自治復活に参加することで、財務の透明性を監視できます。学生自治会が機能することで、学生の声が経営に反映されます。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
          <CardHeader>
            <CardTitle className="text-white">大学の財務を理解したら、次のステップへ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-100 mb-6">
              大学会計の基礎を理解することで、日本大学の財務状況がより明確に見えてきます。
              次は、現状の問題点を詳しく学び、学生自治復活に向けた行動を起こしましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setLocation("/issues")}
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                現状の課題を詳しく読む
              </Button>
              <Button
                onClick={() => setLocation("/roadmap")}
                variant="outline"
                className="border-white text-white hover:bg-blue-500"
              >
                学生自治復活へのアクション
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
