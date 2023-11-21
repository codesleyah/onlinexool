"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { account } from "@/app/appwrite";
import { useEffect, useState } from "react";



export default function Profilepage(){

    const [loggedInUser, setLoggedInUser] = useState(null);

    const getUser = async () => {
        setLoggedInUser(await account.get());
    };

    useEffect(()=>{
        getUser()
    });


    return(
        <main className="bg-white min-h-screen max-w-screen p-24">
                <div className="flex w-full border border-gray-200 rounded flex-col gap-8 p-4">
                <div className="flex flex-col gap-4 p-4">
                    <h1 className="text-gray-500 text-xl font-semibold">Hello</h1>
                    <h1 className="text-blue-700 text-3xl font-semibold">{loggedInUser? loggedInUser.name : ""}</h1>
                </div>
                <hr/>
                <div className="flex grid grid-cols-5 gap-4">
                    <Sidebar />
                    <div className="w-full flex flex-col col-span-4 gap-4">
                        <h1 className="font-semibold text-xl text-blue-700">Profile</h1>
                        <div className="w-full h-full flex flex-col gap-16">
                           <div className="grid grid-cols-2">
                             <h1 className="text-sm font-semibold text-gray-700">Name</h1>
                             <h1 className="text-xl font-semibold text-gray-700">{loggedInUser? loggedInUser.name : ""}</h1>
                           </div>
                           <div className="grid grid-cols-2">
                             <h1 className="text-sm font-semibold text-gray-700">Email</h1>
                             <h1 className="text-xl font-semibold text-gray-700">{loggedInUser? loggedInUser.email : ""}</h1>
                           </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}