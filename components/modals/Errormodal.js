


export default function Errormodal(props){

    const {title, body,cancel} = props;

    return(
        <div className="absolute bg-black w-full h-full items-center justify-center flex bg-opacity-50 backdrop-blur">
           <div className="bg-white border rounded flex flex-col p-8 gap-4">
                <h1 className="text-xl text-black font-semibold text-center">{title}</h1>
                <hr />
                <p className="text-sm text-black">{body}</p>
                <div className="flex justify-end">
                    <button className="bg-red-500 rounded py-2 px-4" 
                        onClick={cancel}>
                        close
                    </button>
                </div>
           </div>
        </div>
    )
}