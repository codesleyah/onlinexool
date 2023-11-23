import { BookmarkIcon, DashboardIcon, ExitIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { account} from "@/app/appwrite";
import { useRouter } from "next/navigation";


export default function Sidebar(){

    const router = useRouter();
    // Get the current session ID
    const sessionId = account.get().$id;
    
    const logout = async () => {
        await account.deleteSessions().then(() => {
            router.push("/pages/auth/login");
        })  
    }

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
                       <button onClick={logout}>
                            <span className="flex items-center  gap-2 ">
                                <ExitIcon />
                                <h1>Logout</h1>
                            </span>
                       </button>
                    </div>
    )
}