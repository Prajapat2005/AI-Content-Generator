"use client"

import { useEffect, useState } from "react"
import { Copy, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { OUT } from "./history-log"

/* interface Event {
  id: string
  type: string
  description: string
  timestamp: Date
} */

interface EventRowProps {
  event: OUT
}

export function EventRow({ event }: EventRowProps) {

  const [copied, setCopied] = useState(false);

  return (
    <div className="group transition-colors duration-200 hover:bg-muted/30">
      {/* Mobile view (stacked) */}
      {/*  <div className="md:hidden p-4 space-y-2">
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
        <p className="text-sm">{event.aiResponse}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          {event.createdAt}
        </div>
      </div> */}

      {/* Desktop view (grid) */}
      <div className="hidden md:grid md:grid-cols-12 gap-3 items-center px-4 py-3">

        <div className="md:col-span-3">
          {event.templateSlug}
        </div>

        <div className="md:col-span-6 text-sm h-15 w-[90%] overflow-hidden text-ellipsis">
          {event.aiResponse}
        </div>

        <div className="md:col-span-2 text-sm text-muted-foreground flex items-center">
          <Clock className="h-3 w-3 mr-1 inline" />
          {event.createdAt}
        </div>

        <div className="md:col-span-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 transition-all duration-200 hover:bg-background"
                  onClick={() => {
                    //@ts-ignore
                    navigator.clipboard.writeText(event.aiResponse);
                    setCopied(true);
                  }}
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
