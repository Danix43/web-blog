
export default function BaseContainer({ headerTitle, children }: {
    headerTitle?: string,
    children: React.ReactNode
}) {

    return (<div className="flex flex-col m-3 bg-sand-800 border-2 border-black drop-shadow-xl">
        {headerTitle ? <h1 className="text-center text-xl bg-sand-950 border-b-2 border-black drop-shadow-xl p-2">{headerTitle}</h1> : <></>}
        {children}
    </div >)

}