export default function Home() {
  const fragrances = [
    { name: "Dior Homme Intense", size: "50 ml", type: "EDP" },
    { name: "YSL Kuros", size: "100 ml", type: "EDP" },
    { name: "YSL Myself", size: "100 ml", type: "EDP" },
    { name: "Bleu de Chanel", size: "50 ml", type: "EDP" },
    { name: "Montblanc Explorer", size: "100 ml", type: "EDP" },
    { name: "Terre de Hermès", size: "50 ml", type: "EDT" },
    { name: "Tom Ford Noir", size: "100 ml", type: "EDP" },
    { name: "Tom Ford Black Orchid", size: "50 ml", type: "EDP" },
    { name: "Tom Ford Noir Extreme", size: "50 ml", type: "EDP" },
    { name: "Secret Grove", size: "100 ml", type: "EDP" },
  ];

  return (
    <div className="page">
      <main className="container">
        <header className="hero">
          <p className="tag">Urosh is selling his fragrances</p>
          <h1>
            The Fragrance Cabinet
            <span className="accent"> • For Sale</span>
          </h1>
          <p className="subtitle">
            A tight curation of warm spices, crisp woods, and signature
            night-out bottles. Message to claim your favorites.
          </p>
          <div className="hero-details">
            <div>
              <span className="detail-label">Condition</span>
              <span className="detail-value">Well kept, stored cool</span>
            </div>
            <div>
              <span className="detail-label">Pickup</span>
              <span className="detail-value">Local or ship</span>
            </div>
            <div>
              <span className="detail-label">Quantity</span>
              <span className="detail-value">{fragrances.length} bottles</span>
            </div>
          </div>
        </header>

        <section className="grid">
          {fragrances.map((fragrance) => (
            <article key={fragrance.name} className="card">
              <div className="card-top">
                <span className="pill">{fragrance.type}</span>
                <span className="ml">{fragrance.size}</span>
              </div>
              <h2>{fragrance.name}</h2>
              <p className="card-note">
                Crisp presentation with a clean sprayer and full cap.
              </p>
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
