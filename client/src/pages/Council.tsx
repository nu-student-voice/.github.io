import SiteNav from "@/components/SiteNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { AlertTriangle, ChevronLeft, FileText, Gavel, Users } from "lucide-react";

type TimelineItem = {
  date: string;
  title: string;
  summary: string;
  studentFocus: string;
  tone: "structure" | "finance" | "incident" | "policy";
};

const timeline: TimelineItem[] = [
  {
    date: "2024/09/25",
    title: "私立学校法改正に伴う寄附行為の全面見直しを可決",
    summary:
      "2025年4月施行の改正法に合わせ、理事・評議員の選解任手続や兼職制限、監査体制強化などを反映。議事録公開は引き続き要旨が中心になる見通し。",
    studentFocus: "理事・評議員の選び方や情報公開範囲が学生・教職員の代表性に直結。選任ルールや議事録開示の実態を確認し続ける必要あり。",
    tone: "structure",
  },
  {
    date: "2024/05/22",
    title: "役員規程の懲戒整備と業務執行理事の権限明確化を諮問・了承",
    summary:
      "監事機能強化や内部統制実現を目的に、役員の懲戒規定と業務執行理事の職務・権限を整理。2023年度決算報告や理事長・学長の業績評価も実施。",
    studentFocus: "権限の線引きと評価の仕組みが透明になっているか、学生に説明されているかを要チェック。",
    tone: "structure",
  },
  {
    date: "2024/03/21",
    title: "私立学校法改正への対応方針と2024年度予算を審議",
    summary:
      "評議員数の見直し（特に教員枠削減が議論）や、寄付金募集の承認基準を協議。2024年度事業計画・予算案を可決。",
    studentFocus: "教員・学生の声が減らされない仕組みになっているか、学内で意見を拾うルートが用意されているかを確認したい。",
    tone: "policy",
  },
  {
    date: "2023/12/20",
    title: "文科省指導への対応計画を報告し、板橋病院の建替計画を提示",
    summary:
      "「管理運営に関する適切な対応及び報告」に対する方針を公表。医学部付属板橋病院の建替・耐震化・教育施設改修の重要整備計画を共有し、外部出身の監事を選任。",
    studentFocus: "大型投資が学費や医療提供体制にどう影響するか、また情報共有のチャンネルが学生にも開かれているかを注視。",
    tone: "finance",
  },
  {
    date: "2023/10/13",
    title: "ニューカッスルキャンパス開設に伴う寄附行為変更を可決",
    summary:
      "2024年2月からの海外研修拠点運用に合わせ、宿泊・研修賃貸など付随事業を寄附行為に追加。評価指標や4年後の本格検証の必要性が議論された。",
    studentFocus: "海外プログラムの費用対効果と利用条件が学生に公平か、検証プロセスに学生の声をどう入れるかが鍵。",
    tone: "policy",
  },
  {
    date: "2023/09/12",
    title: "アメフト部薬物事件を受けた第三者委員会等の設置を報告",
    summary:
      "文科省指導文書の受領を共有し、第三者委員会や再発防止検討委員会を新設。競技部の情報伝達・寮管理の欠陥を洗い出す方針を確認。",
    studentFocus: "調査結果と再発防止策をどこまで公開し、当事者である学生が安全に意見を出せるのかが問われる。",
    tone: "incident",
  },
  {
    date: "2023/05/24",
    title: "2022年度決算・事業報告を承認、独立監査人選定プロセスを共有",
    summary:
      "不祥事対応での予算未執行が大きく、収益事業の収支懸念も指摘。理事長・学長の業績評価を実施し、固定資産処分を議決。",
    studentFocus: "不祥事対応コストや資産売却が学費・教育サービスにどう跳ね返るか、説明責任が十分かを確認したい。",
    tone: "finance",
  },
  {
    date: "2023/03/22",
    title: "新体制の中期計画修正と2023年度予算を審議",
    summary:
      "理事長・学長交代に伴い6年計画を修正し、事業計画と予算案を承認。教員配置やニューカッスル計画の見直しが論点に。",
    studentFocus: "計画変更が教育・研究環境にどう影響するか、学生への説明とフィードバックの機会があるかが重要。",
    tone: "policy",
  },
  {
    date: "2022/09/16",
    title: "学識経験評議員の常務理事就任を時限的に容認、収益事業を寄附行為に追加",
    summary:
      "兼職禁止の緩和を2026年6月までに限定。事業部清算を受け、保険代理店事業を法人が承継するため収益事業を寄附行為に明記。",
    studentFocus: "牽制機能低下への懸念と、収益事業が学生負担や透明性にどう影響するかをウォッチする必要がある。",
    tone: "structure",
  },
  {
    date: "2022/07/11",
    title: "評議員が常務理事を兼務できる規程改正案を審議（理事会へ差し戻し）",
    summary:
      "相互牽制の形骸化や「なれ合い」への懸念が噴出。限定的な運用や条文化の必要性を指摘し、理事会で再検討することに。",
    studentFocus: "ガバナンスの独立性が守られているか、議事録開示など透明性の強化を求め続けられるかが論点。",
    tone: "structure",
  },
];

