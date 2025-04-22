
import styles from './page-footer.module.css';

import Link from "next/link";

export default function PageFooter() {
    return <>
        <div className={styles.page_footer_branding}>
            <div className={styles.page_footer_branding_content}>
                <h5>商標について</h5>
                <div>「Menhera」、「Menhera.org」は DNS ドメイン名に由来する私たちの商標で、もともとその名のもとに私たちは集まりました。なので、この商標は日本語のネットスラングとは現在ではあまり関係がありません。これは歴史的理由によるものです。</div>
                <div>(<Link href="/faq/">よくある質問</Link>)</div>
            </div>
        </div>
        <div className={styles.page_footer}>
            <div className={styles.page_footer_content}>
                <ul className={styles.page_footer_links}>
                    <li><Link href="/">法人トップ</Link></li>
                    <li><Link href="https://www.menhera.org/">Menhera.org プロジェクトサイト</Link></li>
                    <li><Link href="https://www.nc.menhera.org/">Network Operations</Link></li>
                    <li><a href="https://bsky.app/profile/menhera.org">Bluesky @menhera.org</a></li>
                    <li><a href="https://twitter.com/MenheraOrg">Twitter @MenheraOrg</a></li>
                    <li><a href="https://github.com/menhera-org">GitHub @menhera-org</a></li>
                    <li><a href="https://qiita.com/organizations/menhera">Qiita</a></li>
                    <li><a href="https://www.youtube.com/channel/UC_i1DqCa3Rfmb3LrEN4mF_w">YouTube</a></li>
                </ul>
                <p>© {(new Date).getFullYear()} 一般社団法人生活情報基盤研究機構。他に表記が無い限り，コンテンツは <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a> ライセンスのもとで利用可能です。(「Menhera M」ロゴなど商標を除く) Menhera、Menhera.org、「Menhera M」ロゴは一般社団法人生活情報基盤研究機構が商標として使用しております。</p>
                <p>私たちは持続可能な開発目標(SDGs)を支援しています。</p>
                <p>法人番号：7050005013201</p>
            </div>
        </div>
    </>
}
