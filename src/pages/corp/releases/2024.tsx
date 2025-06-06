
import Markdown from "react-markdown";
import Head from "next/head";

export default function ReleasesIndex() {
    return <div>
        <Head>
            <title>プレスリリース (2024) | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>プレスリリース (2024)</h1>
        <Markdown>{`

## 2024年度

----
### NLNOG RING に参加しました
**2024-12-07**

**NLNOG RING に参加しました！**

[ring.nlnog.net/post/menhera-joined-the-ring/](https://ring.nlnog.net/post/menhera-joined-the-ring/)

NLNOG RING は，世界中の独立したネットワーク運用組織同士が，問題解決などのためにシェルアクセスなどを交換しあう枠組みです。 Menhera.org もこの趣旨に賛同し，サーバを利用者に提供しています。

このサービスは参加している独立したネットワーク運用組織の間限定のもので，一般利用者からの利用を受けつけているものではないのでご了承ください。**参加にはAS番号が必要です。**

一般社団法人生活情報基盤研究機構

ＩＴ運用センター

----
### 独立ラボ所長の処分について
**2024-11-11**

一般社団法人生活情報基盤研究機構は、当法人の独立ラボたる想像地図研究所の所長による不適切な発言及びそれに対する当法人の対応について、添付の資料の通り報告する。

[報告資料 (PDF)](/assets/pdf/20241111-penalty.pdf)

--

この度はご迷惑をおかけし大変申し訳ございませんでした。

一般社団法人生活情報基盤研究機構　代表理事

森　祐佳

----
### JANOG54でBoF発表をしました
**2024-07-03**

[JANOG54](https://www.janog.gr.jp/meeting/janog54/) にて，7月3日に野良BoF として「零細組織でイケてるNWをつくる話」という発表をしました。

[スライド資料 (PDF)](/assets/pdf/20240703-janog54-bof-menhera-org.pdf)

----
### 事業計画を承認しました
**2024-04-22**

2024年事業計画を公表します。これは2024年第2回理事会で承認されました。

[2024年事業計画 (PDF)](/assets/pdf/2024_statement_activity.pdf)

代表理事　森　祐佳 (真空)

----
### 定時総会を招集します
**2024-02-06**

2024年第1回定時総会を以下のとおり招集しました。

* 日時　日本時間2024年2月28日21時から
* 場所　オンライン

なお，電磁的議決権の行使および，書面による議決権の行使を認めます。

正構成員は，1人1票ですので，ご参加または事前の議決権の行使にご協力ください。

以下にこの資料を公開します。

[総会資料 (PDF)](/assets/pdf/202402-soukai-shiryo.pdf)

代表理事　森　祐佳 (真空)

----
### 臨時総会のご報告
**2024-01-08**

みなさまのご協力を得て，無事2023年12月13日の臨時総会を終えることができました。感謝いたします。

さて，標記のご報告ができましたので，一般に公開いたします。

[PDFファイル](/assets/pdf/rinjisokai-20231213-report.pdf)

なお，今後決算を承認するための定期総会がありますので，よろしくお願いいたします。

代表理事　森　祐佳 (真空)

        `}</Markdown>
    </div>
}
