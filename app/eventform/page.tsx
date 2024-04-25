"use client"
// EventForm.tsx
import React, { useState } from 'react';

interface EventState {
  name: string;
  organisation: string;
  profileLink: string;
  venue: string;
  date: string;
  footfall: string;
  eventType: string;
  guestSpeakers: string;
}

const EventForm: React.FC = () => {
  const [state, setState] = useState<EventState>({
    name: '',
    organisation: '',
    profileLink: '',
    venue: '',
    date: '',
    footfall: '',
    eventType: '',
    guestSpeakers: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Organise an Event</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Organisation Input */}
          <div className="mb-4">
            <label htmlFor="organisation" className="block text-lg font-medium text-gray-600">Organisation</label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={state.organisation}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Profile Link Input */}
          <div className="mb-4">
            <label htmlFor="profileLink" className="block text-lg font-medium text-gray-600">Organiser's Profile Link</label>
            <input
              type="text"
              id="profileLink"
              name="profileLink"
              value={state.profileLink}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Venue Input */}
          <div className="mb-4">
            <label htmlFor="venue" className="block text-lg font-medium text-gray-600">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={state.venue}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-lg font-medium text-gray-600">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={state.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Footfall Input */}
          <div className="mb-4">
            <label htmlFor="footfall" className="block text-lg font-medium text-gray-600">Footfall</label>
            <input
              type="number"
              id="footfall"
              name="footfall"
              value={state.footfall}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Event Type Input */}
          <div className="mb-4">
            <label htmlFor="eventType" className="block text-lg font-medium text-gray-600">Type of Event</label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              value={state.eventType}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Guest Speakers Input */}
          <div className="mb-4">
            <label htmlFor="guestSpeakers" className="block text-lg font-medium text-gray-600">Guest Speakers</label>
            <input
              type="text"
              id="guestSpeakers"
              name="guestSpeakers"
              value={state.guestSpeakers}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          <button type="submit" className="w-1/3 mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
