export const QbuttonData = [
   {
      label: "Hva skjer når jeg sletter en pasient?",
      text: "Når du trykker på 'Slett pasient', vises først en bekreftelsesdialog hvor du må skrive 'Slett pasient permanent' for å bekrefte.<br /><br />Dette er gjort for å unngå at noen ved et uhell sletter en pasient.<br /><br />Når det er bekreftet, sendes en DELETE-forespørsel til backend med pasientens ID. Backend sletter da pasienten fra MongoDB. <br /><br />Etter sletting blir brukeren redirectet tilbake til pasientoversikten. Vi fjerner også pasienten fra lokal state slik at siden oppdateres umiddelbart."
    },
    {
      label: "Kan en pasient se rapporter som ikke er knyttet til dem?",
      text: "Nei. Backend er satt opp slik at en pasient kun får tilgang til rapporter som matcher deres egen pasient-ID.<br /><br />Når en forespørsel om rapporter gjøres, sjekker backend hvem brukeren er via JWT-tokenet som sendes med forespørselen.<br /><br />Dersom en pasient prøver å hente rapporter for en annen pasient-ID, vil det returneres en 403-feil (forbudt).<br /><br />Dette beskytter mot både uhell og ondsinnet datatilgang."
    },
    {
      label: "Hvordan oppdateres smertehistorikk visuelt?",
      text: "Smertehistorikken vises som en graf ved hjelp av biblioteket Recharts.<br /><br />Når en ny smerterate registreres, sendes den til backend og lagres på pasienten som et nytt punkt i 'smertehistorikk'-arrayet.<br /><br />Når pasientsiden lastes inn på nytt, hentes oppdatert informasjon inkludert hele historikken. Grafen genereres basert på disse dataene og tegnes opp igjen.<br /><br />Dette gir terapeuten et raskt visuelt overblikk over hvordan pasientens smerte utvikler seg over tid."
    },
    {
      label: "Hvordan kunne du gjort appen tilgjengelig på mobil?",
      text: "Vi kunne gjort dette på to måter:<br /><br />1. Web-app: Sørge for at hele frontend er responsiv ved hjelp av Tailwind sine breakpoint-klasser. Dette fungerer allerede godt i vårt prosjekt.<br /><br />2. Native app: Lage en mobilapp med React Native eller Expo, og koble den mot samme backend via API.<br /><br />Pasienter kunne da bruke en app for å registrere smerter og motta meldinger, mens terapeuter kunne bruke web-appen. Backend-strukturen er allerede lagt opp til å støtte dette skillet gjennom bruk av JWT og roller."
    },
    {
      label: "Hvordan sikrer dere at bare terapeuter kan gjøre endringer?",
      text: "Når en bruker logger inn, får de et JWT-token som inkluderer informasjon om rollen deres (f.eks. 'admin' for terapeuter).<br /><br />I frontend bruker vi dette tokenet til å vise eller skjule visse sider og funksjoner. For eksempel: kun terapeuter ser 'Ny rapport'-siden.<br /><br />Men viktigst: Backend sjekker også JWT-tokenet for hver forespørsel som gjør endringer, og tillater kun brukere med riktig rolle å utføre sensitive handlinger.<br /><br />Dette beskytter mot uautorisert tilgang selv om noen prøver å manipulere frontend."
    },
    {
      label: "Hvordan tar dere vare på sikkerheten til pasientene?",
      text: `
        Sikkerhet er en kjerneverdi i prosjektet vårt, spesielt siden vi håndterer sensitive helseopplysninger.<br /><br />
    
        1. <strong>Autentisering via cookie:</strong> Vi bruker JWT, men i webapplikasjonen settes tokenet som en httpOnly-cookie. Det betyr at frontend ikke har tilgang til tokenet via JavaScript, noe som reduserer risikoen for XSS-angrep.<br /><br />
    
        2. <strong>credentials: "include"</strong>: For at tokenet (i cookien) skal sendes med alle API-kall fra frontend, bruker vi fetch med <code>credentials: "include"</code>. Dette sikrer at kun innloggede brukere får tilgang til data.<br /><br />
    
        3. <strong>Rollebasert tilgangskontroll:</strong> I backend leser vi ut brukerens rolle fra tokenet. Terapeuter har tilgang til alle sine pasienter, mens pasienter kun har tilgang til sin egen informasjon. Dette håndheves på rutenivå i backend.<br /><br />
    
        4. <strong>Validering og feilrespons:</strong> All input fra frontend blir validert i backend. Feil blir håndtert og sendt tilbake med tydelige meldinger, slik at ingen kan lagre ugyldig eller farlig data.<br /><br />
    
        5. <strong>Isolering av pasientdata:</strong> Pasientbrukere får kun tilgang til data som matcher deres egen bruker-ID. Det er ikke mulig å hente rapporter, meldinger eller treningslogger til andre pasienter.<br /><br />
    
        6. <strong>Sikker hosting:</strong> Backend er hostet på Railway og databasen på MongoDB Atlas. Miljøvariabler beskytter sensitive nøkler og forbindelser.<br /><br />
    
        Alt dette gjør at vi har en sikker løsning hvor ingen kan hente ut data de ikke skal ha tilgang til – verken via frontend eller ved å manipulere API-kall.`,
    },
    
    {
      label: "Hva skjer hvis tokenet er ugyldig eller utløpt?",
      text: `
        I webapplikasjonen bruker vi <strong>httpOnly-cookie</strong> til å sende JWT-token automatisk med hvert API-kall, ved hjelp av <code>credentials: "include"</code>.<br /><br />
    
        Hvis tokenet i cookien er ugyldig, utløpt eller mangler, svarer backend med en <code>401 Unauthorized</code> eller <code>403 Forbidden</code>-feil.<br /><br />
    
        Frontend kan da fange opp feilen og sende brukeren tilbake til innloggingssiden. På den måten forhindres uautorisert tilgang til sensitive data.`,
    },
    
    {
      label: "Hvordan sørger dere for at rapporter ikke blir sendt dobbelt?",
      text: "Vi har satt opp frontend slik at knappen for 'Send rapport' kun aktiveres én gang per klikk. I tillegg nullstilles feltene og en suksessmelding vises.<br /><br />Hvis API-kallet feiler, vises en feilmelding. Dette hindrer at terapeuten trykker flere ganger på rad.<br /><br />På sikt kunne vi vurdert å sette opp en debounce-funksjon eller backend-sjekk som ser om en lik rapport allerede eksisterer."
    },
    {
      label: "Hvorfor valgte dere å bruke Tailwind CSS?",
      text: `
        Vi valgte Tailwind CSS fordi det gir oss <strong>full kontroll over design direkte i JSX</strong>, uten å måtte lage separate CSS-filer.<br /><br />
    
        Det gjør det raskt og enkelt å style komponenter konsistent, og gir oss <strong>god responsivitet og mobiltilpasning</strong> uten ekstra oppsett.<br /><br />
    
        I tillegg gjør Tailwind det lettere å samarbeide i team, fordi alt av styling er synlig i komponenten – man slipper å lete etter klasser andre steder.`,
    },
    {
      label: "Hvorfor valgte dere Next.js?",
      text: `
        Next.js gir oss en <strong>bransjerelevant og moderne måte å bygge React-applikasjoner på</strong>, med innebygd støtte for routing og server-side rendering.<br /><br />
    
        Det gjør prosjektet raskt, godt strukturert og lett å jobbe med – spesielt siden vi også bruker <code>"use client"</code> for interaktive komponenter.<br /><br />
    
        Det gir også god støtte for SEO og ytelse, selv om vi i dette prosjektet fokuserte mest på innlogget funksjonalitet.`,
    },
    {
      label: "Har dere tenkt noe på testing?",
      text: `
        Vi vurderte å bruke <strong>Jest</strong> og automatiserte tester, men i dette prosjektet valgte vi å fokusere på <strongpraktisk og kontinuerlig brukertesting</strong>.<br /><br />
    
        Vi har <strong>hostet løsningen underveis</strong>, slik at kunden selv kunne teste funksjonaliteten i sanntid og gi tilbakemeldinger.<br /><br />
    
        I tillegg har vi brukt <strong>Postman aktivt</strong> til å teste alle API-endepunkter, spesielt for å sjekke responser, feilhåndtering og autentisering.<br /><br />
    
        Dette har gitt oss rask iterasjon og praktisk validering av at systemet fungerer som det skal – selv om vi ikke har implementert fullverdig testdekning.`,
    },
    {
      label: "Hvordan beskytter dere sensitive data i backend?",
      text: `
        Vi bruker <strong>httpOnly-cookie med JWT-token</strong> som eneste måte å autentisere brukeren på.<br /><br />
    
        Alle API-ruter som krever innlogging er beskyttet med <strong>verifyToken-middleware</strong>, som både validerer tokenet og legger til brukerens info i requesten.<br /><br />
    
        Videre sjekker vi <strong>brukerens rolle og ID</strong> i hver rute – for eksempel kan pasienter kun hente egne logger eller meldinger, og terapeuter får kun tilgang til sine pasienter.<br /><br />
    
        I tillegg ekskluderer vi alltid sensitiv informasjon som passord fra databaseresponsen med <code>.select("-passord")</code>.`,
    },
    {
      label: "Hvorfor valgte dere å bruke credentials: 'include'?",
      text: `
        Når vi bruker <strong>cookie-basert autentisering</strong> med httpOnly, må cookien eksplisitt sendes med i alle fetch-kall fra frontend.<br /><br />
    
        Derfor setter vi <code>credentials: "include"</code> i alle fetch-kall som krever autentisering.<br /><br />
    
        Dette gjør at <strong>nettleseren sender JWT-tokenet i cookie</strong> automatisk med hvert API-kall, uten at frontend trenger å håndtere det direkte.<br /><br />
    
        Det gir en <strong>tryggere og renere løsning</strong> for web-applikasjoner enn å lagre token manuelt i localStorage.`,
    },
    {
      label: "Hva er fordelene og ulempene med cookie-basert autentisering?",
      text: `
        <strong>Fordeler:</strong><br />
        • Tokenet lagres som en <code>httpOnly</code>-cookie, som <strong>ikke kan leses av JavaScript</strong> – det gir ekstra sikkerhet.<br />
        • Cookien sendes <strong>automatisk med hvert API-kall</strong> når vi bruker <code>credentials: "include"</code>.<br /><br />
    
        <strong>Ulemper:</strong><br />
        • Litt mer komplekst å sette opp riktig med CORS og sikkerhet.<br />
        • Ikke like praktisk for mobilapper, som ofte bruker token i header i stedet.<br /><br />
    
        For vårt prosjekt – som primært er webbasert – var cookie-basert løsning det tryggeste og mest stabile valget.`,
    },
    {
      label: "Hvordan håndterer dere feil i API-kall?",
      text: `
        I alle API-funksjoner i backend bruker vi <strong><code>try/catch</code>-blokker</strong> for å fange opp feil.<br /><br />
    
        Dersom noe går galt, for eksempel feil token, databasefeil eller ugyldig input, svarer vi med <strong>meningsfulle feilmeldinger</strong> og riktig HTTP-status (f.eks. 401 eller 500).<br /><br />
    
        I frontend fanger vi også opp feil i fetch-kall og bruker <strong>useState for å vise feilmeldinger</strong> til brukeren. Eksempel: "Kunne ikke hente treningslogger".<br /><br />
    
        Dette gir en robust og forutsigbar brukeropplevelse – samtidig som det forenkler feilsøking i utvikling.`,
    },

    {
  label: "Hvordan strukturerte dere ruter i backend – og hvorfor?",
  text: `
    Vi har delt ruter inn etter tema: <code>/api/auth</code> for autentisering, <code>/api/pasienter</code> for pasientdata, <code>/api/meldinger</code>, <code>/api/logg</code>, og så videre.<br /><br />

    Dette gir en <strong>logisk, REST-basert struktur</strong> som er lett å forstå både for utviklere og frontend-grupper.<br /><br />

    Vi har også egne controllere og middleware som holder koden ryddig og modulær – og sikrer at autentisering og roller behandles konsekvent på tvers av alle ruter.<br /><br />

    Dette gjør det enkelt å utvide systemet videre med flere datatyper og funksjoner uten å lage rot.`,
},
{
  label: "Hvorfor bruker dere MongoDB – og ikke SQL?",
  text: `
    Vi valgte MongoDB fordi prosjektet vårt passer godt med en <strong>dokumentbasert struktur</strong>.<br /><br />

    For eksempel kan pasienter ha lister med logger, meldinger og rapporter, og MongoDB lar oss jobbe <strong>fleksibelt og uten forhåndsdefinerte tabeller</strong>.<br /><br />

    Vi bruker <strong>Mongoose</strong> for å definere datamodeller og validering, og det gir oss mye kontroll uten å måtte skrive SQL.<br /><br />

    I tillegg er MongoDB Atlas lettere å endre på, noe vi har gjort i dette prosjektet da vi har endret mye underveis.`,
},
{
  label: "Hvordan kobles en bruker til en pasient i systemet?",
  text: `
    Når en pasient logger inn via appen, får de tilgang til et skjema hvor de skriver inn e-posten sin.<br /><br />

    Backend sjekker om det finnes en <strong>pasientprofil med matchende e-post</strong>, og hvis den finnes, blir den koblet til den innloggede brukeren ved å lagre <code>brukerId</code> i pasientdokumentet.<br /><br />

    Etter det kan pasienten sende inn smerteverdier og treningslogger, fordi systemet alltid vet hvilken pasientprofil som tilhører brukeren. Det skjer helt automatisk etter første kobling.`,
},
{
  label: "Hvordan opprettes og vises rapporter – steg for steg?",
  text: `
    1. Terapeuten går inn på en pasientprofil i admin-delen og trykker på "Ny rapport".<br /><br />

    2. Terapeuten fyller inn tekst og eventuelt legger ved et treningsopplegg.<br /><br />

    3. Når rapporten sendes inn, lagres den i databasen via en API-rute med <code>POST /api/rapporter</code>, og kobles til pasienten via pasientens ID.<br /><br />

    4. I frontend vises rapportene i en flytende rullegardin under pasientkortet, med dato og innhold. Disse hentes via <code>GET /api/rapporter/:pasientId</code>.<br /><br />

    Alt vises ryddig, og terapeuten får full oversikt over tidligere rapporter.`,
},
{
  label: "Hvordan fungerer AI-genereringen av behandlingsnotat?",
  text: `
    Terapeuten skriver et kort utkast til behandlingsnotat i et tekstfelt.<br /><br />

    Når de klikker på "Foreslå behandlingsnotat", sendes innholdet til en API-rute som snakker med OpenAI sin GPT-modell.<br /><br />

    Vi bruker en <strong>tilpasset prompt</strong> for å be modellen formulere teksten profesjonelt, og returnere en tentativ diagnose basert på innholdet.<br /><br />

    Deretter vises AI-forslaget automatisk i frontend – terapeuten kan redigere og lagre det som et arbeidsnotat koblet til pasienten.`,
}
,
{
  label: "Hva skjer i backend når en treningslogg sendes inn?",
  text: `
    Når en pasient fullfører en treningsøkt i appen, fyller de inn smerteverdi, øktopplevelse og eventuelle notater.<br /><br />

    Når de sender inn, går dataen til <code>POST /api/logg</code>. Backend bruker JWT-tokenet til å finne ut hvilken bruker som er logget inn, og henter automatisk <strong>tilhørende pasientId</strong>.<br /><br />

    Deretter lagres loggen i databasen med alle feltene (smerte, notat, dato osv.) og knyttes til pasientprofilen.<br /><br />

    Dette gjør det mulig for terapeuten å hente treningshistorikk for hver pasient og se utvikling over tid.`,
}
,
{
  label: "Hvordan fungerer kommunikasjonen mellom frontend og OpenAI?",
  text: `
    Når terapeuten skriver inn et behandlingsutkast og trykker på "Foreslå notat", sendes teksten til en egen <strong>API-rute i vårt Next.js-prosjekt</strong>.<br /><br />

    Derfra bruker vi OpenAI sitt offisielle SDK til å sende en <strong>prompt + inputtekst</strong> til GPT-modellen.<br /><br />

    Responsen fra OpenAI inneholder det AI-genererte notatet og/eller diagnosen, og dette sendes tilbake til frontend via JSON. Terapeuten kan da lese og eventuelt redigere før lagring.<br /><br />

    På denne måten skjer hele integrasjonen <strong>via vår backend</strong> – vi eksponerer aldri API-nøkkelen i frontend.`,
}
,
{
  label: "Hvordan håndterer dere feil eller dårlig respons fra AI?",
  text: `
    Vi har lagt inn <strong><code>try/catch</code>-blokk</strong> i AI-ruten, slik at vi fanger opp feil som kan oppstå – for eksempel om OpenAI-tjenesten er nede, eller om brukeren har glemt å fylle inn tekst.<br /><br />

    Hvis noe går galt, sender vi en feilmelding tilbake til frontend, og der vises en <strong>brukervennlig melding</strong> som f.eks. "Kunne ikke generere forslag akkurat nå".<br /><br />

    På den måten unngår vi at appen krasjer, og terapeuten får rask tilbakemelding. Vi vurderte også å legge inn fallback-tekst, men valgte å heller be brukeren prøve igjen.`,
}
,
{
  label: "Hvordan bestemmer dere hva AI-en skal foreslå?",
  text: `
    Vi styrer AI-en ved å sende inn <strong>en tilpasset prompt</strong> i backend som sier hva den skal gjøre – for eksempel:<br /><br />

    "Skriv et profesjonelt behandlingsnotat basert på følgende tekst. Skriv også en kort tentativ diagnose hvis mulig."<br /><br />

    Inputen terapeuten skriver inn blir lagt til i prompten, og GPT bruker det til å generere et forslag.<br /><br />

    Vi kunne også valgt mer avansert prompt-design eller funksjonskall, men i dette prosjektet holder det med <strong>prompt-basert kontroll</strong> direkte fra backend.`,
}


    
    
    
    
    
    
]