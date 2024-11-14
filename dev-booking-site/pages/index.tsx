import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Code with Will</h1>
        <p className="text-lg text-gray-300 mb-8">
          Your partner in creating innovative tech solutions with a focus on quality and functionality.
        </p>
        <a href="#contact" className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full transition hover:bg-yellow-300">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
