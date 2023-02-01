import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CatEvent = ({ data }) => {
  return (
    <div className="">
      <div className="grid gap-16 lg:grid-cols-3 sm:grid-cols-2">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <a className="flex flex-col shadow-md hover:scale-105 transition-all">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <div className="info p-4">
                <h2 className='text-2xl mb-2'> {ev.title} </h2>
                <p> {ev.description} </p>
                <div className='justify-self-end'>
                  <div className="mt-3 flex flex-col items-start">
                    <p className="sr-only">{ev.rating} out of 5 stars</p>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            ev.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{ev.reviewCount} reviews</p>
                  </div>
                  <p className="mt-4 text-base font-medium text-gray-800">$ {ev.price}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatEvent
