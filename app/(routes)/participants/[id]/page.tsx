'use server'

export default async function Page({ params }: { params: { id: number } }) {
  const users = [
    {id: 21,
      name: 'Some',
      email: 'some@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 1
},
    {id: 22,
      name: 'Filip',
      email: 'fil@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 1
},
    {id: 23,
      name: 'Robert',
      email: 'rob@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 2
},
    {id: 24,
      name: 'Egor',
      email: 'qwe@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 6
},
    {id: 25,
      name: 'Omni',
      email: 'om@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 6
},
    {id: 26,
      name: 'Liki',
      email: 'riki@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 6
},
    {id: 27,
      name: 'Livcy',
      email: 'love@gmail.com',
      birth: "2004-12-02T22:00:00.000Z",
      social: ["Friends"],
      eventId: 2
},
  ];

  return <div className="grid grid-cols-4 gap-4 p-24">{
    users.map((e:any) => {
      return (<div className="border p-4 grid gap-4">
        <h2>{e.name}</h2>
        <div>{e.email}</div>
      </div>)
    })
  }
  </div>
}
