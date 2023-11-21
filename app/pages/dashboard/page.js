"use client"
import { BackpackIcon,  Pencil2Icon, SketchLogoIcon } from "@radix-ui/react-icons";
import Sidebar from "@/components/sidebar/Sidebar";
import { account } from "@/app/appwrite";
import { useEffect, useState } from "react";
import { Client, Databases ,Query} from "appwrite";


export default function Stuedntdashboard(){

    const [loggedInUser, setLoggedInUser] = useState(null);
    const [mycourses, setMycourses] = useState([]);

    const getMycourses = () => {
        const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65527f143fc73086ee74");

        const databases = new Databases(client);

        let promise = databases.listDocuments(
        "6554a134d27f8ce6cdc5",
        "655702cc62d80f3e3a02"
        );

        promise.then(
        function (response) {
            setMycourses(response.documents);
        },
        function (error) {
            console.log(error);
        }
        );
    }


    const getUser = async () => {
        setLoggedInUser(await account.get());
    };

    useEffect(()=>{
        getUser()
        getMycourses();
    },[]);

    return(
        <main className="min-h-screen max-w-screen p-24 bg-white">
            <div className="flex w-full border border-gray-200 rounded flex-col gap-8 p-4">
                <div className="flex flex-col gap-4 p-4">
                    <h1 className="text-gray-500 text-xl font-semibold">Hello</h1>
                    <h1 className="text-blue-700 text-3xl font-semibold">{loggedInUser? loggedInUser.name : ""}</h1>
                </div>
                <hr/>
                <div className="flex grid grid-cols-5 gap-4">
                    <Sidebar />
                    <div className="w-full flex flex-col col-span-4 gap-4">
                        <h1 className="font-semibold text-xl text-blue-700">Dashboard</h1>
                        <div className="w-full h-full grid grid-cols-3 gap-4">
                            <div className="border border-gray-200 rounded flex flex-col gap-4 items-center justify-center p-8">
                                <BackpackIcon width={50} height={50}/>
                                <h1 className="font-semibold text-5xl text-gray-600">{mycourses.length}</h1>
                                <h1 className="text-sm font-bold text-gray-500">Enrolled Courses</h1>
                            </div>
                            <div className="border border-gray-200 rounded flex flex-col gap-4 items-center justify-center p-8">
                                <Pencil2Icon width={50} height={50}/>
                                <h1 className="font-semibold text-5xl text-gray-600">0</h1>
                                <h1 className="text-sm font-bold text-gray-500">Active Courses</h1>
                            </div>
                            <div className="border border-gray-200 rounded flex flex-col gap-4 items-center justify-center p-8">
                                <SketchLogoIcon width={50} height={50}/>
                                <h1 className="font-semibold text-5xl text-gray-600">0</h1>
                                <h1 className="text-sm font-bold text-gray-500">Completed Courses</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}