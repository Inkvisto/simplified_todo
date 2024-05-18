'use client';

import { User } from "@prisma/client";
import {useEffect} from 'react';

export default function Search({ placeholder, handler, users }: { placeholder: string, handler: any, users: User[] }) {

  useEffect(() => {
    handler(users);
  }, [])


  function handleSearch(term: string) {
    let filtered = users.filter((e) => e.name?.includes(term) || e.email.includes(term));
    handler(filtered);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-64">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
