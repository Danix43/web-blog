import PostPreview from "@/components/PostPreview";
import TopicsSubBar from "@/components/SubNavbars/TopicsSubBar";

export default function Home() {
  const rows = []
  const elmNumber = 20
  for (let i = 0; i <= elmNumber; i++) {
    rows.push(<PostPreview key={i} postLink={`post nr.${i}`} ></PostPreview>)
  }

  return (
    <>
      <TopicsSubBar />

      <div className="flex flex-col border-2 border-black m-20 bg-sand-400 drop-shadow-xl">
        <header className="border-b-2 border-black bg-sand-900 drop-shadow-xl">
          <p className="text-center text-xl font-medium p-5">Some articles made for you</p>
        </header>

        <div className="grid grid-cols-3 grid-flow-row">
          {rows}
        </div>
      </div>
    </>
  )
}
