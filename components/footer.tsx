 'use client'
 import { ChevronUp} from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

export default function Footer() { 
    return (
        
        <  footer className="bg-black text-white underline-link">
            <div className="w-full">
                <Button
                variant="ghost"
                className='bg-gray-800 w-full rounded-none'
                onClick={() => window.scrollTo({
                        top: 0,behavior: 'smooth'})}
                 >
                        <ChevronUp className="h-8 w-8" />
                        Back to top
                        </Button>
                        </div>

                        <div className='flex justify-center gap-2 text-sm'>

                        <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                        <Link href='/page/privacy-policy'>Privacy Notice</Link>
                        <Link href='/page/help'>Help</Link>
                        </div>

                        <div className="flex justify-center  text-sm">
                            <p> ©2025 {APP_NAME}, Inc.</p>
                            <div className="flex justify-center text-sm text-gray-400">
                                32, Bonduma, Buea, Cameroon | +237 696 696 696
                            </div>
                            </div>
                            </footer>
                            

)      
}