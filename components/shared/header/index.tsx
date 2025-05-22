import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import  data from '@/lib/data'
import  Search from './search'

   
export default function Header() {
    return (
        <header className='bg-black text-white'>
            <div className='px-2'>
                <div className='flex items-center justify-between'>
                    <Link
                    href='/'
                    className="flex items-center header-button font-extrabold text-2xl m-1"
                    >
                        <Image
                         src='/icons/logo.svg'
                         width={40}
                         height={40}
                         alt={'${APP_NAME} logo'}
                         />
                         {APP_NAME}
                    </Link>
                    <div className="md:hidden block flex-1 max-w-xl">
                        <Search/>
                    </div>
                    <Menu/>
                    </div>
                    <div className="md:hidden block py-2">
                        <Search/>
                    </div>
                    <Button
                    variant='ghost'
                    className=" dark header-button flex items-center gap-1 text-base [&_svg]:size-6"
                    >
                     <MenuIcon/>
                     All
                    </Button>
                    <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
                    {data.headersMenus.map((menu)=> (
                        <Link
                        key={menu.name}
                        href={menu.href}
                        className="header-button !p-2"
                        >
                            {menu.name}
                        </Link>
                    
                    
                   ))}

                    </div>
                </div>
        </header>
    )
}