import PostPreview from "@/components/PostPreview";

export default function Home() {
  return (
    <div className="flex flex-col border-2 border-black m-20 bg-sand-400 drop-shadow-xl">
      <header className="border-b-2 border-black bg-sand-900 drop-shadow-xl">
        <p className="text-center text-xl font-medium p-5">Some articles made for you</p>
      </header>

      <PostPreview postLink="test"></PostPreview>
    </div>
  )
}
