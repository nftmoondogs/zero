import React from 'react';

const FooterSection = () => {
  return (
    <footer id="foundation" className="bg-gradient-to-b from-black via-black to-red-600 text-white py-12 px-8">
      <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Logo and Title */}
        <div>
          <img src="https://i.ibb.co/hdXN0Dw/logored-ezgif-com-webp-to-gif-converter.gif" alt="Logo" className="mx-auto mb-4 h-20 w-auto transition duration-300 ease-in-out hover:scale-105" />
          <h2 className="text-3xl font-bold">$ZERO Token</h2>
        </div>
        
        {/* Description and Social Icons */}
        <div>
          <p className="leading-relaxed max-w-xl mx-auto text-lg mb-6">
          $ZERO: A cursed Token with a cursed dev, and if we're all cursed, why not enjoy the fright?

SOS or SOSOS, who cares? We’re riding with $ZERO! ☠️
What in the underworld? Peek at the ticker: $ZERO – it's not just a name, it’s a prophecy.
Forget Radium launches, forget moonshot fantasies, and forget those "based" devs. We’re rocking it raw and real with Zero Percent.
Still here? Well, embrace the void! We’re on a one-way journey to ZERO, where we revel in the nothingness.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Insert your social media links */}
            <a href="https://t.me/zerosoltoken" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition duration-300 ease-in-out hover:scale-125">
              {/* Twitter Icon */}
              {/* Placeholder for an icon. Use an actual <img> or <svg> here */}
              <span>Twitter</span>
            </a>
            <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition duration-300 ease-in-out hover:scale-125">
              {/* Facebook Icon */}
              {/* Placeholder for an icon. Use an actual <img> or <svg> here */}
              <span>Telegram</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
