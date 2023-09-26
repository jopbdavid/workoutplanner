import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import momentPlugin, { toMoment } from "@fullcalendar/moment";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./CalendarModal";
import CalendarPop from "./CalendarPop";
import { toast } from "react-toastify";
import CalendarModalAlt from "./CalendarModalAlt";
import Sidebar from "./Sidebar";

const initialState = [
  { title: "Chest", start: "2023-09-18" },
  { title: "Back", start: "2023-09-19" },
  { title: "Legs", start: "2023-09-20" },
  { title: "Chest", start: "2023-09-21" },
  { title: "Back", start: "2023-09-22" },
  { title: "Legs", start: "2023-09-23" },
];
const formatEvents = (events) => {
  return events.map((event) => {
    return {
      title: event.title,
      start: event.start,
      extendedProps: { ...event },
    };
  });
};

const Calendar = () => {
  const [events, setEvents] = useState(initialState);
  const [modal, setModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");

  const handlePop = () => {
    setModal(!modal);
  };

  const handleSelect = (eventInfo) => {
    setModal(true);
    if (!eventTitle) {
      toast.error("Please provide a valid event title.");
      return;
    }
    setModal(!modal);
    setEvents([
      ...events,
      {
        title: eventTitle,
        start: eventInfo.startStr,
      },
    ]);
    setEventTitle("");
  };

  const handleEdit = (eventInfo) => {
    const date = eventInfo.event.extendedProps.start;

    const newList = events.filter(
      (i) => i.start !== eventInfo.event.extendedProps.start
    );
    const eventNamePrompt = prompt("Edit event:");
    if (!eventNamePrompt) {
      alert("Please provide a valid event name");
      return;
    }
    const newEvent = {
      title: eventNamePrompt,
      start: date,
    };

    setEvents([...newList, newEvent]);
  };

  const handleDrop = (eventInfo) => {
    if (window.confirm("Are you sure you want to change the event date?")) {
      const newEvent = events.find((i) => {
        return i.start === eventInfo.event.extendedProps.start;
      });
      console.log(newEvent);
      newEvent.start = eventInfo.event.startStr;
      console.log("change confirmed");
    } else {
      console.log("change aborted");
    }
  };

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="-mt-10">
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          IRON CYCLES
        </h1>
      </div>
      <hr className="w-24 h-6 mx-auto mt-4 mb-20 bg-gray-600 border-4 rounded  dark:bg-gray-900" />
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center pb-8">
        {modal ? (
          <CalendarModalAlt setEventTitle={setEventTitle} isOpen={modal} />
        ) : null}

        {/* {modal ? <CalendarPop handlePop={handlePop} /> : null} */}
      </div>
      <div className="flex flex-row w-full h-full">
        <div className="flex w-2/12 flex-wrap p-4 mr-12 bg-neutral rounded-xl">
          <Sidebar />
        </div>
        <div className="flex-auto w-10/12 ">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              momentPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            editable={true}
            eventClick={handleEdit}
            eventDrop={handleDrop}
            selectable={true}
            select={handleSelect}
            weekends={true}
            events={formatEvents(events)}
            eventBackgroundColor="lightGrey"
            eventBorderColor="white"
            eventTextColor="black"
            eventDisplay="auto"
            eventContent={renderEventContent}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridYear,dayGridMonth,dayGridWeek,dayGridDay",
            }}
            firstDay={1}
          />
        </div>
      </div>
    </div>
  );
};

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <div className="text-center font-medium  hover:bg-yellow-300 hover:underline">
        {eventInfo.event.title}
      </div>

      {/* <b>{eventInfo.timeText}</b> */}

      {/* <i>{eventInfo.event.title}</i> */}
    </>
  );
}

export default Calendar;
