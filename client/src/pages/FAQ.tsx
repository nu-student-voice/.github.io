import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    category: "学生自治について",
    question: "なぜ学生自治が必要なのか？",
    answer: "学生自治は、学生が大学運営に関わり、自分たちの学生生活に関する意思決定に学生自治復活に参加する仕組みです。学費がどう使われるか、キャンパス環境をどう改善するか、サークルや行事にどの程度の予算を配分するか——こうした決定は、学生の生活に直結しています。学生自治が機能していれば、学生の声が大学運営に反映され、より良い学習環境が実現できます。また、学生自治を通じて、民主的な意思決定の経験を積むことも、大学教育の重要な役割です。"
  },
  {
    category: "学生自治について",
    question: "学生にどんな利益があるのか？",
    answer: "学生自治が復活すると、以下のような具体的な改善が期待できます：\n\n学食の値段が安くなる可能性\nサークル活動への補助金が増える\n図書館や自習スペースが充実する\n奨学金制度が拡充される\n学生向けイベントが増える\n学生の意見が大学の方針に反映される\n\nこれらは、不正事案によって失われた資金が、適切に学生のために使われていたら実現できた改善です。学生自治を通じて、こうした改善を実現することができます。"
  },
  {
    category: "学生自治について",
    question: "そもそも学生がこうした活動をしてよいのか？",
    answer: "はい、もちろんです。学生が大学運営に関心を持ち、意見を述べることは、むしろ推奨されるべき活動です。\n\n日本の大学は、学生を含む「ステークホルダー」（利害関係者）の声に耳を傾ける責任があります。学生自治会は、その仕組みの一つです。\n\nただし、重要なのは「建設的な対話」です。大学の問題点を指摘するだけでなく、改善案を提案し、大学側と協議する姿勢が大切です。このサイトで紹介しているアクションは、すべてこの「建設的な対話」の枠組みの中にあります。"
  },
  {
    category: "具体的なアクション",
    question: "具体的に何をすればいいのか？",
    answer: "学生自治復活に向けた具体的なアクションは以下の通りです：\n\n1. まずは理解する - このサイトで、日大の問題とガバナンスについて学ぶ\n\n2. 意見を表明する - Google Formで、あなたの意見や要望を送る\n\n3. 仲間を増やす - 友人や同級生にこのサイトを共有し、一緒に考える\n\n4. 大学と対話する - 集まった意見をもとに、大学側と協議する\n\n5. 継続する - 学生自治復活は一度の活動では終わりません。継続的な関与が重要です\n\nまずは、このページの下の「学生自治復活に参加する」ボタンから、Google Formで意見を送ってください。"
  },
  {
    category: "大学の変化",
    question: "大学はどう変わるのか？",
    answer: "学生自治が復活すると、大学の意思決定プロセスが変わります：\n\n現状（学生自治が形骸化）:\n大学の経営層が一方的に決定\n学生の声が反映されない\n不正や不透明な運営が起こりやすい\n\n学生自治復活後:\n学生代表が大学の意思決定に参加\n財務情報の透明性が向上\n学生の声が大学方針に反映される\n不正を防ぐための監視機能が強化される\n\nこれは、大学全体の信頼性向上にもつながります。"
  },
  {
    category: "日大の問題",
    question: "大学の不正や運営と学生の関係がわからない",
    answer: "これは、多くの学生が感じている疑問です。わかりやすく説明します：\n\n2022年に明らかになった日大の不正事案:\n大学の経営層が、学費などの資金を私的に流用\n数十億円規模の不正が行われていた\n学生の学費が、本来の目的（教育）に使われていなかった\n\nこれが学生に与える影響:\nあなたの学費が、学食の値下げやサークル補助金に使われていない\n図書館の蔵書が充実していない\n施設が老朽化している\n\nこれらの問題は、学生自治が機能していれば、防ぐことができました。学生が大学運営に関わっていれば、不正を早期に発見し、防ぐことができたのです。\n\n詳しくは、「問題の経緯」ページをご覧ください。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="bg-blue-600 text-white py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-blue-100">
            日大 学生自治復活
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-blue-100">ホーム</Link>
            <Link href="/history" className="hover:text-blue-100">問題の経緯</Link>
            <Link href="/issues" className="hover:text-blue-100">現状の課題</Link>
            <Link href="/finance" className="hover:text-blue-100">財務情報</Link>
            <Link href="/governance" className="hover:text-blue-100">ガバナンスとは</Link>
            <Link href="/roadmap" className="hover:text-blue-100">ロードマップ</Link>
            <Link href="/faq" className="text-blue-100 font-semibold">よくある質問</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">よくある質問</h1>
          <p className="text-lg text-slate-700">
            学生自治復活について、よくいただく質問にお答えします。
          </p>
        </section>

        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
              {category}
            </h2>

            <div className="space-y-4">
              {faqItems
                .filter(item => item.category === category)
                .map((item, itemIndex) => {
                  const globalIndex = faqItems.indexOf(item);
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card key={itemIndex} className="border border-slate-200">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-start"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 flex-1 pr-4">
                          {item.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <CardContent className="pt-0 pb-6 px-6 border-t border-slate-200">
                          <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                            {item.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
            </div>
          </section>
        ))}

        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">さらに知りたいことはありますか？</h3>
          <p className="text-slate-700 mb-6">
            このページに載っていない質問や、もっと詳しく知りたいことがあれば、Google Formで教えてください。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9JGWRppBHczwj1ruRSvRkaLetJgvtQWbT7ywmvodQtZHweA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            学生自治復活に学生自治復活に参加する
          </a>
        </section>

        <section className="bg-yellow-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">次のステップ</h3>
          <p className="text-slate-700 mb-6">
            質問への答えが見つかりましたか？次は、具体的なアクションについて知りましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmap" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 font-semibold border-2 border-blue-600">
              ロードマップを見る
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe9JGWRppBHczwj1ruRSvRkaLetJgvtQWbT7ywmvodQtZHweA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              学生自治復活に学生自治復活に参加する
            </a>
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
