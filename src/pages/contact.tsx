import type { HeadFC, PageProps } from "gatsby";
import React, { useState } from "react";
import * as z from "zod";

import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";

const ContactPage: React.FC<PageProps> = () => {
	const [submitted, setSubmitted] = useState(Boolean);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const emailSchema = z.string().email();
	const handleEmailChange = (event) => {
		const newEmail = event.target.value;

		setIsValidEmail(
			(() => {
				try {
					emailSchema.parse(newEmail);
					return true;
				} catch (error) {
					return false;
				}
			})(),
		);
	};
	return (
		<>
			<div className="min-h-screen bg-secondary py-2 lg:py-2 font-caviardreams">
				<div className="mx-auto max-w-screen-md px-4 md:px-8 ">
					<br />
					<div className="grid-cols-2 grid">
						<h1 className="mb-4 text-5xl font-bold text-primary sm:text-6xl md:mb-6 col-span-1 flex items-center">
							contact
						</h1>
						<div className="mb-6 flex items-end justify-between col-span-1">
							<br />
							<Header colors={[]} />
						</div>
					</div>
					<br />
					<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
						お仕事のご相談・その他のお問い合わせは以下フォームよりお願いいたします。
						<br />
						主に、広告やイベント映像等を中心に制作請負しております。
						<br />{" "}
						<a
							href="mailto:ismsx.jp@gmail.com"
							className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
						>
							ismsx.jp@gmail.com
						</a>
						へ直接メール、または{" "}
						<a
							href="https://twitter.com/ismsx"
							target="_blank"
							className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
							rel="noreferrer"
						>
							TwitterのDM
						</a>
						でもお問い合わせ可能です。
					</p>
					<br />
					<div className="relative flex w-full flex-col rounded-lg bg-contacttextbg p-4 text-center">
						<span className="text-primary text-left">
							【2024/1/5現在】※随時更新※
							<br />
							<br />
							現在、2月以降はスケジュールに余裕があります。
							<br />
							1月中の新規案件につきましては、内容により要検討となります。
						</span>
					</div>
					<br />
					<br />
					<form
						className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
						action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKZM6pn2yYzUnS4YFGEZh0US45NCnIKWIRDHAizz84bnTMGA/formResponse"
						method="POST"
						target="hidden-iframe"
						onSubmit={() => setSubmitted(true)}
					>
						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								会社名/団体名
							</label>
							<input
								name="entry.186240590"
								className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								お名前*
							</label>
							<input
								name="entry.325005267"
								required
								className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								メールアドレス*
							</label>
							<input
								name="entry.487465057"
								type="email"
								required
								onChange={handleEmailChange}
								className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
							{!isValidEmail && (
								<span className="text-primary">入力形式が正しくありません</span>
							)}
						</div>
						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								件名*
							</label>
							<input
								name="entry.1759148641"
								required
								className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								本文*
							</label>
							<textarea
								name="entry.428642830"
								required
								className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div className="flex items-center justify-between sm:col-span-2">
							<button
								type="submit"
								className="inline-block rounded-lg bg-primary text-secondary px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring md:text-base"
							>
								送信
							</button>
						</div>
					</form>
					{submitted && (
						<div className="fixed top-0 left-0  w-full h-full bg-secondary py-6 sm:py-8 lg:py-12">
							<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
								<div className="flex flex-col items-center">
									<div className="max-w-md text-center lg:text-lg">
										お問い合わせ頂きありがとうございます。
										<br />
										通常の場合、3日以内を目安に 【ismsx.jp@gmail.com】 より
										返信させて頂きます。
										<br />
										内容によって請負いたしかねる場合等は返信出来ない場合も
										ございますので、予めご了承ください。
									</div>
								</div>
							</div>
						</div>
					)}
					<iframe name="hidden-iframe" title="fake" className="hidden" />
				</div>
			</div>
		</>
	);
};

export default ContactPage;
export const Head: HeadFC = () => <title>isshin — Contact</title>;
