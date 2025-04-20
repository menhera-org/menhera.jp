
import Markdown from "react-markdown";
import Head from "next/head";

export default function ReleasesIndex() {
    return <div>
        <Head>
            <title>プレスリリース (2023) | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>プレスリリース (2023)</h1>
        <Markdown>{`

## 2023年度

----

### 臨時総会を行います
**2023-12-11**

2023年12月13日水曜日日本時間21時よりオンラインにて，2023年第1回臨時総会を開催します。

あらかじめ正構成員には14日以上前に招集通知を送付してあります。

総会の模様は [Youtube Live で視聴](https://youtube.com/live/LYINeGFMm-E) できます。

![チラシ](/assets/img/20231213-general-assembly.png)

----
### 理事会だより1号
**2023-11-29**

- [理事会だより1号](/corp/releases/board-bulletin-1/)

----
### JPNICよりIPアドレスとAS番号の割り当てを受けました
**2023-10-31**

Menhera.org （一般社団法人生活情報基盤研究機構）は，本日2023年10月31日付けで，JPNIC から 以下の資源の割り当てを受けました。これからもどうぞよろしくお願いいたします。

- 特殊用途プロバイダ非依存(PI)アドレス: \`MENHERA-NET\`
  - IPアドレス(IPv4)：\`43.228.174.0/24\`
  - IPアドレス(IPv6)：\`2001:0df3:14c0::/48\`
- AS番号：63806 (\`MENHERA\`)

詳細情報： [www.nc.menhera.org](https://www.nc.menhera.org/ja/)

----
### 一般社団法人を登記しました
**2023-01-28**

2023年01月24日付けで一般社団法人生活情報基盤研究機構を登記しました。

        `}</Markdown>
    </div>
}
