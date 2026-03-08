'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'Mia by Tanishq', logo: 'https://www.miabytanishq.com/on/demandware.static/-/Sites-Mia-Library/default/dw52c9c6d5/images/logo/mia.png' },
  { name: 'HDFC Mutual Fund', logo: 'https://www.hdfcfund.com/nextjs/images/Header/Hdfc-Logo-Main.svg' },
  { name: 'Aditya Birla Mutual Fund', logo: 'https://mutualfund.adityabirlacapital.com/-/media/192x65-png-logo.png' },
  { name: 'Swiggy Instamart', logo: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto//InstamartAssets/DWeb%20Changes/Instamart%20log.png' },
  { name: 'ZOHO', logo: 'https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg' },
  { name: 'Tanishq', logo: 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-Library/default/dw2cc5e320/images/logo.svg' },
  { name: 'Shaadi.com', logo: 'https://img2.shaadi.com/imgs/brand/2026/logos/shaadi_logo.svg' },
  { name: 'Raymond', logo: 'https://www.raymond.in/static/media/raymond-logo-high-res.bfe9e301e74b77aa6f8c.png' },
  { name: 'TATA Motors', logo: 'https://www.tatamotors.com/wp-content/themes/TataMotors/images/logo-tata-motors.svg' },
  { name: 'Stanley', logo: 'https://www.lovestanley.com/images/logo.png' },
  { name: 'Snacc', logo: 'https://eatsnacc.com/cdn/shop/files/snacc_logo_200x.png' },
];

const ClientMarquee = () => {
  // Duplicate the list to create a seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-white overflow-hidden py-12 md:py-16 border-y border-gray-100">
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex items-center space-x-12 md:space-x-24"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full w-auto object-contain max-w-[120px] md:max-w-[160px]"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;
