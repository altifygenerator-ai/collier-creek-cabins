import { videos } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function VideoPreview() {
  return (
    <section className="video-reel-section" id="videos">
      <div className="video-reel-bg">
        <div className="container video-reel-inner">
          <Reveal className="video-reel-copy">
            <p className="eyebrow">Videos</p>
            <h2>Check out these videos around Collier Creek Cabins.</h2>
            <p>
              See the cabins, creek, wedding barn, and outdoor property before
              you book your stay or ask about a special event.
            </p>
          </Reveal>

          <div className="video-reel-track">
            {videos.map((video, index) => (
              <Reveal delay={index * 0.08} key={video.title}>
                <article className={`local-video local-video-${index + 1}`}>
                  <video
                    poster={video.poster}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div>
                    <span>0{index + 1}</span>
                    <strong>{video.title}</strong>
                    <p>{video.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
