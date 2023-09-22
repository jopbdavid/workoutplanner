import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import momentPlugin, { toMoment } from "@fullcalendar/moment";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./CalendarModal";
import CalendarPop from "./CalendarPop";

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

  const handlePop = () => {
    setModal(!modal);
  };

  const handleSelect = (eventInfo) => {
    setModal(!modal);
    const eventNamePrompt = prompt("Enter event name:");
    if (!eventNamePrompt) {
      alert("Please provide a valid event name");
      return;
    }
    setEvents([
      ...events,
      {
        title: eventNamePrompt,
        start: eventInfo.startStr,
      },
    ]);
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
    <div>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          Workout Planner
        </h1>
      </div>
      <hr className="w-12 h-8 mx-auto my-8 bg-gray-600 border-4 rounded md:my-12 dark:bg-gray-900" />
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center pb-10">
        <CalendarModal />
        {modal ? <CalendarPop handlePop={handlePop} /> : null}
      </div>

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
        eventContent={renderEventContent}
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridYear,dayGridMonth,dayGridWeek,dayGridDay",
        }}
        firstDay={1}
      />
    </div>
  );
};

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.event.title}</b>

      {/* <b>{eventInfo.timeText}</b> */}

      {/* <i>{eventInfo.event.title}</i> */}
    </>
  );
}

export default Calendar;
