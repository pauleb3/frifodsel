"use client";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./bilder.css";
import { Card } from "primereact/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 items-center bg-white justify-between">
      <h1 className="text-xl lg:text-5xl font-bold m-6">
        Frifødselsnettverket Blogg
      </h1>
      ​​ <br /> <br />{" "}
      <div className="m-2 lg:m-12 p-2 lg:p-8 lg:mx-48">
        <Card className="p-2 overflow-hidden">
          Her er en liste over blogger eid av nettverkets medlemmer:
          <br />
          <br />
          Anja Bache-Wiig Solberg:{" "}
          <Button
            className="text-left"
            label="www.anjabache-wiigsolberg.no"
            link
            onClick={() =>
              window.open("https://www.anjabache-wiigsolberg.no", "_blank")
            }
          />
          <br /> Helene B. Clarke:{" "}
          <Button
            className="text-left"
            label="substack.com/@helenebclarke"
            link
            onClick={() =>
              window.open("https://substack.com/@helenebclarke", "_blank")
            }
          />
          <br />
          <br />
          Når du skal skrive et innlegg som også representerer
          frifødselsnettverket, så gjør du det slik: Skriv om det du ønsker som
          har relevans for nettverket, kategoriser innlegget, få det lest og
          godkjent av en annen av nettverkets tilsluttede. Utveksle gjerne
          innspill og konstruktiv kritikk. Avslutt slik: Skrevet av [navn] som
          representant for Frifødselsnettverket og godkjent av [navn].
          <br />
          <br />
          Du kan også skrive og skape uten å blande inn andre, og da gjør du det
          bare under eget navn. Radikalt selvuttrykk som kilden til energi og
          nyskapning kjennetegner dette desentraliserte nettverket.
          <br />
          <br />
          Forslag til bloggkategorier for Frifødselsnettverket:
          <br />
          - Fødselsdebatt i media
          <br />
          - Intervensjoner fra obstetriske sykepleiere og leger
          <br />
          - Åpne brev til institusjoner, organisasjoner, medier og myndigheter
          <br />
          - Bokanmeldelser
          <br />
          - Personlige fortellinger
          <br />
          - Etiske refleksjoner
          <br />
          - Kvinnelighet og femininitet
          <br />
          <br />
          Her er forslag til emneknagger som kan brukes på sosiale medier og
          blogg:
          <br />
          #frifodselnet #frifodsel #fodselsfrihet #kvinneligfodsel
          #villgraviditet #radikaltselvansvar
        </Card>
      </div>
    </main>
  );
}
