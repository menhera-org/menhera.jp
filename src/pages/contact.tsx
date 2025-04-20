
import Link from "next/link";
import Head from "next/head";

export default function ContactUs() {
    return <div>
        <Head>
            <title>お問い合わせ | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>お問い合わせ</h1>
        <p>メールでのお問い合わせを受けつけています。送信先は、「board」と「menhera.com」をアットマークでつないでください。</p>
        <h2>Discord</h2>
        <p>Discord に参加してメッセージを送信すると素早く連絡することができます。リンクは <Link href="https://mnhr.org/discord">mnhr.org/discord</Link>です。</p>
        <h2>郵便でのお問い合わせ</h2>
        <p>300-0813 茨城県土浦市富士崎1-9-24 一般社団法人生活情報基盤研究機構, Japan</p>
        <h2>電話</h2>
        <p>029-828-4147 (代表)</p>
        <p>+81 29 828 4147 (海外から)</p>
    </div>
}
