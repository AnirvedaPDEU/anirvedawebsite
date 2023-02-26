import React, {useState} from "react"
import {Icon} from "@iconify/react"

import upcomingEvents from "../../data/upcomingEvents"
import {Link} from "react-router-dom"

export default function UpcomingEvent() {
  let [current, setCurrent] = useState(0)

  const upcomingEventsList = upcomingEvents.map((upcomingEvent) => {
    return (
      <div
        key={upcomingEvent.id}
        className={
          "relative w-[90%] rounded-2xl py-8 px-5 drop-shadow-md after:absolute  after:bottom-0 after:left-0 after:right-0 after:top-20 after:z-[-1] after:w-full after:rounded-2xl after:bg-tertiary xs:w-3/4 xs:after:top-20 sm:w-[65%]  sm:px-8 sm:after:top-24 xl:px-11 xl:after:top-28"
        }
      >
        <div className="">
          <img src={upcomingEvent.img} className="h-[60vh] w-full" alt="event image" />
        </div>
        <div className="mt-3 xl:mt-7">
          <h1 className="text-center font-Lato text-2xl font-bold text-secondary xl:text-3xl">
            {upcomingEvent.title}
          </h1>
          <a href={upcomingEvent.registrationLink} target={"_blank"}>
            <h2 className="mx-auto mt-1 w-fit cursor-pointer border-b-2 border-secondary text-lg text-secondary hover:font-bold">
              Register Here
            </h2>
          </a>
          <div className="flex flex-col md:hidden">
            <h1 className="mt-2 text-center text-secondary">
              <span className="font-bold">Date:</span> {upcomingEvent.date}
            </h1>
            <h1 className="mt-1 text-center text-secondary">
              {upcomingEvent.timing}
            </h1>
          </div>
          <h1 className="mt-2 hidden text-center text-secondary md:block">
            <span className="font-bold">Date:</span> {upcomingEvent.date},
            {upcomingEvent.timing}
          </h1>
          <h1 className="mt-1 text-center text-secondary">
            <span className="font-bold">Venue: </span> {upcomingEvent.venue}
          </h1>

          <p className=" mt-2 text-center font-Lato text-[17px] font-normal text-primary sm:text-lg ">
            {upcomingEvent.description}
          </p>
          {/* <h3 className="mt-2 text-center text-secondary">
            For any query
            <span className="ml-1 cursor-pointer border-b-2 border-secondary font-bold">
              <a href={upcomingEvent.contactLink} target={"_blank"}>
                contact us
              </a>
            </span>
          </h3> */}
        </div>
      </div>
    )
  })

  return (
    <div className="mt-20 pb-8 btwnMdAndLg:mt-24" id="upcomingevents">
      <div>
        <h1 className="text-center font-Bebas text-5xl uppercase text-primary sm:text-6xl xl:text-7xl">
          Upcoming Events
        </h1>
        <Link to={"/events"}>
          <h3 className="relative mx-auto mt-2 w-fit cursor-pointer overflow-hidden text-center font-Abel text-2xl text-secondary after:absolute after:bottom-0 after:left-0 after:h-[1.8px] after:w-full after:translate-x-[-100%] after:bg-secondary hover:after:translate-x-0 hover:after:transition-transform hover:after:duration-300">
            View all Events
          </h3>
        </Link>
      </div>

      {/* <div className="relative flex items-center justify-center xs:px-6 sm:p-10 md:mt-0 md:px-5 lg:px-8">
        <div className="ml-3 md:hidden">
          <Icon
            icon="ic:baseline-chevron-left"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-[2px] text-3xl sm:pl-0 sm:text-5xl"
            color="#B69575"
            onClick={() => {
              if (current === 0) {
                current = upcomingEventsList.length
              }
              setCurrent(current - 1)
            }}
          />
        </div> */}
        {/* All Cards */}
        {/* <div className="relative flex justify-center md:hidden">
          {upcomingEventsList[current]}
        </div>
        <div className="hidden md:flex md:gap-4 lg:mx-auto lg:w-[90%] lg:gap-8">
          {upcomingEventsList}
        </div>
        <div className="mr-3 md:hidden">
          <Icon
            icon="ic:baseline-chevron-right"
            color="#B69575"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-[2px]  pr-0 text-3xl sm:pl-0 sm:text-5xl"
            onClick={() => {
              if (current === upcomingEventsList.length - 1) {
                current = -1
              }
              setCurrent(current + 1)
            }}
          />
        </div>
      </div> */}

      <div class="flex justify-center bg-tertiary">
        <div
          class="block rounded-lg text-center shadow-lg bg-tertiary w-1/2">
          <div
            class="py-3 px-6 text-6xl text-secondary">
            Economania
          </div>
          <div class="p-6">
            {/* <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Special title treatment
            </h5> */}
            <p class="mb-4 text-primary text-4xl">
            Economania is a 3-day fest where we celebrate the dynamics and broaden the horizon of technology and economics. We collaborate with clubs of varied domains and provide the students of engineering, technology, management and liberal studies a gateway into the understanding of the interdisciplinary nature of economics and technology and their relevance and significance in their career and the world ahead.Economania is based on the foundation that change is the only constant that this world holds, and that economics and technology are and further will be the catalysts of any positive change
            </p>
            {/* <button
              type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button> */}
          </div>
          {/* <div
            class="border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
            2 days ago
          </div> */}
        </div>
      </div>
    </div>
  )
}
