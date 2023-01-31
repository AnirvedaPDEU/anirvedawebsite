import React from "react";
import EventsCards from "./PrevEventCards";
import UpcomingEventCards from "./UpcomingEventCards";

export default function EventsPage() {
    return (
      <section className="">
        <div className="container mx-auto px-5 py-16 sm:py-24">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2 2xl:pl-4">
              <h1 className="mb-2 font-Bebas text-4xl font-medium text-primary sm:text-5xl ">
                Our Past Events
              </h1>
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
            <p className="w-full leading-relaxed text-secondary text-opacity-90 lg:w-1/2">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <EventsCards />
        </div>
        <div className="container mx-auto px-5 pb-12">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2 2xl:pl-4">
              <h1 className="mb-2 font-Bebas text-4xl font-medium text-primary sm:text-5xl ">
                Our Upcoming Events
              </h1>
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
            <p className="w-full leading-relaxed text-secondary text-opacity-90 lg:w-1/2">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <UpcomingEventCards />
        </div>
      </section>
    )
}