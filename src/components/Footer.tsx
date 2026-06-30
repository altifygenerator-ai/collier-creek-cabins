import { navLinks, siteInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{siteInfo.name}</strong>
          <p>
            Collier, Liberty and Caddo cabins, wedding barn, clear Collier
            Creek, and private 5 acres near Norman and Caddo Gap.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <p>{siteInfo.address}</p>
          <p>
            {siteInfo.phone} or {siteInfo.secondaryPhone}
          </p>
          <p>{siteInfo.hours}</p>
        </div>
      </div>
    </footer>
  );
}
