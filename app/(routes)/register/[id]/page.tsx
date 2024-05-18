'use server'

import RegisterForm from "../../../_components/RegisterForm"

export default async function Page({params}: {params: { id: number}}) {
  return <div className="grid justify-items-center content-center h-screen">
    <RegisterForm id={params.id} />
    </div>
}
