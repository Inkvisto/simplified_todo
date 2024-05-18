'use client'
import Card from "./Card"
import { fetcher } from "../_lib/utils"
import colors from "tailwindcss/colors"
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { useState } from 'react';
import useSWR from "swr";


const Events = () => {
  const [value, setValue] = useState<any>(new Set(['title']));

  const { data, error, isLoading } = useSWR(`/api/events?order_by=${value.values().next().value}`, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  let palette = Object.entries(colors).map(e => e[1]['200']).filter(e => e).slice(4);

  return (<div>
    <Select
      label="Order by"
      className="max-w-xs mb-10"
      selectedKeys={value}
      onSelectionChange={setValue}
    >
      {['title', 'event_date', 'organizer'].map((e) => {
        return (
          <SelectItem key={e} value={e}>
            {e}
          </SelectItem>
        )
      })}
    </Select>
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4">
      {data.data.map((event: any) => {
        let rand = Math.floor(Math.random() * 23);
        return (<Card key={event.id} {...event} color={palette[rand]} />);
      })}
    </div>
  </div>
  )
}

export default Events;
