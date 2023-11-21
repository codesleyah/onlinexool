'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";
import { account,ID } from "@/app/appwrite";

export default function Loginpage(){

    const router = useRouter();
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = async (email, password) => {
        const session = await account.createEmailSession(email, password);
        setLoggedInUser(await account.get());
    };

    //check user login status
    if (loggedInUser) {
        router.push("/pages/dashboard");
    }

    return(
        <main className="min-h-screen max-w-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 shadow bg-gray-100 p-4 w-80">
                <h1 className="font-semibold text-xl">Login</h1>
                  <input placeholder="email" className="border-2 border-blue-700 px-2 rounded h-9"
                    value={email}
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    />
                <input placeholder="password" className="border-2 border-blue-700 px-2 rounded h-9"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    />
                <button className="bg-blue-700 w-full text-white px-4 py-2 items-center justify-center rounded"
                onClick={login}
                    >
                    Login 
                </button> 
            </div>
        </main>
    )
}