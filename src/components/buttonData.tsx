export const buttons = [
  {
    label: "useState",
    text: `useState er en innebygd React-funksjon som lar deg lage og håndtere lokal tilstand i en komponent.<br /><br />
    Når en komponent må "huske" noe mellom renderingene – som input-felt, klikk, eller vis/skjul – bruker du useState.<br /><br />
    Eksempel: Et innloggingsfelt trenger å holde på hva brukeren skriver inn. Her bruker vi useState til å lagre e-post og passord mens brukeren skriver.<br /><br />
    useState gir deg to ting:<br />
    1. En nåværende verdi (f.eks. "epost")<br />
    2. En funksjon for å oppdatere den (f.eks. "setEpost")<br /><br />
    Når du kaller setEpost(...), sier du fra til React at komponenten skal tegnes på nytt med den nye verdien.<br /><br />
    💡 Uten useState ville verdien blitt glemt hver gang komponenten tegnes på nytt – og det ville vært umulig å lage interaktive grensesnitt.`,
  },
  {
    label: "use client",
    text: `Next.js rendrer som standard komponenter på serveren (server components).<br /><br /> Når du bruker "use client" helt øverst i en fil, forteller du Next.js at denne komponenten skal kjøres i nettleseren (på klientsiden).\n
    \nDet er nødvendig å bruke "use client" når du skal bruke React-funksjonalitet som: <br /><br /> - useState, useEffect eller andre hooks\n- lokal tilstand (f.eks. skjema, interaktivitet)\n- tilgang til browser-spesifikke API-er som localStorage, window, navigator, osv. <br /><br />
    <br /><br /> Eksempel: Et innloggingsskjema trenger "use client" fordi det bruker useState til å holde på input-verdier og bruker localStorage til å lagre token etter innlogging.\n
    <br /><br /> 💡 Hadde du glemt "use client", ville du fått feil som sier at hooks ikke kan brukes i en server component, og funksjonaliteten ville ikke virket som forventet.\n
    <br /><br /> 👉 Kort sagt: "use client" = interaktiv frontend-komponent.`,
  },
  {
    label: "Next.js",
    text: `Next.js er et rammeverk bygget på React som gir deg ruter, API, SSR og mye mer rett ut av boksen. 
  Det gjør at vi kan bygge både frontend og backend i samme prosjekt, noe som gir bedre struktur og mindre rot.<br /><br />
  
  Vi bruker Next.js fordi:<br /><br />
  
  • Vi får enkel ruting basert på mappestruktur (f.eks. /admin/pasienter).<br /><br />
  • Vi kan skrive egne API-endepunkter rett i prosjektet (f.eks. /api/pasienter).<br /><br />
  • Vi har god støtte for TypeScript.<br /><br />
  • Det er raskt å utvikle med (hot reload, dev-server, ferdige oppsett).<br /><br />
  • Det gir mulighet for både server-side og client-side rendering.<br /><br />
  • Det er bransjestandard – og relevant kunnskap videre.<br /><br /><br /><br />
  
  Kort sagt: Det sparer oss for masse tid og gir oss et solid rammeverk å bygge videre på.`,
  },
  {
    label: "Props",
    text: `Props (forkortelse for "properties") er måten du sender data fra en komponent til en annen i React.<br /><br />
    Når du bygger komponenter, kan du gi dem informasjon utenfra – akkurat som argumenter i en funksjon. Dette gjør komponentene gjenbrukbare og fleksible.<br /><br />
    Eksempel:<br />
    Du har en komponent som heter <Greeting name="Torgeir" />.<br />
    Da sender du prop-en "name" inn i Greeting-komponenten. Inni Greeting kan du så bruke den med {props.name} eller hente den direkte hvis du bruker destrukturering.<br /><br />
    Props er "read-only", altså uforanderlige fra innsiden av komponenten. Hvis du trenger å endre verdier, må du kombinere props med useState i en overordnet komponent.<br /><br />
    💡 Props gjør det mulig å lage små komponenter som gjør én ting, og så bygge store apper ved å sette dem sammen.`,
  },
  {
    label: "Tailwind",
    text: `Tailwind er et CSS-rammeverk som lar deg skrive stil direkte i HTML/JSX, ved å bruke ferdige utility-klasser som <code>bg-white</code>, <code>text-xl</code>, <code>rounded</code> osv.<br /><br />
    I stedet for å lage egne CSS-filer eller Styled Components, skriver vi alt rett i komponentene våre. Det går kjapt, gir full kontroll og passer perfekt i små prosjekter som vårt.<br /><br />
    ✨ Vi valgte Tailwind fordi:<br />
    – Vi får konsekvent og ryddig design<br />
    – Det er lett å eksperimentere og gjøre endringer<br />
    – Det er bransjestandard i mange frontend-prosjekter<br /><br />
    💡 Eksempel fra vårt prosjekt:<br />
    Vi bruker Tailwind til alt fra knapper og inputfelt til kort og diagrammer. Her er en typisk knapp:<br />
    <code>className="bg-teal hover:bg-light_teal text-white px-4 py-2 rounded"</code><br /><br />
    Dette gir oss en responsiv, stilig og oversiktlig komponent – uten å forlate komponentfila vår.`,
  },
  {
    label: "Agile",
    text: `Agile er en måte å jobbe på i prosjekter som handler om å være fleksibel, tilpasse seg endringer underveis, og levere litt og litt – i stedet for å planlegge alt på forhånd og levere én stor greie til slutt.<br /><br />
    
    🏃 Vi jobber agilt ved å ta små oppgaver om gangen, se hva som funker, og justere underveis. Vi har ikke planlagt hele prosjektet fra starten – vi har bygget i bolker, testet, fått tilbakemeldinger og forbedret.<br /><br />
    
    🧠 Eksempel fra prosjektet:<br />
    – Vi lagde først pasientskjema og innlogging<br />
    – Deretter la vi til AI-generering<br />
    – Så la vi inn grafer, smertehistorikk og delete-funksjoner<br />
    – Alt ble forbedret og justert underveis (for eksempel: flytting av AI-knapp, popup-justering, responsivitet osv.)<br /><br />
    
    💬 Det viktige med Agile er samarbeid og kommunikasjon – og det føler vi har fungert bra hos oss. Vi har tilpasset underveis, og ingen av oss har jobbet i blinde.`,
  },
  {
    label: "useEffect",
    text: `useEffect er en React-hook som lar deg utføre ting når komponenten rendres, eller når noe endrer seg.<br /><br />
Det brukes ofte til å hente data fra en API, lytte til events, eller oppdatere ting som ikke er direkte relatert til UI-et.<br /><br />
Tenk på det som: "Når komponenten har lastet, gjør dette."<br /><br />
Eksempel:<br />
useEffect(() => {<br />
 fetchData();<br />
}, []);<br /><br />
Her vil fetchData() kjøres én gang – når komponenten lastes.<br /><br />
Du kan også legge inn avhengigheter i arrayen, slik at useEffect kjører igjen når noe endrer seg:<br />
useEffect(() => {<br />
 doSomething();<br />
}, [count]);<br /><br />
Dette er supernyttig for å holde komponenten i synk med verden utenfor – enten det er data fra en database, en brukerhandling eller noe annet dynamisk.`,
  },
  {
    label: "fetch",
    text: `fetch er en funksjon i JavaScript som lar deg hente data fra et API eller en ekstern kilde.<br /><br />
Du bruker fetch når du for eksempel skal hente pasientdata, rapporter eller sende inn informasjon til backend.<br /><br />
fetch returnerer et "promise", som betyr at du må bruke async/await eller .then() for å håndtere svaret.<br /><br />
Eksempel:<br />
const res = await fetch("https://api.example.com/data");<br />
const data = await res.json();<br /><br />
Her henter vi data fra en URL, og så konverterer vi svaret til JSON.<br /><br />
fetch er standardmåten å kommunisere med backend på i moderne JavaScript og brukes ofte sammen med useEffect eller når brukeren trykker på en knapp.`,
  },
  {
    label: "JWT / Token",
    text: `JWT står for "JSON Web Token", og brukes til å bekrefte hvem brukeren er – uten at man må sende brukernavn/passord på nytt hele tiden.<br /><br />
      Når en bruker logger inn, sender backend et token tilbake. Dette tokenet lagres i localStorage på klienten, og sendes automatisk med som "Authorization" header i alle API-kall etterpå.<br /><br />
      Det betyr at vi kan hente pasientdata og beskytte sensitive ruter, fordi backend vet hvem som spør.<br /><br />
      💡 I vårt prosjekt bruker vi token i nesten alle fetch-kall til API-et.<br /><br />
      For eksempel når vi henter pasienter:<br />
      <code>fetch("/api/pasienter/mine", { headers: { Authorization: \`Bearer \${token}\` } })</code><br /><br />
      Uten token, får man ikke tilgang til sensitive data.`,
  },
  
  {
    label: "Backend",
    text: "Backend er ansvarlig for all databehandling i prosjektet – den henter, lagrer og oppdaterer informasjon i databasen, og eksponerer dette via API-endepunkter frontend kan kommunisere med.<br /><br />" +
    
    "Vi har valgt å bygge backend med **Node.js og Express** fordi det er lett, fleksibelt og lar oss raskt sette opp REST API-er som frontend kan kommunisere med via `fetch`.<br /><br />" +
  
    "Databasen vi bruker er **MongoDB**, valgt fordi den er dokumentbasert og passer godt for ustrukturert og fleksibel data, slik som pasientdata, meldinger, rapporter osv. Vi hoster databasen i **MongoDB Atlas** og backenden i **Railway**, slik at hele systemet er skybasert og enkelt å deploye uten egen server.<br /><br />" +
  
    "Strukturen er ryddig med egne mapper for `routes`, `controllers` og `models`, som gjør at vi enkelt kan utvide funksjonalitet. Vi bruker JWT-token for sikker autentisering, og API-rutene er beskyttet med `Bearer-token` slik at kun innloggede terapeuter får tilgang til sensitiv data.<br /><br />" +
  
    "Eksempel på bruk: Når en terapeut logger inn, sendes en POST-forespørsel til `/api/auth/login`, som sjekker om brukeren finnes og returnerer et token. Når terapeuten deretter åpner pasientlisten, sendes en GET-forespørsel til `/api/pasienter/mine`, og backenden returnerer kun pasienter som er knyttet til innlogget terapeut (basert på token).<br /><br />" +
  
    "Denne strukturen gjør at både frontend og mobilapp kan bruke samme backend, og vi slipper dobbeltarbeid. API-et er dermed et sentralt nav for hele plattformen vår."
  },
  {
    label: "MongoDB",
    text: "Vi bruker MongoDB som database fordi den er fleksibel, lett å sette opp, og gratis å bruke med MongoDB Atlas.<br /><br />I stedet for tabeller som i SQL, bruker MongoDB dokumenter (JSON-lignende objekter). Det gjør det enkelt å lagre pasientdata, rapporter og meldinger med ulik struktur.<br /><br />MongoDB passer perfekt for prosjekter i vekst der vi ikke kjenner alle behov på forhånd."
  },
  {
    label: "Node.js & Express",
    text: "Node.js gjør det mulig å kjøre JavaScript på serveren. Express er et rammeverk for Node som gjør det enkelt å lage API-endepunkter.<br /><br />Vi bruker dette i backend for å sette opp ruter som: `/api/pasienter`, `/api/rapporter`, osv. Disse ruter kobles til MongoDB og returnerer JSON-data til frontend.<br /><br />Alt vi gjør i frontend som krever lagring eller henting skjer via disse ruter."
  },
  {
    label: "API",
    text: "API står for Application Programming Interface, og lar frontend kommunisere med backend via HTTP-kall (GET, POST, PUT, DELETE).<br /><br />I prosjektet bruker vi API-kall for å hente pasientdata, sende inn rapporter, registrere smerter osv. Alle API-rutene ligger i backend, og frontend snakker med disse ved hjelp av `fetch()`.<br /><br />API er det 'limet' som binder frontend og backend sammen."
  },
  {
    label: "map() i JSX",
    text: "map() er en funksjon i JavaScript som brukes til å gå gjennom en liste (array) og gjøre noe med hvert element.<br /><br />I React bruker vi map() for å lage JSX-elementer basert på en liste. Eksempelvis når vi lister ut pasienter, rapporter eller knapper i denne regelboken.<br /><br />Eksempel fra prosjektet vårt:<br />Når vi henter alle pasienter og vil vise dem i en dropdown:<br /><br /><code>{pasienter.map((p) => ( <option key={p._id} value={p._id}>{p.navn}</option> ))}</code><br /><br />Dette gjør at vi enkelt kan generere dynamisk innhold som oppdateres når listen endres."
  }
  
  
  
  
  ,
  {
    label: "API Route",
    text: "API Routes i Next.js lar deg definere backend-endepunkter i samme prosjekt. Vi bruker det i vårt AI-oppsett for å snakke med OpenAI og generere rapportforslag. Dette er nyttig fordi det er kun webserveren som kan snakke med OpenAI, og vi kan bruke Next.js til å håndtere forespørslene fra frontend. API-rutene er skrevet i TypeScript, noe som gir oss type-sjekking og bedre utvikleropplevelse.",
  },
  {
    label: "localStorage",
    text: `localStorage er en del av nettleseren og lar deg lagre data som blir værende selv når brukeren lukker nettleseren eller laster siden på nytt.<br /><br />

🔐 Vi bruker localStorage til å lagre JWT-token etter innlogging. Dette gjør at terapeuten forblir innlogget og at API-kallene våre kan autentiseres med riktig tilgang.<br /><br />

🧠 Eksempel fra prosjektet:<br />
Når en bruker logger inn på startsiden, henter vi JWT-token fra backend og lagrer det slik:<br />
<code>localStorage.setItem("token", data.token);</code><br /><br />

Senere, når vi henter pasientdata eller rapporter, henter vi token fra localStorage:<br />
<code>const token = localStorage.getItem("token");</code><br /><br />

📦 Fordelen er at vi slipper å logge inn på nytt hver gang vi laster siden. Ulempen er at det ikke er like sikkert som f.eks. httpOnly cookies, så det må håndteres forsiktig og aldri brukes for ekstremt sensitiv info.<br /><br />

➡️ Vi har valgt dette fordi det er enkelt og passer godt til vårt bruk der vi kun har en admin-brukergruppe og ikke lagrer pasientdata lokalt i frontend.`,
  },
  {
    label: "Recharts",
    text: "📊 Recharts er et bibliotek for å lage enkle, responsive grafer og diagrammer i React. Det er bygget på SVG og fungerer godt med komponentbasert utvikling.<br /><br />" +
      "🎯 Hvorfor vi valgte det:<br />" +
      "- Det er enkelt å bruke og krever lite konfigurasjon<br />" +
      "- Passer perfekt for små visualiseringer som linjediagram<br />" +
      "- Det gir oss alt vi trenger for å vise smerteutvikling over tid på en ryddig måte<br /><br />" +
      "👨‍💻 Eksempel i prosjektet vårt:<br />" +
      "Når vi viser smertehistorikken til en pasient på detaljsiden deres, bruker vi Recharts til å lage et line chart.<br /><br />" +
      "Vi henter ut dataene fra pasienten, og formaterer dem slik at hver verdi (0–10) vises som en prikk på grafen, sammen med datoen.<br /><br />" +
      "📦 Komponentene vi bruker:<br />" +
      "- ResponsiveContainer (til å gjøre grafen fleksibel)<br />" +
      "- LineChart (selve grafen)<br />" +
      "- Line (selve linjen med verdier)<br />" +
      "- XAxis og YAxis (akseverdier)<br />" +
      "- Tooltip (gir ekstra info når du holder musepekeren over)<br /><br />" +
      "✅ Recharts gjorde det raskt og enkelt å gi terapeuter et visuelt bilde av pasientens utvikling. Det gir mer innsikt enn bare tall!"
  }
  ,
  {
    label: "Conditional Rendering",
    text: `Conditional rendering betyr at vi viser (eller skjuler) noe i grensesnittet basert på en betingelse (et "if"-sjekk). Det brukes overalt i React og Next.js, og er en av de viktigste tingene å forstå i moderne frontend-utvikling.<br /><br />

🧠 I praksis betyr det at vi sier: "hvis dette er sant – vis dette", ellers vis ingenting (eller noe annet).<br /><br />

📦 Eksempel fra prosjektet vårt:<br />
Når en pasient er valgt, viser vi rapportboksen:<br />
<code>{valgtPasientId && ( &lt;div&gt;Her vises rapportinnholdet&lt;/div&gt; )}</code><br /><br />

✅ Her sier vi: "hvis valgtPasientId finnes (altså en pasient er valgt), da skal vi vise div'en".<br /><br />

Et annet eksempel er når vi viser en suksessmelding bare hvis 'success'-state er satt:<br />
<code>{success && &lt;p&gt;Rapport sendt!&lt;/p&gt;}</code><br /><br />

🎯 Hvorfor er det nyttig?<br />
- Du slipper å vise ting som ikke er relevant enda<br />
- Du kan gjøre appen mer dynamisk og brukervennlig<br />
- Du har full kontroll på når noe vises – uten å rote det til med if-else og masse logikk i HTML<br /><br />

➡️ Vi bruker conditional rendering hele veien, ofte kombinert med useState.`,
  },
  
    {
      label: "useParams",
      text: "🔍 useParams er en funksjon (hook) fra Next.js som lar deg hente ut verdier fra URL-en. Den brukes for å vite 'hvilken side vi er på' og for å hente riktig innhold basert på det.<br /><br />" +
        "🎯 I prosjektet vårt bruker vi dette når vi viser detaljer om én bestemt pasient. Da trenger vi pasientens ID fra URL-en for å kunne hente data om akkurat den pasienten.<br /><br />" +
        "📦 Eksempel:<br />" +
        "Vi har en side som heter /admin/pasienter/[id]/page.tsx. Når brukeren går til f.eks. /admin/pasienter/6528abc7, så er 6528abc7 ID-en til pasienten.<br /><br />" +
        "Med useParams() kan vi hente den ID-en slik:<br />" +
        "const { id } = useParams();<br /><br />" +
        "✅ Da kan vi bruke denne ID-en til å gjøre et API-kall og hente pasientens info:<br />" +
        "fetch('/api/pasienter/' + id)<br /><br />" +
        "📌 Oppsummert:<br />" +
        "- useParams brukes for å hente verdier fra URL<br />" +
        "- Det er en del av Next.js sitt router-system<br />" +
        "- Supernyttig for dynamiske sider som handler om én bestemt bruker, rapport, eller annet<br /><br />" +
        "👀 Vi bruker det f.eks. i PatientDetailsPage for å vite hvilken pasient vi skal vise detaljer for."
    },
    {
      label: "cookies",
      text: `
        Cookies er små datafiler som lagres i nettleseren din av et nettsted. De brukes ofte til å <strong>huske at du er logget inn</strong>, spore innstillinger eller holde på informasjon mellom sidevisninger.<br /><br />
    
        I vårt prosjekt bruker vi en <strong>httpOnly-cookie</strong> for å lagre JWT-tokenet. Dette betyr at JavaScript ikke har tilgang til tokenet, og det <strong>øker sikkerheten</strong> mot for eksempel XSS-angrep.<br /><br />
    
        Når du sender API-kall med <code>credentials: "include"</code>, sendes cookien automatisk med – og backend vet hvem du er.`,
    },
    {
      label: "Tokens",
      text: `
        Et token er en liten tekststreng som brukes for å <strong>bevise at en bruker er logget inn</strong>. Det kan sammenlignes med en billett du viser for å få adgang.<br /><br />
    
        I vårt prosjekt genererer backend et <strong>JWT (JSON Web Token)</strong> ved innlogging. Tokenet inneholder informasjon om hvem brukeren er og hvilken rolle de har.<br /><br />
    
        I webversjonen blir dette tokenet lagt i en cookie, mens i mobilversjonen blir det lagret lokalt og sendt i headeren ved API-kall.`,
    },
    {
      label: "Filter",
      text: `
        <code>filter()</code> er en innebygd funksjon i JavaScript som brukes på lister (arrays). Den lar deg <strong>beholde bare de elementene som oppfyller en bestemt betingelse</strong>.<br /><br />
    
        Eksempel: Hvis du har en liste med meldinger og bare vil vise de som er uleste, kan du skrive <code>meldinger.filter(m => !m.lest)</code>.<br /><br />
    
        Det returnerer en <strong>ny liste</strong> uten å endre den opprinnelige. Vi bruker filter mange steder i prosjektet, f.eks. for å filtrere ut pasienter, logger eller notater.`,
    }
    
    
    
    
  
];
