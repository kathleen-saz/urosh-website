import Image from "next/image";

export default function Home() {
  const fragrances = [
    {
      name: "Dior Homme Intense",
      size: "50 ml",
      type: "EDP",
      image: "/fragrances/dior-homme-intense.jpg",
      alt: "Dior Homme Intense bottle",
    },
    {
      name: "YSL Kouros",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/ysl-kouros.jpg",
      alt: "YSL Kouros bottle",
    },
    {
      name: "YSL MYSLF",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/ysl-myslf.jpg",
      alt: "YSL MYSLF bottle",
    },
    {
      name: "Bleu de Chanel",
      size: "50 ml",
      type: "EDP",
      image: "/fragrances/bleu-de-chanel.jpg",
      alt: "Bleu de Chanel bottle",
    },
    {
      name: "Montblanc Explorer",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/montblanc-explorer.png",
      alt: "Montblanc Explorer bottle",
    },
    {
      name: "Terre d'Hermès",
      size: "50 ml",
      type: "EDT",
      image: "/fragrances/terre-d-hermes.jpg",
      alt: "Terre d'Hermes bottle",
    },
    {
      name: "Tom Ford Noir",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/tom-ford-noir.png",
      alt: "Tom Ford Noir bottle",
    },
    {
      name: "Tom Ford Black Orchid",
      size: "50 ml",
      type: "EDP",
      image: "/fragrances/tom-ford-black-orchid.png",
      alt: "Tom Ford Black Orchid bottle",
    },
    {
      name: "Tom Ford Noir Extreme",
      size: "50 ml",
      type: "EDP",
      image: "/fragrances/tom-ford-noir-extreme.png",
      alt: "Tom Ford Noir Extreme bottle",
    },
    {
      name: "Secret Grove",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/secret-grove-placeholder.svg",
      alt: "Secret Grove fragrance placeholder",
    },
  ];

  return (
    <div className="page">
      <main className="container">
        <section className="title">
          <p className="tag">Urosh Collection</p>
          <h1>Fragrances for Sale</h1>
        </section>

        <section className="grid">
          {fragrances.map((fragrance) => (
            <article key={fragrance.name} className="card">
              <div className="card-image">
                <Image
                  src={fragrance.image}
                  alt={fragrance.alt}
                  width={320}
                  height={320}
                />
              </div>
              <div className="card-top">
                <span className="pill">{fragrance.type}</span>
                <span className="ml">{fragrance.size}</span>
              </div>
              <h2>{fragrance.name}</h2>
            </article>
          ))}
        </section>

        <section className="cta">
          <div>
            <h3>Interested?</h3>
            <p>
              Send a quick message with the bottle name(s) and your preferred
              pickup option.
            </p>
          </div>
          <button className="cta-button" type="button">
            Send a message
          </button>
        </section>
      </main>
    </div>
  );
}
