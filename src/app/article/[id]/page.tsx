import BackSubBar from "@/components/SubNavbars/BackSubBar"

export default function ArticlePage({ params }: { params: { id: string } }) {
    return (<>

        <BackSubBar prevPageLink={"/"} />


        <h1>{`article id: ${params.id}`}</h1>
    </>)

}