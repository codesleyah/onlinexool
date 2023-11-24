"use client";
import Navsearchbar from "../inputs/Navsearchbar";
import Image from "next/image";
import Link from "next/link";
import { account} from "@/app/appwrite";
import { useEffect, useState } from "react";


export default function Navbarmain(){

    const [loggedInUser, setLoggedInUser] = useState(null);

    const getUser = async () => {
        setLoggedInUser(await account.get());
    };

    useEffect(()=>{
        getUser()
    },[]);

    return(
        <div className="absolute sticky top-0 w-full bg-white h-16 p-4 shadow border-b">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <Link href={"/"}>
                        <Image src="/logo.png" height={50}  width={120} alt="logo" />
                    </Link>
                    <Navsearchbar />
                </div>
                <div className="flex gap-4 items-center">

                    {!loggedInUser?(
                        <div className="flex gap-4 items-center">
                        <Link href={"/pages/auth/login"} className="text-blue-700 hover:underline">
                            Log in
                        </Link>
                        <Link href={"/pages/auth/register"} className="bg-blue-700 p-2   text-white rounded font-semibold h-9">
                            Join for Free
                        </Link>
                    </div>
                    ) : (
                      <div className="flex gap-4 items-center">   
                        <Link href={"/pages/courses/allcourses"} className="hover:underline text-blue-700">
                            All Courses
                        </Link>
                        <Link href={"/pages/dashboard"} className="bg-blue-700 p-2   text-white rounded font-semibold h-9">
                            {loggedInUser.name}
                        </Link>
                      </div>
                    )}
                </div>
            </div>
        </div>
    )
}