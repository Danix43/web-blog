'use client'
import Input from "@/components/Input";
import BackSubBar from "@/components/SubNavbars/BackSubBar";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
    const [isLoginDisplayed, setIsLoginDisplayed] = useState(true);

    async function handleSubmit() {
        console.log(`data inputted: `);
    }

    const loginBox = (
        <div className="flex flex-col bg-sand-400 border-2 border-black drop-shadow-xl">
            <h1 className="text-center text-s p-6 bg-sand-900 border-b-2 border-black drop-shadow-xl">Log in here</h1>

            <form onSubmit={(e) => {
                e.preventDefault()


            }}
                className="flex flex-col m-8">

                <Input labelText="Username" />
                <Input labelText="Password" type="password" />

                {/* <input
                    className="mt-4 bg-sand-900 border-2 border-black drop-shadow-xl"
                    type="submit" value="Login" /> */}

                <Link className="text-center mt-4 bg-sand-900 border-2 border-black drop-shadow-xl" href={'/dashboard'}>Login</Link>

                <button
                    className="mt-4 bg-sand-900 border-2 border-black drop-shadow-xl"
                    onClick={() => setIsLoginDisplayed(v => !v)}>Register</button>
            </form>
        </div>
    )

    const registerBox = (
        <div className="flex flex-col bg-sand-400 border-2 border-black drop-shadow-xl">
            <h1 className="text-center text-s p-6 bg-sand-900 border-b-2 border-black drop-shadow-xl">Register in here</h1>

            <form onSubmit={(e) => e.preventDefault()}
                className="flex flex-col m-8">

                <Input labelText="Username" />
                <Input labelText="Email" type="email" />
                <Input labelText="Password" type="password" />

                <input
                    className="mt-4 bg-sand-900 border-2 border-black drop-shadow-xl"
                    type="submit" value="Register" />

                <button
                    className="mt-4 bg-sand-900 border-2 border-black drop-shadow-xl"
                    onClick={() => setIsLoginDisplayed(v => !v)}>Login</button>
            </form>
        </div>
    )


    return (
        <>
            <BackSubBar prevPageLink={"/"} />

            <div className="grid grid-cols-3">
                <div className="col-start-2 mt-32">
                    {isLoginDisplayed ? loginBox : registerBox}
                </div>
            </div>

            {/* <div className="flex flex-row justify-center min-h-fit">
                {isLoginDisplayed ? loginBox : registerBox}
            </div> */}
        </>
    )
}