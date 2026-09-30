import { useEffect, useState } from "react";

const frames = [
  { src: "/bg/house.jpg", label: "Hawthorne House" },
  { src: "/bg/woods.jpg", label: "Black Wood" },
  { src: "/bg/great-room.jpg", label: "Great Room" },
] as const;

export function EstateBackdrop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % frames.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="estate-backdrop" aria-hidden>
      {frames.map((frame, i) => (
        <div key={frame.src} className={i === index ? "estate-slide is-on" : "estate-slide"}>
          <img src={frame.src} alt="" className="estate-photo" decoding="async" fetchPriority={i === 0 ? "high" : "low"} />
        </div>
      ))}
      <div className="estate-veil" />
    </div>
  );
}
