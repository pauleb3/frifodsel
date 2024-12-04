"use client";
/* tslint:disable */
import { Button } from "primereact/button";
import "./globals.css";
import { Card } from "primereact/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-black justify-between bg-pink-100">
      <Card className="w-[50vw] m-10 p-2 text-black">
        <h1 className="font-bold text-3xl m-auto text-center">
          FRIFØDSEL NETTVERK
        </h1>
        <br />
        Dette er et desentralisert nettverk for kvinner som har direkte erfaring
        med vill graviditet og frifødsel, som også inkluderer de som genuint
        ønsker å friføde sine fremtidige barn, og dernest mennesker som støtter,
        feirer og gleder seg over denne typen graviditet og fødsel.
        <br /> <br />
        Nettsiden er en kilde til, og en kilde til andre kilder til,
        erfaringsbasert informasjon om å navigere i det norske samfunn som vill
        gravid, friføder og vill og fri mor. Siden inneholder ikke medisinske
        råd. Vi deler meninger om medisinske råd og hva vi ønsker helsepersonell
        skulle sagt, men det utgjør ikke medisinske råd til deg som potensiell
        pasient. Her er det radikalt selvansvar i sentrum.
      </Card>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
