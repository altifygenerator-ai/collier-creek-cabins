import { reviews } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Reviews() {
  const reviewLoop = [...reviews, ...reviews];

  return (
    <section className="reviews-section reviews-marquee-section section-pad" id="reviews">
      <div className="reviews-soft-mark">Guest Stories</div>

      <div className="container">
        <Reveal className="section-heading reviews-heading reviews-heading-v2">
          <p className="eyebrow">Guest reviews</p>
          <h2>Peaceful stays, creek days, and guests who come back.</h2>
          <p>
            Guests mention the quiet setting, clear creek, covered porches,
            family space, dog friendly stays, and the feeling of getting away
            without being far from town.
          </p>
        </Reveal>
      </div>

      <Reveal className="reviews-marquee-shell reviews-marquee-shell-full">
        <div className="container reviews-marquee-top reviews-marquee-top-contained">
          <div>
            <span>What guests are saying</span>
            <strong>Real reviews from stays at Collier Creek.</strong>
          </div>
          <p>Hover to pause</p>
        </div>

        <div className="reviews-marquee-window reviews-marquee-window-full">
          <div className="reviews-marquee-track">
            {reviewLoop.map((review, index) => (
              <article className="review-card review-card-marquee" key={`${review.name}-${index}`}>
                <div className="review-stars" aria-label="5 star review">
                  ★★★★★
                </div>

                <p>“{review.text}”</p>

                {review.note ? <span>{review.note}</span> : null}

                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
