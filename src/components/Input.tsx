export default function Input({ labelText, type = "text" }: { labelText: string, type?: string }) {
    return (
        <div className="flex flex-col m-2">
            <label
                htmlFor={`${labelText}`}
                className="font-extralight"
            >{labelText}
            </label>

            <input
                className="bg-sand-900 border-2 border-black drop-shadow-xl"
                type={`${type}`} id={`${labelText}`} name={`${labelText}`} />
        </div>
    )
}