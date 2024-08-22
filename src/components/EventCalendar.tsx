"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lake Trip",
    time: "12:00PM - 02:00PM",
    description: "Lake Malawi Trip",
  },
  {
    id: 2,
    title: "Picnic",
    time: "02:00PM - 06:00PM",
    description: "Picnic at the lake",
  },
  {
    id: 3,
    title: "Lake Malawi Museum Trip",
    time: "07:00AM - 10:00AM",
    description: "Lake Malawi Museum trip",
  },
  {
    id: 4,
    title: "Beach Trip",
    time: "10:00AM - 12:00PM",
    description: "Go to the beach. Play beach volley ball.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-heliosSky even:border-t-heliosPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-sm text-gray-500">{event.time}</span>
            </div>
            <p className="text-sm mt-2 text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
