import { videos } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function VideoPreview() {
  return (
    <section className="video-reel-section" id="videos">
      <div className="video-reel-bg">
        <div className="container video-reel-inner">
          <Reveal className="video-reel-copy">
            <p className="eyebrow">Property videos</p>
            <h2>See the cabins, creek, and grounds before you visit.</h2>
            <p>
              A few simple videos give guests a better feel for the cabins, the
              creek, the barn, and the outdoor space around Collier Creek.
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
