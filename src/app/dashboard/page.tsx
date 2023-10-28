'use client'

import BackSubBar from "@/components/SubNavbars/BackSubBar";
import { useState } from "react";

const generateContent = () => {
    const list = [];

    for (let i = 1; i <= 15; i++) {
        list.push(
            <div className="bg-sand-400 border-2 border-black drop-shadow-xl m-4">
                <h1 className="bg-sand-950 border-b-2 text-lg border-black drop-shadow-xl text-center">Article title</h1>

                <p className="text-clip overflow-y-scroll text-sm max-h-72">Lorem ipsum dolor sit amet,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula nibh, vulputate vel nisl nec, faucibus fermentum ipsum. Sed placerat ullamcorper leo, egestas mattis diam. Maecenas tincidunt lectus cursus ipsum tincidunt vulputate. Curabitur eu facilisis leo, sed pharetra lectus. Curabitur viverra, nisi sed sodales varius, lorem diam varius libero, et bibendum lectus dui ac quam. Proin posuere lorem et dolor finibus, at feugiat nisl tempus. Aenean sed augue ac turpis elementum fringilla. Vestibulum ullamcorper venenatis neque, sed posuere enim ullamcorper in. Pellentesque consequat nunc magna, at tincidunt justo aliquam ac. Donec risus lorem, venenatis sit amet eleifend eu, malesuada et urna. Nunc vitae metus sit amet tortor malesuada mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam faucibus nibh sit amet orci fermentum, in porttitor massa dapibus.</p>

                <div className="flex flex-row justify-evenly bg-sand-950 border-t-2 border-black drop-shadow-xl">
                    <button className="bg-red-400 border-2 border-black text-slate-50 px-12 py-0.5 m-2">
                        Reject
                    </button>

                    <button className="bg-green-400 border-2 border-black text-slate-50 px-12 py-0.5 m-2">
                        Approve
                    </button>
                </div>
            </div>
        )
    }
    return list
}

export default function Dashboard() {
    const [currentSettingTabSelected, setCurrentSettingTab] = useState(0);

    return (
        <>
            <BackSubBar prevPageLink="/" />

            <div className="flex flex-row justify-around m-8 ">
                {/* left part*/}
                <div>
                    <div className="flex flex-row bg-sand-900 gap-6 p-2 px-8 border-2 border-black drop-shadow-xl justify-center">
                        {/* tab settings */}
                        <button className="bg-green-300 px-2 border-2 border-black drop-shadow-xl">
                            Article Management
                        </button>

                        <button className="bg-sand-950 px-2 border-2 border-black drop-shadow-xl">
                            User Info Management
                        </button>

                        <button className="bg-sand-950 px-2 border-2 border-black drop-shadow-xl">
                            My Account
                        </button>
                    </div>

                    <div className="bg-sand-400 border-2 border-black drop-shadow-xl mt-10">
                        {/* articles that need aproving */}
                        <h1 className="bg-sand-900 border-b-2 p-6 px-16 border-black drop-shadow-xl text-center ">
                            Articles that need aproving</h1>

                        <div className="flex flex-row overflow-auto max-w-5xl gap-5">
                            {generateContent()}
                        </div>

                    </div>

                    <div>
                        {/* comments that need aproving */}

                    </div>
                </div>

                {/* right part */}
                <div className="bg-sand-400 border-2 border-black drop-shadow-xl">
                    {/* latest articles aproved list */}
                    <h1 className="bg-sand-900 border-b-2 p-6 px-16 border-black drop-shadow-xl text-center ">
                        Latest articles approved</h1>

                    <ul>
                        <li className="bg-sand-400 border-2 border-black drop-shadow-xl m-4">
                            <h1 className="bg-sand-950 border-b-2 text-lg border-black drop-shadow-xl text-center">Article title</h1>

                            <p className="truncate text-sm max-w-sm">Lorem ipsum dolor sit amet,
                                asdasdasdsadasdasdasasdasdasdadasdasdadasdasdadzxczxvdsfsadf</p>
                        </li>

                        <li className="bg-sand-400 border-2 border-black drop-shadow-xl m-4">
                            <h1 className="bg-sand-950 border-b-2 text-lg border-black drop-shadow-xl text-center">Article title</h1>

                            <p className="truncate text-sm max-w-sm">Lorem ipsum dolor sit amet,
                                asdasdasdsadasdasdasasdasdasdadasdasdadasdasdadzxczxvdsfsadf</p>
                        </li>

                        <li className="bg-sand-400 border-2 border-black drop-shadow-xl m-4">
                            <h1 className="bg-sand-950 border-b-2 text-lg border-black drop-shadow-xl text-center">Article title</h1>

                            <p className="truncate text-sm max-w-sm">Lorem ipsum dolor sit amet,
                                asdasdasdsadasdasdasasdasdasdadasdasdadasdasdadzxczxvdsfsadf</p>
                        </li>

                        <li className="bg-sand-400 border-2 border-black drop-shadow-xl m-4">
                            <h1 className="bg-sand-950 border-b-2 text-lg border-black drop-shadow-xl text-center">Article title</h1>

                            <p className="truncate text-sm max-w-sm">Lorem ipsum dolor sit amet,
                                asdasdasdsadasdasdasasdasdasdadasdasdadasdasdadzxczxvdsfsadf</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
