import { reviews } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Reviews() {
  return (
    <section className="reviews-section section-pad" id="reviews">
      <div className="container">
        <Reveal className="section-heading reviews-heading">
          <p className="eyebrow">Guest reviews</p>
          <h2>Peaceful stays, creek days, and guests who come back.</h2>
          <p>
            Guests talk about the quiet setting, the clear creek, covered porches,
            room for families, dog friendly stays, and the feeling of getting away
            without being far from town.
          </p>
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <Reveal delay={index * 0.035} key={`${review.name}-${index}`}>
              <article className="review-card">
                <div className="review-stars" aria-label="5 star review">
                  ★★★★★
                </div>
                <p>“{review.text}”</p>
                {review.note ? <span>{review.note}</span> : null}
                <strong>{review.name}</strong>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
