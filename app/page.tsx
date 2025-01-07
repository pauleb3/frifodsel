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
        Her er både enige og uenige velkommen til å titte og forholde seg 
        til disse prinsippene som er gjort offentlig for å fremme klarhet, 
        dialog og forståelse. Nettsiden representerer ikke en organisasjon,  
        men derimot et desentralisert nettverk for kvinner som har direkte 
        erfaring med vill graviditet og frifødsel, i tillegg til mennesker 
        som støtter, feirer og gleder seg over denne typen graviditet og fødsel. 
        <br /> <br />
        Nettsiden er en kilde til, og en kilde til andre kilder til, 
        erfaringsbasert kunnskap om å navigere i det norske samfunn 
        som vill gravid, friføder og vill og fri mor. 
        Siden inneholder ikke medisinske råd. Det som 
        deles er tidvis sterke meninger om helsevesenets praksiser, 
        men en slik diskusjon må ikke misforstås som 
        medisinske råd til pasienter. 
        I tråd med våre prinsipper oppfordrer vi ikke til spesifikk handling, 
        men til en holdning av radikalt selvansvar. Vi oppfordrer til å tenke 
        på det som står her, men ikke handle på det. Handling er opp til deg. 
        Våre prinsipper oppfordrer til å handle motivert av personlig integritet, 
        med et integrert forhold til ytre autoritet. 



    
      </Card>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
