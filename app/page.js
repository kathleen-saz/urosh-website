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
      image: "/fragrances/bleu-de-chanel.avif",
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
      alt: "Terre d'Hermès bottle",
    },
    {
      name: "Tom Ford Noir",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/tom-ford-noir.avif",
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
      name: "Grove by the Sea",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/grove-by-the-sea.webp",
      alt: "Grove by the Sea bottle",
    },
    {
      name: "Jo Malone Cypress & Grapevine",
      size: "50 ml",
      type: "Cologne Intense",
      image: "/fragrances/jo-malone-cypress-grapevine.avif",
      alt: "Jo Malone Cypress & Grapevine bottle",
    },
    {
      name: "Dior Fahrenheit",
      size: "100 ml",
      type: "EDP",
      image: "/fragrances/dior-fahrenheit.webp",
      alt: "Dior Fahrenheit bottle",
    },
    {
      name: "Dior Sauvage",
      size: "50 ml",
      type: "Parfum",
      image: "/fragrances/dior-sauvage-parfum.jpg",
      alt: "Dior Sauvage Parfum bottle",
    },
  ];

  return (
    <div className="page">
      <main className="container">
        <section className="title">
          <h1>Fragrance Collection</h1>
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

      </main>
    </div>
  );
}
