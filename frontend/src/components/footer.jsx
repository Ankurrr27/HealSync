export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand + About */}
        <div className="col-span-2">
          <h2 className="text-blue-400 text-xl sm:text-3xl font-bold mb-4">HealSync</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            HealSync is your digital wellness companion. From storing medical history to scheduling checkups and giving
            you personalized health reminders — we’ve got your back. Health simplified, beautifully.
          </p>
          <div className="mt-4 flex space-x-4 text-2xl">
            {/* Social Icons */}
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white text-base sm:text-xl font-semibold mb-4">Explore</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#dashboard" className="hover:text-blue-400">Dashboard</a></li>
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
            <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-base sm:text-xl font-semibold mb-4">Resources</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-blue-400">Terms of Service</a></li>
            <li><a href="#support" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-base sm:text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:team@healsync.in" className="hover:text-blue-400">
                team@healsync.in
              </a>
            </li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: IIIT Kota, India</li>
            <li>Available: Mon – Sat, 9AM – 7PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 px-6 text-center text-gray-500 text-sm">
        <p>
          Made with care by{" "}
          <span className="text-blue-400 font-semibold">HealSync Team</span>
        </p>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}