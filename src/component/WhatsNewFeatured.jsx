import React from "react";
import { useRef } from "react";
import { getFeaturedUpdates } from "./featured-updates";

export default function WhatsNewFeatured() {
    const featuredUpdatesContentRef = useRef(getFeaturedUpdates());
    return (
        <React.Fragment>
            <div className="whats-new-featured-container w-[240px] h-fit px-3 py-2 border-l border-zinc-700">
                <div className="flex flex-col items-start justify-start gap-1 w-full h-fit">
                    <h1 className="leading-snug font-semibold text-zinc-500">What's New? Featured Updates</h1>
                    <p className="leading-snug font-normal text-zinc-600 text-xs">Latest {" "}
                        <span className="hover:text-zinc-400 hover:underline">
                            version {"(0.1.9)"}
                        </span>
                    </p>
                </div>
                <div className="featured-updates-section-wrapper mt-4 flex flex-col items-start justify-start gap-2 divide-y divide-zinc-800">
                    {featuredUpdatesContentRef.current?.map((featuredContent, featuredContentIndex) => {
                        return (
                            <FeaturedContentWrapper key={featuredContentIndex}
                                content={featuredContent}
                            />
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

function FeaturedContentWrapper({ content }) {
    return (
        <div className="featured-content-wrapper w-full h-fit py-3">
            <h3 className="leading-snug text-zinc-300 text-xs font-semibold">{content?.title}</h3>
            <p className="leading-snug text-zinc-500 text-xs font-normal">{content?.description}</p>
            <div className="mt-2" />
            {content?.hasAction && content?.action?.type==='button'
                ? <button className="featured-content_action-button w-full h-fit py-1.5 rounded-md border-transparent bg-zinc-700 hover:bg-zinc-600 text-zinc-300 font-semibold text-xs"
                        onClick={() => window.open(content?.action?.url)}
                    >
                    {content?.action?.text}
                    </button>
                : <a href={content?.action?.url}
                    className="featured-content_action-link text-xs font-semibold text-zinc-500 hover:underline hover:text-zinc-400" 
                    rel="noreferrer">
                        {content?.action?.text}
                    </a>
            }
        </div>
    )
}