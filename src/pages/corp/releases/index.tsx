
import Markdown from "react-markdown";
import Head from "next/head";

export default function ReleasesIndex() {
    return <div>
        <Head>
            <title>プレスリリース | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>プレスリリース</h1>
        <Markdown>{`

## 2026年度

---

### Statement on the Armed Conflict in the Middle East
#### 中東における武⼒衝突に関する声明

1 March, 2026

一般社団法人生活情報基盤研究機構　理事会

Board of Directors, Human-life Information Platforms Institute

[PDF](/assets/pdf/20260301-statement-armed-conflict.pdf)

### JANOG 57 BoF で発表しました

当組織から、森が登壇しました。

詳細は、[HOMENOC様のページ](https://www.homenoc.ad.jp/blog/report/2026/02/14/janog57-bof.html) をご覧ください。

添付文書: [PDF](/assets/pdf/202602-janog57-bof-as63806-menhera.pdf)

---

## 過年度
- [2025年度](/corp/releases/2025/)
- [2024年度](/corp/releases/2024/)
- [2023年度](/corp/releases/2023/)

        `}</Markdown>
    </div>
}
