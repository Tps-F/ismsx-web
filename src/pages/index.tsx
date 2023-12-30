import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import feather from "../utils/feather"

import logo from "../images/logo.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center ">
              <img src={logo} alt="Logo"/>
            </div>
          </div>
        </div>
      </section>

      <footer className="mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-8">
              <a className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500">
                  {feather('twitter', [24, 24])}
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>ismsx</title>;
