"use client";

import { useEffect, useMemo, useRef } from "react";
import { galleryImages } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function PhotoMosaic() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const holdFrameRef = useRef<number | null>(null);
  const holdDirectionRef = useRef<"left" | "right" | null>(null);

  const loopedImages = useMemo(() => {
    return [...galleryImages, ...galleryImages, ...galleryImages];
  }, []);

  const getOneSetWidth = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;
    return scroller.scrollWidth / 3;
  };

  const resetToMiddle = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const oneSet = getOneSetWidth();
    if (!oneSet) return;

    scroller.scrollLeft = oneSet;
  };

  const keepLooping = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const oneSet = getOneSetWidth();
    if (!oneSet) return;

    if (scroller.scrollLeft <= oneSet * 0.15) {
      scroller.scrollLeft += oneSet;
    }

    if (scroller.scrollLeft >= oneSet * 1.85) {
      scroller.scrollLeft -= oneSet;
    }
  };

  const moveGallery = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const amount = scroller.clientWidth * 0.82;

    scroller.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });

    window.setTimeout(keepLooping, 450);
    window.setTimeout(keepLooping, 900);
  };

  const stopHolding = () => {
    holdDirectionRef.current = null;

    if (holdFrameRef.current) {
      cancelAnimationFrame(holdFrameRef.current);
      holdFrameRef.current = null;
    }
  };

  const holdLoop = () => {
    const scroller = scrollerRef.current;
    const direction = holdDirectionRef.current;

    if (!scroller || !direction) return;

    const speed = direction === "right" ? 7 : -7;
    scroller.scrollLeft += speed;
    keepLooping();

    holdFrameRef.current = requestAnimationFrame(holdLoop);
  };

  const startHolding = (direction: "left" | "right") => {
    stopHolding();
    holdDirectionRef.current = direction;
    holdFrameRef.current = requestAnimationFrame(holdLoop);
  };

  useEffect(() => {
    const timer = window.setTimeout(resetToMiddle, 80);

    const handleResize = () => {
      resetToMiddle();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      stopHolding();
    };
  }, []);

  return (
    <section
      className="photo-mosaic-section photo-collage-section section-pad"
      id="photos"
    >
      <div className="photo-section-soft-mark">At The Creek</div>

      <div className="container">
        <Reveal className="photo-collage-heading-v2">
          <div>
            <p className="eyebrow">Photos</p>
            <h2>A closer look around the stay.</h2>
          </div>

          <p>
            From the cabin details and porch light to the creek, barn, trees,
            and quiet outdoor spaces, these photos show the kind of simple
            Arkansas getaway guests can settle into.
          </p>
        </Reveal>

        <Reveal className="photo-collage-shell photo-collage-shell-slider">
          <div className="photo-collage-top">
            <div>
              <span>Gallery</span>
              <strong>Cabins, creek, barn, and property details</strong>
            </div>

            <div className="photo-collage-controls">
              <button
                type="button"
                onClick={() => moveGallery("left")}
                onMouseDown={() => startHolding("left")}
                onMouseUp={stopHolding}
                onMouseLeave={stopHolding}
                onTouchStart={() => startHolding("left")}
                onTouchEnd={stopHolding}
                aria-label="Previous photos"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => moveGallery("right")}
                onMouseDown={() => startHolding("right")}
                onMouseUp={stopHolding}
                onMouseLeave={stopHolding}
                onTouchStart={() => startHolding("right")}
                onTouchEnd={stopHolding}
                aria-label="Next photos"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="photo-collage-window"
            ref={scrollerRef}
            onScroll={keepLooping}
          >
            <div className="photo-collage-track">
              {loopedImages.map((image, index) => (
                <article
                  className="photo-collage-slide"
                  key={`${image.src}-${index}`}
                >
                  <img src={image.src} alt={image.title} />
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
