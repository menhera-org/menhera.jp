
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function CorpIndex() {
    return <div>
        <Head>
            <title>法人情報 | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>法人情報</h1>
        <div className="banner-container">
            <Link className="banner-button" href="/corp/board/">役員紹介・メッセージ</Link>
            <Link className="banner-button" href="/corp/notices/">電子公告</Link>
            <Link className="banner-button" href="/corp/releases/">プレスリリース</Link>
            <Link className="banner-button" href="/corp/mission-statement/">ミッション・ステートメント (使命宣言)</Link>
            <Link className="banner-button" href="/corp/code-of-conduct/">行動規範</Link>
            <Link className="banner-button" href="/corp/rulebook/">内規集</Link>
        </div>
        <h2>定款</h2>
        <p>
        本機構の定款は<a href="/assets/pdf/teikan_20230106-01_public.pdf">こちら</a>をご覧ください。
        本機構は定款上，茨城県土浦市に所在し，一般社団法人として登記されています。
        </p>
        <h2>法人の紹介と沿革</h2>
        <p>Tanukipedia に<a href="https://tanuki.iml.menhera.org/wiki/%E7%94%9F%E6%B4%BB%E6%83%85%E5%A0%B1%E5%9F%BA%E7%9B%A4%E7%A0%94%E7%A9%B6%E6%A9%9F%E6%A7%8B">本機構の歴史と紹介の記事</a>があります。</p>
        <h2>組織図 (2025年10月更新)</h2>
        <Image id="org-structure" src="/assets/img/202510-org-structure.png" style={{width: "100%"}} alt="組織図" />
        <h2>法人データ</h2>
        <dl>
        <dt>名称 (商号)</dt>
        <dd>一般社団法人生活情報基盤研究機構</dd>
        <dt>英称</dt>
        <dd>Human-life Information Platforms Institute</dd>
        <dt>通称</dt>
        <dd>Menhera.org (コミュニティ形成の母体となったドメイン名に由来する名称)</dd>
        <dt>類型</dt>
        <dd>日本法人 (Incorporated in Japan)</dd>
        <dt>法人種別</dt>
        <dd>一般社団法人 (非営利徹底型)</dd>
        <dt>税法上の区分</dt>
        <dd>公益法人等</dd>
        <dt>法人番号</dt>
        <dd>7050005013201</dd>
        <dt>代表者</dt>
        <dd>森　祐佳 (代表理事)</dd>
        <dt>設立</dt>
        <dd>2023年1月24日 (法人化)</dd>
        <dt>創業</dt>
        <dd>2020年1月19日 (オンライン上でのコミュニティの創立)</dd>
        <dt>一般法人法上の区分</dt>
        <dd>理事会設置法人、監事設置法人</dd>
        <dt>役員総数</dt>
        <dd>理事4名、監事2名 (うち有給0名)</dd>
        <dt>役員以外の有給の従業員総数</dt>
        <dd>0名</dd>
        <dt>会員 (正構成員、一般社団法人としての「社員」)に応募するための必要要件</dt>
        <dd>本法人の趣旨に賛同する個人であること (個人であれば誰でも応募可)</dd>
        <dt>資本金</dt>
        <dd>会社法人でないため非該当</dd>
        <dt>株主</dt>
        <dd>会社法人でないため非該当</dd>
        <dt>売上</dt>
        <dd>事業による収益で運営する法人でないため，0円</dd>
        <dt>収入源</dt>
        <dd>会費、寄附、補助金等</dd>
        <dt>業種</dt>
        <dd>調査研究業 (ただし，対価に対するサービスとして提供するものではないもの)</dd>
        <dt>基金残高</dt>
        <dd>100,000円 (2024年7月現在)</dd>
        <dt>取引銀行</dt>
        <dd>ＧＭＯあおぞらネット銀行</dd>
        <dt>主たる事務所の所在地 (本店所在地)</dt>
        <dd>茨城県土浦市 (定款での定め)</dd>
        <dd>茨城県土浦市富士崎一丁目９番２４号 (登記住所) → 郵便番号は 300-0813</dd>
        <dt>代表電話番号</dt>
        <dd>029-828-4147</dd>
        <dt>主要な取引(契約)先、仕入れ先</dt>
        <dd><a href="https://www.nic.ad.jp/ja/">一般社団法人日本ネットワークインフォメーションセンター</a> (インターネット番号資源の割り当て)</dd>
        <dd><a href="https://jprs.co.jp/">株式会社日本レジストリサービス</a> (.JP ドメイン名の申請、割り当て)</dd>
        <dd><a href="https://www.homenoc.ad.jp/">一般社団法人Ｈｏｍｅ　ＮＯＣ　Ｏｐｅｒａｔｏｒｓ’　Ｇｒｏｕｐ</a> (上流ネットワークの提供)</dd>
        <dd><a href="https://www.telhi.co.jp/">輝日株式会社</a> (上流ネットワークの提供)</dd>
        <dd><a href="https://www.ntt-east.co.jp/">NTT東日本株式会社</a> (アクセス回線の提供)</dd>
        <dd>その他国内および海外のクラウドサービス事業者</dd>
        <dt>会計基準</dt>
        <dd>公益法人会計基準 (当法人では，任意でキャッシュ・フロー計算書および財産目録も作成しています)</dd>
        <dt>決算月</dt>
        <dd>12月 (会計年度：1月–12月)</dd>
        </dl>
        <section>
        <h2>事業目的</h2>
        <p>本機構は情報科学，医学及び人文学をはじめとする各分野の研究並びにデジタルメディア・情報基盤の研究開発によって学術，芸術及び文化的な生活を振興し，多様性を肯定できる統合された社会を実現し，個人のプライバシーを擁護することを目的とする。</p>
        <p>2 本機構は，前項の目的を達するため，以下の事業を行う。</p>
        <p>(1) 調査・研究事業。</p>
        <p>(2) 実験的なデジタルメディア・情報基盤の開発及び運用事業。</p>
        <p>(3) 広報・啓発事業。</p>
        <p>(4) その他本機構の目的を達するために必要な事業。</p>
        </section>
        <section id="corporate-slogan">
        <h2>法人の標語と法人歌</h2>
        <h3>法人の標語</h3>
        <blockquote>
        <p><span lang="la">	Ad futuram quod omnibus ditat</span> (ラテン語)</p>
        <p><span lang="en">Toward a future which empowers everyone</span> (英語)</p>
        <p>ひとりひとりに力満ちる未来へ</p>
        </blockquote>
        <h3>法人歌「ひとりひとりに力満ちる未来へ」</h3>
        <p>
            ℗ &amp; &copy; 2024 一般社団法人生活情報基盤研究機構 (Human-life Information Platforms Institute) / Menhera.org.
            Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">the Creative Commons Attribution-ShareAlike 4.0 International License</a>.
        </p>
        <p><Link href="/assets/pdf/corporate-song.pdf">法人歌「ひとりひとりに力満ちる未来へ」楽譜 (PDF)</Link></p>
        <blockquote>
        <p>東　太陽昇る大地に我ら集まり</p>
        <p>純理を究めて明かりを広める</p>
        <p>電子の海はいずこからも満ち寄せ</p>
        <p>社会をふちどりそして暮らしをうるおす</p>
        <p>ひとりひとりに力満ちる未来へ進もう</p>
        <p>世界に生まれた誰もはきょうだい</p>
        </blockquote>
        <div>
        <audio controls>
            <source src="/assets/audio/corporate-song-nakumo.m4a" type="audio/mp4" />
            <source src="/assets/audio/corporate-song-nakumo.opus" type="audio/ogg" />
        </audio>
        </div>
        </section>
        <h2>事業状況</h2>
        <p>
            本機構は，非営利徹底型の一般社団法人であるため，収益事業を行うことができませんが，構成員から会費を収集するほか，みなさまに寄附をお願いしております。
            外部からの寄附や補助金などの収入が安定するまでは，役員が必要経費を寄附することで運営を行っております。
            本機構の必要経費は多くないため，2025年現在，役員が拠出可能な範囲で事業を行っており，無借金経営により安定した運営を実現しております。
            さらなる事業を行うためにはみなさまからのご支援が必要です。寄附は以下の口座で受け入れております。
        </p>
        <div className="banner-container">
            <Link className="banner-button" href="/activities/donate/">寄附のご案内</Link>
        </div>
    </div>
}
