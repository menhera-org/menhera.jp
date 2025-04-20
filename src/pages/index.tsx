
import Link from "next/link";
import Head from "next/head";

export default function Home() {
    return <div>
        <Head>
            <title>法人トップ | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h2>IT で自由をつくろう。</h2>
        <h3>Making freedoms with IT</h3>
        <p>私たちは，情報技術や情報基盤の研究・開発・利用を推進することによって，ひとりひとりの個人にさらなる自由や力をもたらし，これによって人々の日常生活を豊かにしたり，学術や文化をサポートしたりすることを目指しています。</p>
        <h2>参加者募集中</h2>
        <p>活動に興味がある方であれば誰でも参加できます。活動には正式に法人に加入する必要はありません。</p>
        <div className="banner-container">
            <Link className="banner-button" href="/activities/join-us/">参加するには</Link>
            <Link className="banner-button" href="/contact/">お問い合わせ</Link>
        </div>
        <h2>寄附のご案内</h2>
        <p>私たちは寄附をもとに運営している独立の非営利組織です。</p>
        <div className="banner-container">
            <Link className="banner-button" href="/activities/donate/">♡寄附のご案内</Link>
        </div>
        <h2>組織概要</h2>
        <p> 一般社団法人生活情報基盤研究機構（Menhera.org）は，情報科学，医学及び人文学をはじめとする各分野の研究並びにデジタルメディア・情報基盤の研究開発によって学術，芸術及び文化的な生活を振興し，多様性を肯定できる統合された社会を実現し，個人のプライバシーを擁護することを目的とする組織です。</p>
        <p>生活情報基盤研究機構という名前には，情報基盤の生活にとっての必要不可避性が意味されています。 情報基盤は，私たちの生活にとって不可欠なものです。 Menhera.org は生活情報基盤研究機構のブランド名であり，そのプロジェクトの総称です。</p>
        <p>本機構は非営利徹底型の一般社団法人で，これらの事業を通して教育研究に貢献します。また本機構では，教育研究用のネットワークインフラストラクチャを運営しています。</p>
        <hr />
        <div className="banner-container">
            <Link className="banner-button" href="/philosophy/">私たちの理念</Link>
            <Link className="banner-button" href="/activities/">活動</Link>
            <Link className="banner-button" href="/corp/">法人情報</Link>
            <Link className="banner-button" href="/tech/">技術情報</Link>
            <Link className="banner-button" href="/faq/">よくある質問</Link>
        </div>
        <hr />
    </div>
}
