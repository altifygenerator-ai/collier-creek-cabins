import { galleryImages } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function PhotoMosaic() {
  return (
    <section className="photo-mosaic-section section-pad" id="photos">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">Photos</p>
            <h2>Cabins, creek water, porches, and wedding barn space.</h2>
          </div>
          <p>
            The property already has the texture: wood siding, covered porches,
            sunlight through the trees, creek water, grills, signs, and a rustic
            barn setting. The design should let those real photos do the work.
          </p>
        </Reveal>

        <div className="photo-mosaic photo-mosaic-expanded">
          {galleryImages.map((image, index) => (
            <Reveal delay={index * 0.05} key={`${image.src}-${index}`}>
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
