"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cabins } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function CabinSelector() {
  const [activeCabin, setActiveCabin] = useState(cabins[0]);

  return (
    <section className="cabins-section section-pad" id="cabins">
      <div className="container">
        <Reveal className="section-heading centered">
          <p className="eyebrow">The cabins</p>
          <h2>Pick the cabin that fits your stay.</h2>
          <p>
            Each cabin has its own layout, but all three keep guests close to
            Collier Creek, outdoor space, grills, porches, and the wedding barn.
          </p>
        </Reveal>

        <Reveal className="cabin-tabs">
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

        <div className="cabin-showcase cabin-showcase-v2">
          <motion.div
            className="cabin-collage"
            key={activeCabin.image}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <img className="cabin-main-img" src={activeCabin.image} alt={activeCabin.name} />
            <img className="cabin-small-img" src={activeCabin.imageTwo} alt={`${activeCabin.name} second view`} />
          </motion.div>

          <motion.div
            className="cabin-info-card"
            key={activeCabin.name}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">{activeCabin.label}</p>
            <h3>{activeCabin.name}</h3>

            <div className="cabin-meta">
              <span>{activeCabin.sleeps}</span>
              <span>{activeCabin.size}</span>
            </div>

            <p>{activeCabin.description}</p>

            <div className="detail-list">
              {activeCabin.details.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a className="btn btn-primary" href={activeCabin.bookUrl} target="_blank">
              Book {activeCabin.name.replace(" Cabin", "")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
