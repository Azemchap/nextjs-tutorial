import Link from 'next/link'
import Image from 'next/image'



export const HomePage = ({ data }) => (
  <div className=" grid gap-12 grid-cols-1 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3">
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref>
        <a className="flex flex-col h-auto" href={`/events/${ev.id}`}>
          <div className="">
            <Image width={700} height={400} alt={ev.title} src={ev.image} />
          </div>
          <div className="">
            <h2 className='text-2xl my-4 font-bold '> {ev.title} </h2>
            <p className=' text-lg '> {ev.description} </p>
          </div>
        </a>
      </Link>
    ))}
  </div>
)