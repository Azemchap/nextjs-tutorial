import Image from 'next/image'
import Link from 'next/link'

const ThankYou = () => {
  return (
    <div className='max-w-lg m-auto text-center flex flex-col items-center gap-4 mt-4' >
      <svg width={200} height={200} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" opacity=".35" fill="#288FB4" />
        <path d="M11,16c-0.256,0-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L11,13.586l4.293-4.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-5,5C11.512,15.902,11.256,16,11,16z" fill="#288FB4" />
      </svg>
      <h1 className=' text-sky-500 text-2xl'> Thank you.. </h1>
      <h4 className=''>Your order has been received. Our agent will get to you to confirm your order and for payment details.</h4>
      <Link href={`/`} passHref>
        <a className="block bg-sky-500 text-white p-4 mt-4">
          <p>  Go back to homepage</p>
        </a>
      </Link>

    </div>
  )
}

export default ThankYou
