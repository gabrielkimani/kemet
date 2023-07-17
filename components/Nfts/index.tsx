import React from "react";
import nftsData from "./nftsData";
import TagButton from "../Blog/TagButton";

function Nfts() {
  return (
    <div className="removable mx-3 flex flex-wrap overflow-x-hidden">
      {nftsData.map((nft, index) => {
        return (
          <div
            className="mb-6 w-full max-w-full px-3 sm:flex-none lg:w-1/3"
            key={index}
          >
            <div className="shadow-soft-xl dark:bg-gray-800 relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-opacity-10 bg-clip-border px-3 py-3">
              <div className="relative">
                <a className="block rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1579833981331-676fa2bae313?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWF0aW9ufGVufDB8MHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="img-blur-shadow"
                    className="shadow-soft-2xl max-w-full rounded-2xl"
                  />
                </a>
              </div>

              <div className="flex-auto px-1 pt-6">
                <TagButton text={nft.category} />

                <p className="bg-slate-700 dark:text-gray-300 relative z-10 mb-2 bg-clip-text text-sm leading-normal text-transparent">
                  UnderWater
                </p>
                <a href="javascript:;">
                  <h5>{nft.creator}</h5>
                </a>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    className="leading-pro ease-soft-in hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:text-fuchsia-500 active:bg-fuchsia-500 active:hover:text-fuchsia-500 dark:border-gray-700 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:border-gray-100 dark:active:bg-gray-700 dark:active:hover:text-gray-100 mb-0 inline-block cursor-pointer rounded-lg border border-solid bg-transparent px-8 py-2 text-center align-middle text-xs font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent dark:hover:bg-transparent dark:hover:opacity-75 dark:active:text-white dark:active:hover:bg-transparent"
                  >
                    Place Bid
                  </button>
                  <span>{nft.price} Points</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Nfts;
