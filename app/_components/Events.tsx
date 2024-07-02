'use client'
import Card from "./Card"
import colors from "tailwindcss/colors"


const Events = () => {
  const events = [
    {id: 1, title: "Tech Innovators Conference", description: "A conference showcasing the latest in technology and innovation.", event_date: "2024-07-20T09:00:00Z", organizer: "TechWorld Inc."},
    {id: 2, title: "Health and Wellness Expo", description: "An event focusing on health, wellness, and fitness trends.", event_date: "2024-08-15T10:00:00Z", organizer: "Healthy Living Association"},
    {id: 3, title: "Culinary Arts Festival", description: "A festival celebrating culinary arts with live cooking demonstrations.", event_date: "2024-09-10T11:00:00Z", organizer: "Gourmet Delights Co."},
    {id: 4, title: "Sustainable Living Workshop", description: "Workshops on sustainable living practices and eco-friendly solutions.", event_date: "2024-06-05T13:00:00Z", organizer: "Green Earth Initiatives"},
    {id: 5, title: "Business Leadership Summit", description: "A summit for business leaders to discuss strategies and leadership skills.", event_date: "2024-11-22T09:30:00Z", organizer: "Global Business Network"},
    {id: 6, title: "Art and Culture Fair", description: "A fair featuring various forms of art and cultural performances.", event_date: "2024-10-18T14:00:00Z", organizer: "Creative Arts Society"},
    {id: 7, title: "Science and Innovation Expo", description: "An expo showcasing the latest advancements in science and technology.", event_date: "2024-12-05T08:00:00Z", organizer: "FutureTech Expo Ltd."},
    {id: 8, title: "Music and Dance Festival", description: "A festival with live music and dance performances from around the world.", event_date: "2024-08-25T17:00:00Z", organizer: "Harmony Events"},
    {id: 9, title: "Digital Marketing Conference", description: "A conference on the latest trends and strategies in digital marketing.", event_date: "2024-07-12T10:00:00Z", organizer: "MarketMinds LLC"},
    {id: 10, title: "Outdoor Adventure Expo", description: "An expo featuring outdoor activities and adventure gear.", event_date: "2024-05-29T12:00:00Z", organizer: "Adventure Seekers Association"}
  ];


  let palette = Object.entries(colors).map(e => e[1]['200']).filter(e => e).slice(4);

  return (<div>

    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4">
      {events.map((event: any) => {
        let rand = Math.floor(Math.random() * 23);
        return (<Card key={event.id} {...event} color={palette[rand]} />);
      })}
    </div>
  </div>
  )
}

export default Events;
