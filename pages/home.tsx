import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mb-8">
          I’m Will, a dedicated developer with a passion for creating innovative and impactful tech solutions...
        </p>
      </div>
    </div>
  );
}
