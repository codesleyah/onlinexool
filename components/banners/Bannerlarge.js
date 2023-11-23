import Image from "next/image"
import Link from "next/link"

export default function Bannerlarge(){
    return(
        <div className="container p-24 grid grid-cols-2">
            <div className="flex flex-col gap-4">
                <h1 className="text-7xl font-semibold text-blue-700">Learn Without Limits</h1>
                <p className="text-gray-800">With the correct leadership any organization will excel and that 
                accordingly organizations should invest in the development and 
                improvement of their leadership.</p>
                <div className="flex gap-4">
                    <Link href={"/pages/courses/allcourses"} className="border-4 border-blue-700 p-4 font-semibold text-xl text-blue-700">
                        Get Started Now
                    </Link>
                   <Link href={"/pages/auth/register"} className="bg-blue-700 p-5 font-semibold text-xl text-white">
                        Join for Free
                   </Link>
                </div>
            </div>
             <div className="relative">
               
            </div>
        </div>
    )
}