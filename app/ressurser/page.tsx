/* tslint:disable */
"use client";

import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css";
export default function Home() {
  return (
    <main className="flex min-h-screen p-16 flex-col items-center bg-pink-100">
      <h1 className="text-5xl font-bold pb-18 h-36">RESSURSER </h1>
      <div className="mx-20" style={{ marginLeft: "10vw", width: "80vw" }}>
        <h1 className="text-2xl font-bold">INNHOLD</h1>
        <br />
        Her finner du ressurser og verk knyttet til frifødselsnettverket. Det
        ligger to lister her med gode, inspirerende podcaster og bøker. Det
        ligger skriv utarbeidet av nettverksmedlemmer her. Åpne brev til
        offentlige etater, myndigheter, organisasjoner, medier og andre kan,
        også være å finne. Her kan ressurser og verk legges til etter hvert som
        de utarbeides, av ren inspirasjon.
        <ol className="pl-8 mt-2" style={{ listStyle: "decimal" }}>
          <li>
            <a
              className="text-l font-bold"
              href={"./OM_FRIFODSEL.pdf"}
              download="om frifødsel"
            >
              Om frifødsel
            </a>
          </li>
          <li>
            <a
              className="text-l font-bold"
              href={"./PODCASTER.pdf"}
              download="podcaster"
            >
              Podcaster
            </a>
          </li>{" "}
          <li>
            <a
              className="text-l font-bold"
              href={"./LESEVERDIGE_BOKER.pdf"}
              download="LESEVERDIGE BØKER"
            >
              Leseverdige bøker og essay
            </a>
          </li>
          <li>
            <a
              className="text-l font-bold"
              href={"./registrering_av_barn.pdf"}
              download="Registrering av barn"
            >
              Registrering av barn som er født uten helsepersonell til stede
            </a>
          </li>
          <li>
            <a
              className="text-l font-bold"
              href={"./engangsstonad.pdf"}
              download="Engangsstønad"
            >
              Engangsstønad ved hjemmefødsel
            </a>
          </li>
          <li>
            <a
              className="text-l font-bold"
              href={"./helsekontroller.pdf"}
              download="Barns rett til helsekontroller"
            >
              Barns rett til helsekontroller
            </a>
          </li>{" "}
          <li>
            <a
              className="text-l font-bold"
              href={"./jm.pdf"}
              download="Frifødere og jm"
            >
              Frifødere og jordmødre har en felles lidenskap for fødsel som kan
              endre fødekulturen
            </a>
          </li>{" "}
        </ol>
      </div>
    </main>
  );
}
