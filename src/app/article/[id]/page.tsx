
export default function ArticlePage({ params }: { params: { id: string } }) {
    return (<>
        <h1>{`article id: ${params.id}`}</h1>
    </>)

}