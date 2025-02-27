import { useState } from "react";
import  {BiCommentDetail}  from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";




export default function App05() {

    const [liked, setLiked] = useState(false);

    return (
        <div className="bg-gray-100 w-screen h-screen flex items-center place-content-center">
            <div className="bg-white rounded-lg shadow w-44 h-70 flex flex-col">
                {/* Header */}
                <div className="h-10 flex  gap-2 leading-4">
                    <div className="  w-[30px] h-[30px] rounded-full bg-green-300"></div>
                    <div>
                        <div className="text-[15px] font-semibold">ZmB Socity</div>
                        <div className="text-xs">je suis un zombie </div>

                    </div>
        
                </div>  

                {/* Image */}
                
                <div className="bg-yellow-100 flex-1">
                    <img src="img/Victor.jpg"  />
                </div>

                {/* footer */}
                <div className="h-8 flex items-center px-2">
                    <div className="flex w-1/2 space-x-2">
                        { liked ?  
                            <button className="cursor-pointer" onClick={() => setLiked(false)}>
                                <FaHeart className="text-red-500" />
                            </button>
                            : 
                            <button className="cursor-pointer" onClick={() => setLiked(true)}>
                                <FaRegHeart />
                            </button>
                        }
                        <BiCommentDetail />
                        <LuSend />
                    </div>
                    <div className="flex place-content-end  w-1/2">
                        <CiBookmarkCheck />
                    </div>
                </div>

            </div>
        </div>
    )
}