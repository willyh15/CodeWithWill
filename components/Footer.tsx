import { FaLinkedin, FaGithub, FaUpwork } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center">
      <p className="text-gray-400 mb-4">Follow me on</p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          className="text-gray-400 hover:text-neon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/yourusername"
          className="text-gray-400 hover:text-neon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.upwork.com/freelancers/yourprofile"
          className="text-gray-400 hover:text-neon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpwork size={24} />
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-4">© 2024 Your Name</p>
    </footer>
  );
}
