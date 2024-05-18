'use client'

import useSWR from "swr";
import { fetcher } from "../../../_lib/utils"
import Search from "@/app/_components/Search";
import { useState } from 'react';
import { User } from "@prisma/client";

export default function Page({ params }: { params: { id: number } }) {
  const [users, setUsers] = useState<User[] | []>([])
  const { data, error, isLoading } = useSWR(`/api/users?id=${params.id}`, fetcher);
  if (error) return <div className="m-10">failed to load</div>
  if (isLoading) return <div className="m-10">loading...</div>


  const receiveDataHandler = (filtered_users: User[]) => {
    setUsers(filtered_users);
  }

  return <div className="m-6">
    <Search placeholder="write email or name" handler={receiveDataHandler} users={data.data.users} />


    <div className="grid grid-cols-4 gap-4 p-14">{
      users.map((e: User) => {
        return (<div key={e.id} className="border p-4 grid gap-4">
          <h2>{e.name}</h2>
          <div>{e.email}</div>
        </div>)
      })
    }
    </div></div>
}
