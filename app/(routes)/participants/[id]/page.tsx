'use client'

import useSWR from "swr";
import { fetcher } from "../../../_lib/utils"

export default function Page({ params }: { params: { id: number } }) {

  const { data, error, isLoading } = useSWR(`/api/users?id=${params.id}`, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return <div className="grid grid-cols-4 gap-4 p-24">{
    data.data.users.map((e) => {
      return (<div key={e.id} className="border p-4 grid gap-4">
        <h2>{e.name}</h2>
        <div>{e.email}</div>
      </div>)
    })
  }
  </div>
}
