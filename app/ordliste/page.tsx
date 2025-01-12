"use client";
import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16 justify-between bg-pink-100">
      <h1 className="text-5xl font-bold">ORDLISTE</h1>​​ <br /> <br />
      {/*


       Dette er
      en fragmentarisk ordliste som blander definering med normering. Dette
      inngår ikke i våre prinsipper, men forklarer hva som kan legges i noen av
      begrepene som brukes der. Tilslutning til nettverket er delvis uavhengig
      av denne ordlisten. Den tar sikte på å ha et tydelig perspektiv, ikke en
      objektiv distanse til begrepene som omtales. Bruk det som utgangspunkt for
      egen videre utforsking, ikke som endelig konklusjon.
      <Card className="m-16 p-8">
        <p className="text-black">
          <span className="text-black font-bold font-bold">Frifødsel: </span>
          En fysiologisk, naturlig og uforstyrret fødsel utført av den fødende
          selv som har alt ansvar og bestemmelsesrett. Valget om å friføde må
          være tatt av egen fri vilje og lyst, helhjertet, bevisst og i
          personlig integritet. Hvis valget og intensjonen med å føde uassistert
          ikke opplevdes helt fritt er det ikke en frifødsel. En frifødsel kan
          skje alene, i samvær med familien eller støttet av en doula eller
          venner som helhjertet støtter valget om å friføde og ikke saboterer.
          Frifødsel er den typen fødsel menneskearten dypest sett er kalibrert
          for, spesielt hormonsystemet vårt, men også vår åndelige konstitusjon.
          <br />
          <br />
        </p>

        <p className="text-black">
          Frifødsel som begrep ble lansert av Jeannine Parvati Baker i hennes
          bok Prenatal Yoga &amp; Natural Birth, med følgende språklige former:
          A freebirth (en frifødsel) - to freebirth (å friføde) - a freeborn
          baby (en frifødt baby). Baker mente at fødselen også måtte være «free»
          i betydningen «gratis» for å være en frifødsel, altså uten betalte
          fødselshjelpere. Dette kriteriet har den Australske frifødselsdoulaen
          Amy Lou utfordret, og kriteriet overenstemmer heller ikke med måten
          begrepet brukes i dag.
          <br />
          <br />
        </p>

        <p className="text-black">
          Frifødseler er i kontrast til fødsler i helsevesenet i utgangspunktet
          enkeltstående hendelser, ikke en del av et system. Frifødselsdoulaers
          tjenester kan sies å være et system, og en frifødsel i denne
          konteksten er dermed også en del av et system. Men i sitt opprinnelige
          vesen foregår frifødselen alene, eller kun sammen med familien, og er
          en privat, enkeltstående hendelse. Legg merke til at mange frifødere
          ikke har noe erfaring med å vitne andres fødsel.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Påbegynt frifødsel:{" "}
          </span>
          En frifødsel der helsepersonell er tilkalt i løpet av fødselsforløpet,
          som regel på grunn av ubearbeidede følelser og tanker, men også ved
          nødstilfeller.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Transportfødsel:{" "}
          </span>
          Når siste del av fødselen skjer i løpet av transport til sykehuset og
          barnet blir født i en privat bil, taxi, buss eller rett utenfor et
          annet transportmiddel. I disse tilfellene kalles hendelsen
          <br />
          <br /> en uplanlagt, uassistert fødsel. Om det skjer i en ambulanse er
          ikke fødselen uassistert, men likevel en transportfødsel.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Uassistert fødsel:{" "}
          </span>
          Fødsler der helsepersonell ikke er til stede. Den er altså ikke
          assistert av autorisert helsepersonell, men ofte assistert av andre
          personer, entiteter eller naturens urkraft.
          <br />
          <br />
        </p>

        <p className="text-black">
          Hvis en kvinne egentlig ønsket å ha en autorisert jordmor til stede,
          men ikke har det, kan uassistert fødsel være et beskrivende begrep.
          Hun er uten assistanse fra den institusjonen hun ønsket å være
          assistert av.
        </p>

        <p className="text-black">
          Hvis jordmor ikke nådde frem i tide til å vitne en planlagt
          hjemmefødsel har det skjedd en uassistert fødsel, men jordmor vil da
          kunne gjøre helseundersøkelser når hun når frem og registrere barnet i
          Skatteetaten, altså assistere i noen grad.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Frifødselsdoula-assistert fødsel:{" "}
          </span>
          En frifødsel planlagt i samarbeid med en uavhengig frifødselsdoula, og
          utført med hennes støtte. Denne doulaen er som en opprinnelig
          “Jordmor”, som før praksisen ble kapret av medisinen og før denne
          beklagelige utviklingen gjorde det nødvendig å finne opp fenomenet
          frifødsel. Noen bruker begrepet birthkeeper eller fødselsvitne som
          synonymt med frifødseldoula
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Fødsel i fangenskap:{" "}
          </span>
          «Birth in captivity», et uttrykk Sister MorningStar har funnet opp for
          å beskrive opplevelsen av å føde mens man er innestengt, fastspent og
          under overvåkning. Det henviser ikke til opplevelsen av å føde med
          håndjern, mens man bokstavelig talt sitter fengslet for et lovbrudd,
          men det å la seg sperres inne av helsevesenet under fødsel i søken på
          trygghet og overlevelse. Som et dyr i bur tror den fødende kvinnen hun
          er tryggere der enn i «villmarken», og kanskje er det også sant om de
          har blitt domestikert i den grad at hun har mistet kontakten med
          urinstinkter, eller enda verre ikke utviklet de da utviklingsvinduet
          var åpent. De som er født i fangenskap «velger» å føde i fangenskap
          helt til vi bryter ut og gjenoppdager vår ville natur.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Hjemmefødsel: </span>
          Å engasjere en autorisert jordmor som du kan tilkalle og som vil
          overvære fødselen i ditt hjem vil gi utslag i en hjemmefødsel. Det er
          smale kriterier for at jordmor får lov til å støtte deg i
          hjemmefødsel, og det er strenge krav for når hun må sørge for å få deg
          overflyttet til sykehus. Også etter at barnet er ute kan det være
          påkrevet å overflytte dere. Du vil gjennom hele graviditeten leve med
          et press om å føde før uke 42+0, ellers vil tilbudet brått bli tatt
          fra deg, i den siste, sårbare delen av graviditeten da alt du ønsker
          er stabilitet og tryggheten i at du er holdt.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Sykehusfødsel:{" "}
          </span>
          Å komme som gravid privatperson inn på andre menneskers arbeidsplass
          kalt sykehus for å føde under deres observasjon. I en sykehusfødsel
          overlater du en del av ansvaret for fødselens utfall og trygghet i de
          profesjonelle sin struktur, men du har hele veien et ansvar for å
          motsette deg eller samtykke til ethvert inngrep og legemiddel som
          foreslås for deg. Behandler-pasientrelasjon er gjeldende. <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Fysiologisk fødsel:{" "}
          </span>
          En fødsel som starter og fortsetter av seg selv helt til barnet er
          født. Innebefatter også en fysiologisk fødsel av morkaken. Det vil si
          at mor føder morkaken selv, uten at noen andre drar i navlestrengen.
          Altså en fødsel uten innblanding og forstyrrelser. Fysiologisk fødsel
          foregår uten stripping for å sette i gang fødselen, uten forstyrrende
          og nedverdigende vaginale undersøkelser, uten kunstig ødeleggelse av
          fosterhinnen, uten forstyrrende lytting på hjerterytmen til barnet,
          uten instruert trykking. Rett og slett bare la fødselen av barnet og
          mormorkaken skje spontant. Fysiologisk fødsel kan noen ganger forgå i
          vann. Begrepet brukes for å sette ord på det naturlige og normale som
          merkelig nok har forsvunnet fra begrepene «naturlig fødsel» og «normal
          fødsel.»
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Naturlig fødsel:{" "}
          </span>
          En fødsel uten legemidler. En naturlig fødsel fasilitert av autorisert
          jordmor kan inneholde inngrep som, stripping, vaginale undersøkelser,
          overvåkning av fosterets hjerterytme med doppler(ultralyd), kunstig
          vannavgang, tvungen stillingsendring, instruert trykking, episiotomi,
          aktiv forløsing av morkaken og deretter voldsom massasje av magen for
          å stimulere livmorsammentrekkninger. Dette høres ikke naturlig ut for
          oss.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Normal fødsel:</span>{" "}
          Er en vaginal fødsel en autorisert jordmor fasiliterer. Gjelder
          kvinner med normalt svangerskap, frisk mor og antatt frisk barn,
          hodeleie til termin, spontan fødselsstart, ingen tidligere operasjoner
          på livmor eller andre komplikasjoner.
          <br />
          <br />
        </p>

        <p className="text-black">
          Denne fødselen holder seg innenfor tidsfristenene som står beskrevet i
          fødeavdelingens retningslinjer og kan inneholde inngrep som
          smertelindring med opiater, epidural/spinal-bedøvelse, kunstig
          vannavgang, kontinuerlig forsterkovervåkning med ultralyd eller
          skalpeelektrode, syntetisk oxytocin, steriltvannspapler,
          pudendalbedøvelse, i tillegg til inngrep som er står beskrevet over
          under naturlig fødsel. Vi er uenig i at alt dette skal normaliseres og
          kalles normalt.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Patologisk fødsel:
          </span>{" "}
          En fødsel som vurderes som sykelig, og krever at en lege er delaktig
          under fødselen. Barnet kan bli født vanlig vaginalt, eller med
          sugekopp, tang eller keisersnitt. En normal fødsel kan vurderes
          patologisk når tidsfristen i retningslinjene er utløpt. Eksempel på
          patologiske fødsler kan være senabort, prematur fødsel,
          svangerskapsforgiftning, diabetes, dødfødsel, seteleie,
          tvillingfødsler, påvist infeksjon osv.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Variasjon av normal:{" "}
          </span>
          Vi og flere med oss ønsker å utvide begrepet normal fødsel. Vi vet at
          fødsler som for eksempel varer lenger enn tidsfristen institusjonens
          retningslinjer tilsier, tvillingfødsler, setefødsler og fødsler etter
          uke 42 også kan være fødsler som kan skje spontant vaginalt uten
          inngripende tiltak og også kan ha lykkelig utfall.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Suveren fødsel:{" "}
          </span>
          Souvereign birth. Begrepet Emiliee Saldaya bruker på den typen fødsel
          Radical Birth Keepers skal legge til rette for. Altså, de opererer med
          et begrep for frifødsel der fødsel med betalt fødselshjelper
          utelukkes.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Radical Birth Keeper:{" "}
          </span>
          En tittel man kan kalle seg etter å ha tatt Radical Birth Keeper
          School eller MatriBirth Midwifery Institute utdannelsen hos Freebirth
          Society.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Freebirth Society:{" "}
          </span>
          FBS, en podcast og frifødselbevegelse, startet av Nord-Amerikaneren
          Emiliee Saldaya i 2017.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            The Complete Guide to Freebirth:{" "}
          </span>
          Et pratete og ganske abstrakt nettkurs laget av Emiliee Saldaya og
          Yolande Norris-Clark som er manges forberedelse til å friføde selv.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="font-bold">Intervensjoner: </span>
          Intervensjoner og inngripende tiltak i fødsel, kan være et uttrykk for
          livredning i reelle nødsituasjoner, men kan også være en måte
          helsepersonell på fødeinstitusjon opprettholder driften av avdelingen.
          I Norge finansieres fødselsomsorgen etter foretaksmodellen. Avdelingen
          får tilskudd etter hvor mange inngrep/behandlinger som har vært
          utført.
          <br />
          <br />
        </p>

        <p className="text-black">
          Det vil derfor hele tiden være intensiver fra ledelsen, (og forsking
          finansiert av legemiddelfirmaer) for å drive intervensjonsraten
          oppover. Å utføre nok inngrep i fødsel kan være en måte helsepersonell
          sikrer at avdelingen får inntekter og dermed gir økt jobbtrygghet for
          den enkelte.
        </p>

        <p className="text-black">
          Eksempler på intensiver, er å sette korte tidsfrister i
          retningslinjene og å generelt tilby et hektisk og ugjestmildt miljø
          for de fødende (som i seg selv hindrer trygghet og den naturlige
          fødselens fremgang). Helsepersonell som ikke gjør inngrep raskt nok,
          slik det står beskrevet i retningslinjen, risikerer å bli straffet for
          å ikke handle faglig forsvarlig og risikerer å miste autorisasjon og
          jobb. Helsepersonell som gjør unødvendige intervensjoner som volder
          stor skade blir ikke straffet og man legger skylda på fødekvinnen selv
          for å være gammel, syk eller for dårlig på å føde.
          <br />
          <br />
          Lavintervensjonsfødsel er svært lite lønnsomme, og et eksempel på det
          er at ABC-enheten for naturlig fødsel på OUS ble stengt i 2023, pga
          nettopp for lav lønnsomhet.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Iatrogen skade:{" "}
          </span>
          Skader en er påført av medisinsk behandling, undersøkelse og
          intervensjon. Medisinsk inngrep kan være både livreddende og
          dettimentalt også i nødstilfeller. Praksis vi mener alltid også skaper
          iatrogen skade (både fysisk og spirituellt) er stripping,
          igangsettelse, amniotomi, drypp med riestimulerende legemidler, å
          kutte navlestrengen før en nyfødt puster selvstendig, voldsom suging
          av nyfødtes luftveier, livmormassasje og å trekke løs en annens
          morkake. Vi mener altså at disse inngrepene påfører mennesker iatrogen
          skade, uavhengig om det også har foregått obstetrisk vold for å få
          inngrepene utført. Vi sier ikke at de ikke kan være riktige å bruke,
          men at også i de tilfellene det er riktig valg vil fordelene følges av
          skade.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Iatrogent drap:{" "}
          </span>
          Å bli drept av en medisinsk intervensjon, uavhengig av om
          intervensjonen har blitt vurdert som «faglig forsvarlig».
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Faglig forsvarlig:{" "}
          </span>
          Det helsevesenet og deres kontrollorganer vurderer sine handlinger og
          feilsteg opp mot. På denne måten tar de avstand fra faktiske
          konsekvenser, og flytter vurderingen til et metanivå av
          retningslinjer.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Obstetrisk vold:{" "}
          </span>
          En dårlig måte å utøve sitt yrke som autorisert jordmor og fødselslege
          på der en tvinger, presser og krenker sine pasienter for å få dem til
          å innordne seg normer og retningslinjer. Å ha opplevd obstetrisk vold
          er å ha blitt utsatt for dette av det personell som skulle ha gitt
          helsehjelp med omsorg og basert på informert samtykke. Dette er svært
          traumatiserende å oppleve.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Etterfødselssamtale:{" "}
          </span>
          Å fortelle om, forstå og bearbeide de barnefødslene en selv som
          fødemor har utført med sin egen kropp og måten de menneskene rundt var
          på. Støttet av en søster eller medmenneske som har frifødselen som mal
          og ledestjerne.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Barnevernet: </span>
          Det norske barnevern har som mandat å sørge for at de umyndige
          statsborgerne og beboere får nødvendig omsorg og kjærlighet i
          familien, og er fri for omsorgssvikt og vold i hjemmet.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Omsorgssvikt: </span>
          Å ikke elske og ta vare på barna sine til den grad som dekker deres
          behov tilfredsstillende, er å utøve omsorgssvikt. Å oppleve
          omsorgssvikt er å ikke få sine behov dekket, og samtidig få sine
          rettigheter overkjørt.
          <br />
          <br />
        </p>

        <p className="text-black">
          Frifødsel er ikke omsorgssikt, men i stedet en måte å utøve omsorg og
          helsefremmende kjærlighet på. Vill graviditet er ikke omsorgssvikt,
          men i stedet en strategi for å dekke barnets rett på privatliv og
          frihet fra overvåkning.
          <br />
          <br />
        </p>

        <p className="text-black">
          Vill graviditet og frifødsel kan være fremragende omsorg som hegner om
          tilknytningen mellom mor og barn, kanskje det mest definerende for
          hvordan det nye individet vil klare seg i livet.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Morkake: </span>
          Morkaken er et blodfylt organ som har en morsside og en barnside.
          Dette er ikke mor sin kake. Menneskekropp, navlesnor og morkake er en
          treenighet laget av det fertiliserte egget. Morkaken tilhører barnet,
          og etter fødsel ligger fortsatt en stor andel av babyens blod der. Det
          må gis tid til at alt blodet får pulsere ut.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Morkakefødsel:{" "}
          </span>
          Etter at babyens kropp er født er morkaken fortsatt inne i livmoren.
          Morkakens passasje gjennom fødselsportalen er morkakefødselen.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Morkakebegravelse:{" "}
          </span>
          Morkaken er et levende organ som dør i løpet av fødselsprosessen. Den
          fortjener en verdig begravelse, for eksempel under et frukttre i
          hagen.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Lotusfødsel: </span>
          Å la navlesnor og morkake være påkoblet den nyfødte til den løsner fra
          navlen av seg selv. Dette har en spirituell dimensjon og er i tillegg
          et trygt valg der man ikke har tilgang på sterilt utstyr og
          omgivelser, ettersom en avkuttet navlesnor er et åpent sår det kan gå
          infeksjon i, mens en intakt navlesnor ikke er det. Morkaken kan ligge
          i en bolle med urter og salt, og transporteres sammen med babyen ved
          lotusfødsel.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Fødsels hormonelle mal:{" "}
          </span>
          (Hormonal blueprint of birth) er et uttrykk som ble lansert av Dr.
          Sarah Buckly som forklarer hvordan hormonsystemet vårt er kalibrert
          for å føde i trygge og kjente omgivelser og hvordan stress og
          utrygghet hindrer og skader fødselsprosessen.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Autorisert jordmor:{" "}
          </span>
          En utdannet sykepleier med mastergrad i jordmorfag som ikke er blitt
          fratatt sin autorisasjon av Helsedirektoratet for å ha brutt
          retningslinjer eller på andre måter vist seg uskikket som
          helsepersonell. En autorisert jordmor er så forskjellig fra hva
          jordmor en gang betød at vi foretrekker å kalle det en obstetrisk
          sykepleier. Det har lenge vært et svært kvinnedominert yrke som nå
          opplever en noe økt rekruttering av ciss-menn.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Fødselslege: </span>
          En utdannet lege som har en tilleggsspesialisering i obstetrikk og
          gynekologi, altså fødsel, svangerskap og kvinnesykdommer. Det er disse
          legene som kan utføre bukkirurgien kjent som keisersnitt for å få
          babyer ut av magen, gjennom magen. Vi er svært takknemlig for at disse
          legene finnes ved nødstilfeller og anerkjenner at de kan redde liv.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Medisinsk kidnapping:{" "}
          </span>
          Når helsepersonell skiller mor og barn ved tvang eller kobler på
          barnevern for å få tatt barn fra sine foreldre fordi de er uenig i
          foreldrenes valg og oppførsel. Trusler om medisinsk kidnapping kan
          være et virkemiddel for å få folk til å innordne seg. Vi mener dette
          er galt, og at foreldre kan ha rett og handle godt når de begrenser
          medisinske intervensjoner overfor sine barn.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Helsepersonell:{" "}
          </span>
          Det er individer med en utdannelse som gjør at de på fritiden har en
          særskilt plikt til å hjelpe til i nødssituasjoner og ved ulykker. Når
          de er på jobb yter de helsetjenester og administrerer legemidler til
          pasienter. Leger, sykepleiere, hjelpepleiere, fysioterapauter og
          autoriserte jordmødre er eksempel på helsepersonell.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Informert samtykke:{" "}
          </span>
          Når en har fått informasjon fra helsepersonell om fordeler og ulemper,
          virkninger og bivirkninger, ved inngrep og legemidler kan man
          samtykke, altså si ja til det, på en informert måte. Å samtykke er å
          ønske behandlingen basert på realistiske forventninger. <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Informert avslag:{" "}
          </span>
          Å avslå tilbudet om medisinsk overvåkning, oppfølging og behandling
          basert på fullstendig informasjon og forventningsavklaring, etter å ha
          gjort en vurdering dithen at tilbudet er uønsket.
          <br />
          <br />
        </p>

        <p className="text-black">
          Det kan tenkes at vedkommende mener ulempene ikke utveier fordelene,
          eller har en høy toleranse for usikkerhet, eller baserer sin vurdering
          på andre verdier og siktemål enn nytte-kostnadanalyse.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Retten til privatliv:{" "}
          </span>
          Privatliv er de delene av livet som ikke deles med og overvåkes av
          staten. Privatlivet er den tiden som nytes utenfor arbeidstid. Retten
          til privatliv henger sammen med retten til familieliv, og er
          menneskerettigheter og verdier som gir livskvalitet når det
          respekteres, og ødelegger livskvalitet når det overkjøres.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Bekymringsmelding til barnevernet:{" "}
          </span>
          Noe helsepersonell og andre kan skrive som et maktmisbruk når de gjør
          det av feil motiv og årsak. Det vil da også være et brudd på
          taushetsplikten og en uetisk måte å utøve sin stilling. Selve
          bekymringsmeldingen kan være et forenklet utspill av drama-triangelet
          der en forestiller seg selv som en helt, som redder et offer-barn fra
          en forelder-overgriper. I virkeligheten er barnevernssaker komplekse
          prosesser, og ikke en enkel måte å «redde» noen på.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Vill graviditet:{" "}
          </span>
          Å la perioden mellom unnfangelsen og fødselen forløpe uten kroppslig
          overvåkning, måling og testing utført av helsepersonell. Dette er vilt
          i kontrast til domestikert, og begrepet ble lansert av Yolande
          Norris-Clark, festet til papiret i hennes bok Portal.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Tilstedeværelse i øyeblikket:{" "}
          </span>
          Å ikke dømme tankene eller tankene som dømmer tankene, men la det
          flyte og være i kroppen. En måte å være på som tjener deg i en
          frifødsel ved at du kommer tilbake til pusten, uten tanke på tid og
          mål, men hengir deg til nået. Tilstedeværelse i øyeblikket kan
          kultiveres gjennom ulike praksiser, for eksempel yoga, mindfullness og
          De Tre Prinsipper fra Sidney Banks.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Ultralyd: </span>
          En type lydbølger som oversettes til et bilde. Ufødte babyer blir
          rutinemessig utsatt for denne strålingen og opplever det muligens som
          ubehagelig, bråkete og invaderende. I høye doser kan ultralydbølger
          ødelegge vev og forstyrre celledeling.
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">​</span>
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Selvbestemt abort:{" "}
          </span>
          Retten kvinner har til å få sitt svangerskap avsluttet ved hjelp av
          legemidler og eller fysiske intervensjoner utført av helsepersonell.
          Tidlig i svangerskapet er det tilsvarende en sterk menstruasjon og
          senere i svangerskapet er det en tidlig igangsatt fødsel. Ved uke 12
          av svangerskapet avløses kvinnens rett til selvbestemt abort av
          fosterets rett til liv. Abort, les tidlig igangsatt fødsel, kan
          likevel utføres frem til uke 22 med døden til følge for fosteret, så
          retten til liv etter uke 12 er relativ frem til uke 22, og der blir
          den absolutt (I følge abortloven anno 2024).
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Kvinne: </span>
          En kvinne er et voksent, myndig menneske og et individ. Når vi skriver
          at dette nettverket er for «kvinner som har direkte erfaring med vill
          graviditet og frifødsel», så gjør konteksten det åpenbart at vi
          refererer til ciss-kvinner. Trans-kvinner er kvinner på andre måter
          enn gjennom å være gravid og føde.
          <br />
          <br />
        </p>

        <p className="text-black">
          Frifødselnettverket består blant annet av kvinner som opplever at det
          å være gravid, føde, bli mor og amme gjør at vi får utfoldet vår
          kvinnelighet og vi anser det derfor som viktig å bli omtalt som kvinne
          for å få bekreftet vår identitet.
          <br />
          <br />
        </p>

        <p className="text-black">
          Fertile livmorbærere som ikke er kvinner kan ha erfaring med vill
          graviditet, frifødsel og amming, men de vil kjønne opplevelsen på en
          måte som skiller seg fra det vi synliggjør i dette nettverket. Vi
          spesialiserer oss på det kvinnelige ved graviditet og fødsel, ikke
          fordi det er det eneste som eksisterer, men fordi det også er
          verdifullt.
          <br />
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Fosterovervåkning:
          </span>{" "}
          Er overvåkning av fosterets hjertefrekvens under fødselen. Det kan
          foregå med jordmorstetoskop, doppler (med utralyd), CTG eller STAN.
          Dette gjøres på bakgrunn av en antagelse om at variasjoner i
          hjerterytmen kan si noe om oksygennivået i blodet til fosteret.
          Systemet for tolkning av hjertefrekvens er svært komplisert og
          sammenhengen mellom variasjoner i hjertelyden og oksygenmangel er ikke
          direkte bevist.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            CTG eller STAN:
          </span>{" "}
          Kontinuerlig fosterovervåkning betyr belter rundt magen som spenner
          den fødende fast i senga og ofte skrue i babyhode som gir signaler som
          tolker fosterets hjerterytme og vises på en skjerm. Det er kjent for å
          gi masse falske positive utslag av fosterets stressnivå under
          fødselen. Roten til alt ondt i sykehusfødsler, både underbemanning og
          overmedikalisering.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Skalpelektrode:{" "}
          </span>
          en spirallignende skrue som skrus inn i hodet på ufødte barn inn
          gjennom vaginalåpningen etter at det er gått hull på fosterhinnen.
          Dette er en spesielt inngripende metode for fosterovervåkning som
          skader og påfører lidelse til barnet og ofte gir et permanent arr.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Episiotomi: </span>
          En spesialsaks stikkes inn i skjeden og klipper over både muskler,
          bindevev og deler av klitoris i det babyens hode er på vei ut av
          fødselskanalen. Dette er meget skadelig og kan skape nervesmerter og
          seksuell dysfunksjon livet ut. En annen eufemisme er «å legge et
          klipp», men dette klippet kan ikke legges. Det krever at det blir sydd
          igjen og bruker svært lang tid på å gro. Begrunnelsen er å hindre
          større fødselsskader, og i kombinasjon med andre inngrep kan det hende
          det stemmer. Den andre vanligste begrunnelsen kan være utålmodighet
          fra helsepersonell, tidsfristen nærmer seg og mistanke fra
          helsepersonell om at fosteret ikke har det bra og trenger å bli født
          fort.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Kasakaden av intervensjoner:{" "}
          </span>
          Dette er en beskrivelse av en slags dominoeffekt. Det er sjeldent det
          er nødvendig å gjøre et hastekeisersnitt eller katastrofekeisersnitt
          uten at det har kommet en kaskade av intervensjoner først. Når
          helsepersonell først begynner å gjøre inngrep i fødselsprossen, er de
          nødt til å overvåke og medisinsk styre prosessen videre. Dette fører
          til en dominio effekt av intervensjoner
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Venterom: </span>
          Et sted å bruke den lille, våkne fritiden vi har tilgjengelig i dagens
          samfunn. Der venter man på at det er sin tur til å komme inn til
          legen, som da er på jobb, og har sin fritid senere på dagen.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Symptomer: </span>
          Kroppslige opplevelser og ubehag mange tror de er pålagt å fortelle
          helsepersonell om for å få dem vurdert, men du kan ha symptomer uten å
          blande inn helsepersonell. Dette er retten til å ikke bli pasient.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Sykdom: </span>
          Hvis kroppen var en maskin så ville sykdommene vært feilene som
          oppstår, men kroppen er liv, ikke maskin. Det vi kaller sykdommer er
          meningsfulle adaptasjoner, men de kan likefullt være dødelige.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Medisin: </span>
          En medisin helbreder. Legemidler er derfor ofte ikke medisiner, men
          noe som angriper og fjerner symptomer.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Helsevesenet:</span>{" "}
          Toppen av samfunnets hierarki. Mer innflytelsesrike enn økonomien,
          politikken og vitenskap generelt.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Åndelighet:</span> Å
          ha kontakt med ikke-fysiske aspekter av livet.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Spirituell: </span>
          Alt har en spirituell dimensjon ved seg og uttrykker en viss
          spiritualitet. Naturvitenskapelig medisin uttrykker en spiritualitet
          uten Gud, med materialisme som grunnlag, en ikke-spirituell
          spiritualitet.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Helsestasjonen:{" "}
          </span>
          Det frivillige gratis tilbudet for den lovpålagte helsekontrollen
          gjennom barndommen. Norske mødres kontrollsenteret, et sted fedre drar
          i mye midre grad.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Skatteetaten: </span>
          Teller, navngir og kjønner nasjonalstatens befolkning.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Byråkrati:</span>{" "}
          Storskalaorganisering.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Barselopprøret, Bunadsgeriljaen, Landsforeningen 1001 dager og
            BirthRights Norge:{" "}
          </span>
          Store organisasjoner som jobber for en bedre fødselsomsorg.
          Organisasjonene respekterer og forstår vill graviditet og frifødsel i
          ulik grad, men feirer det ikke. De uttrykker bekymring for fenomenene
          og anser det som symptom på for dårlig svangerskapsomsorg og
          fødetilbud. Frifødselnettverket skiller seg fra disse organisasjonene
          ettersom vi ser på frifødsel som et gode som kan fortsette å eksistere
          også etter at offentlig omsorg er optimalisert. Frifødselsnettverket
          står sammen med organisasjonene i mye.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Helsedirektoratet:{" "}
          </span>
          De som gir retningslinjer og kvalitetssikrer utdannelser innen
          helsefag.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            UKOM og Helsetilsynet:{" "}
          </span>
          De som lager rapporter ved alvorlige hendelser i helsevesenet.
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Rapport etter uønsket hendelse:{" "}
          </span>
          Et byråkratisk skriveri med lærdommer og endringer av praksis som det
          er lettere å skrive enn å sette ut i praksis. Storskala-læringen
          mangler umiddelbarheten av å lære av egen erfaring.
          <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">Må: </span>
          Når man velger noe uten å ta eierskap til valget sier man «jeg måtte».
          Når man tvinger andre sier man «du må», uten å anerkjenne den andres
          frihet og valg. <br />
          <br />
        </p>

        <p className="text-black">
          <br />
          <br />
          <br />
        </p>

        <p className="text-black">
          <span className="text-black font-bold font-bold">
            Ordlisten er utarbeidet av A. B-W. Solberg og H. B. Clarke, med
            gjensidig tilbakemelding, tillegg og godkjennelse.
          </span>
        </p>
      </Card>
 */}
    </main>
  );
}
