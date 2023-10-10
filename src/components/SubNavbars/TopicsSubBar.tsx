export default function TopicsSubBar() {
    return <header className="flex flex-wrap z-50 w-full justify-center gap-32 border-2 border-y-black bg-sand-300 ">
        {/* TODO: - add links based on blog posts saved*/}
        <a className="flex-none text-xl font-semibold" href="#">
            Motorsports
        </a>
        <a className="flex-none text-xl font-semibold" href="#">
            Lifestyle
        </a>
        <a className="flex-none text-xl font-semibold" href="#">
            Fitness
        </a>
        <a className="flex-none text-xl font-semibold" href="#">
            Videos
        </a>
    </header>
}
