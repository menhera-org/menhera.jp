
import Image from "next/image";
import Head from "next/head";

export default function CorpIndex() {
    return <div>
        <Head>
            <title>役員紹介・メッセージ | 生活情報基盤研究機構 (Menhera.org)</title>
        </Head>
        <h1>役員紹介・メッセージ</h1>
        <h2>代表理事からのごあいさつ</h2>
        <Image className="eyecatch" src="/assets/img/vericava-2025.jpg" alt="vericava"/>
        <blockquote>
            <p>
                The information platforms behind the Internet form our daily communication, which in turn forms our societies.
                Arts and sciences are no exception. This is why we started this project.
            </p>
            <p>
                インターネットの裏側にある情報基盤が私たちの毎日のコミュニケーションを形作って，最終的に私たちの社会の形になります。
                芸術や科学も例外ではありません。これが私たちがこのプロジェクトを始めた理由です。
            </p>
            <p>
                ——代表理事 森祐佳 (真空)
            </p>
        </blockquote>

        <h2>役員紹介</h2>
        <h3>代表理事</h3>
        <Image className="profile-photo-float" src="/assets/img/masora.png" alt="metastable-void"/>
        <h4>森　祐佳 （真空 / vericava）</h4>
        <p>共同設立者，次世代ソーシャルメディア枠組みワーキンググループ (Next-generation Social-media Frameworks Working Group; NSFWg) 代表。Honorable Mention at JOL &apos;21. ネットワークスペシャリスト試験合格。基本情報技術者試験合格。高等学校卒業程度認定試験合格。</p>
        <ul>
            <li><a href="https://github.com/metastable-void">GitHub</a></li>
            <li><a href="https://x.com/vericava">Twitter @vericava</a></li>
        </ul>
        <br className="clear"/>
        <blockquote>
            <p>小さい頃から好きな色は「透明」，</p>
            <p>透明な感じの人になりたいって思ってた。</p>
            <p>だから真空——真空は何もないことの存在だから。</p>
            <p>究極の環境，量子現象の漲落するところ，</p>
            <p>プラスの粒子が現れれば</p>
            <p>マイナスの粒子も現れる；</p>
            <p>0なるものの存在だから。</p>
            <p>——真空 (2023) on Twitter</p>
        </blockquote>
        <h3>業務執行理事</h3>
        <Image className="profile-photo-float" src="/assets/img/viterum-outline.svg" alt="viterum"/>
        <h4>秋葉　沙都季 （ゐてるま / viterum）</h4>
        <p>共同設立者。ITエンジニア。分析哲学や低レイヤプログラミングなどに興味がある。Honorable Mention at JOL &apos;19.</p>
        <ul>
            <li><a href="https://github.com/anosatsuk124">GitHub</a></li>
            <li><a href="https://twitter.com/intent/user?user_id=1163505248649928704">Twitter @viterum_24</a></li>
        </ul>
        <br className="clear"/>
        <blockquote>
            <p>参照透過的で副作用のない人生。周囲の人生に影響を受けず(与えず)、出生という引数に死という式評価のみをもたらす人生。</p>
            <p>——ゐてるま (2021) on Twitter</p>
        </blockquote>
        <Image className="profile-photo-float" src="/assets/img/nekohaka.jpg" alt="nekohaka"/>
        <h4>大橋　モモ （ねこはか）</h4>
        <p>東京出身。大学で哲学を専攻後、SEとして働いたのち、フリーランスのエンジニアとして働いている。資格は競技かるた初段。元登山部/自転車部。</p>
        <br className="clear"/>
        <blockquote>
            <p>すべての知性に血が通いますように</p>
        </blockquote>
        <h3>理事</h3>
        <Image className="profile-photo-float" src="/assets/img/sochi.gif" alt="koridentetsu"/>
        <h4>篠永　康平 (想像地図の人 / TANUKI)</h4>
        <p>2003年から架空の地図を描く｢想像地図｣という活動を継続し、22年かけて1つの架空の国の全域の地図を完成させた。他に架空言語や駅名替え歌などの創作活動も行う。</p>
        <ul>
            <li><a href="https://x.com/koridentetsu">Twitter @koridentetsu</a></li>
            <li><a href="https://www.youtube.com/@KORIDENTETSU">YouTube</a></li>
            <li><a href="https://note.com/koridentetsu">Note</a></li>
        </ul>
        <br className="clear"/>
        <blockquote>
            <p>「自分の思う世界観を文章で表現するのが小説家なら、それを地図という形で表現するのが想像地図の人である」</p>
        </blockquote>
        <h3>監事</h3>
        <Image className="profile-photo-float" src="/assets/img/fervojisto-2.jpg" alt="fervojisto"/>
        <h4>髙橋　海渚 （フェルヴォ / fervojisto）</h4>
        <p>大学生。専攻は経営学，経済学を含む社会科学分野。地域研究と交通系を主に研究。</p>
        <ul>
            <li><a href="https://twitter.com/intent/user?user_id=929311640578695168">Twitter @fervojistoSUE</a></li>
        </ul>
        <br className="clear"/>
        <h4>Yuki-cy</h4>
        <p>大学生。プログラミングを中心に学んでいるが、機械工学や地理などについても勉強中。</p>
        <ul>
            <li><a href="https://github.com/cy-1818">GitHub</a></li>
            <li><a href="https://x.com/yuki__1818">Twitter @yuki__1818</a></li>
        </ul>
        <br className="clear"/>
    </div>
}
