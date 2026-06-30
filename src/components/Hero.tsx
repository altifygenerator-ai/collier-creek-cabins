import { siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section className="hero hero-full">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <Reveal className="hero-panel">
          <p className="hero-kicker">{siteInfo.eyebrow}</p>
          <h1>{siteInfo.heroTitle}</h1>
          <p className="hero-text">{siteInfo.heroText}</p>

          <div className="hero-actions">
            <a href="#cabins" className="btn btn-primary">
              View Cabins
            </a>
            <a href="#reviews" className="btn btn-secondary">
              Read Reviews
            </a>
            <a href={`tel:${tel}`} className="btn btn-ghost">
              Call {siteInfo.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
