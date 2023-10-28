'use client'

import Image from "next/image";
import { useState } from "react";

export default function CommentOther({ userId, commentId }: { userId: string, commentId: string }) {
    const [user] = useState({
        id: 32,
        name: "Maria Fernandez"
    })
    const [comment] = useState({
        user: user,
        comment: "This is the best..."
    })

    return (
        <div className="flex flex-row justify-items-start m-2 border-2 border-black rounded-full p-2 w-3/6 bg-sand-900">
            <Image src={"https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"}
                alt="Image of a person"
                width={50}
                height={50}
            />
            <p className="ml-2 self-center">
                {`${user.name}: ${comment.comment}`}
            </p>
        </div>
    )
}