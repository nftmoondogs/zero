// components/AboutSection.js
export default function AboutSection() {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">Cursed by Solana Jeets, Now going to 0%💀</h2>
          <p className="text-base mb-4">
            $ZERO Creepy website, Dev is cursed, Token is cursed then why are you here?
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-3">SOS   ?????????☠️</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Man what the hell are you really? Now reading key point. Look at the freaking ticker $ZERO </li>
            <li>No Let's Send it to Radium, No Lambo, No more, No Dev is based just Zero Percent</li>
            <li>Looks like you're still reading so like me tell you Clearly We are going to ZERO</li>
          </ul>
          <img src="https://i.ibb.co/P6mfd9R/Banner1-ezgif-com-webp-to-gif-converter.gif" alt="Wen Logo" className="mx-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" />
        </div>
        
        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/phSNMnL/skull-ezgif-com-webp-to-gif-converter.gif" alt="Skull Animation" className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
