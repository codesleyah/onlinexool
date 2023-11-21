"use client"
import { PersonIcon, ClockIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { account,ID} from "@/app/appwrite";
import { useState,useEffect } from "react";
import { Client, Databases } from "appwrite";

export default function Coursecard(props){

    const {coursename, coursedescription,courseid, status} = props;
    const router = useRouter();
    const [loggedInUser, setLoggedInUser] = useState(null);

    const getUser = async () => {
        setLoggedInUser(await account.get());
    };

    const learn = () => {
        router.push(`/pages/courses/coursedetails?courseid=${courseid}`)
    }

    const enroll = () => {
        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('65527f143fc73086ee74');

        const databases = new Databases(client);

        const promise = databases.createDocument(
            '6554a134d27f8ce6cdc5',
            '655702cc62d80f3e3a02',
            ID.unique(),
            {
                studentid : loggedInUser.$id,
                courseid: courseid,
                activestatus: "enrolled",
                coursename: coursename,
                coursedescription: coursedescription,
            }
        );
        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        router.push("/pages/courses/mycourses")
    }
     useEffect(()=>{
        getUser()
    },[]);

    return(
        <div className="flex flex-col border rounded border-gray-300">
            <div className="">
                <Image src="/min.jpg" height={100} width={300} alt="image" className="rounded-t" />
            </div>
            <div className="flex flex-col p-4 gap-4">
                <h1 className="text-xl text-gray-500">{coursename}</h1>
                <div className="flex items-center gap-4">
                    <span className="flex gap-2 items-center">
                        <PersonIcon />
                        <a href="">214</a>
                    </span>
                    <span className="flex gap-2 items-center">
                        <ClockIcon />
                        <a href="">2hrs 4mins</a>
                    </span>
                </div>
                <p className="text-gray-500">
                    {coursedescription}
                </p>
                <hr />
                <button className="border border-blue-700 w-full text-blue-700 px-4 py-2 flex items-center justify-center rounded"
                    onClick={status? learn : enroll}>
                    {status? "learn" : "enroll"}
                </button>
            </div>
        </div>
    )
}