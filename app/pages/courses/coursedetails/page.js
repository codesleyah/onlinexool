"use client";
import { ClockIcon, PersonIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Client, Databases ,Query} from "appwrite";
import { useState, useEffect} from "react";

export default function Coursedetails(){

    const searchParams = useSearchParams();
    const [course, setCourse] = useState({});

      const getCourse = () => {
        const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65527f143fc73086ee74");

        const databases = new Databases(client);

        let promise = databases.listDocuments(
            "6554a134d27f8ce6cdc5",
            "6555cb07939350ab7445",
            [
                Query.equal('$id', searchParams.get("courseid"))
            ]
        );

        promise.then(
        function (response) {
            setCourse(response.documents.find(document => document.$id = Query.equal('$id', searchParams.get("courseid"))));
            console.log(course)
        },
        function (error) {
            console.log(error);
        }
        );
    }

      useEffect(() => {
        getCourse();
    }, []); // Run once when the component mounts

    useEffect(() => {
        console.log(course);
    }, [course]); 

    return(
        <main className="min-h-screen max-w-screen bg-white">
            <div className="w-full h-full p-24 flex items-center justify-center">
                 <div className="flex flex-col gap-4 col-span-2">
                        <div className="w-full">
                            <Image src="/min.jpg" height={300} width={600} alt="coveriamge" />
                        </div>
                            <div className="flex flex-col p-4 gap-4">
                                <h1 className="text-xl text-gray-500">{course? course.coursename : ""} </h1>
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
                                    {course? course.coursedescription: ""} 
                                </p>
                                <Link href={"/pages/courses/playcourse"}>
                                    <button className="rounded w-full flex items-center justify-center gap-4 border border-blue-700 p-2">
                                    <PlayIcon height={25} width={25}/> Start Learnining
                                </button>
                                </Link>
                            </div>
                    </div>
            </div>
        </main>
    )
}