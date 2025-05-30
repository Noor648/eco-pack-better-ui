import { stayInTouch } from '@/Constants/StayInTouchContants';
import { customerSupport, navLinks } from '../../data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MENU</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-tertiary hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              {customerSupport.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-tertiary hover:text-gray-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay in Touch Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <p className="text-tertiary mb-2">
              <i className="fas fa-phone"></i> {stayInTouch.phone}
            </p>
            <p className="text-tertiary mb-4">
              <i className="fas fa-envelope"></i>{' '}
              <a href={`mailto:${stayInTouch.email}`} className="hover:underline">
                {stayInTouch.email}
              </a>
            </p>
            <h4 className="font-semibold mb-2">Follow us</h4>
            <div className="flex space-x-4">
              {stayInTouch.socialLinks.map((social) => (
                <Link key={social.platform} href={social.href} className="text-black hover:scale-110">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-black">
          <span>© 2025 EcoPakOnline.</span>
          <Link href="https://brandcube.co/" className="hover:underline ml-5">
            Powered by Brandcube
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
