import Image from "next/image";
import Hello from "@/app/components/Hello";

export default function Home() {
  console.log('What kind of component am i?')

  return (

    <main>
      <div className="text-5xl italic text-center">Permen Kaki Rukia</div>
      <Hello />
    </main>

  );
}
