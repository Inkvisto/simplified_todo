'use server'
import Image from "next/image";
import Events from "../_components/Events";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Events />
    </main>
  );
}
