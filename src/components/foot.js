// components/FooterSection.js
import React from 'react';

const footSection = () => {
  return (
    <footer id="foundation" className="bg-black text-white py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-6">
          <img src="https://i.ibb.co/mbDpJsz/optimized.gif" alt="Wen Logo" className="mx-auto mb-4" style={{ height: '80px' }} />
          <h2 className="font-courier-bold text-2xl">$LUCIFER Token</h2>
        </div>
        
        {/* Description */}
        <p className="font-simpfxo mx-auto leading-relaxed max-w-2xl">
       Sinners and Winners of the Lucifer Legion,

If you've been feeling the heat in the market, it's not just global warming – it's our sizzling Lucifer token setting the blockchain ablaze! Hold onto your souls and wallets, because this token's moves are more unpredictable than a demon at a holy water tasting. Remember, when the charts look like a descent into the underworld, that's just us taking the scenic route to the moon. Let's keep our spirits wicked and our strategies wicked smart. Here's to trading with the devilish charm of a bond villain and the success of a Silicon Valley start-up!

Yours diabolically,
Your Fiendish Devil Degen Leader
        </p>
      </div>
    </footer>
  );
};

export default footSection;
