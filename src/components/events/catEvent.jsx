import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="">
      <h1 className='text-4xl mb-16'> Events in {pageName} </h1>

      <div className="grid gap-16 lg:grid-cols-3 sm:grid-cols-2">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <a className="flex flex-col shadow-md hover:scale-105 transition-all">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <div className="info p-4">
                <h2 className='text-2xl mb-2'> {ev.title} </h2>
                {/* <p> {ev.description} </p> */}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
