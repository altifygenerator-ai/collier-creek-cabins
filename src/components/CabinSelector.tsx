"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cabins } from "@/data/site";
import Reveal from "@/components/Reveal";

const cabinExperience: Record<
  string,
  {
    mood: string;
    bestFor: string;
    note: string;
    highlights: string[];
  }
> = {
  "Collier Cabin": {
    mood: "Room to stretch out",
    bestFor: "Families or groups wanting the largest cabin layout.",
    note:
      "A comfortable choice when you want more indoor space, a full kitchen, living room, dining area, and sleeping room for up to seven.",
    highlights: ["Largest cabin", "Loft space", "Full kitchen", "Sleeps 7"],
  },
  "Liberty Cabin": {
    mood: "Simple and easy",
    bestFor: "Couples, small families, or guests who like a cozy studio layout.",
    note:
      "Liberty keeps things simple with a studio setup, full kitchen, covered deck, and easy access to the shared outdoor areas.",
    highlights: ["Studio layout", "Covered deck", "Full kitchen", "Sleeps five"],
  },
  "Caddo Cabin": {
    mood: "Close to the creek",
    bestFor: "Small families, quiet weekends, and relaxed creekside stays.",
    note:
      "Caddo gives guests a comfortable studio cabin with a full kitchen, covered deck, and the same peaceful Collier Creek setting.",
    highlights: ["Studio layout", "Creek setting", "Covered deck", "Sleeps five"],
  },
};

export default function CabinSelector() {
  const [activeCabin, setActiveCabin] = useState(cabins[0]);
  const experience = cabinExperience[activeCabin.name];

  return (
    <section className="cabins-section cabin-highlight-section section-pad" id="cabins">
      <div className="container">
        <Reveal className="section-heading centered narrow-heading cabin-heading-polished">
          <p className="eyebrow">The cabins</p>
          <h2>Pick the cabin that fits your stay.</h2>
          <p>
            Each cabin has its own layout and feel, but all three keep guests
            close to Collier Creek, covered porches, outdoor space, grills, and
            the quiet parts of the property people come here for.
          </p>
        </Reveal>

        <Reveal className="cabin-tabs cabin-tabs-polished">
          {cabins.map((cabin) => (
            <button
              type="button"
              className={activeCabin.name === cabin.name ? "active" : ""}
              key={cabin.name}
              onClick={() => setActiveCabin(cabin)}
            >
              <span>{cabin.name}</span>
              <small>{cabin.label}</small>
            </button>
          ))}
        </Reveal>

        <div className="cabin-showcase-v4">
          <motion.div
            className="cabin-photo-stage"
            key={activeCabin.image}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="cabin-main-frame">
              <img src={activeCabin.image} alt={activeCabin.name} />
              <div className="cabin-image-label">
                <span>{experience.mood}</span>
                <strong>{activeCabin.name}</strong>
              </div>
            </div>

            <div className="cabin-side-photo">
              <img
                src={activeCabin.imageTwo}
                alt={`${activeCabin.name} second view`}
              />
            </div>

            <div className="cabin-experience-strip">
              {experience.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="cabin-info-card cabin-info-card-polished"
            key={activeCabin.name}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">{activeCabin.label}</p>
            <h3>{activeCabin.name}</h3>

            <div className="cabin-meta cabin-meta-polished">
              <span>{activeCabin.sleeps}</span>
              <span>{activeCabin.size}</span>
            </div>

            <p>{activeCabin.description}</p>

            <div className="cabin-best-for">
              <span>Best for</span>
              <strong>{experience.bestFor}</strong>
              <p>{experience.note}</p>
            </div>

            <div className="detail-list detail-list-polished">
              {activeCabin.details.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a
              className="btn btn-primary"
              href={activeCabin.bookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book {activeCabin.name.replace(" Cabin", "")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
