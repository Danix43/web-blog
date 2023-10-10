'use client'

import Link from "next/link";

type PostPreviewTypes = {
    postLink: string
}

export default function PostPreview({ postLink }: PostPreviewTypes) {
    return (
        <Link href={`article/${postLink}`}>
            <div className="max-h-40 flex flex-col m-3 bg-sand-800 border-2 border-black drop-shadow-xl">
                <h1 className="text-center text-2xl bg-sand-950 border-b-2 border-black drop-shadow-xl">title</h1>
                <p className="p-4 text-left text-sm truncate overflow-hidden">
                    Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet quam a ex pretium volutpat. Fusce mi dolor, tincidunt eu risus ac, vestibulum posuere metus. Duis magna nibh, vulputate quis dolor ut, cursus commodo libero. Morbi dapibus nisl non neque elementum bibendum. Maecenas ac elit sodales, bibendum tortor et, rhoncus dui. Vivamus maximus, lorem eget molestie tempus, eros dolor convallis mauris, quis dictum est nisi sit amet nisi. Donec ulla
                </p>
            </div>
        </Link>
    )
}