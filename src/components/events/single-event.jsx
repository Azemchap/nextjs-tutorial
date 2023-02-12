import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SingleEvent = ({ data }) => {
  return (
    <div className="">
      <h1 className='text-4xl mb-8'> {data.title} </h1>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <Image width={300} height={300} alt={data.title} src={data.image} />
        <div className="info p-4">
          <h2 className='text-2xl mb-2'> {data.title} </h2>
          <p> {data.description} </p>
          <div className='justify-self-end'>
            <div className="mt-3 flex flex-col items-start">
              <p className="sr-only">{data.rating} out of 5 stars</p>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      data.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                      'flex-shrink-0 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1 text-sm ">{data.reviewCount} reviews</p>
            </div>
            <p className="mt-4 text-base font-medium ">$ {data.price}</p>
            <Link href={`/thank-you`} passHref>
              <a className='inline-block rounded-sm my-4 p-4 px-10 bg-sky-500 text-white uppercase'><p>Add To Cart</p></a>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleEvent
