import Image from "next/image";
import ActionButtons from "../ActionButtons";
import Link from "next/link";

<<<<<<< HEAD
const EventCard = ({ event }) => {
=======
const EventCard = () => {
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image
                height={135}
                width={135}
<<<<<<< HEAD
                src={event?.imageUrl}
                alt={event?.name}
=======
                src="/google-io-2023-1.png"
                alt="Event 1"
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
                className="w-full"
            />
            <div className="p-3">
                <Link
<<<<<<< HEAD
                    href={`/details/${event?.id}`}
                    className="font-bold text-lg"
                >{event?.name}</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{event?.interested_ids?.length} Interested</span>
                    <span className="mx-1">|</span>
                    <span>{event?.going_ids?.length} Going</span>
=======
                    href="/details/1"
                    className="font-bold text-lg"
                >Google I/O Extended</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>1k Interested</span>
                    <span>|</span>
                    <span>40K Going</span>
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
                </div>
                <ActionButtons />
            </div>
        </div>
    );
};

export default EventCard;