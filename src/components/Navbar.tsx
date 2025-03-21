import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-[36px] block w-full bg-white border-b">
            <div className="flex justify-between items-center py-4">
                <div className="text-lg">
                    <ul className="grid grid-cols-8 gap-4">
                        <li className="font-semibold">
                            Logo
                        </li>
                        <li className="">
                            <Link href="#">Live</Link>
                        </li>
                        <li className="">
                            <Link href="#">Push</Link>
                        </li>
                        <li className="">
                            <Link href="#">Link</Link>
                        </li>
                        <li className="">
                            <Link href="#">Shop</Link>
                        </li>
                        <li className="">
                            <Link href="#">Packs</Link>
                        </li>
                        <li className="">
                            <Link href="#">Help</Link>
                        </li>
                        <li className="">
                            <Link href="#">More +</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 font-semibold">Try Live for free</a>
                    <a href="#" className="hover:underline">Account</a>
                    <a href="#" className="hover:underline">Log out</a>
                </div>
            </div>
        </nav>
    );
}