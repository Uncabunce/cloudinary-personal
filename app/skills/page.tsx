import React from 'react';
import Link from "next/link";

const page = () => {
  return (
    <div className="text 5xl underline text-center">
      <ul>
        <li>
          <Link href="/skills/1">Nama: William</Link>
        </li>
        <li>
          <Link href="/skills/2">Nama: William2</Link>
        </li>
      </ul>
    </div>
    
  )
}

export default page