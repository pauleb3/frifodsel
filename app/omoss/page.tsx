"use client";
import { Button } from "primereact/button";

import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css";
export default function OmOss() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black bg-pink-100">
      <h1 className="font-bold text-5xl m-auto text-center my-[5vh]">
        Om oss.
      </h1>
      <div className="p-[2vh] w-[80vw]">
        Vi er kvinner som har direkte erfaring med vill graviditet og frifødsel,
        som også inkluderer de som genuint ønsker å friføde sine fremtidige
        barn, og dernest mennesker som støtter, feirer og gleder seg over denne
        typen graviditet og fødsel. Hvis du ønsker å tilslutte deg nettverket
        tar du personlig kontakt med en av personene som er i nettverket nå. De
        vil da godkjenne din beskrivelse av deg selv, ta imot et bilde av deg og
        få det publisert på nettsiden.
      </div>
      <Card className="w-full">
        <Card>Maren Berg Dybvik</Card>

        <Card>Maria Heiberg</Card>

        <Card>Anja Bache-Wiig Solberg</Card>

        <Card>Marlene Omlid</Card>

        <Card>Kristin Indreeide</Card>

        <Card>Helene B. Clarke</Card>
      </Card>

      <div className="p-[2vh] w-[80vw]">
        Vi er kvinner som har direkte erfaring med vill graviditet og frifødsel,
        som også inkluderer de som genuint ønsker å friføde sine fremtidige
        barn, og dernest mennesker som støtter, feirer og gleder seg over denne
        typen graviditet og fødsel. ​​​​​
        <br />
        <br /> Av støttepersoner er spesielt traumeterapauter og birthkeepers
        svært tiltrengt. <br />
        <br />
        Traumeterapauter:
        <br />
        Frifødere kan trenge traumeterapi. Det kan være ensomt å velge
        annerledes. Påbegynte frifødsler kan ende i mange vanskelige opplevelser
        som trenger å bearbeides. En fødsel innad i systemet kan bearbeides i
        kontrast til hva som er mulig å oppleve i en frifødsel. Det er også
        mulig at det oppstår ødeleggende og maktskjeve dynamikker mellom en
        frifødselsdoula og en fødende. Om du er en traumeterapaut som feirer
        frifødsel, tilslutt deg nettverket med presentasjon av deg selv og link
        til dine tjenester, slik at kvinner vet hvor de kan finne støtte som er
        trygg for dem.
        <br />
        <br /> Birthkeeper: <br />
        Frifødende kan ønske en birthkeeper. Det er en som støtter kvinner i det
        hun ønsker, tilbyr emosjonell, psykologisk og energetisk støtte i
        svangerskap, fødsel og barseltid. Birthkeepers tar ikke på seg medisinsk
        ansvar, og må kun ta til seg klienter som er i stand til å ta fullt
        ansvar for sin egen fødsel. Andre begreper som blir brukt er
        frifødsel-doula eller fødselsvitne som synonymt med birthkeeper. Om du
        er en birthkeeper eller doula som feirer frifødsel, tilslutt deg
        nettverket med presentasjon av deg selv og link til dine tjenester, slik
        at kvinner vet hvor de kan finne støtte som er trygg for dem.
      </div>
      <div className="bg-white">
        <h1 className="font-bold text-3xl m-auto text-center">
          Ønsker du å slutte deg til nettverket?
        </h1>
        Hvis du ønsker å tilslutte deg nettverket tar du personlig kontakt med
        en av personene som er i nettverket nå. De vil da godkjenne din
        beskrivelse av deg selv, ta imot et bilde av deg og få det publisert på
        nettsiden.
        <div className="flex justify-evenly">
          <div className="bg-pink-100 w-[25vw]">
            Hvis du tilslutter deg nettverket i kategorien «kvinner som har
            direkte erfaring med vill graviditet og frifødsel», så kan du
            presente deg ved å svare på disse spørsmålene: Beskriv din direkte,
            selvopplevde erfaring med vill graviditet og frifødsel: Beskriv din
            direkte, selvopplevde erfaring med å være fødselsvitne: Hvorfor var
            frifødsel riktig for deg og dine barn?
          </div>
          <div className="bg-pink-100 w-[25vw]">
            Hvis du tilslutter deg nettverket i kategorien «de som genuint
            ønsker å friføde sine fremtidige barn», så kan du presente deg ved å
            svare på disse spørsmålene: Beskriv din direkte, selvopplevde
            erfaring med graviditet og fødsel: Beskriv din direkte, selvopplevde
            erfaring med å være fødselsvitne: Hva inspirerer deg ved frifødsel?
          </div>
          <div className="bg-pink-100 w-[25vw]">
            Spørsmål for deg som tilslutter deg nettverket i kategorien
            «mennesker som støtter, feirer og gleder seg over denne typen
            graviditet og fødsel» uten nødvendigvis å ha opplevd det selv eller
            ha utsikter til å oppleve det i fremtiden. Fortell det du vet og
            ønsker å dele om din egen fødsel, altså da du kom til verden:
            Beskriv din direkte, selvopplevde erfaring med å føde og å være
            fødselsvitne: Hva er grunnene til at du støtter og feirer frifødsel
            og vill graviditet? Hva kan du tilby av støtte og hjelp, og hvor
            finner vi beskrivelsen av dine eventuelle tjenester?
          </div>
        </div>
      </div>
    </main>
  );
}
