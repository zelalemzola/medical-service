import Image from 'next/image';
import Logo from '../../../public/mlogo.png'
import Link from 'next/link';
import {
    Drawer,
    DrawerClose,
    DrawerContent,

    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
// import {  Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {

    return (
        <div className='fixed z-40 flex items-center justify-between px-5 md:px-10 w-full py-2 bg-white shadow-lg'>
            <div className="flex items-end gap-3">
                <Image src={Logo} alt='logo' className='h-10 w-10 ' />
                <p className='text-md font-bold text-primary block'>Chatroom</p>
            </div>
            <div className='hidden md:flex items-center gap-5'>
                <Link href='/' className='text-primary font-medium text-lg p-1 hover:text-black'>Home</Link>
                <Link href='/about' className='text-primary font-medium text-lg p-1 hover:text-black'>About</Link>
                <Link href='/service' className='text-primary font-medium text-lg p-1 hover:text-black'>Services</Link>
                
                <Link href='/blogs' className='text-primary font-medium text-lg p-1 hover:text-black'>Blogs</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Link href='/workers' className='text-white bg-primary p-1 rounded-lg font-medium text-lg  hover:shadow-lg'>Professionals</Link>
                <Link href='https://t.me/+251930005452' className='text-gray-400 bg-white p-1 px-3 rounded-full font-medium text-xs  shadow-lg flex items-center flex-col gap-1'>Contact Us </Link>
            </div>
            <div className="block md:hidden">
                <Drawer>
                    <DrawerTrigger>
                        {/* <div className="text-primary   font-bold"> <Menu size={27}/></div>  */}
                        <div className="text-primary   font-bold"> Menu </div> 
                 
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Menu</DrawerTitle>
                        </DrawerHeader>
                        <div className="flex flex-col items-center gap-3 w-full mx-auto">
                            <Link href='/' className='text-primary font-medium text-lg p-1 hover:text-black'>Home</Link>
                            <Link href='/about' className='text-primary font-medium text-lg p-1 hover:text-black'>About</Link>
                            <Link href='/service' className='text-primary font-medium text-lg p-1 hover:text-black'>Services</Link>
                            <Link href='/blogs' className='text-primary font-medium text-lg p-1 hover:text-black'>Blogs</Link>
                            <Link href='/workers' className='text-white bg-primary p-1 rounded-lg font-medium text-lg  hover:shadow-lg'>Professionals</Link>
                            <Link href='https://t.me/+251930005452' className='text-gray-400 bg-white p-1 px-3 rounded-full font-medium text-xs  shadow-lg flex items-center flex-col gap-1'>Contact Us</Link>
                        </div>
                        <DrawerFooter>

                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>

        </div>
    );

}

export default Navbar;