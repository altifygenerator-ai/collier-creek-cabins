import type { CSSProperties } from "react";
import { images, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section
      className="hero hero-modern"
      style={{ "--hero-bg": `url(${images.hero})` } as CSSProperties}
    >
      <div className="container hero-modern-inner">
        <Reveal className="hero-modern-copy">
          <p className="hero-script-line">
            A quiet creekside stay in Norman, Arkansas
          </p>

          <p className="hero-text">{siteInfo.heroText}</p>

          <div className="hero-actions">
            <a href="#cabins" className="btn btn-primary">
              View Cabins
            </a>
            <a href="#weddings" className="btn btn-secondary">
              Wedding Barn
            </a>
            <a href={`tel:${tel}`} className="btn btn-ghost-dark">
              Call {siteInfo.phone}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-bottom-bar hero-bottom-bar-clean">
        <div className="container hero-bottom-inner hero-highlight-strip">
          <div>
            <span>Settle in</span>
            <strong>Three cabins with covered porches and room to relax.</strong>
          </div>
          <div>
            <span>Step outside</span>
            <strong>Clear Collier Creek for swimming, fishing, and exploring.</strong>
          </div>
          <div>
            <span>Gather here</span>
            <strong>A rustic wedding barn, shade trees, grills, and private acreage.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
