'use client'

import BaseContainer from "@/components/BaseContainer"
import CommentOther from "@/components/Comments/CommentOther"
import BackSubBar from "@/components/SubNavbars/BackSubBar"
import { useState } from "react"

export default function ArticlePage({ params }: { params: { id: string } }) {
    const [article] = useState({
        title: "Article Title",
        content: "Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet quam a ex pretium volutpat. Fusce mi dolor, tincidunt eu risus ac, vestibulum posuere metus. Duis magna nibh, vulputate quis dolor ut, cursus commodo libero. Morbi dapibus nisl non neque elementum bibendum. Maecenas ac elit sodales, bibendum tortor et, rhoncus dui. Vivamus maximus, lorem eget molestie tempus, eros dolor convallis mauris, quis dictum est nisi sit amet nisi. Donec ulla",
        comments: [
            {
                makerId: "0",
                commentId: "0"
            },
            {
                makerId: "1",
                commentId: "1"
            },
            {
                makerId: "2",
                commentId: "2"
            },
            {
                makerId: "2",
                commentId: "2"
            }, {
                makerId: "2",
                commentId: "2"
            },
            {
                makerId: "0",
                commentId: "0"
            },
            {
                makerId: "1",
                commentId: "1"
            },
            {
                makerId: "2",
                commentId: "2"
            },
            {
                makerId: "2",
                commentId: "2"
            }, {
                makerId: "2",
                commentId: "2"
            },
        ]
    },
    )

    return (<>
        <BackSubBar prevPageLink={"/"} />

        <div className="flex flex-col">
            {/* article container */}
            <BaseContainer headerTitle={article.title}>
                <p className="m-2 text-left">{article.content}</p>
            </BaseContainer>

            {/* comments container */}
            <div className="flex flex-col m-3 bg-sand-800 border-2 border-black drop-shadow-xl">
                <h1 className="text-center text-2xl bg-sand-950 border-b-2 border-black drop-shadow-xl">Comments about this article</h1>

                <div className="overflow-scroll">
                    {article.comments.map(({ makerId, commentId }) => {
                        return <CommentOther key={makerId} userId={makerId} commentId={commentId} />
                    })}
                </div>

                {/* comment input */}
                <BaseContainer>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }} className="grid grid-cols-1 grid-rows-1 grid-flow-col m-2">
                        <input className="col-span-2 p-2 bg-sand-200" type="text" placeholder="Write a comment here" />
                        <button className="col-span-1 mx-2 px-4 p-1 rounded-full border-2 border-black bg-green-300 " type="submit">
                            Send
                        </button>
                    </form>
                </BaseContainer>
            </div>
        </div>
    </>)

}