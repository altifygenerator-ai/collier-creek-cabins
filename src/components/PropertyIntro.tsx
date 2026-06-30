import Reveal from "@/components/Reveal";

const cards = [
  {
    title: "Liberty, Collier and Caddo",
    text: "Three luxury cabins on beautiful clear cool Collier Creek with private acreage to enjoy.",
  },
  {
    title: "Clear Collier Creek",
    text: "Dip in a crystal clear creek to swim, snorkel or soak yourself, with hiking and exploring right off the property.",
  },
  {
    title: "Wedding Barn & Events",
    text: "Host a wedding or special event on the majestic creek with rolling hills scenery and trees.",
  },
];

export default function PropertyIntro() {
  return (
    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">About the property</p>
          <h2>Luxury cabins, wilderness, wedding space, and rolling hills scenery.</h2>
          <p>
            Collier, Liberty and Caddo luxury cabins sit on beautiful clear cool
            Collier Creek. Private 5 acres to enjoy the wilderness and luxury
            cabins. The property also hosts weddings and special events on the
            majestic creek with rolling hills scenery and trees.
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
