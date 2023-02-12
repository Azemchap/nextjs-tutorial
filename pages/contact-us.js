import Link from 'next/link'

const ContactUsPage = () => {
  return (
    <div className='max-w-xl m-auto text-center flex flex-col items-center gap-4 mt-4' >

      <h1 className='text-2xl mb-10'> THANK YOU FOR VISITING GARMIN ELECTRONICS </h1>
      <h4>FOR ALL YOURS ORDERS AND ENQUIRES PLEASE FEEL FREE TO CONTACT US THROUGH ANY OF THE FOLLOWING MEANS PROVIDED BELOW.</h4>
      <div className="contact_info my-6">
        <h3 ><span className="">Phone: </span><span>+1(503) 377-6489</span></h3>
        <h3 ><span className="">Email: </span><span>garminwatches3@gmail.com</span></h3>


      </div>
      <Link href={`/`} passHref>
        <a className="block bg-sky-500 text-white p-4 mt-4">
          <p>  Go back to homepage</p>
        </a>
      </Link>

    </div>
  )
}

export default ContactUsPage
