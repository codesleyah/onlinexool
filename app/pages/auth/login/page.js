'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";
import { account,ID } from "@/app/appwrite";
import Errormodal from "@/components/modals/Errormodal";

export default function Loginpage(){

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isloading, setIsloading] = useState(false);
    const [loginfailed, setLoginfaild] = useState(false);
    const [errormessage, setErrormessage] = useState("login failed please try again");
    const [errortitle, setErrortitle] = useState("Login Failed");



    const login = async () => {
        setIsloading(true);
        console.log("the email is:", email);
        console.log("the password is",password);
        const session = await account.createEmailSession(email, password).then(function (response) {
            router.push("/pages/dashboard");
            console.log(response); // Success
        }, function (error) {
            setErrormessage(error.message);
            setLoginfaild(true);
            setIsloading(false);
        })
        
    };

    return(
        <main className="min-h-screen max-w-screen flex items-center justify-center bg-reg-bg bg-no-repeat bg-center bg-cover">
            <div className="flex flex-col gap-4 shadow bg-gray-500 p-4 w-80 shadow-lg shadow-slate-50 bg-gray-500 p-4 w-80 rounded bg-opacity-50s">
                <h1 className="font-semibold text-xl">Login</h1>
                  <input placeholder="email" className="text-black border-2 border-blue-700 px-2 rounded h-9"
                    value={email}
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    />
                <input placeholder="password" className="text-black border-2 border-blue-700 px-2 rounded h-9"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    />
                {
                    !isloading? <button className="bg-blue-700 w-full text-white px-4 py-2 items-center justify-center rounded"
                        onClick={login}
                            >
                            Login 
                            
                        </button>:
                        <button className="bg-blue-700 w-full text-white px-4 py-2 items-center justify-center rounded">
                            Loading ...
                        </button>
                }
            </div>
            {loginfailed && <Errormodal title={errortitle} body={errormessage} cancel={() => setLoginfaild(false)}/>}
        </main>
    )
}