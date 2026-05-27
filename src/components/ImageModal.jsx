import { useState } from "react";

export default function ImageModal({ images = [], onClose }) {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

      <div className="bg-[#0b0b12] text-gray-100  p-4 max-w-3xl w-full">

        {/* HEADER */}
        <div className="flex justify-between mb-3">
          <p className="pixel-title text-sm">PROJECT GALLERY</p>

          <button onClick={onClose} className="text-red-600 font-bold">
            ✕
          </button>
        </div>

        {/* IMAGE */}
        <img
          src={images[index]}
          className="w-full h-[400px] object-contain border-2 border-[#3A312B]"
        />

        {/* CONTROLS */}
        <div className="flex justify-between mt-4">

          <button
            onClick={prev}
            className="pixel-btn"
          >
            ◀ Prev
          </button>

          <p>
            {index + 1} / {images.length}
          </p>

          <button
            onClick={next}
            className="pixel-btn"
          >
            Next ▶
          </button>

        </div>

      </div>

    </div>
  );
}