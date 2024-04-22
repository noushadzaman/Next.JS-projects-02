"use client"

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set("latitude", position.coords.latitude);
                params.set("longitude", position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`)
            })
        }

    }, [pathname, searchParams]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
            {
                loading &&
                <>
                    <Image
                        className="border my-4 rounded-md"
                        src="/network.gif"
                        width={500}
                        height={500}
                        alt="...loading"
                    />
                    <p className="text-4xl text-center">Detecting location</p>
                </>
            }
        </div>
    );
};

export default LocationDetector;