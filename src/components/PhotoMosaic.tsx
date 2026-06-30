import { galleryImages } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function PhotoMosaic() {
  return (
    <section className="photo-mosaic-section section-pad">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">Around the property</p>
            <h2>Cabins, creek water, grills, signs, and wedding barn space.</h2>
          </div>
          <p>
            Collier Creek brings together clear creek water, covered decks,
            picnic tables, grills, cabin spaces, and a wedding barn on private
            acreage.
          </p>
        </Reveal>

        <div className="photo-mosaic">
          {galleryImages.map((image, index) => (
            <Reveal delay={index * 0.07} key={image.src}>
              <article className={`mosaic-card mosaic-card-${index + 1}`}>
                <img src={image.src} alt={image.title} />
                <div>
                  <span>{image.title}</span>
                  <p>{image.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
