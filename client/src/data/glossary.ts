export type GlossaryEntry = {
  id: string;
  term: string;
  reading?: string;
  description: string;
  note?: string;
};

export const glossaryEntries: GlossaryEntry[] = [
  {
    id: "kifukoui",
    term: "寄附行為",
    reading: "きふこうい",
    description:
      "学校法人の「定款」にあたる基本規程。組織の目的、役員構成、意思決定の手続きなどを定め、改正には所轄庁への認可が必要。",
  },
  {
    id: "hyougikai",
    term: "評議員会",
    reading: "ひょうぎいんかい",
    description:
      "学校法人の第三の機関。理事会の決定事項に対して意見聴取・議決を行う。理事・監事の選解任や寄附行為改正、予算・決算などを扱う。",
  },
  {
    id: "rijikai",
    term: "理事会",
    description:
      "法人の最高意思決定機関。理事長・学長を含む理事で構成し、重要な方針や予算等を決定する。評議員会との相互牽制が求められる。",
  },
  {
    id: "kihonkin",
    term: "基本金組入",
    reading: "きほんきんくみいれ",
    description:
      "教育研究のために長期使用する資産（土地・建物・設備など）を「基本金」として計上すること。資金収支上は支出となるが将来への投資。",
  },
  {
    id: "genkashoukyaku",
    term: "減価償却費",
    reading: "げんかしょうきゃくひ",
    description:
      "固定資産の価値減少を毎年の費用として配分する会計処理。現金の支出は伴わないが、教育活動の費用として消費収支計算書に計上される。",
  },
  {
    id: "naiburyuho",
    term: "内部留保",
    reading: "ないぶりゅうほ",
    description:
      "毎年の運営で生じた余剰金の累積。施設更新や設備投資のための「貯蓄」。透明な運用と説明責任がガバナンス上重要。",
  },
  {
    id: "kojinjoho",
    term: "ガバナンス改革（学校法人）",
    description:
      "私立学校法改正（2024-2025）で求められる役員選解任手続の透明化、兼職制限、監査体制強化などの一連の改革。",
  },
];

export const glossaryMap: Record<string, GlossaryEntry> = Object.fromEntries(
  glossaryEntries.map((entry) => [entry.id, entry])
);
