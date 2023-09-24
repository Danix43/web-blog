type PostPreviewTypes = {
    postLink: string
}

export default function PostPreview({ postLink }: PostPreviewTypes) {
    return (<>
        <h1>{postLink}</h1>
    </>)
}