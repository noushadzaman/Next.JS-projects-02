
<<<<<<< HEAD
const EventDetails = ({ details, swags }) => {
=======
const EventDetails = () => {
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
    return (
        <div className="col-span-3">
            <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
                <h2 className="font-bold text-2xl">Details</h2>
                <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
<<<<<<< HEAD
                    <p className="">{details}</p>

                    {
                        swags && <ul className="">
                            {
                                swags.map(swag => <li key={swag}>{swag}</li>)
                            }
                        </ul>
                    }
=======
                    <p className="">If {`you're`} passionate about data, coding, and everything tech-related, this is
                        an event you
                        {` won't`} want to
                        miss.
                        Whether {`you're`} a seasoned developer or just getting started, join us to discuss the latest trends in
                        data
                        analysis, programming, and software development. This is a fantastic opportunity to chat with fellow
                        tech
                        enthusiasts, exchange ideas, and maybe even spark some brilliant collaborations.
                        Hosted in the 2nd Floor Training Room at The Power Plant Business Incubator.</p>

                    <ul className="">
                        <li>🎉 Free Tshirt</li>
                        <li>🕹️ Networking</li>
                        <li>🎯 Networking</li>
                        <li>📌 Free Foods</li>
                        <li>🚀 Free Wifi</li>
                    </ul>
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
                </div>
            </div>
        </div>
    );
};

export default EventDetails;