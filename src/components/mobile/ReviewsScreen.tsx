"use client";

import { useT } from "@/lib/lang-context";
import type { GooglePlaceData } from "@/lib/google-places";

const SAMPLE_REVIEWS = [
  {
    stars: "★★★★★",
    quoteEn: "“The jhol momo took me straight back to Thamel.”",
    quotePt: "“O jhol momo levou-me directo a Thamel.”",
    initial: "A",
    name: "Ana R.",
    roleEn: "Local guide · Lisboa",
    rolePt: "Guia local · Lisboa",
  },
  {
    stars: "★★★★★",
    quoteEn: "“Warm staff, huge portions, real charcoal sekuwa.”",
    quotePt: "“Equipa simpática, doses enormes, sekuwa de carvão a sério.”",
    initial: "M",
    name: "Miguel S.",
    roleEn: "Diner",
    rolePt: "Cliente",
  },
  {
    stars: "★★★★☆",
    quoteEn: "“Finally a proper thali in the city. Great veg options.”",
    quotePt: "“Finalmente um thali a sério na cidade. Óptimas opções veg.”",
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

export default function ReviewsScreen({ googlePlace }: { googlePlace: GooglePlaceData | null }) {
  const t = useT();
  const isLive = !!googlePlace && googlePlace.reviews.length > 0;

  return (
    <>
      <div className="rev-hero">
        <div className="rev-score">
          {isLive ? googlePlace!.overallRating.toFixed(1).replace(".", ",") : "4,7"}
        </div>
        <div className="rev-stars">{isLive ? stars(googlePlace!.overallRating) : "★★★★★"}</div>
        <small>
          {isLive
            ? t(`From ${googlePlace!.reviewCount} Google reviews`, `De ${googlePlace!.reviewCount} avaliações no Google`)
            : t(
                "Sample rating — connect Google Reviews for live scores",
                "Classificação de exemplo — ligar Google Reviews"
              )}
        </small>
      </div>

      {isLive
        ? googlePlace!.reviews.slice(0, 3).map((r) => (
            <article className="rcard" key={r.id}>
              <div className="rs">{stars(r.rating)}</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <div className="rwho">
                <div className="rav">{r.authorName.charAt(0)}</div>
                <div>
                  <b>{r.authorName}</b>
                  <span>{r.relativeTime}</span>
                </div>
              </div>
            </article>
          ))
        : SAMPLE_REVIEWS.map((r) => (
            <article className="rcard" key={r.name}>
              <div className="rs">{r.stars}</div>
              <p>{t(r.quoteEn, r.quotePt)}</p>
              <div className="rwho">
                <div className="rav">{r.initial}</div>
                <div>
                  <b>{r.name}</b>
                  <span>{t(r.roleEn, r.rolePt)}</span>
                </div>
              </div>
            </article>
          ))}

      {isLive ? (
        googlePlace!.googleMapsUri && (
          <a className="m-sample" href={googlePlace!.googleMapsUri} target="_blank" rel="noopener" style={{ borderStyle: "solid" }}>
            {t("★ Live from Google Reviews — see all →", "★ Ao vivo do Google Reviews — ver todas →")}
          </a>
        )
      ) : (
        <span className="m-sample">
          {t(
            "◆ Sample reviews — real Google & Facebook to be embedded",
            "◆ Avaliações de exemplo — Google & Facebook a integrar"
          )}
        </span>
      )}
    </>
  );
}
