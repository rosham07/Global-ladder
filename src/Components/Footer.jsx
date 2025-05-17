import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col justify-start">
          <h2 className="text-xl font-bold mb-4">Global Ladder Education Network</h2>
          <p className="text-sm text-gray-400 mb-4 max-w-md">
            We at Global Ladder strive to meet all educational needs of students pursuing higher education overseas.
            It is led by young and experienced professionals.
          </p>
          <div className="flex items-center space-x-4 text-xl text-gray-300">
            <a href="https://www.facebook.com/share/1DbNDAGnkM/?mibextid=wwXIfr" aria-label="Facebook" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@globalladdereducationnetwork" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </a>
              <a href="https://www.instagram.com/globalladdereducationnetwork?igsh=MXY2enQ4MDQzdHQ1eA%3D%3D&utm_source=qr" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right - Align content to the right */}
        <div className="flex flex-col justify-start text-right">
          <h2 className="text-xl font-bold mb-4">Head Office</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2 justify-end">📍 <span>Old Baneshwor Chowk, Kathmandu</span></li>
            <li className="flex items-start gap-2 justify-end">📞 <span>+977 970-0616287</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-sm text-gray-400 py-4 px-6 text-center">
        <span>© 2025 Global Ladder Education Network</span>
      </div>
    </footer>
  );
}
