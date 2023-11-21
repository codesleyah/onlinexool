import { BookmarkIcon, DashboardIcon, ExitIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";


export default function Sidebar(){
    return(
        <div className=" flex flex-col  gap-4 bg-gray-200 rounded p-4 text-sm font-bold text-blue-700">
                        <Link href={"/pages/dashboard"}>
                            <span className="flex items-center  gap-2 ">
                                <DashboardIcon />
                                <h1>Dashboard</h1>
                            </span>
                        </Link>
                        <Link href={"/pages/dashboard/profile"}>
                            <span className="flex items-center  gap-2 ">
                            <PersonIcon />
                            <h1>My Profile</h1>
                        </span>
                        </Link>
                        <Link href={"/pages/courses/mycourses"}>
                            <span className="flex items-center  gap-2 ">
                            <BookmarkIcon />
                            <h1>My Courses</h1>
                        </span>
                        </Link>
                        <Link href={"/pages/dashboard/settings"}>
                            <span className="flex items-center  gap-2 ">
                                <GearIcon />
                                <h1>Settings</h1>
                            </span>
                        </Link>
                       <Link href={"/pages/login"}>
                            <span className="flex items-center  gap-2 ">
                                <ExitIcon />
                                <h1>Logout</h1>
                            </span>
                       </Link>
                    </div>
    )
}