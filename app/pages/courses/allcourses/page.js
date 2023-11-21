"use client";
import { Client, Databases } from "appwrite";
import Coursecard from "@/components/cards/Coursecard";
import { useState, useEffect } from "react";



export default function Allcourses(){

  const [allcourses, setAllcourses] = useState([]);
  const [mycourses, setMycourses] = useState([]);

  const getAllcourses = () => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65527f143fc73086ee74");

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6554a134d27f8ce6cdc5",
      "6555cb07939350ab7445"
    );

    promise.then(
      function (response) {
        setAllcourses(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  };

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
    getAllcourses();
    getMycourses();
  }, []); // Run once when the component mounts

  useEffect(() => {
    console.log(allcourses);
  }, [allcourses]); // Log whenever allcourses is updated

  return (
    <main className="min-h-screen max-w-screen bg-white">
      <div className="grid grid-cols-4 p-8 gap-8 items-center max-w-screen">
       {allcourses.length > 0 ? (
       allcourses.map(course => (
        mycourses.some(mycourse =>  mycourse.courseid === course.$id)?
        <Coursecard key={course.$id} coursename={course.coursename} coursedescription={course.coursedescription} courseid ={course.$id} status="enrolled"/>:
        <Coursecard key={course.$id} coursename={course.coursename} coursedescription={course.coursedescription} courseid ={course.$id} />
          ))
        ) : (
        <div className="w-full h-full flex items-center justify-center">
          <h1>No courses found</h1>
        </div>
      )}
      </div>
    </main>
  );
}