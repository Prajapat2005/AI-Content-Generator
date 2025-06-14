"use client"
import { useState } from "react"
import { EventRow } from "./event-row"
import { Card } from "@/components/ui/card"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { eq } from "drizzle-orm"

export interface OUT {
  id: number,
  templateSlug: string,
  createdAt: string | null,
  aiResponse: string | null,
}



export function HistoryLog() {
  const [events, setEvents] = useState<Array<OUT>>([]);

  const { user } = useUser();

  const fetch = async () => {
    //@ts-ignore
    try {
      const result: OUT[] = await db.select({
        id: AIOutput.id,
        templateSlug: AIOutput.templateSlug,
        createdAt: AIOutput.createdAt,
        aiResponse: AIOutput.aiResponse,
        // @ts-ignore
      }).from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      setEvents(result);
      console.log(result);

    } catch (e) {
      // @ts-ignore
      console.error(e.message);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Card className="overflow-hidden border shadow-sm">
      <div className="bg-muted/80 px-4 py-3 hidden md:grid md:grid-cols-12 gap-4 font-medium text-sm border-b ">
        <div className="md:col-span-3">Type</div>
        <div className="md:col-span-6">Description</div>
        <div className="md:col-span-2">Date & Time</div>
        <div className="md:col-span-1">Action</div>
      </div>
      <div className="divide-y">
        {events.map((ele) => (
          <EventRow key={ele.id} event={ele} />
        ))}
      </div>
    </Card>
  )
}
