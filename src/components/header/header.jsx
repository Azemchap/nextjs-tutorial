import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 p-2 px-8 bg-teal-600 shadow-sm z-10">
        <div className='max-w-screen-xl m-auto flex justify-between items-center '>
          <Link href="/" passHref>
            <Image className='block cursor-pointer' alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          </Link>


          <nav className='flex gap-4 items-center'>
            <Link href="/events" passHref>
              <a> Events</a>
            </Link>

            <Link href="/about-us" passHref>
              <a> About</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
