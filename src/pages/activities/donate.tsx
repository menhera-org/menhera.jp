
import Link from "next/link";
import Head from "next/head";

export default function JoinUs() {
    return <div>
        <Head>
            <title>寄附のご案内 | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>寄附のご案内</h1>
        <h2>銀行振込</h2>
        <p>Bank (code): ＧＭＯあおぞらネット銀行 (0310)</p>
        <p>Branch (code): あじさい支店 (502)</p>
        <p>Account type: Ordinary deposit (普通)</p>
        <p>Account number: 7185805</p>
        <p>Account holder&apos;s name: ｼｬ)ｾｲｶﾂｼﾞｮｳﾎｳｷﾊﾞﾝｹﾝｷｭｳｷｺｳｷﾌﾆｭｳｷﾝﾖｳ</p>
        <h2>PayPal</h2>
        <p><Link href="https://paypal.me/menheraorg">PayPal</Link></p>
    </div>
}
