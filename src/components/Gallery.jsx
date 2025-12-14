import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../components/gallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load images from public/images/images.json
  useEffect(() => {
    fetch("/images/images.json")
      .then((res) => res.json())
      .then((files) => {
        const paths = files.map((f) => `/images/${f}`);
        setImages(paths);
      });
  }, []);

  // GSAP scroll animation for gallery items
  useEffect(() => {
    if (!images.length) return;
    gsap.utils.toArray(".gallery-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, [images]);

  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  // GSAP fade-in for lightbox
  useEffect(() => {
    if (lightboxOpen) {
      gsap.fromTo(".lightbox", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [lightboxOpen]);

  // Render lightbox via portal for proper fixed positioning
  const lightboxPortal = lightboxOpen
    ? createPortal(
        <div className="lightbox" onClick={closeLightbox}>
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            &#10094;
          </button>
          <img src={images[currentIndex]} className="lightbox-img" />
          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            &#10095;
          </button>
          <button className="close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
            &times;
          </button>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
            <img src={src} className="ink-reveal" loading="lazy" />
          </div>
        ))}
      </div>
      {lightboxPortal}
    </>
  );
}
