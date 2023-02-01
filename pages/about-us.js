/* eslint-disable react/no-unescaped-entities */
const AboutUsPage = () => {
  return (
    <div >
      <h1 className='my-4 text-slate-900 text-2xl'> About us </h1>
      <p>
        We make products that are engineered on the inside for life on the outside. We do this so our customers can make the most of the time they spend pursuing their passions.
      </p>
      
      <p className='mt-4'>
        With over 19,000 associates in 34 countries around the world, we bring GPS navigation and wearable technology to the automotive, aviation, marine, outdoor and fitness markets. We think every day is an opportunity to innovate and a chance to beat yesterday.

      </p>
      <ul className="mt-4 grid lg:grid-cols-3 gap-8 bg-slate-200 p-10">
        <li>
          <h2>MISSION </h2>
          <p>
            To be an enduring company by creating superior products for automotive, aviation, marine, outdoor, and sports that are an essential part of our customers's lives.
          </p>
        </li>
        <li>
          <h2>VISION</h2>
          <p>
            We will be the global leader in every market we serve, and our products will be sought after for their compelling design, superior quality, and best value.
          </p>
        </li>
        <li>
          <h2>VALUES</h2>
          <p>
            The foundation of our culture is honesty, integrity, and respect for associates, customers, and business partners. Each associate is fully committed to serving customers and fellow associates through outstanding performance and accomplishing what we say we will do
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutUsPage;
