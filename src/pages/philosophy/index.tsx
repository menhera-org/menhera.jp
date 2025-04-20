
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function PhilosophyIndex() {
    return <div>
        <Head>
            <title>理念 | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>理念</h1>
        <p>ITを行う多くの組織とは異なり、ビジネス駆動 (金になるからやる) でも技術駆動 (技術的に面白いからやる) でもない第3の道、倫理・思想的駆動を目指しています。</p>
        <h2>Menhera.org とは何であるか</h2>
        <ul>
            <li>人々の日常生活に力をもたらすためにITプラットフォームの推進を行っている</li>
            <li>社会全体のための事業を行うオープンな組織である。 (内部の人のための何か「閉じた」コミュニティではない)</li>
        </ul>
        <h2>代表的理念</h2>
        <p><Link href="/corp/mission-statement/">ミッション・ステートメント (使命宣言)</Link> もご覧ください。</p>
        <ul>
            <li>Paranoia-driven development (パラノイア駆動開発)</li>
            <li>宗教的中立性</li>
            <li>政党などからの独立</li>
            <li>非政府組織であること</li>
            <li>開かれた組織であること</li>
        </ul>
        <h2>キャンペーン</h2>
        <h3>エシカルハッカー</h3>
        <Image src="/assets/img/202401-web-flyer-01.svg" alt="ethical.hacker" />
    </div>
}
