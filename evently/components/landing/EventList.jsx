<<<<<<< HEAD
import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";

const EventList = async () => {
    const allEvents = await getAllEvents();
    console.log(allEvents);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
                allEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))
            }
=======
import EventCard from "./EventCard";

const EventList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <EventCard />
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
        </div>
    );
};

export default EventList;