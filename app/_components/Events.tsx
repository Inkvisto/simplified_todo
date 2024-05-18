'use server'
import Card from "./Card"
import { getEvents } from "../api/events/db"
import colors from "tailwindcss/colors"

const Events = async () => {
  const events = await getEvents();

  let palette = Object.entries(colors).map(e => e[1]['200']).filter(e => e).slice(4);

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4">
      {events.map((event) => {
        let rand = Math.floor(Math.random() * 23);
        return (<Card key={event.id} {...event} color={palette[rand]} />);
      })}
    </div>
  )
}

export default Events;
