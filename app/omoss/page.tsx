"use client";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";
import "./bilder.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";
export default function OmOss() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black bg-pink-100">
      <h1 className="font-bold text-5xl m-auto text-center my-[5vh]">
        Om oss.
      </h1>
      {/*
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
          <div className="flex lg:flex-row flex-col">
            <div className="maren shrink-0 lg:h-[20vw] h-[70vw] lg:w-[20vw] w-[70vw]"></div>
            <Accordion>
              <AccordionTab header="Maren Berg Dybvik">
                <p className="m-0">
                  Jeg ble fascinert av fri fødsel rundt 2018, mange år før jeg
                  selv ble gravid. Jeg lengtet etter magien i det å være gravid,
                  og kunne nesten ikke tro det var sant da det faktisk skjedde
                  med meg. Jeg hadde hørt så mange positive og varierte
                  frifødselsfortellinger før jeg ble gravid at valget om å føde
                  på egenhånd var lett å ta. Begge mine barn er født hjemme uten
                  helsepersonell, i 2021 og 2024. I den første fødselen hadde
                  jeg en barseldoula/venninne til stede. Å føde hjemme føltes
                  som det riktige for meg fordi det føles tryggere enn å dra til
                  et sykehus med fremmede mennesker.
                  <br /> <br />​ Graviditet, fødsel, barseltid og morskap er noe
                  jeg har fått dyp respekt og beundring for. Denne overgangen i
                  livet ønsker jeg å dedikere meg til, fordi en mor i harmoni
                  gir positive ringvirkninger i generasjoner. Jeg tok Free Birth
                  Society sin Radical Birth Keeper School våren 2024. <br />
                  <br />​ Nå er jeg også i gang med å tilby timer som coach
                  innenfor en forståelse kalt De Tre Prinsipper. Det handler om
                  at livet skjer ikke utenfra, men innenfra. Vi opplever verden
                  gjennom våre tanker om den. Min lidenskap er hvordan frihet
                  fra begrensende tanker gir mer rom for å kjenne etter hva som
                  er sant innenfra. Langs veien det er å bli mor er det mange
                  valg å ta, og lett å ta valg basert på andre menneskers tanker
                  og frykter. Jeg er opptatt av at alle gravide innser visdommen
                  de har inne i seg selv, og tar egne valg forankret i sannhet.
                  Jeg tilbyr ingen medisinske råd, kun min tilstedeværelse
                  sammen med deg. <br />
                  <br />​ Mine fødselsfortellinger er tilgjengelige på Fri
                  fødsel podkast Kontakt meg via instagram
                  <Button
                    className="text-left"
                    label="instagram.com/marendybvik"
                    link
                    onClick={() =>
                      window.open("https://instagram.com/marendybvik", "_blank")
                    }
                  />
                  <br />
                  eller mail marendybvik@gmail.com
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex lg:flex-row flex-col">
            <div className="maria shrink-0 lg:h-[20vw] h-[70vw] lg:w-[20vw] w-[70vw]"></div>

            <Accordion>
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
          <div className="flex lg:flex-row flex-col">
            <div className="anja shrink-0 lg:h-[20vw] h-[70vw] lg:w-[20vw] w-[70vw]"></div>

            <Accordion>
              <AccordionTab header="Anja Bache-Wiig Solberg">
                <p className="m-0">
                  Jeg har gjennomgått en 9 måneder lang vill graviditet og
                  frifødte mitt foreløpig eneste barn i Juni 2022. Dette sto jeg
                  frem med i VG i 2024. Jeg opplevde graviditeten og fødselen
                  som naturlig og selvsagt, etter å ha jobbet meg gjennom en del
                  antakelser, følelser og forventninger både før jeg tenkte på å
                  få barn og i løpet av graviditeten med sønnen min. Det var
                  gjennom Freya Kellet sin Instagramprofil jeg ble introdusert
                  for frifødsel, og jeg lot det påvirke meg fordi det resonnerte
                  med mitt verdensbilde.
                  <br /> <br />
                  Jeg har ingen erfaring med å vitne menneskefødsler, men har
                  observert både familiekatten og familiehunden føde flere
                  ganger i løpet av oppveksten min. Dyrene og planterikets evne
                  til å springe ut i sitt eget tempo var min største
                  inspirasjon, i tillegg til kroppsliggjorte erfaringer av
                  tilstedeværelse, intensitet og pust gjennom yoga. <br />
                  <br />
                  Frifødsel var riktig for meg og mitt barn på grunn av dets
                  helsebevarende effekt. Roen, privatlivet og varsomheten det
                  setter ut i liv var også viktig for oss. Valget har gjort det
                  enkelt å integrere opplevelsen og feire sønnen min sine
                  fødselsdager uten forstyrrende tanker om hva jeg måtte utholde
                  for å bringe han til verden, for det var ingen ting. I stedet
                  var fødselen et hverdagslig og ikraftgjørende overgangsritual.
                  <br />
                  <br />
                  Dersom vi kjenner hverandre direkte eller indirekte, er jeg
                  her for å diskutere alt mulig. Jeg har en nettside du kan
                  finne her:{" "}
                  <Button
                    className="text-left"
                    label="www.anjabache-wiigsolberg.no"
                    link
                    onClick={() =>
                      window.open("https://anjabache-wiigsolberg.no", "_blank")
                    }
                  />
                  <br />
                  <br />
                  <Button
                    className="text-left"
                    label="https://anbawiso5.wixsite.com/anjabws/"
                    link
                    onClick={() =>
                      window.open(
                        "https://anbawiso5.wixsite.com/anjabws/",
                        "_blank"
                      )
                    }
                  />
                  <br />
                  <br />
                  og en instagramprofil som heter:
                  <Button
                    className="text-left"
                    label="annjannas"
                    link
                    onClick={() =>
                      window.open("https://instagram.com/annjannas", "_blank")
                    }
                  />
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex lg:flex-row flex-col">
            <div className="marlene shrink-0 lg:h-[20vw] h-[70vw] lg:w-[20vw] w-[70vw]"></div>

            <Accordion>
              <AccordionTab header="Marlene Omlid">
                <p className="m-0">
                  Jeg er Birthkeeper og støtter kvinner til å finne sin egen
                  vei. <br />
                  <br />
                  Selv har jeg tre barn og to barn i hjertet. Jeg har opplevd
                  veldig forskjellige fødsler. Jeg har alltid ønsket meg
                  hjemmefødsel, men mitt første barn ble født med et planlagt
                  keisersnitt pga seteleie. Mitt andre barn ble født ved en
                  ufrivillig VBAC-sykehusfødsel, Dette var fordi hjemmejordmor
                  ikke fikk lov til å støtte meg pga. tidligere keisersnitt. Det
                  har satt sine traumespor. Nummer tre og nummer fire var
                  spontanaborter, som jeg fødte uassistert hjemme i full frihet.
                  Etter det vokste tilliten min og jeg skjønte at kroppen min
                  kunne føde selv. Deretter tok jeg en Birthkeeper-utdannelse
                  hos Antonia Unger i Tyskland og ble gravid for femte gang. Da
                  hadde jeg en vill graviditet og jeg hadde lærte alt jeg
                  trengte for å føde min stjernekikker, uassistert og i full
                  tillit og i mitt eget tempo i badekaret. Etter denne
                  frigjørende spirituelle opplevelsen forstår jeg hva det betyr
                  å føde helt uforstyrret. <br />
                  <br />
                  Jeg ønsker at flere kvinner får muligheten til å oppleve det
                  og jeg støtter kvinner til å forberede seg mentalt på denne
                  veien. Mye handler om en indre frigjøring. Min erfaring som
                  fødselsvitne har vært å støtte en kvinne i frifødsel over
                  telefon. Det var en kraftfull opplevelse. <br />
                  <br />
                  Jeg er homeopat og støtter mennesker til å finne en tilgang
                  til symptomene sine så de kan løse det opp selv. Jeg lar meg
                  inspirere av German New Medicine (GNM). I tillegg tilbyr jeg
                  familieoppstilling og barnesjelekommunikasjon, kvinnesirkler
                  og jeg er vert for Frifødsel Podcast Jeg tilbyr 1:1 samtaler i
                  Sandefjord-området og online, både på tysk og norsk. <br />
                  <br />
                  Du kan kontakte meg på Instagram
                  <Button
                    className="text-left"
                    label="@Marlene.Omlid"
                    link
                    onClick={() =>
                      window.open(
                        "https://instagram.com/marlene.omlid",
                        "_blank"
                      )
                    }
                  />
                  <br />
                  <br />
                  Lytt til frifødsel podcast her
                  <Button
                    className="text-left"
                    label="https://open.spotify.com/show/4tUU6avucZNdQZv1sHSDgT?si=7a87cddff3b64878"
                    link
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/show/4tUU6avucZNdQZv1sHSDgT?si=7a87cddff3b64878",
                        "_blank"
                      )
                    }
                  />
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex lg:flex-row flex-col">
            <div className="kristin shrink-0 lg:h-[20vw] h-[70vw] lg:w-[20vw] w-[70vw]"></div>

            <Accordion>
              <AccordionTab header="Kristin Indreeide">
                <p className="m-0">
                  Kristin Indreeide <br />
                  Jeg opplever graviditet og fødsel som en mulighet til å ta
                  radikalt ansvar for eget liv, ekspandere og skape. Det er
                  magisk og stort å være en portal for liv til denne planeten.{" "}
                  <br />
                  <br />
                  Min opplevelse med å være et fødselsvitne i uassistert fødsler
                  er magien og det vakre i å hedre, ære og vitne kvinnen, hennes
                  ønsker, speile henne og være en emosjonell og fysisk støtte.
                  Det oppleves som en av de mest meningsfylte oppgavene jeg har
                  gjort og kan gjøre i livet. <br />
                  <br />
                  Det som inspirerer meg med frifødsel er at morbaby kan fødes i
                  fred, ro og kjærlighet. Jeg tror verden blir et bedre sted når
                  morbaby får en bedre start på livet. <br />
                  <br />
                  Vert Frifødsel Podcast
                  <br />
                  Birthkeeper 1:1 Oslo-område/online <br />
                  kontakt instagram{" "}
                  <Button
                    className="text-left"
                    label="@kristinindreeide"
                    link
                    onClick={() =>
                      window.open(
                        "https://instagram.com/kristinindreeide",
                        "_blank"
                      )
                    }
                  />
                  <br />
                  epost: kristin_indreeide@hotmail.com
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>

        <Card>
          <div className="flex lg:flex-row flex-col">
            <div className="helene shrink-0 lg:h-[20vw] h-[70vw] lg:w-[20vw] w-[70vw]"></div>

            <Accordion>
              <AccordionTab header="Helene B. Clarke">
                <p className="m-0">
                  Jeg har født to ganger og har både erfaring med en igangsatt
                  fødsel på sykehus i 2021 og deretter en frifødsel hjemme i
                  2024. Den første fødselen ble en vanskelig opplevelse for meg
                  og barnet, og sykhusfødsel fristet ikke til gjentagelse. Da
                  jeg ble gravid for andre gang begynte jeg å utforske å føde
                  hjemme. Etter at jeg leste jeg Laura Kaplan Shanlys bok
                  Unnasisted Childbirth, om hvordan vi bidrar til å skape vår
                  egen virkelighet. Hvor hun også nevner det antropologiske
                  arbeidet til Marjorie Shostak om !Kung San folket, der hun
                  beskriver anekdotisk at !Kung-kvinner har kunnet føde alene,
                  jeg var overbevist om at jeg også kunne gjøre det.
                  <br />
                  <br /> En uforstyrret fysiologisk fødsel la også til rette for
                  det jeg anså som en mest mulig skånsom overgang til livet
                  utenfor livmor. Jeg anser fødselsprosessen og den første tiden
                  etter fødselen som svært betydningsfull for tilknytning og
                  helsen resten av livet, og derfor viktig å verne om. Ved å
                  oppholde meg på et privat og uforstyrret sted, var det mulig
                  for meg å velge en smertefri fødsel i full hengivenhet til
                  Gud. <br />
                  <br />
                  Jeg har ingen erfaring som fødselsvitne. Jeg er overbevist om
                  at kvinner i de aller fleste tilfeller kan føde uten å bli
                  observert, altså at det ikke er nødvendig å ha en annen der.
                  Jeg anerkjenner at noen fødekvinner likevel har et stort ønske
                  om å bli vitnet. <br />
                  <br />I mitt andre svangerskap unngikk jeg de rutinemessige
                  svangerskapskontrollene, noe som bidro til å styrke kontakten
                  med min egen intuisjon. Jeg er interessert i å lære mer om
                  andres opplevelser i fødsel, og forskjellige måter å se verden
                  på. Jeg ser at diskusjon og meningsutveksling er en kilde til
                  læring. Mine interesser er yoga, meditasjon, antropologi, og
                  historier. <br />
                  <br />
                  Ønsker du kontakt kan du finne min kontakinfo og mine
                  tjenester og på{" "}
                  <Button
                    className="text-left"
                    label="www.heleneshage.com"
                    link
                    onClick={() =>
                      window.open("https://heleneshage.com", "_blank")
                    }
                  />
                  <br />
                  <br />
                  Lese min betrakninger på{" "}
                  <Button
                    className="text-left"
                    label="substack.com/@helenebclarke"
                    link
                    onClick={() =>
                      window.open(
                        "https://substack.com/@helenebclarke",
                        "_blank"
                      )
                    }
                  />
                  <br />
                  <br />
                  Du kan høre mine fødselshistorier på Frifødsel Podcast
                  <br />
                  <Button
                    className="text-left"
                    label="open.spotify.com/episode/7dxaXO5jW1gLthq2POZwvA?si=63e8ce52c4584b0d"
                    link
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/episode/7dxaXO5jW1gLthq2POZwvA?si=63e8ce52c4584b0d",
                        "_blank"
                      )
                    }
                  />
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

 */}
    </main>
  );
}
