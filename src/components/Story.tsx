"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";

export default function Story() {
  const t = useT();

  return (
    <section id="story">
      <div className="wrap story-grid">
        <div className="story-img ph-img" data-label="Our kitchen & team">
          <Image
            src="/photos/story-team.jpg"
            alt="Eurasia staff hand-folding momo dumplings"
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="story-copy">
          <span className="eyebrow">{t("Our Story", "A Nossa História")}</span>
          <h2>{t("Two continents, one table.", "Dois continentes, uma mesa.")}</h2>
          <p>
            {t(
              "Eurasia was born from a simple idea: the food we grew up with in Kathmandu deserved a home in Lisbon. We carried our grandmother's spice tin across a continent and opened a kitchen where the Himalayas meet the Atlantic.",
              "O Eurasia nasceu de uma ideia simples: a comida com que crescemos em Katmandu merecia uma casa em Lisboa. Trouxemos a lata de especiarias da nossa avó através de um continente e abrimos uma cozinha onde os Himalaias encontram o Atlântico."
            )}
          </p>
          <p>
            {t(
              "Every momo is folded by hand each morning. Our sekuwa is grilled over charcoal, our dal simmered slow. Nothing from a jar — just the food we'd cook for our own family.",
              "Cada momo é dobrado à mão todas as manhãs. A nossa sekuwa é grelhada sobre carvão, o nosso dal cozinhado devagar. Nada de frascos — apenas a comida que faríamos para a nossa família."
            )}
          </p>
          <div className="sign">
            The Eurasia family
            <small>{t("Founders & head cooks", "Fundadores & chefes de cozinha")}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
