import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function Navsearchbar(){
    return(
        <div className="flex items-center">
            <input placeholder="search..." className="border-2 px-2 rounded-l h-9"/>
            <button className="bg-blue-700 px-4 text-white rounded-r font-semibold h-9">
                <MagnifyingGlassIcon />
            </button>
        </div>
    )
}