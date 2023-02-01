import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 '>
      <Disclosure as="nav" className="bg-white shadow ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center mt-3">
                    <Link href={`/`} passHref>
                      <a >
                        <Image
                          className="block lg:hidden h-8 w-auto"
                          src="/images/logo.png"
                          alt="Workflow" width={100} height={25}
                        />
                      </a>
                    </Link>
                    {/* <Image
                      className="hidden lg:block h-8 w-auto"
                      src="/images/1.jpg"
                      alt="Workflow" width={30} height={30}
                    /> */}
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link href={`/events/london`} passHref>
                      <a className="border-transparent text-gray-800 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Wearables
                      </a>
                    </Link>
                    <Link href={`/events/san-francisco`} passHref>
                      <a className="border-transparent text-gray-800 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Electronics
                      </a>
                    </Link>
                    <Link href={`/events/barcelona`} passHref>
                      <a className="border-transparent text-gray-800 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Products
                      </a>
                    </Link>
                  </div>
                </div>


                <div className="hidden sm:ml-6 sm:flex sm:items-center gap-4">

                  <Link href={`/about-us`} passHref>
                    <a className="border-transparent text-gray-800  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      About us
                    </a>
                  </Link>
                  <Link href={`/contact-us`} passHref>
                    <a className="border-transparent text-gray-800  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Contact us
                    </a>
                  </Link>

                </div>


                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href={`/events/barcelona`}
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Wearables
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={`/events/san-francisco`}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Electronics
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={`/events/barcelona`}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Products
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={`/about-us`}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  About us
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={`/contact-us`}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Contact us
                </Disclosure.Button>
              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
