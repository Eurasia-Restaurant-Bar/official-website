"use client";

import { useT } from "@/lib/lang-context";
import type { GooglePlaceData } from "@/lib/google-places";

const SAMPLE_REVIEWS = [
  {
    stars: "★★★★★",
    quoteEn: "“The jhol momo took me straight back to Thamel. Best Nepalese food I've had in Portugal.”",
    quotePt: "“O jhol momo levou-me directo a Thamel. A melhor comida nepalesa que comi em Portugal.”",
    initial: "A",
    name: "Ana R.",
    roleEn: "Local guide · Lisboa",
    rolePt: "Guia local · Lisboa",
  },
  {
    stars: "★★★★★",
    quoteEn: "“Warm staff, huge portions, real charcoal sekuwa. We came for dinner and stayed for chai.”",
    quotePt: "“Equipa simpática, doses enormes, sekuwa de carvão a sério. Viemos jantar e ficámos para o chai.”",
    initial: "M",
    name: "Miguel S.",
    roleEn: "Diner",
    rolePt: "Cliente",
  },
  {
    stars: "★★★★☆",
    quoteEn: "“Finally a proper thali in the city. Vegetarian options are excellent and prices are fair.”",
    quotePt: "“Finalmente um thali a sério na cidade. Opções vegetarianas excelentes e preços justos.”",
    initial: "S",
    name: "Sofia & Deepak",
    roleEn: "Regulars",
    rolePt: "Habituais",
  },
];

function stars(rating: number) {
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

export default function Reviews({ googlePlace }: { googlePlace: GooglePlaceData | null }) {
  const t = useT();
  const isLive = !!googlePlace && googlePlace.reviews.length > 0;

  return (
    <section id="reviews" className="reviews">
      <div className="wrap">
        <span className="eyebrow">{t("Guest Reviews", "Avaliações")}</span>
        <h2>{t("Loved by Lisbon.", "Adorado por Lisboa.")}</h2>
        <div className="rev-top">
          <div className="rev-score">{isLive ? googlePlace!.overallRating.toFixed(1).replace(".", ",") : "4,7"}</div>
          <div>
            <div className="rev-stars">{isLive ? stars(googlePlace!.overallRating) : "★★★★★"}</div>
            <small>
              {isLive
                ? t(
                    `From ${googlePlace!.reviewCount} Google reviews`,
                    `De ${googlePlace!.reviewCount} avaliações no Google`
                  )
                : t(
                    "Sample rating — connect Google Reviews for live scores",
                    "Classificação de exemplo — ligar Google Reviews para dados reais"
                  )}
            </small>
          </div>
        </div>
        <div className="rev-grid">
          {isLive
            ? googlePlace!.reviews.slice(0, 3).map((r) => (
                <article className="rev-card" key={r.id}>
                  <div className="stars">{stars(r.rating)}</div>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="rev-who">
                    <div className="rev-av">{r.authorName.charAt(0)}</div>
                    <div>
                      <b>{r.authorName}</b>
                      <span>{r.relativeTime}</span>
                    </div>
                  </div>
                </article>
              ))
            : SAMPLE_REVIEWS.map((r) => (
                <article className="rev-card" key={r.name}>
                  <div className="stars">{r.stars}</div>
                  <p>{t(r.quoteEn, r.quotePt)}</p>
                  <div className="rev-who">
                    <div className="rev-av">{r.initial}</div>
                    <div>
                      <b>{r.name}</b>
                      <span>{t(r.roleEn, r.rolePt)}</span>
                    </div>
                  </div>
                </article>
              ))}
        </div>
        {isLive ? (
          googlePlace!.googleMapsUri && (
            <a
              className="sample-flag"
              href={googlePlace!.googleMapsUri}
              target="_blank"
              rel="noopener"
              style={{ borderStyle: "solid" }}
            >
              {t("★ Live from Google Reviews — see all reviews →", "★ Ao vivo do Google Reviews — ver todas →")}
            </a>
          )
        ) : (
          <span className="sample-flag">
            {t(
              "◆ Sample reviews — real Google & Facebook reviews to be embedded",
              "◆ Avaliações de exemplo — Google & Facebook reais a integrar"
            )}
          </span>
        )}
      </div>
    </section>
  );
}
