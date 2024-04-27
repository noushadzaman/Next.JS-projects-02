import EventDetails from "@/components/details/EventDetails";
import EventMenu from "@/components/details/EventMenu";
import HeroSection from "@/components/details/HeroSection";
<<<<<<< HEAD
import { getEventById } from "@/db/queries";

export default async function EventsDetailsPage({ params: { id } }) {
  const eventInfo = await getEventById(id);
  console.log(eventInfo);

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12"></div>
        <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
        <EventMenu location={eventInfo?.location} />
=======

export default function DetailsPage() {
  return (
    <>
      <HeroSection />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12"></div>
        <EventDetails />
        <EventMenu />
>>>>>>> 8cca44e263f893e86199b6f188d5b0ef614e2b64
      </section>
    </>
  );
}
