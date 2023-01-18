import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => (
  <div className="home_body flex flex-col gap-20 mt-10">
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref>
        <a className="card flex flex-col md:flex-row md:items-center gap-10" href={`/events/${ev.id}`}>
          <div className="md:w-5/12 w-full">
            <Image width={700} height={400} alt={ev.title} src={ev.image} />
          </div>
          <div className=" md:w-5/12 w-full">
            <h2 className='text-2xl mb-2'> {ev.title} </h2>
            <p className='text-gray-700 text-lg'> {ev.description} </p>
          </div>
        </a>
      </Link>
    ))}
  </div>
);
