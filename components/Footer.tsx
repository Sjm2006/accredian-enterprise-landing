'use client';

import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Accredian',
    links: [
      { label: 'About', href: 'https://accredian.com/About' },
      { label: 'Why Accredian', href: 'https://accredian.com/whyaccredian' },
      { label: 'Blog', href: 'https://blog.accredian.com/' },
      { label: 'Contact', href: 'mailto:enterprise@accredian.com' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Corporate Training', href: '#' },
      { label: 'Executive Learning', href: '#' },
      { label: 'AI & Data', href: '#' },
      { label: 'Leadership', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Enquire Now', href: 'mailto:enterprise@accredian.com' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-lg">Accredian</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Transforming workforce development with industry-recognized certifications and custom learning programs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-medium bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-medium bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-medium bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-medium border-opacity-20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Accredian A Brand of FullStack Education Pvt Ltd. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
              <span className="text-gray-400">enterprise@accredian.com</span>
              <span className="text-gray-400">
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}