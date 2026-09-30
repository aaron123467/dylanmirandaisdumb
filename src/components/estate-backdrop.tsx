import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const frames = [
  { src: "/bg/house.jpg", label: "Hawthorne House" },
  { src: "/bg/woods.jpg", label: "Black Wood" },
  { src: "/bg/great-room.jpg", label: "Great Room" },
] as const;

function sceneForPath(pathname: string) {
  if (pathname.startsWith("/themes")) return 1;
  if (pathname.startsWith("/characters") || pathname.startsWith("/artifacts")) return 2;
  return 0;
}

export function EstateBackdrop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [index, setIndex] = useState(() => sceneForPath(pathname));

  useEffect(() => {
    const pick = () => {
      const base = sceneForPath(pathname);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max < 240) {
        setIndex(base);
        return;
      }
      const t = Math.min(1, Math.max(0, window.scrollY / max));
      const step = t < 0.34 ? 0 : t < 0.67 ? 1 : 2;
      setIndex((base + step) % frames.length);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [pathname]);

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
