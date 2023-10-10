import Link from "next/link";

export default function BackSubBar({ prevPageLink }: { prevPageLink: string }) {
    return <header className="flex flex-wrap z-50 w-full justify-start border-2 border-y-black bg-sand-300">
        <Link className="ml-16" href={prevPageLink}>
            Back
        </Link>
    </header>
}