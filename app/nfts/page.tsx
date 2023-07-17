import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NftsList from "@/components/Nfts";
import TagButton from "@/components/Blog/TagButton";

function Nfts() {
  return (
    <>
      <Breadcrumb pageName="Nfts" description="" />

      <div className="removable mx-3 flex flex-wrap">
        <div className="mb-4 w-full max-w-full px-3 sm:w-full sm:flex-none">
          <div className="border-black/12.5 shadow-soft-xl dark:bg-gray-800 relative mb-4 flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-transparent bg-clip-border p-4">
            <div
              className="relative h-full overflow-hidden rounded-xl bg-cover py-6"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2232&amp;q=80')",
              }}
            >
              <span className="from-gray-900 to-slate-800 absolute top-0 left-0 h-full w-full bg-gradient-to-tl bg-cover bg-center opacity-80"></span>
              <div className="relative z-10 flex h-full flex-auto flex-col p-4">
                <h2 className="mb-6 pt-2 font-bold text-white">
                  Discover, create and sell your own NFTs!
                </h2>
                <a
                  className="text-size-sm group mt-auto mb-0 font-semibold leading-normal text-white"
                  href="javascript:;"
                >
                  Read More
                  <i
                    className="fas fa-arrow-right ease-bounce text-size-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                    aria-hidden="true"
                    data-selected="selected-icon-hover"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="flex space-x-3 justify-around">
      <h2 className="mb-8 ml-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
NFTs for sale</h2>

<div className="flex justify-between">
<TagButton text="All" />
<TagButton text="Art" />
<TagButton text="Music" />
<TagButton text="Photography" />
</div>
</div>

      <NftsList />
   
    </>
  );
}

export default Nfts;
