
import styles from './top-bar.module.css';

import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    return <>
        <div className={styles.top_branding}>
            <div className={styles.top_branding_content}>
                <Image src="/assets/textlogo-2024.svg" alt="Menhera.org" />
                <Image src="/assets/corp-logotype-2025.svg" alt="Human-life Information Platforms Institute" />
            </div>
        </div>
        <div className={styles.top_bar}>
            <div className={styles.top_bar_content}>
                <ul className={styles.top_bar_tabs}>
                    <li><Link href="/">法人トップ</Link></li>
                    <li><Link href="/philosophy/">理念</Link></li>
                    <li><Link href="/activities/">活動</Link></li>
                    <li><Link href="/corp/">法人情報</Link></li>
                    <li><Link href="/tech/">技術情報</Link></li>
                    <li><Link href="/contact/">連絡先</Link></li>
                </ul>
                <Link href="https://www.menhera.org/">Menhera.org</Link>
            </div>
        </div>
        <div className={styles.top_icon}>
            <Link href="/">
                <Image src="/assets/icon-full.svg" alt="Site logo" />
            </Link>
        </div>
    </>
}
