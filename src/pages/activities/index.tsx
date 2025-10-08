
import Link from "next/link";
import Head from "next/head";

export default function ActivitiesIndex() {
    return <div>
        <Head>
            <title>活動 | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>活動</h1>
        <p>情報通信技術を利活用した、営利ベースでは難しい、社会に貢献するような事業を目指して行っています。</p>
        <h2>活動領域</h2>
        <ul>
            <li>プライバシーの擁護のための技術開発・運用</li>
            <li>学術や文化を振興するための技術開発・運用</li>
            <li>教育や研究のためのITの運用・啓発</li>
        </ul>
        <h2>プロジェクトの例</h2>
        <ul>
            <li>分散システムの開発</li>
            <li>プライバシーの擁護のためのFirefoxブラウザ拡張機能：<Link href="https://addons.mozilla.org/firefox/addon/container-tab-groups/">Container Tab Groups</Link></li>
            <li>Tor リレーの運用</li>
            <li>非営利の教育研究用ネットワーク <Link href="https://www.nc.menhera.org/">AS63806</Link></li>
            <li>応用ウィキ研究所の事業 (Ignite, Merge, Launch (IML) Initiatives)：文化的な創作活動を支援するウィキ <Link href="https://tanuki.iml.menhera.org/">Tanukipedia</Link></li>
            <li>応用ウィキ研究所の事業：学術や文化などの振興のためのウィキファーム (ウィキをつくれるサイト) <Link href="https://wikiapplied.org/">WikiApplied</Link> (構築中)</li>
        </ul>
        <div className="banner-container">
            <Link className="banner-button" href="/activities/donate/">寄附のご案内</Link>
            <Link className="banner-button" href="/activities/join-us/">参加するには</Link>
        </div>
    </div>
}
