export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col justify-start">
          <h2 className="text-xl font-bold mb-4">Global Ladder Education Consultancy</h2>
          <p className="text-sm text-gray-400 mb-4 max-w-md">
            We at Global Ladder strive to meet all educational needs of students pursuing higher education overseas.
            It is led by young and experienced professionals.
          </p>
          <div className="flex items-center space-x-4 text-xl text-gray-300">
            <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">📺</a>
            <a href="#" aria-label="Google" className="hover:text-white">🌐</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">📷</a>
          </div>
        </div>

        {/* Right - Align content to the right */}
        <div className="flex flex-col justify-start text-right">
          <h2 className="text-xl font-bold mb-4">Head Office</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2 justify-end">📍 <span>New Baneshwor, Kathmandu</span></li>
            <li className="flex items-start gap-2 justify-end">📞 <span>+977-9840934933</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-sm text-gray-400 py-4 px-6 text-center">
        <span>© 2025 Global Ladder Education Consultancy</span>
      </div>
    </footer>
  );
}
