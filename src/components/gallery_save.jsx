import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../components/gallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  // List your images here (any filenames inside src/assets/images)
  const images = [
    "/src/assets/images/WinterBirchTrees.jpg",
    "/src/assets/images/VaseByTheWindow.jpg",
    "/src/assets/images/TulipsInAVase.jpg",
    "/src/assets/images/TallPine.jpg",
    "/src/assets/images/Sunflowers.jpg",
    "/src/assets/images/SantaBarbaraCourthouse2.jpg",
    "/src/assets/images/SantaBarbaraCourthouse.jpg",
    "/src/assets/images/RedFlowers.jpg",
    "/src/assets/images/PurpleIrises.jpg",
    "/src/assets/images/PontNeufParis.jpg",
    "/src/assets/images/OutToPasture.jpg",
    "/src/assets/images/OrderCancelled.jpg",
    "/src/assets/images/OnTheBeach.jpg",
    "/src/assets/images/MoreIrises.jpg",
    "/src/assets/images/MistyMorning.jpg",
    "/src/assets/images/LonePine.jpg",
    "/src/assets/images/LisbonTrolley.jpg",
    "/src/assets/images/JustFlowers.jpg",

    "/src/assets/images/FlowerPotInTheSun.jpg",
    "/src/assets/images/FarmRoad.jpg",
    "/src/assets/images/FairwayTrees.jpg",
    "/src/assets/images/ElDuomoFlorence.jpg",
    "/src/assets/images/CoyoteHillsCalifornia.jpg",
    "/src/assets/images/CowsInThePasture.jpg",
    "/src/assets/images/CountryRoad.jpg",
"/src/assets/images/CountryHollowRoad.jpg",
"/src/assets/images/ARose.jpg"
];

  useEffect(() => {
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
  }, []);

  return (
    <div className="gallery">
      {images.map((src, i) => (
        <div key={i} className="gallery-item">
          <img src={src} className="ink-reveal" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
