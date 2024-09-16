'use client';
import { User } from "lucide-react";
import DrawerNavigation from "./Sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function Appbar() {

export function Appbar(){

    return <div className='h-28 flex justify-between font-dm-sans bg-slate-900'>
        <Link href={"/"}><div className="ml-4 h-full text-5xl text-white font-semibold flex items-center">
            Hoodie
        </div></Link>
        <div className=" w-2/6 flex justify-between items-center text-3xl text-white">
            <div role="button" >Men</div>
            <div role="button" >Women</div>
            <div role="button" >Trending</div>
            <DrawerNavigation/>
        </div>
    </div>
}