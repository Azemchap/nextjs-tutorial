import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const HomePage = ({ data }) => (
  <div className=" grid gap-8 grid-cols-1 sm:mx-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref>
        <a className="flex flex-col h-auto" href={`/events/${ev.id}`}>
          <div className="">
            <Image width={700} height={400} alt={ev.title} src={ev.image} />
          </div>
          <div className="">
            <h2 className='text-2xl mb-2 font-bold '> {ev.title} </h2>
            <p className='text-gray-600 text-lg h-20 overflow-hidden'> {ev.description} </p>
          </div>
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
            <p className="mt-4 text-base font-medium text-gray-800">$ {ev.price} / XAF {ev.price * 550}</p>
          </div>
        </a>
      </Link>
    ))}
  </div>
);