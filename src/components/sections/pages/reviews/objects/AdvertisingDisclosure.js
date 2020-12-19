import React from 'react';

const advertisingModalTrigger = (
      <p className="m-0 mb-16 reveal-from-bottom text-xs text-color-primary" data-reveal-delay="600">
          Advertising Disclosure
      </p>
  );

  const advertisingDiclosureText = (
    <span className='text-xs'>
      <p>We make money through affiliate links. Here is how they generally work:</p>

      <p>If you click on one of the “Learn More” buttons and sign up for the product/service within a specified time frame, we will receive a portion of the money you spend on that product/service. This is known as a revenue share model.</p>

      <p><b>The more you enjoy and actively use the products/services we recommend, the more money we make!</b></p>

      <p>The specified time frame and amount of compensation we receive will vary depending on how these products/services structure their program.</p>

      <p>Note that even though we are financially incentivised for you to spend money on their platform, affiliate programs <b>will never</b> influence how we structure content on our website. Because most companies will offer an affiliate program to attract new customers, these programs will not play a role in our decision making process. Although some of these affiliate programs may be more attractive than others from a compensation perspective, it will not impact which companies we choose to support and advertise. It simply does not align with our mission.</p>
    </span>
  );

  export {
      advertisingModalTrigger,
      advertisingDiclosureText
  };