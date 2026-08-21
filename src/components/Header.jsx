import Logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#', accent: false },
  { label: "We're Hiring!", href: '#', accent: true },
  { label: 'Contact', href: '#', accent: false },
];

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-20 flex justify-center border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <img src={Logo} alt="ideaflow-logo" className="h-9" />
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className={`group relative text-sm font-medium transition-colors ${
                  link.accent ? 'text-accent hover:text-accent-soft' : 'text-white/80 hover:text-white'
                }`}
                href={link.href}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
