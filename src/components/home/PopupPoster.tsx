import { useEffect, useState } from "react";

export default function PopupPoster() {
  const posters = [
    "/assets/poster1.png",
    "/assets/poster2.png",
  ];

  const [show, setShow] = useState(true);
  const [currentPoster, setCurrentPoster] = useState(posters[0]);

  useEffect(() => {
    const currentIndex = Number(localStorage.getItem("posterIndex") || "0");

    setCurrentPoster(posters[currentIndex]);

    const nextIndex = currentIndex === 0 ? 1 : 0;
    localStorage.setItem("posterIndex", nextIndex.toString());

    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
      <div className="relative mx-4">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10"
        >
          ✕
        </button>

        <img
          src={currentPoster}
          alt="Poster"
          className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}