"use client";
import { Button } from "primereact/button";
import "./globals.css";
import { Card } from "primereact/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-black justify-between bg-pink-100">
      <Card className="w-[90vw] lg:w-[50vw] m-10 p-2 text-black">
        <h1 className="font-bold text-xl lg:text-3xl m-auto text-center">
          FRIFØDSELSNETTVERKET
        </h1>
        <br />
        <span className="bold">Frifødselsnettverket</span> er samlet om troen på
        fordelene ved fullstendig uforstyrret fødsel.
        <br />
        <br />
        <span className="bold">Uassistert hjemmefødsel</span> oppsto som
        reaksjonen på økende medikalisering og institusjonalisering av
        fødselsomsorgen allerede på{" "}
        <a
          className="font-bold text-blue-800 underline"
          href={"https://pubmed.ncbi.nlm.nih.gov/32361690/"}
        >
          1950-tallet i USA
        </a>
        . Kvinner har frivillig og intensjonelt født sine sønner og døtre
        hjemme, uten helsepersonell. Mødrene har fortalt om disse erfaringene i
        tre kvart århundre.
        <br />
        <br />
        Nettsiden er en kilde til, og en kilde til andre kilder til, erfaringer
        og tanker om å navigere i det norske samfunn som vill gravid, friføder
        og vill og fri mor.
        <br />
        <br />
        De lykkeligste opplevelsene viser hva som kontinuerlig går tapt når
        fødsel er blitt medisin: prosessens fulle potensial både fysiologisk,
        psykologisk og åndelig.
        <br />
        <br />
        De tragiske historiene anskueliggjør de potensielle farene ved
        uassistert fødsel.
        <br /> <br />
        Den eneste garantien mot skade og død i forbindelse med fødsel er å
        aldri bli gravid. Så lenge individer velger å gi liv gjennom egen kropp,
        så skal de også få velge fritt hvordan de vil handle i fødsel.
        <br /> <br />
        Valget om å føde uten helsepersonell{" "}
        <span className="bold">må fortsatt være lovlig.</span>
        <br />
        <br />I 2025 inneholdt denne nettsiden en rekke prinsipper, definisjoner
        og ressurser. Inn i 2026 står kun én ting igjen: troen på potensialet i
        den uforstyrrede <span className="bold">frifødselen</span> – for mor,
        barn, familie og samfunn.
        <br /> <br />
        <span className="bold">Ansvarsfraskrivelse:</span> Mottakere av
        nettsidens innhold står selv ansvarlig for alle beslutninger knyttet til
        egen graviditet og fødsel. Nettverket og dets tilsluttede individer kan
        ikke holdes ansvarlige for konsekvensene av valg og handlinger basert på
        tolkning av vår formidling. En er selv ansvarlig for å innhente
        oppdatert helsefaglig informasjon og anbefalinger fra helsemyndighetene.
        Svangerskapsoppfølging og fødselshjelp er gratis og tilgjengelig i
        Norge, og tjenesten kan nås gjennom å kontakte din nærmeste
        helsestasjon.
      </Card>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
