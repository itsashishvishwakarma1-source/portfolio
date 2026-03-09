'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'Mia by Tanishq', logo: '/logos/mia.png' },
  { name: 'HDFC Mutual Fund', logo: '/logos/hdfc.svg' },
  { name: 'Aditya Birla Mutual Fund', logo: '/logos/adityabirla.png' },
  { name: 'Swiggy Instamart', logo: '/logos/swiggy.png' },
  { name: 'ZOHO', logo: '/logos/zoho.svg' },
  { name: 'Tanishq', logo: '/logos/tanishq.svg' },
  { name: 'Shaadi.com', logo: '/logos/shaadi.svg' },
  { name: 'Raymond', logo: '/logos/raymond.png' },
  { name: 'TATA Motors', logo: '/logos/tatamotors.svg' },
  { name: 'Stanley', logo: '/logos/stanley.png' },
  { name: 'Snacc', logo: '/logos/snacc.png' },
  { name: 'TATA IPL', logo: '/logos/tataipl.png' },
  { name: 'Philips', logo: '/logos/philips.png' },
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
