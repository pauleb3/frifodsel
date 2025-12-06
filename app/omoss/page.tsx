"use client";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";
import "./bilder.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";
export default function OmOss() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black bg-pink-100">
      <h1 className="font-bold text-5xl m-auto text-center my-[5vh]">Om oss</h1>
      <div className="p-[2vh] w-[80vw]">
        Frifødselsnettverket er ikke en organisasjon. Det har ingen leder og
        ingen fast struktur, men er et desentralisert nettverk.
        <br />
        <br />
        Individene kan oppgi at de er tilsluttet Frifødselsnettverket, men hver
        enkelt representerer seg selv, ikke andre tilsluttede individer.
        <br />
        <br />
        Det er ingen penger å tjene på å være tilsluttet nettverket og det
        oppsto idealistisk.
        <br />
        <br />
      </div>
      <Card className="w-full p-0 lg:p-20">
        Vi er:
        {/*<Card>
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
                    label="@marendybvik"
                    link
                    onClick={() =>
                      window.open("https://instagram.com/marendybvik", "_blank")
                    }
                  />
                  <br />
                  eller mail marendybvik@gmail.com Book coaching:
                  <Button
                    className="text-left"
                    label="https://stan.store/marendybvik/"
                    link
                    onClick={() =>
                      window.open("https://stan.store/marendybvik/", "_blank")
                    }
                  />
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
                <p className="m-0"></p>
                Jeg er en av initiativtagerne til frifødselsbevegelsen i Norge,
                og er her for å bistå i den kollektive oppvåkningen tilbake til
                feminine og jordnære verdier.
                <br />
                <br />
                Etter en nær døden opplevelse som 3åring har jeg alltid
                fascinert meg av døden, fødsler og det åndelige.
                <br />
                <br />
                Jeg jobbet med døende i 7 år, og trives med å holde rom for
                livets overganger.
                <br />
                <br />
                I 2021 ble min første fødsel igangsatt på sykehuset. En
                traumatisk opplevelse preget av overformynderi og dårlig omsorg.
                Å gå gravid og føde innad i det medisinske systemet opplevde jeg
                som både forstyrrende og begrensende, preget av en fundamentellt
                manglende forståelse for fødselens energetiske og spirituelle
                dimensjon. <br />
                <br />
                Opplevelsen av å ikke bli møtt på det planet jeg trengte for å
                føle meg trygg, fikk meg til å opprette en kvinnesirkel sammen
                med andre frifødende under mitt andre svangerskap. Kjærlighet,
                tillit og autensitet erstattet protokoller og retningslinjer.{" "}
                <br />
                <br />
                Barn nummer to ble født hjemme med familien, uten
                helsepersonell. En hverdagslig og enkel, terapeutisk og
                nytelsesfylt opplevelse. Å ta tilbake fødselen som en hellig og
                integrert familieseremoni er den vakreste initeringen i mitt
                liv. <br />
                <br />
                For tiden er jeg hjemme med to små barn, koordinerer et
                community prosjekt og fasiliteter digitale kvinnesirkler for
                Holistisk Forbund.
                <br />
                <br /> Min bønn er at kvinner får avgjøre hvor, når og med hvem
                vi føder våre barn, at vi hedres for denne innsatsen med god
                omsorg i barselstiden og at de som ønsker det får økonomisk
                støtte til å være hjemme med barna sine. <br />
                <br />
                Jeg lar meg inspirere av naturens sykliske visdom, av det
                guddommelige og av kjærligheten.
                <br />
                <br /> Du finner meg på instagram:{" "}
                <Button
                  className="text-left"
                  label="@mariaheiberg"
                  link
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/maria.heiberg/",
                      "_blank"
                    )
                  }
                />
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
                  Jeg har levd omtrent 270 av mine livsdager som «vill gravid»
                  og frifødte mitt foreløpig eneste barn i juni 2022. Dette sto
                  jeg frem med i VG i 2024. Jeg opplevde graviditeten og
                  fødselen som naturlig og selvgående, etter å ha jobbet meg
                  gjennom en del antakelser, følelser og forventninger både før
                  jeg tenkte på å få barn og i løpet av graviditeten med sønnen
                  min. Det var gjennom Freya Kellet sin Instagramprofil jeg ble
                  introdusert for frifødsel, og jeg lot det påvirke meg fordi
                  det resonnerte med mitt verdensbilde.
                  <br /> <br />
                  Jeg har ingen erfaring med å vitne menneskefødsler, men har
                  observert både familiekatten og familiehunden føde flere
                  ganger i løpet av oppveksten min. Dyrene og planterikets evne
                  til å springe ut i sitt eget tempo var min største
                  inspirasjon, i tillegg til The Complete Guide to Freebirth, og
                  kroppsliggjorte erfaringer av tilstedeværelse, intensitet og
                  pust gjennom yoga.
                  <br />
                  <br />
                  Frifødsel var riktig for meg og mitt barn på grunn av dets
                  helsebevarende effekt. Roen, privatlivet og varsomheten det
                  setter ut i liv var også viktig for oss. Valget har gjort det
                  enkelt å integrere opplevelsen og feire sønnen min sin første
                  fødselsdag uten forstyrrende tanker om hva jeg måtte utholde
                  for å bringe ham til verden - for det var ingen ting. Fødselen
                  var i stedet et hverdagslig, med dypt ikraftgjørende
                  overgangsritual for meg og en varsom start på livet for ham.
                  <br />
                  <br />
                  Dersom vi kjenner hverandre direkte eller indirekte, er jeg
                  her for å diskutere alt mulig. Jeg har en nettside du kan
                  finne her: www.anjabache-wiigsolberg.no og en instagramprofil
                  som heter: annjannas Dersom vi kjenner hverandre direkte eller
                  indirekte, er jeg her for å diskutere alt mulig. Jeg har en
                  nettside du kan finne her:{" "}
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
                  og en instagramprofil som heter:
                  <Button
                    className="text-left"
                    label="@annjannas"
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
                  ufrivillig VBAC-sykehusfødsel, dette var fordi hjemmejordmor
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
                  Lytt til
                  <Button
                    className="text-left"
                    label="Frifødsel Podcast"
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
                  <br />
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
                  og barnet. Da jeg ble gravid for andre gang begynte jeg å
                  utforske å føde hjemme. Jeg leste Laura Kaplan Shanlys bok
                  Unnasisted Childbirth, om hvordan vi bidrar til å skape vår
                  egen virkelighet. Shanley refererer også til Marjorie Shostak
                  sitt antropologiske arbeid om !Kung San folket, og hvordan
                  kvinnene deres sikter mot å føde alene. Det traff meg dypt og
                  jeg ble overbevist om at jeg også kunne gjøre det.
                  <br />
                  <br />
                  En uforstyrret fysiologisk fødsel la også til rette for det
                  jeg anså som en mest mulig skånsom overgang til livet utenfor
                  livmor. Jeg anser fødselsprosessen og den første tiden etter
                  fødselen som svært betydningsfull for tilknytning og helsen
                  resten av livet, og derfor viktig å verne om. Ved å oppholde
                  meg på et privat og uforstyrret sted, var det mulig for meg å
                  oppleve en smertefri fødsel i full hengivenhet til Gud.
                  <br />
                  <br />
                  Jeg har ingen erfaring som fødselsvitne. Jeg er overbevist om
                  at kvinnekroppen i de aller fleste tilfeller er kapabel til å
                  føde uten å bli undersøkt og observert. Jeg anerkjenner at
                  noen fødekvinner likevel har et stort ønske om å bli vitnet
                  eller støttet.
                  <br />
                  <br />I mitt andre svangerskap unngikk jeg de rutinemessige
                  svangerskapskontrollene, og dette bidro til å styrke kontakten
                  med min egen intuisjon. Jeg er interessert i å lære mer om
                  andres opplevelser i fødsel, og forskjellige måter å se verden
                  på. Jeg ser at diskusjon og meningsutveksling er en kilde til
                  læring. Mine interesser er yoga, meditasjon, antropologi og
                  historier.
                  <br />
                  <br />
                  Første gang jeg hørte om frifødsel var i en artikkel i{" "}
                  <Button
                    className="text-left"
                    label="VG"
                    link
                    onClick={() =>
                      window.open(
                        "https://www.vg.no/nyheter/i/mRAkqg/freebirth-uassistert-foedsel-derfor-foedte-vi-uten-hjelp"
                      )
                    }
                  />{" "}
                  sommeren 2020. Det resonerte ikke med meg umiddelbart, men
                  etter å ha kjent på kroppen hva man kan bli utsatt for i
                  sykehusfødsel begynte jeg å utforske tema.
                  <br />
                  <br />
                  Les min betrakninger på{" "}
                  <Button
                    className="text-left"
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
                  Du kan høre mine fødselshistorier på{" "}
                  <Button
                    className="text-left"
                    label="   Frifødsel Podcast"
                    link
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/episode/7dxaXO5jW1gLthq2POZwvA?si=63e8ce52c4584b0d",
                        "_blank"
                      )
                    }
                  />
                  <br />
                  <br />
                  Foto: Anja Bache-Wiig Solberg
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </Card>{" "*/}
        <br />
        <br />
        Maren Berg dybvik
        <br />
        <br />
        Maria Heiberg <br />
        <br />
        Anja Bache-Wiig Solberg
        <br />
        <br />
        Marlene Omlid <br />
        <br />
        Kristin Indreeide <br />
        <br />
        Helene B. Clarke
        <br />
        <br /> Sunniva Halstensen
        <br />
        <br />
        Kristina Folkestad
        <br />
        <br />
        Anya Ragnhild Sæter
      </Card>

      <div className="bg-white">
        <h1 className="font-bold text-3xl m-auto text-center py-10">
          Ønsker du å slutte deg til nettverket?
        </h1>
        <div className="mx-[10vw] mb-5">
          Hvis du ønsker å være en del av frifødselsbevegelsen, er du det
          allerede. Dette er Frifødselsnettverket, en liten fasett av
          bevegelsen, vevet av relasjonene mellom de navngitte individene.
        </div>
      </div>

      <div className="bg-white px-[15vw] py-12">
        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Ansvarsfraskrivelse:
          </span>{" "}
          Mottakere av nettsidens innhold står selv ansvarlig for alle
          beslutninger knyttet til egen graviditet og fødsel. Nettverket og dets
          tilsluttede individer kan ikke holdes ansvarlige for konsekvensene av
          valg og handlinger basert på tolkning av vår formidling. En er selv
          ansvarlig for å innhente oppdatert helsefaglig informasjon og
          anbefalinger fra helsemyndighetene. Svangerskapsoppfølging og
          fødselshjelp er gratis og tilgjengelig i Norge, og tjenesten kan nås
          gjennom å kontakte din nærmeste helsestasjon.
        </p>
      </div>
    </main>
  );
}