const toneStyles: Record<TimelineItem["tone"], string> = {
  structure: "border-l-blue-600",
  finance: "border-l-emerald-600",
  incident: "border-l-red-600",
  policy: "border-l-indigo-600",
};

export default function Council() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <SiteNav />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full space-y-12">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-slate-500">日本大学 評議員会ガイド</p>
          <h1 className="text-4xl font-bold text-slate-900">評議員会の役割と最新動向を一望</h1>
          <p className="text-lg text-slate-600">
            日本大学情報公開ページ「評議会」（https://www.nihon-u.ac.jp/disclosure/minutes/board_trustees/）に公開されている
            議事録（2022年〜2024年）と法改正の流れをもとに、評議員会の存在意義・権限・最近の決定と、
            学生自治の視点で考えるべき問いをまとめました。
          </p>
        </header>

        <section className="grid md:grid-cols-12 gap-6 items-start">
          <Card className="md:col-span-7 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Gavel className="w-5 h-5" />
                評議員会の存在意義
              </CardTitle>
              <CardDescription className="text-blue-900/80 font-semibold">
                「理事会の暴走を防ぎ、利害関係者の声を経営に届けるための、学校法人のチェック＆バランス」
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                私立学校法に基づき設置される第三の機関。理事会が決定する前に、寄附行為の変更、予算・決算、大規模投資、
                役員人事などを諮問・議決し、公益性と透明性を担保する役割を持ちます。
              </p>
              <p>
                議事録によると現員は49人で、教職員・校友・外部有識者（学識経験評議員など）といった多様な区分で構成。
                代表性と独立性を両立できているかが常に問われています。
              </p>
            </CardContent>
          </Card>

          <div className="md:col-span-5 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Users className="w-5 h-5" />
                  だれがメンバー？
                </CardTitle>
                <CardDescription>議事録と法改正のポイントから整理</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>現員49人（議事録記載）。区分は教員選出・校友・学識経験評議員など複数。</li>
                  <li>改正私立学校法により、兼職制限や構成要件が強化される流れ。</li>
                  <li>理事・監事を選解任する母体となり、理事会の牽制役を担う。</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <FileText className="w-5 h-5" />
                  ここで決まること
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>寄附行為（憲法にあたる定款）の改定、規程の大枠</li>
                  <li>予算・決算、中期計画や大規模整備計画</li>
                  <li>理事・監事の選任や業績評価、内部統制・懲戒の枠組み</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">TIMELINE</Badge>
            <h2 className="text-2xl font-bold text-slate-900">最近の議事録から追う重要決定</h2>
          </div>
          <p className="text-slate-600">
            日本大学情報公開ページで公開されている議事録（要旨）をもとに、学生生活や自治に影響する論点を抜粋。
            最新の法改正対応から、競技部不祥事、財務・施設投資まで、チェックすべき流れを整理しました。
          </p>

          <div className="space-y-4">
            {timeline.map((item) => (
              <Card key={`${item.date}-${item.title}`} className={`border-l-4 ${toneStyles[item.tone]}`}>
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">{item.date}</span>
                      <span className="text-slate-500">{item.tone === "incident" ? "危機対応" : item.tone === "finance" ? "財務・投資" : "制度・方針"}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                  <CardDescription className="text-slate-700">{item.summary}</CardDescription>
                </CardHeader>
                <CardContent className="bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">学生自治の視点</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.studentFocus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">学生自治の文脈での問題提起</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li>評議員会の議事録（全文）や資料はどこまで公開され、学生がアクセスできるか？</li>
                <li>理事・評議員の選任プロセスに学生・教職員の意見を反映する窓口はあるか？</li>
                <li>不祥事対応や大規模投資の意思決定に、学生影響評価や説明会は組み込まれているか？</li>
                <li>ガバナンス改革後も、競技部や学部の現場で風通しが改善しているか？</li>
                <li>法改正で枠が減る教員評議員の代替として、学生・教職員の声を拾う仕組みは設計されているか？</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white h-full">
            <CardHeader>
              <CardTitle className="text-xl">次に取れるアクション</CardTitle>
              <CardDescription className="text-blue-100">
                「評議員会で何が決まるか」を押さえることが、学生自治の再構築の起点。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-blue-50">
              <ul className="list-disc list-inside space-y-2">
                <li>議事録要旨だけでなく資料の公開範囲を確認し、全文公開を要望する。</li>
                <li>理事・評議員選任ルールの見直し（改正法対応）に対し、学生・教職員の意見募集を求める。</li>
                <li>大規模投資（板橋病院建替・海外キャンパス等）の学生影響評価と説明会開催を働きかける。</li>
                <li>競技部の再発防止策の運用状況をフォローし、安心して通報・相談できる窓口の実効性をチェックする。</li>
              </ul>
            </CardContent>
          </Card>
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
