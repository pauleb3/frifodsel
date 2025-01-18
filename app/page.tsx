"use client";
import { Button } from "primereact/button";
import "./globals.css";
import { Card } from "primereact/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-black justify-between bg-pink-100">
      <Card className="w-[90vw] lg:w-[50vw] m-10 p-2 text-black">
        <h1 className="font-bold text-3xl m-auto text-center">
          FRIFØDSEL NETTVERK
        </h1>
        <br />
        Velkommen til frifodsel.net, en varmende plattform for frifødsel.
        Her er både enige og uenige velkommen til å titte og forholde seg til 
        innholdet som er gjort tilgjengelig for å fremme klarhet, dialog og forståelse. 
        <br /><br />
        Nettsiden representerer <span className="italic">ikke</span> en organisasjon, men derimot et desentralisert 
        nettverk for kvinner som har direkte erfaring med vill graviditet og frifødsel, 
        i tillegg til mennesker som støtter, feirer og gleder seg over denne typen 
        graviditet og fødsel. 
        <br /><br />
        Nettsiden er en kilde til, og en kilde til andre kilder til, 
        erfaringer og tanker om å navigere i det norske samfunn 
        som vill gravid, friføder og vill og fri mor.
        <br /><br />
         Siden inneholder <span className="italic">ikke</span> medisinske råd. <br /><br />

         Det som deles er tidvis sterk, ufaglært forankret, 
         kritikk av helsevesenets praksiser. 
         Denne diskusjonen går innunder ytringsfriheten og må 
         <span className="italic">ikke</span> misforstås som medisinske råd til pasienter. 
         I tråd med våre prinsipper oppfordrer vi ikke til spesifikk handling, 
         men til en holdning av radikalt selvansvar og personlig integritet. 
         Vi oppfordrer til å tenke på det som står her, 
         men ikke handle på det. Din handling er opp til deg. 
         <br /> <br /><br />
         Ansvarsfraskrivelse: 
         Nettverkets tilsluttede individer fraskriver seg alt 
         ansvar for hvordan du lar innholdet på denne nettsiden 
         påvirker deg, og konsekvenser av dine etterfølgende handlinger. 
         <br /><br /><br />


    
      </Card>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
