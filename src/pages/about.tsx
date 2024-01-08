import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";

const AboutPage: React.FC<PageProps> = () => {
	return (
		<>
			<div className="min-h-screen bg-secondary py-2 lg:py-2 font-caviardreams">
				<div className="mx-auto max-w-screen-md px-4 md:px-8 ">
					<br />
					<div className="grid-cols-2 grid">
						<h1 className="mb-4 text-5xl font-bold text-about sm:text-6xl md:mb-6 col-span-1 flex items-center">
							about
						</h1>
						<div className="mb-6 flex items-end justify-between col-span-1">
							<br />
							<Header colors={[]} />
						</div>
					</div>
					<div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 md:mb-8">
						<StaticImage
							src="../images/about/about_4k.png"
							loading="lazy"
							className="h-full w-full object-cover object-center"
							alt="about"
						/>
					</div>

					<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
						<span className="text-primary font-HeiseiKakuGothic">
							いっしん / 田中一臣 (Isshin Tanaka)
							<br />
							Motion Graphics Designer
						</span>
						<br />
						<br />
						小学生の頃から映像制作を始め、2018年より個人事業主。
						<br />
						抽象図形を交えたモーショングラフィックス作品を主に制作。
						<br />
						自主制作を軸に活動しながら、CM演出なども手がける。
						<br />
						主な制作実績では、NHKスペシャル・日テレ番組などのオープニング、
						<br />
						Twitter・GooglePlay・NewsPickなどのプロモーション映像。
						<br />
						<br />
						<br />
						映像作家100人 2021・2022・2023 選出。
						<br />
						<br />
						<br />
						愛工大名電高校{" "}
						<a
							href="https://meidenid.com/"
							target="_blank"
							className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
							rel="noreferrer"
						>
							情報デザイン部(AMIDC)
						</a>
						卒業 <br />
						名古屋学芸大学 映像メディア学科 卒業
						<br />
						<br />
						<br />
						お仕事のご相談は{" "}
						<a
							href="mailto:ismsx.jp@gmail.com"
							className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
						>
							ismsx.jp@gmail.com
						</a>
						、
						<br />
						またはContactまでお願いいたします。
					</p>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />

					<h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 text-center">
						WORKS
					</h2>
					<br />

					<ul className="mb-6 space-y-4 list-inside text-gray-500 text-base sm:text-lg md:mb-8">
						<li className="text-base ">
							2023/12　富士フィルム「クリスマスプレゼントにチェキ！」TVCM モーション
						</li>
						<li className="text-base ">2023/10　「en Live Art Performance」一部演出</li>
						<li className="text-base ">2023/10　Adobe「MAX Challenge 2023」参考作品</li>
						<li className="text-base ">
							2023/09　富士フィルム 「ワクワクがリンクする。INSTAX Pal」TVCM
							モーション
						</li>
						<li className="text-base ">2023/09　株式会社ベストセキュリティ ロゴモーション</li>
						<li className="text-base ">2023/08 「学び×楽しい 岩崎学園」PV</li>
						<li className="text-base ">2023/06 「ap bank fes ’23 」ロゴモーション</li>
						<li className="text-base ">2023/06　新R25チャンネル「気持ち良い仕事睡眠大全」OP</li>
						<li className="text-base ">2023/05　DNP「BLUEPRINT STUDIO」"ONE KEY FOR EVERYTHING"</li>
						<li className="text-base ">2023/04　株式会社うるる「ULU-Fes 2023」OP</li>
						<li className="text-base ">2023/01　日本テレビ「夜明け前のPLAYERS」OP</li>
						<li className="text-base ">2022/12　スペースシャワーTVプラス OP等</li>
						<li className="text-base ">2022/11　スマ留 「サクッと留学しよ。」PV</li>
						<li className="text-base ">2022/07　地域航空会社 「feel air」PV</li>
						<li className="text-base ">2022/05　MECRE 「60秒でわかるMECRE」PV</li>
						<li className="text-base ">2022/04　株式会社うるる「ULU-Fes 2022」OP</li>
						<li className="text-base ">2022/03　「SQUARE ENIX MUSIC Channel」 OP等</li>
						<li className="text-base ">2021/10　Twitter 「ブランドセーフティ」PV</li>
						<li className="text-base ">2021/10　株式会社うるる「ULURU Synapse Award 2021」OP</li>
						<li className="text-base ">2021/08　Microsoft 「Surface 4者面談」 OP他モーション</li>
						<li className="text-base ">2021/07　「ﾐｭｰｼﾞｯｸﾚｲﾝｵｰﾃﾞｨｼｮﾝﾌﾟﾛｼﾞｪｸﾄ」 SPOT</li>
						<li className="text-base ">2021/06　日立建機日本 ZX350LCK-6機能説明動画 一部演出</li>
						<li className="text-base ">2021/06　GooglePlay 「Play On Challenge」 一部演出</li>
						<li className="text-base ">2021/04　株式会社うるる「ULU-Fes 2021」OP</li>
						<li className="text-base ">2021/03　KONAMI eFootballチャンネル OP・ED等</li>
						<li className="text-base ">2021/02　株式会社SUPER STUDIO 「ecforce」ロゴモーション</li>
						<li className="text-base ">2021/01　鳥取ガス「enetopia」TVCM 2カット</li>
						<li className="text-base ">2021/01　株式会社リチカ サイトトップ映像　</li>
						<li className="text-base ">2020/12　MUSIC ON! TV「legato 〜旅する音楽スタジオ〜」OP</li>
						<li className="text-base ">2020/12　NHK みんなのうた「100年時代」アニメOP</li>
						<li className="text-base ">2020/11　NewsPicksLIVE 「Westship」 PV / OP</li>
						<li className="text-base ">2020/11　J:COMショップ吉祥寺店 サイネージ広告</li>
						<li className="text-base ">2020/09　ヤマトグループ 「Yamato DX Night #1」 OP</li>
						<li className="text-base ">2020/09　千葉ジェッツ 「10周年記念プロジェクト」 PV</li>
						<li className="text-base ">2020/07　ポルカドットスティングレイ「FREE」 一部演出</li>
						<li className="text-base ">2020/04　株式会社LABOT 「SHAKYO.io」 PV</li>
						<li className="text-base ">2020/02　NHKスペシャル 「令和未来会議」OP</li>
						<li className="text-base ">2020/01　justInCase株式会社 「わりかん保険」　PV</li>
						<li className="text-base ">2019/11　YouTubeチャンネル 「STARDY」 　ロゴデザイン・PV</li>
						<li className="text-base ">2019/09　ソニーミュージック「 One in a Billion」 　SPOT</li>
						<li className="text-base ">2019/09　「THE BINARY」 　ライブ演出映像(一部)</li>
						<li className="text-base ">2019/07　ASMR動画アプリ 「toremoro」 PV</li>
						<li className="text-base ">2019/05　カクテルメイク株式会社 「RICHKA」 PV</li>
						<li className="text-base ">2018/12　YouTubeチャンネル 「常春」 OP</li>
						<li className="text-base ">2018/11　YouTubeチャンネル 「もやモヤちゃんねる」 OP</li>
						<li className="text-base ">2018/10　「HoneyComeBear」　 ロゴモーション</li>
						<li className="text-base ">2018/09　クリエイター交流イベント 「I/O」　 PV</li>
						<li className="text-base ">2018/09　「ESPOIR表参道」　ロゴモーション</li>

						<br/>
						<br/>
						<li className="text-primary">LECTURES </li>
						<li className="text-base ">2021〜　bisen 北海道芸術デザイン専門学校にて特別講義</li>
						<li className="text-base ">2021/06　放送芸術学院専門学校にて特別講義</li>

						<br/>
						<br/>
						<li className="text-primary">SELF PRODUCED </li>
						<li className="text-base ">2024/01　？？？？？</li>
						<li className="text-base ">2023/10　"モーフィグレーション"</li>
						<li className="text-base ">2023/05　"Dition"</li>
						<li className="text-base ">2023/04　"Isshin REEL 2023"</li>
						<li className="text-base ">2023/02　"nostalmic"</li>
						<li className="text-base ">2022/11　"Voscot"</li>
						<li className="text-base ">2022/06　"ミーレスラクト"</li>
						<li className="text-base ">2022/04　"Sencotu"</li>
						<li className="text-base ">2022/02　"知覚的融合"</li>
						<li className="text-base ">2022/01　"Isshin REEL 2022" </li>
						<li className="text-base ">2021/12　"Motete!“</li>
						<li className="text-base ">2021/11　"Quiet or Upset”</li>
						<li className="text-base ">2021/07　"Lipeatilca"</li>
						<li className="text-base ">2021/07　"Estemovcion"</li>
						<li className="text-base ">2021/05　"周回事象"</li>
						<li className="text-base ">2021/04　"空間響図学"</li>
						<li className="text-base ">2021/02　"Mars of sense"</li>
						<li className="text-base ">2021/01　"Isshin REEL 2021" </li>
						<li className="text-base ">2020/12　"20" </li>
						<li className="text-base ">2020/10　"PASTREE"</li>
						<li className="text-base ">2020/10　"Ceslot"</li>
						<li className="text-base ">2020/09　"SECHAOS"</li>
						<li className="text-base ">2020/08　“LA.PONZ”</li>
						<li className="text-base ">2020/08　"monyu"</li>
						<li className="text-base ">2020/07　"MOOOW"</li>
						<li className="text-base ">2020/06　"jouet"</li>
						<li className="text-base ">2020/06　"Resonat"</li>
						<li className="text-base ">2020/05　"miscela"　</li>
						<li className="text-base ">2020/04　"Fillanva"　</li>
						<li className="text-base ">2020/04　"Hipnosis"　</li>
						<li className="text-base ">2020/03　"Haptico"　</li>
						<li className="text-base ">2020/02　"Anote"　</li>
						<li className="text-base ">2020/02　"shift”　</li>
						<li className="text-base ">2020/01　"アンノジョウオソイアケオメ”　</li>
						<li className="text-base ">2020/01　"Isshin REEL 2020"　</li>
						<li className="text-base ">2019/12　"Carei 19"</li>
						<li className="text-base ">2019/12　"Platrap"</li>
						<li className="text-base ">2019/10　"NAZO-01"</li>
						<li className="text-base ">2019/08　"Planet"</li>
						<li className="text-base ">2019/06　"BonNU"</li>
						<li className="text-base ">2019/05　"ERA Update"</li>
						<li className="text-base ">2019/04　"Reverse year"</li>
						<li className="text-base ">2019/02　"NANKORE"</li>
						<li className="text-base ">2019/02　"NyuNyun"</li>
						<li className="text-base ">2019/01　"Funky Time"</li>
						<li className="text-base ">2019/01　"メッチャオソイアケオメ"</li>
						<li className="text-base ">2019/01　"Isshin REEL 2019"</li>
						<li className="text-base ">2018/10　"Nine progression"</li>
						<li className="text-base ">2018/09　文化祭企画映像</li>
						<li className="text-base ">2018/08　"OTTF"</li>
						<li className="text-base ">2018/07　"暑さで脳が死んだのよ"</li>
						<li className="text-base ">2018/06　"期末試験マヂ無理"</li>
						<li className="text-base ">2018/06　"ねこ様へ愛の言葉を。"</li>
						<li className="text-base ">2018/06　"UZUDEZU"</li>
						<li className="text-base ">2018/05　"INOUT"</li>
						<li className="text-base ">2018/04　"PYON?“</li>
						<li className="text-base ">2018/03　"connext!“</li>
						<li className="text-base ">2018/02　"テスト死亡”</li>
						<li className="text-base ">2018/02　"ROTATION" (EOMゲスト枠制作)</li>
						<li className="text-base ">2018/01　"ISMSX REEL 2018"</li>
						<li className="text-base ">2018/01　"2K+18"</li>
						<li className="text-base ">2017/12　"LIMOV"</li>
						<li className="text-base ">2017/10　"START ONE"</li>
						<li className="text-base ">2017/10　"Arrest"</li>
						<li className="text-base ">2017/10　"テスト詰んだ"</li>
						<li className="text-base ">2017/08　"UNACCEPTABLE SPEED"</li>
						<li className="text-base ">2017/08　"新たなモバイルOS" </li>
						<li className="text-base ">2017/07　“QUOTE”</li>
						<li className="text-base ">2017/06　"Hate MATH"</li>
						<li className="text-base ">2017/05　"WHAT CAN I.“</li>
						<li className="text-base ">2017/05　"AIRPORT GRAPHICS”</li>
						<li className="text-base ">2017/04　"DATA Graphics"</li>
						<li className="text-base ">2017/04　"EAST [ANOTHER City]“</li>
						<li className="text-base ">2017/02　"WHI:GHT"</li>
						<li className="text-base ">2016/12　"MO.6"</li>
						<li className="text-base ">2016/09　文化祭課題制作</li>
						<li className="text-base ">2016/07　"むーCATMOVIE ONE"</li>
						<li className="text-base ">2016/07　"雷ーCATムービーWonder19"</li>
						<li className="text-base ">2016/07　"Nature(Aichi)“</li>
						<li className="text-base ">2016/05　"Hope will come true”</li>
						<li className="text-base ">2016/05　"雷ーCAT ムービー ALONE18"</li>
						<li className="text-base ">2016/04　"Let’s start.“</li>
						<li className="text-base ">2016/02　"The 3-D’s last day.”　卒業ムービー制作　</li>
						<li className="text-base ">2015/07　"Love the warz Real intention？”</li>
						<li className="text-base ">2015/05　ゆず 「表裏一体」PV</li>
						<li className="text-base ">2015/04　"Graphic Ri2"</li>
						<li className="text-base ">2015/04　"Graphic Ri"</li>
						<li className="text-base ">2015/03　じん 「夜咄ディセイブ」PV</li>
						<li className="text-base ">2015/03　"2-D LASTs"</li>
						<li className="text-base ">2015/03　"Graphic XC.o"</li>
						<li className="text-base ">2015/03　"ISMA OS 9"</li>
						<li className="text-base ">2015/03　"Graphic XA”</li>
						<li className="text-base ">2015/02　"Dragon Night Graphic"</li>
						<li className="text-base ">2015/02　"Memories of 2-D"</li>
						<li className="text-base ">2014/11　クラス企画制作</li>
						<li className="text-base ">2014/10　"MOON"</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
export const Head: HeadFC = () => <title>isshin — About</title>;
