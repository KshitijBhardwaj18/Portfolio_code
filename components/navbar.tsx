"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { ChevronRightSquare } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
  

interface navbarProps {

}


const Navbar: React.FC<navbarProps>= () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/blog")
    }
    


    return ( 
        <div className="flex flex-col   w-full p-2">
            <div className=" xl:mx-36 mx-0 p-3 flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <p className="font-extrabold text-xl">KshitijBhardwaj.com</p>
                    <ModeToggle/>
                </div>

                <div className=" flex-row   flex ">
                    <ul className="flex flex-row gap-2 font-extrabold">
                        <button onClick={handleClick}>Blog</button>
                        
                        
                    </ul>
                </div>

                {/* <div className="sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <ChevronRightSquare className="text-2xl"/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <button>Projects</button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <button>Blog</button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            
                            
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div> */}

            </div>

        </div>
     );
}
 
export default Navbar;