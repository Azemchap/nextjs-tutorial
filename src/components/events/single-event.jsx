import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div className="grid grid-cols-1 justify-center">
      <h1 className='text-4xl mb-8'> {data.title} </h1>
      <Image className='lg:max-h-40' src={data.image} width={600} height={300} alt={data.title} />
      <p className='mt-4 mb-20 text-lg'> {data.description} </p>
      <form onSubmit={onSubmit} className="email_registration ">
        <label className='font-bold text-xl'> Get Registered for this event!</label>
        <div className='flex items-center gap-2'>
          <input
            className='block bg-none max-w-lg p-2 border-2 border-gray-700'
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="email@example.com"
          />
          <button className='my-2 block bg-none px-8 py-2 border-2 border-gray-700' type="submit"> Submit</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
