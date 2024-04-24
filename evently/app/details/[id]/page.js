import EventDetails from "@/components/details/EventDetails";
import EventMenu from "@/components/details/EventMenu";
import HeroSection from "@/components/details/HeroSection";

export default function DetailsPage() {
  return (
    <>
      <HeroSection />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12"></div>
        <EventDetails />
        <EventMenu />
      </section>
    </>
  );
}
