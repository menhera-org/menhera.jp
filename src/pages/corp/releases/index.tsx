
import Markdown from "react-markdown";
import Head from "next/head";

export default function ReleasesIndex() {
    return <div>
        <Head>
            <title>プレスリリース | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>プレスリリース</h1>
        <Markdown>{`

## 2025年度

----
### 理事の処分について
**2025-03-27**

一般社団法人生活情報基盤研究機構は、理事1名の音信不通および理事会の不出席に対する処分について、添付の資料の通り報告する。

記

--------

理事のsuzu氏(実名省略，登記をご参照ください)が2024年を通して連絡不能の状態が続き、理事会を3回とも欠席することとなった。

理事会は複数回にわたって連絡を試みたものの、いまだ連絡を確立できず、事情があることは考慮するが、本法人の業務としては問題になるので、当該理事を2025年3月27日付で制定した理事会規則である「役員処分規則」第3条に基づき、同日業務停止の処分とした。

なお、理事会は同氏について定時総会に解任の議案を提出しております。

[報告資料 (PDF)](/assets/pdf/20250327-board-penalty.pdf)

--------

この度はご心配をおかけし申し訳ございません。

2025年3月27日

一般社団法人生活情報基盤研究機構　理事会

代表理事　森　祐佳

------

代表理事からのコメント：なお、これは法人の運営に関する事項であり、当法人のメンバー個々人と当該理事の個人的関係におけるものではありません。私は彼女が再び現れたら法人の役員に推薦するかどうかは置いておいて個人的な関係においては暖かく迎えるでしょう。再び連絡が取れることを願っております。

----
### 定時総会を招集しました
**2025-03-27**

2025年第1回定時総会を以下のとおり招集しました。

* 日時　日本時間2025年4月17日21時から
* 場所　オンライン

なお，電磁的議決権の行使および，書面による議決権の行使を認めます。

正構成員は，1人1票ですので，ご参加または事前の議決権の行使にご協力ください。

以下にこの資料を公開します。

- [総会資料 - 事業報告 (PDF)](/assets/pdf/2024_report.pdf)
- [総会資料 - 会計書類 (PDF)](/assets/pdf/2024_settlement.pdf)
- [総会資料 - 監査報告 (PDF)](/assets/pdf/2024_audit.pdf)

代表理事　森　祐佳 (真空)

----
### Spams impersonating Menhera.org
**2025-02-12**

**English**

We are aware that recently spam emails impersonating Menhera.org-owned domains are sent by someone outside our organization.

We confirm that these spam emails are not from Menhera.org infrastructure, so these bad emails are failing SPF/DKIM tests, and in turn DMARC tests.

In response, we tightened SPF/DMARC requirements so that these bad emails fail 'hard' when sent to supported email providers.

Please make sure that you enable SPF/DKIM/DMARC protections in your email domains so that you do not get such forged emails.

Finally, please report quickly to us (to addresses such as net-abuse at menhera dot com) if you find actual abuse(s) of our infrastructure.

Thanks for supporting us,

Yuka MORI

IT Operations Center, Human-life Information Platforms Institute (Menhera.org)

----

**日本語**

我々は最近 Menhera.org の所有するドメインを騙るスパムメールが組織外の何者かによって送信されていることを察知しています。

それらのスパムメールは Menhera.org のインフラからでないことを確認済みで，従ってそれらの悪質メールは SPF/DKIM テストを通過しませんし， DMARC も通りません。

対応策として，我々は SPF/DMARC の要求をキツくし，そのような悪質メールが対応したメールプロバイダで「固く」弾かれるようにしました。

どうかあなたがた御自身のメールのドメインでも， SPF/DKIM/DMARC の保護を有効にし，そのような偽装されたメールを受けとらないようにしてください。

最後に，本当の我々のインフラが悪用された場合を見つけたら，私たちに (to addresses such as net-abuse at menhera dot com) すみやかにご報告ください。

ご支援いただきありがとうございます。

森　祐佳

ＩＴ運用センター，一般社団法人生活情報基盤研究機構

## 過年度
- [2024年度](/corp/releases/2024/)
- [2023年度](/corp/releases/2023/)

        `}</Markdown>
    </div>
}
