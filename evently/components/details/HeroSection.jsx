import Image from "next/image";
import ActionButtons from "../ActionButtons";

<<<<<<< HEAD
const HeroSection = ({ eventInfo }) => {
=======
const HeroSection = () => {
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image
                    height={900}
                    width={900}
<<<<<<< HEAD
                    src={eventInfo?.imageUrl}
=======
                    src="/google-io-2023-1.png"
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
                    alt="Event 1"
                    className="h-[450px] mx-auto"
                />
            </div>
            <div className="flex items-end">
                <div className="flex-auto py-4">
<<<<<<< HEAD
                    <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{eventInfo?.interested_ids?.length} Interested</span>
                        <span className="mx-1">|</span>
                        <span>{eventInfo?.going_ids?.length} Going</span>
=======
                    <h1 className="font-bold text-2xl">Google I/O Extended</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>1k Interested</span>
                        <span>|</span>
                        <span>40K Going</span>
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
                    </div>
                </div>
                <ActionButtons fromDetails={true} />
            </div>
        </section>

    );
};

export default HeroSection;