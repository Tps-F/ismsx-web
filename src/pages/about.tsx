import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const AboutPage: React.FC<PageProps> = () => {
	return (
		<>
			<div className="min-h-screen bg-secondary py-6 sm:py-8 lg:py-12 font-caviardreams">
				<div className="mx-auto max-w-screen-md px-4 md:px-8 ">
					<br />
					<h1 className="mb-4 text-5xl font-bold text-about sm:text-6xl md:mb-6 ">
						about
					</h1>
					<br />
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

					<h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 text-center">
						WORKS
					</h2>
					<br />

					<ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
						<li>2023/06: 「ap bank fes ’23」ロゴモーション映像</li>
						<li>2023/06: 新R25チャンネル「気持ち良い仕事睡眠大全」OP</li>
						<li>2023/04: 株式会社うるる「ULU-Fes 2023」OP</li>
						<li>2023/01: 日本テレビ「夜明け前のPLAYERS」OP</li>
						<li>2022/12: スペースシャワーTVプラス OP</li>
						<li>2022/11: スマ留「サクッと留学しよ。」PV映像</li>
						<li>2022/07: 地域航空会社「feel air」PV映像</li>
						<li>2022/05: MECRE「60秒でわかるMECRE」PV映像</li>
						<li>2022/04: 株式会社うるる「ULU-Fes 2022」OP</li>
						<li>2022/03: 「SQUARE ENIX MUSIC Channel」OP</li>
						<li>2021/10: Twitterブランドセーフティ映像</li>
						<li>2021/10: 株式会社うるる「ULURU Synapse Award 2021」OP</li>
					</ul>

					<blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
						“リスト配置にしてあるけど、何もなしがよければ戻すよー！”
					</blockquote>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
export const Head: HeadFC = () => <title>isshin — About</title>;
