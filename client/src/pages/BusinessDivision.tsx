import SiteNav from "@/components/SiteNav";
import { Link } from "wouter";

export default function BusinessDivision() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <SiteNav />
      <main className="container mx-auto px-4 py-10 flex-1 w-full">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center gap-2">
          &lt; ホームに戻る
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">株式会社 日本大学事業部</h1>
          <p className="text-xl text-gray-600">
            ガバナンス不全を象徴する関連会社と、不正に揺れた資金の流れ
          </p>
        </header>

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">事業部の概要と役割</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            株式会社日本大学事業部は、学校法人日本大学が<strong>全額出資</strong>して設立した関連会社です。大学の
            <strong>調達業務</strong>（備品・物品・役務の提供など）を一元的に担い、業務の効率化と収益による大学財政支援を
            目的としていました。
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
            <li>
              <strong>設立目的:</strong> 調達の効率化と大学への安定した還元。
            </li>
            <li>
              <strong>主な業務:</strong> 部科校の調達代行、保険代理、物品販売など。
            </li>
          </ul>
        </section>

        <section className="bg-red-50 shadow-xl rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-700 mb-4 border-b border-red-200 pb-2">
            不正事案における役割
          </h2>
          <p className="mb-4 text-red-900 leading-relaxed">
            事業部は、元理事長・田中英壽氏と元理事・井ノ口忠男氏による<strong>巨額の背任事件</strong>で、資金の中継地点として
            機能しました。結果として、学生に投資されるべき資金が失われました。
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-800 space-y-2">
            <li>
              <strong>不正契約:</strong> 競争入札を避け、特定企業へ優先的に発注。
            </li>
            <li>
              <strong>見返り:</strong> 大学幹部が現金や高級品などの利益供与を受け取っていた。
            </li>
            <li>
              <strong>学生への影響:</strong> 教育環境整備や奨学金に回るはずの資金が流出。
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            不正の具体例（第三者委員会報告書より）
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ <strong>不透明な外部業者への発注</strong>：理事長と関係の深い企業へ随意契約。</li>
            <li>✅ <strong>見返りの受領</strong>：大学関係者が企業から多額の現金や高級品を入手。</li>
            <li>✅ <strong>不自然な資金移動</strong>：事業部経由の資金が大学関連団体や個人口座へ。</li>
          </ul>
        </section>

        <section className="bg-blue-50 shadow-xl rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
            なぜ学生に関係があるのか？
          </h2>
          <p className="mb-4 text-blue-900 leading-relaxed">
            不正によって失われた資金は、学生生活の質向上に使われるべきものでした。
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
            <li>補助金・奨学金の原資が減少。</li>
            <li>キャンパス整備や学生支援が後回しに。</li>
            <li>大学の信用低下が学生の就職・進学にも影響。</li>
          </ul>
        </section>

        <section className="bg-green-50 shadow-xl rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
            学生が今すぐ取れるアクション
          </h2>
          <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-3">
            <li>
              <strong>情報共有:</strong> 事業部問題を学生間で共有し、認知を広げる。
            </li>
            <li>
              <strong>透明性の要求:</strong> 大学に財務情報と関連会社の取引情報を開示させる。
            </li>
            <li>
              <strong>自治組織との連携:</strong> 学生自治会や同窓会と協力し、要望書を提出する。
            </li>
          </ol>
        </section>

        <section className="bg-gray-100 shadow-xl rounded-2xl p-6 md:p-8 border-l-4 border-gray-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
            まとめ：事業部問題はガバナンスの縮図
          </h2>
          <p className="text-gray-700 leading-relaxed">
            日本大学事業部は、大学全体のガバナンス不全を象徴する存在です。学生自治を再建するためには、こうした不透明な資金の
            流れを正し、意思決定に学生の視点を取り戻すことが不可欠です。
          </p>
        </section>
      </main>
    </div>
  );
}
