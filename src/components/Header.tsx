import { navLinks, siteInfo } from "@/data/site";

export default function Header() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <header className="site-header">
      <a href="#" className="brand" aria-label="Collier Creek home">
        <span className="brand-mark">CC</span>
        <span>
          <strong>{siteInfo.shortName}</strong>
          <small>Cabins & Wedding Barn</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-call" href={`tel:${tel}`}>
        Call Now
      </a>
    </header>
  );
}
