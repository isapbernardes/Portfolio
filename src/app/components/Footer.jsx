import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
      <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
        <span className="inline-block p-2 bg-gray-800 rounded-full">

           <Image src="/image/logo.png" alt="Logo" class="w-8 h-auto" />
         </span>

          <p className="text-slate-600">All rights reserved</p>
        </div>
      </footer>
  )
}

export default Footer;
