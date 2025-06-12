"use client"

import { useState } from "react"
import { EventRow } from "./event-row"
import { Card } from "@/components/ui/card"

const sampleEvents = [
  {
    id: "evt_1",
    type: "User Login",
    description: "User successfully authenticated via email and password",
    timestamp: new Date("2023-11-10T08:23:15"),
  },
  {
    id: "evt_2",
    type: "File Upload",
    description: "User uploaded document 'quarterly-report.pdf' (2.4MB)",
    timestamp: new Date("2023-11-09T14:05:32"),
  },
  {
    id: "evt_3",
    type: "Payment Processed",
    description: "Payment of $129.99 processed successfully for Premium Plan subscription",
    timestamp: new Date("2023-11-08T11:42:07"),
  },
  {
    id: "evt_4",
    type: "Account Update",
    description: "User updated profile information including contact details and preferences",
    timestamp: new Date("2023-11-07T16:30:45"),
    status: "info",
  },
  {
    id: "evt_5",
    type: "API Request",
    description: "External API request to /api/data/sync completed with status 200",
    timestamp: new Date("2023-11-06T09:12:38"),
    status: "warning",
  },
]

export function HistoryLog() {
  const [events, setEvents] = useState(sampleEvents)

  return (
    <Card className="overflow-hidden border shadow-sm">
      <div className="bg-muted/80 px-4 py-3 hidden md:grid md:grid-cols-12 gap-4 font-medium text-sm border-b">
        <div className="md:col-span-3">Type</div>
        <div className="md:col-span-5">Description</div>
        <div className="md:col-span-3">Date & Time</div>
        <div className="md:col-span-1 text-right">Action</div>
      </div>
      <div className="divide-y">
        {events.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </div>
    </Card>
  )
}
