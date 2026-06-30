import Reveal from "@/components/Reveal";

const cards = [
  {
    title: "A real creekside stay",
    text: "Guests can walk to the water, sit under the trees, read on the porch, grill outside, and enjoy the kind of quiet that makes a weekend feel longer.",
  },
  {
    title: "Cabins for families and groups",
    text: "Collier, Liberty, and Caddo give guests separate cabin spaces while keeping everyone close to the creek, the porches, and the shared outdoor areas.",
  },
  {
    title: "A place to gather",
    text: "The wedding barn, cabins, creek, and private acreage make the property a natural fit for weddings, family trips, and peaceful getaways.",
  },
];

export default function PropertyIntro() {
  return (
    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <Reveal className="section-heading intro-heading-card">
          <p className="eyebrow">About the property</p>
          <h2>Private cabins, clear creek water, and quiet outdoor space.</h2>
          <p>
            Collier Creek Cabins is built around the simple things guests remember:
            clean cabins, shaded porches, clear water, room to relax, and a peaceful
            setting near Norman and Caddo Gap.
          </p>
        </Reveal>

        <div className="intro-card-grid">
          {cards.map((card, index) => (
            <Reveal delay={index * 0.08} key={card.title}>
              <article className="feature-card">
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
