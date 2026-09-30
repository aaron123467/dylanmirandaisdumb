/** Book-relevant estate photos (hosted from this repo via jsDelivr so Vercel always finds them). */
const CDN =
  "https://cdn.jsdelivr.net/gh/aaron123467/dylanmirandaisdumb@main/public/bg";

const frames = [
  { src: `${CDN}/house.jpg`, label: "Hawthorne House" },
  { src: `${CDN}/woods.jpg`, label: "Black Wood" },
  { src: `${CDN}/great-room.jpg`, label: "Great Room" },
] as const;

export function EstateBackdrop() {
  return (
    <div className="estate-backdrop" aria-hidden>
      {frames.map((frame, i) => (
        <div key={frame.src} className={`estate-slide estate-slide-${i + 1}`}>
          <img
            src={frame.src}
            alt=""
            className="estate-photo"
            decoding="async"
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </div>
      ))}
      <div className="estate-veil" />
    </div>
  );
}
