
import Link from "next/link";
import Head from "next/head";

export default function JoinUs() {
    return <div>
        <Head>
            <title>参加する | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>参加する</h1>
        <h2>参加形態</h2>
        <ul>
            <li>コミュニティメンバーとしての参加 (法人への参加不要) (0円)</li>
            <li>一般構成員 (年会費 3000円)</li>
            <li>正構成員 (年会費 5000円) - 法人の正式なメンバーとなり、総会での議決権を行使できます。</li>
        </ul>
        <p>会費には消費税はかかりません。</p>
        <h2>参加するには</h2>
        <p>Discord に参加しましょう。リンクは <Link href="https://mnhr.org/discord">mnhr.org/discord</Link>です。Discord の参加は誰でもでき、それだけでは会費はかかりません。</p>
        <h2>忙しいけど金銭的に協力したい</h2>
        <p><Link href="/activities/donate/">寄付はこちら</Link>。</p>
    </div>
}
