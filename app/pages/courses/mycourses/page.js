"use client"
import Sidebar from "@/components/sidebar/Sidebar";
import { Client, Databases ,Query} from "appwrite";
import { useState, useEffect} from "react";
import Coursecard from "@/components/cards/Coursecard";



export default function Mycoursespage(){

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

      useEffect(() => {
        getMycourses();
    }, []); // Run once when the component mounts

    useEffect(() => {
        console.log(mycourses);
    }, [mycourses]);

    return(
        <main className="min-h-screen max-w-screen p-24 bg-white">
             <div className="flex w-full border border-gray-200 rounded flex-col gap-8 p-4">
                <div className="flex flex-col gap-4 p-4">
                    <h1 className="text-gray-500 text-xl font-semibold">Hello</h1>
                    <h1 className="text-blue-700 text-3xl font-semibold">Elvin kakomo</h1>
                </div>
                <hr/>
                <div className="flex grid grid-cols-5 gap-4">
                    <Sidebar />
                    <div className="w-full col-span-4 grid grid-cols-4 gap-4 ">
                        {mycourses.length > 0 ? (
                            mycourses.map(course => (
                                <Coursecard key={course.id} coursename={course.coursename} coursedescription={course.coursedescription} courseid ={course.courseid}/>
                                ))
                                ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                <h1>No courses found</h1>
                                </div>
                            )} 
                    </div>
                </div>

            </div>
        </main>
    )
}