"use client";
import { Button } from "primereact/button";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import maren from "./maren.avif";
import "./bilder.css";
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
        <Card>
          <div className="flex">
            <div className="maren shrink-0 lg:h-[20vw] md:h-[30vw] lg:w-[20vw] md:w-[30vw]"></div>

            <Accordion activeIndex={0}>
              <AccordionTab header="Maren Berg Dybvik">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex">
            <div className="maria shrink-0 lg:h-[20vw] md:h-[30vw] lg:w-[20vw] md:w-[30vw]"></div>

            <Accordion activeIndex={0}>
              <AccordionTab header="Maria Heiberg">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex">
            <div className="anja shrink-0 lg:h-[20vw] md:h-[30vw] lg:w-[20vw] md:w-[30vw]"></div>

            <Accordion activeIndex={0}>
              <AccordionTab header="Anja Bache-Wiig Solberg">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex">
            <div className="marlene shrink-0 lg:h-[20vw] md:h-[30vw] lg:w-[20vw] md:w-[30vw]"></div>

            <Accordion activeIndex={0}>
              <AccordionTab header="Marlene Omlid">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex">
            <div className="kristin shrink-0 lg:h-[20vw] md:h-[30vw] lg:w-[20vw] md:w-[30vw]"></div>

            <Accordion activeIndex={0}>
              <AccordionTab header="Kristin Indreeide">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex">
            <div className="helene shrink-0 lg:h-[20vw] md:h-[30vw] lg:w-[20vw] md:w-[30vw]"></div>
            Helene B. Clarke
            <Accordion activeIndex={0}>
              <AccordionTab header="Header I">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>
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
        <h1 className="font-bold text-3xl m-auto text-center py-10">
          Ønsker du å slutte deg til nettverket?
        </h1>
        <div className="mx-[10vw] mb-5">
          Hvis du ønsker å tilslutte deg nettverket tar du personlig kontakt med
          en av personene som er i nettverket nå. De vil da godkjenne din
          beskrivelse av deg selv, ta imot et bilde av deg og få det publisert
          på nettsiden.
        </div>
        <div className="lg:flex lg:flex-row md:flex-col justify-evenly">
          <div className="bg-pink-100 sm:w-[90vw] lg:w-[25vw] m-3 p-5">
            Hvis du tilslutter deg nettverket i kategorien «kvinner som har
            direkte erfaring med vill graviditet og frifødsel», så kan du
            presente deg ved å svare på disse spørsmålene:{" "}
            <ol className="pl-8 mt-2" style={{ listStyle: "decimal" }}>
              <li>
                Beskriv din direkte, selvopplevde erfaring med vill graviditet
                og frifødsel:
              </li>
              <li>
                Beskriv din direkte, selvopplevde erfaring med å være
                fødselsvitne:
              </li>
              <li>Hvorfor var frifødsel riktig for deg og dine barn?</li>
            </ol>
          </div>
          <div className="bg-pink-100 sm:w-[90vw] lg:w-[25vw] m-3 p-5">
            Hvis du tilslutter deg nettverket i kategorien «de som genuint
            ønsker å friføde sine fremtidige barn», så kan du presente deg ved å
            svare på disse spørsmålene:
            <ol className="pl-8 mt-2" style={{ listStyle: "decimal" }}>
              <li>
                Beskriv din direkte, selvopplevde erfaring med graviditet og
                fødsel:
              </li>
              <li>
                Beskriv din direkte, selvopplevde erfaring med å være
                fødselsvitne:
              </li>
              <li>Hva inspirerer deg ved frifødsel?</li>
            </ol>
          </div>
          <div className="bg-pink-100 sm:w-[90vw] lg:w-[25vw] m-3 p-5">
            Spørsmål for deg som tilslutter deg nettverket i kategorien
            «mennesker som støtter, feirer og gleder seg over denne typen
            graviditet og fødsel» uten nødvendigvis å ha opplevd det selv eller
            ha utsikter til å oppleve det i fremtiden. Fortell det du vet og
            ønsker å dele om din egen fødsel, altså da du kom til verden:
            <ol className="pl-8 mt-2" style={{ listStyle: "decimal" }}>
              <li>
                Beskriv din direkte, selvopplevde erfaring med å føde og å være
                fødselsvitne:
              </li>
              <li>
                Hva er grunnene til at du støtter og feirer frifødsel og vill
                graviditet?
              </li>
              <li>
                Hva kan du tilby av støtte og hjelp, og hvor finner vi
                beskrivelsen av dine eventuelle tjenester?
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
