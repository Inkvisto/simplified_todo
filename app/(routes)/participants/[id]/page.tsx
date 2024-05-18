'use server'

import { getUsers } from "@/app/api/events/db";

export default async function Page({ params }: { params: { id: number } }) {
  const event = await getUsers(Number(params.id));
  return <div className="grid grid-cols-4 gap-4 p-24">{
    event?.users.map((e) => {
      return (<div key={e.id} className="border p-4 grid gap-4">
        <h2>{e.name}</h2>
        <div>{e.email}</div>
      </div>)
    })
  }
  </div>
}
