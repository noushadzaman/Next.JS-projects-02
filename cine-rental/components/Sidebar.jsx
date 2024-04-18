import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

const Sidebar = async ({ lang }) => {
    const dict = await getDictionary(lang);

    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <Image src="/icons/trending.svg" width="24" height="24" alt="" />
                        <span>{dict.Trending}</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/icons/newRelease.svg" width="24" height="24" alt="" />
                        <span>{dict.New_Releases}</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/icons/commingSoon.svg" width="24" height="24" alt="" />
                        <span>{dict.Coming_Soon}</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
                        <span>{dict.Favorites}</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/icons/watchLater.svg" width="24" height="24" alt="" />
                        <span>{dict.Watch_Later}</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;