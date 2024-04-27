import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import SignInOut from "./auth/SignInOut";
=======
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image
                            height={135}
                            width={135}
                            src="/logo.svg"
                            alt="Evently"
                            className="h-[45px]"
                        />
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C]">
<<<<<<< HEAD
                    <li>
                        <SignInOut />
                    </li>
=======
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;