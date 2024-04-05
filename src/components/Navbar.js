// components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="https://i.ibb.co/hdXN0Dw/logored-ezgif-com-webp-to-gif-converter.gif" alt="ZERO" className="h-12 mr-3" />
            <h2 className="text-2xl font-bold text-white">$ZERO</h2>
          </a>
        </div>
        <div className="flex items-center">
          {/* Twitter Icon */}
          <a href="https://twitter.com/zerosoltoken" target="_blank" rel="noopener noreferrer" className="px-3">
            <svg className="fill-current text-red-600 hover:text-white" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.92 2.2-4.92 4.92 0 .386.044.763.128 1.124-4.087-.205-7.713-2.163-10.144-5.144-.424.724-.666 1.564-.666 2.465 0 1.701.867 3.2 2.188 4.078-.806-.026-1.566-.247-2.228-.616v.062c0 2.376 1.69 4.354 3.937 4.804-.411.111-.84.171-1.285.171-.314 0-.62-.03-.917-.086.621 1.937 2.422 3.348 4.557 3.385-1.67 1.309-3.778 2.088-6.066 2.088-.394 0-.779-.023-1.158-.067 2.162 1.386 4.729 2.194 7.486 2.194 8.984 0 13.894-7.438 13.894-13.894 0-.211-.005-.422-.014-.632.954-.689 1.782-1.547 2.437-2.527z"/>
            </svg>
          </a>
          {/* Telegram Icon */}
          <a href="https://t.me/zerosoltoken" target="_blank" rel="noopener noreferrer" className="px-3">
            <svg className="fill-current text-red-600 hover:text-white" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.036 15.464l-.82 2.928c.29.09 2.926-2.195 4.358-3.116l7.426-3.697c1.29-.644-.29-1-.643-.356l-9.32 6.241-3.991-1.807c-1.29-.356-1.29-1.29.357-1.934l11.427-4.358c1.29-.643 2.39.356 1.934 2.01l-1.934 7.07c-.643 2.01-1.29 2.39-2.74 2.39-1.45 0-2.77-.78-3.59-1.6l-.82-.82-1.93 1.45c-.29.22-.56.42-.82.42-.27 0-.54-.2-.54-.75 0-.54.27-1.09.54-1.45l1.09-2.01z" fill-rule="evenodd"/>
            </svg>
          </a>
          {/* Optionally, you can add more navigation links here */}
        </div>
      </div>
    </nav>
  );
}
