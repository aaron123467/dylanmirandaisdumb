const frames = [
  { src: "/bg/house.jpg", label: "Hawthorne House" },
  { src: "/bg/woods.jpg", label: "Black Wood" },
  { src: "/bg/great-room.jpg", label: "Great Room" },
] as const;

export function EstateBackdrop() {
  return (
    <div className="estate-backdrop" aria-hidden>
      {frames.map((frame, i) => (
        <div key={frame.src} className={`estate-slide estate-slide-${i + 1}`}>
          <img src={frame.src} alt="" className="estate-photo" decoding="async" fetchPriority={i === 0 ? "high" : "low"} />
        </div>
      ))}
      <div className="estate-veil" />
    </div>
  );
}
