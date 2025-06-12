"use client"

import { useState } from "react"
import { Copy, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Event {
  id: string
  type: string
  description: string
  timestamp: Date
}

interface EventRowProps {
  event: Event
}

export function EventRow({ event }: EventRowProps) {
  const [copied, setCopied] = useState(false)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="group transition-colors duration-200 hover:bg-muted/30">
      {/* Mobile view (stacked) */}
      <div className="md:hidden p-4 space-y-2">
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span className="sr-only">Copy event details</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "Copied!" : "Copy event details"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm">{event.description}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          {formatDate(event.timestamp)}
        </div>
      </div>

      {/* Desktop view (grid) */}
      <div className="hidden md:grid md:grid-cols-12 gap-4 items-center px-4 py-3">
        <div className="md:col-span-3">
          {/* type  */}
        </div>
        <div className="md:col-span-5 text-sm">{event.description}</div>
        <div className="md:col-span-3 text-sm text-muted-foreground flex items-center">
          <Clock className="h-3 w-3 mr-1 inline" />
          {formatDate(event.timestamp)}
        </div>
        <div className="md:col-span-1 text-right">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 transition-all duration-200 hover:bg-background"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  )}
                  <span className="sr-only">Copy event details</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{copied ? "Copied!" : "Copy event details"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
