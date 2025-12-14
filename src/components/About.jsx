import "./about.css";

export default function About() {
  return (
    <div className="about-page">

      {/* LEFT SIDE: artist + text */}
      <div className="about-left">
        {/* Artist photo + name */}
        <div className="about-artist-card">
          <img
            src="images/theartist.jpg"  // replace with your artist photo
            className="artist-photo"
            alt="Artist"
          />
          <h2 className="artist-name">Jeff Hamilton</h2>
        </div>

        {/* Body text */}
        <div className="about-content">
          <p>
          Hi Friends,
Hope you don't mind, but I asked my daughter to write a little bio about me. 
She has a master's in art history and we talk a lot about about art and my painting. </p>

          <p>
          My dad, Jeff Hamilton, has always had a creative spirit. When I was young, I remember watching him carefully and delicately build model ships in the garage. He worked with patience, precision, and a quiet passion for bringing something beautiful to life. As I grew up, I also remember his love of visiting museums and our long conversations about art history.
His passion for painting truly blossomed after retiring from a long career in banking, when he discovered an enthusiastic interest in watercolor. Inspired by videos of artists whose work captivated him, he became determined to learn everything he could: practicing every stroke, exploring new techniques, and eagerly testing out every tool and gadget he came across.
What drew him in was watercolor’s lightness and transparency, its ability to capture mood and atmosphere without overworking the details. He often paints from photographs, but never to replicate them exactly. Instead, he uses them as a starting point, creating loose, expressive works that leave room for the viewer’s imagination. His paintings offer just enough form, depth, and harmony to suggest the image, while inviting you to complete it in your own mind. More recently, he has also embraced plain air painting, relishing the immediacy and challenge of capturing nature directly.
Beyond art, my dad is deeply involved in his community, volunteering with a nonprofit that helps refugees and people seeking asylum begin new lives. At home, he is a devoted husband to my mom and the most incredible dad to me and my sister.
What makes his art so remarkable, to me, is that it reflects who he is: thoughtful, curious, and quietly passionate about learning and creating. Each painting carries his sense of wonder and his desire to share not just an image, but an emotion.
 I've been drawing or painting from as early as I can in remember. From finger painting to crayons, pencils, charcoal and oil I moved into watercolor about 10 years ago.
          </p>
        </div>

        <div className="lower-about">
          <img
            src="/images/watercolorpalette.jpg"  // replace with your artist photo
            className="palette"
            alt=""
          />
        </div>
      </div>

      {/* RIGHT SIDE: Header image */}
      <div className="about-right">
        <img
          src="/images/thestudio.jpg" // replace with your header image
          alt="Artist header"
        />
      </div>

    </div>
  );
}
