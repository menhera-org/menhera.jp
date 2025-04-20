
import Head from "next/head";

export default function TechIndex() {
    return <div>
        <Head>
            <title>技術情報 | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>技術情報</h1>
        <h2>リンク</h2>
        <ul>
            <li><a href="https://github.com/menhera-org">Github</a></li>
            <li><a href="https://www.nc.menhera.org/">Network Operations</a></li>
            <li><a href="https://looking-glass.nc.menhera.org/">AS63806 Looking Glass</a></li>
            <li>MVNO: <a href="https://mobile.menhera.org/">Menhera Mobile SIM</a> (終了した実験)</li>
            <li><a href="https://qiita.com/organizations/menhera">Qiita</a></li>
        </ul>
    </div>
}
