import { navLinks, siteInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{siteInfo.name}</strong>
          <p>
            Three cabins, a wedding barn, and five private acres along clear
            Collier Creek near Norman and Caddo Gap.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p>
          {siteInfo.address}<br />
          {siteInfo.phone} · {siteInfo.email}
        </p>
      </div>
    </footer>
  );
}
