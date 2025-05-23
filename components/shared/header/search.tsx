import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import{
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const categories = [ 'men', 'women', 'kids', 'accessories' ]

export default async function Search() {
    return (
        <form action='/search' method='GET' className="flex items-stretch h-10">
            <Select name="category" >
                <SelectTrigger className="w-auto h-full  dark:border-gray-200  bg-gray-100  text-black border-r rounded-r-none rounded-r-md rtl:rounded-r-md rtl:rounded-1-none ">
                    <SelectValue placeholder="All " />
                </SelectTrigger>
                <SelectContent position="popper">
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                <Input
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 
             text-black text-base h-full"
             name='q'
             type='search'
             />
             <button
             type='submit'
             className="bg-primary text-primary-foreground h-full px-4 rounded-r-md border-l border-gray-200 flex items-center justify-center"
             >
                <SearchIcon className="h-6 w-6" />
                </button>
        </form>
    )
}