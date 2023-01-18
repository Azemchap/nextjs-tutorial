import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AllEvents = ({ data }) => {
  return (

    <>
      <h1 className='text-4xl mb-16'> Event Cities </h1>


      <div className="grid gap-12 lg:grid-cols-3 sm:grid-cols-2 ">
        {data?.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <a className="shadow-md hover:scale-105 transition-all">
              <Image src={ev.image} alt={ev.title} width={600} height={400} />
              <div className="info p-4">
                <h2 className="text-2xl ">{ev.title} </h2>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default AllEvents
