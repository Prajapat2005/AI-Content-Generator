"use client"
import { HistoryLog } from "@/app/dashboard/_components/history-log"

export default function HistoryPage() {

  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Event History
        </h1>
        <p className="text-muted-foreground mb-8">A log of all system events</p>
        <HistoryLog />
      </div>
    </div>
  )
}
