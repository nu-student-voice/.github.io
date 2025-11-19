import { Link } from "wouter";

export default function BusinessDivision() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        &lt; ホームに戻る
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        株式会社 日本大学事業部
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        大学のガバナンス不全の象徴：その役割と不正事案
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
          事業部の概要と本来の役割
        </h2>
        <p className="mb-4">
          株式会社日本大学事業部は、学校法人日本大学が**全額出資**して設立した関連会社です。
          その本来の目的は、大学の**調達業務**（備品、物品、役務の提供など）を一元的に担い、効率化を図ること、そして事業で得た収益を大学に寄付することで、大学の財政を支援することでした。
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>
            **設立目的:** 大学の調達業務の効率化、収益の大学への寄付
          </li>
          <li>
            **主な業務:** 部科校の調達業務、保険代理業務、物品販売など
          </li>
        </ul>
      </div>

      <div className="bg-red-50 shadow-lg rounded-lg p-6 mb-8 border-l-4 border-red-500">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 border-b border-red-200 pb-2">
          不正事案における役割
        </h2>
        <p className="mb-4 text-red-800">
          この事業部は、元理事長・田中英壽氏と元理事・井ノ口忠男氏による**巨額の背任事件**において、不正な資金の流れの中心的な舞台となりました。
        </p>
        <ul className="list-disc list-inside ml-4 text-red-800">
          <li>
            **不透明な取引:** 付属病院の建て替え工事や医療機器の調達など、巨額の取引において、事業部を介することで**不必要な中間業者**が入り込み、大学に損害を与える取引が行われました。
          </li>
          <li>
            **強圧的支配:** 元理事の井ノ口氏が事業部の取締役を務め、その**強大な権限**を利用して、大学の調達業務を私物化し、業者選定に介入するなど、**ガバナンスの欠如**を象徴する存在となりました。
          </li>
          <li>
            **資金の私的流用:** 事業部を介した取引から得られた資金の一部が、元理事長や元理事側に**不正に還流**していたことが、第三者委員会の調査で明らかになりました。
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
          学生自治の視点から
        </h2>
        <p className="mb-4">
          事業部による不正は、学生が納めた**学費や大学の資産**が、本来の教育・研究目的ではなく、一部の役員による私的な利益のために使われていたことを意味します。
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>
            **失われた資金:** 不正に流出した資金は、本来であれば**奨学金の拡充**や**教育施設の改善**など、学生の利益のために使われるべきものでした。
          </li>
          <li>
            **透明性の欠如:** 事業部の取引は、大学の外部からはチェックが及ばない**不透明な構造**になっており、学生が大学運営を監視する仕組みの重要性を浮き彫りにしました。
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
          現在の状況
        </h2>
        <p className="mb-4">
          一連の不正事案を受け、株式会社日本大学事業部は**解散**しました。
          しかし、事業部が象徴していた**大学のガバナンス不全**という根本的な問題は、学生が主体的に大学運営に関わる仕組みがなければ、再び起こりかねません。
        </p>
        <p className="font-bold text-blue-800">
          学生自治の復活は、二度とこのような不正を許さないための、最も重要な防波堤となります。
        </p>
      </div>
    </div>
  );
}
