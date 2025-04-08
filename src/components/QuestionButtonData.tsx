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
      text: "Sikkerhet er en kjerneverdi i prosjektet vårt, særlig fordi vi håndterer sensitive helseopplysninger.<br /><br />1. **Autentisering:** Vi bruker JWT (JSON Web Tokens) for å sikre at kun innloggede brukere får tilgang til systemet. Når en terapeut logger inn, får vedkommende et token som må sendes med alle forespørsler. Uten gyldig token får man ikke tilgang til data.<br /><br />2. **Rollebasert tilgang:** Tokenet inneholder også informasjon om brukerens rolle. Terapeuter har tilgang til alle pasientdata, mens pasientbrukere bare får tilgang til sine egne data. Backend validerer alle forespørsler basert på dette.<br /><br />3. **Datavalidering og feilhåndtering:** Vi kontrollerer all input som sendes inn via frontend før den lagres i databasen. I tillegg har vi lagt inn tilbakemeldinger ved feil slik at terapeuten vet hva som skjer dersom noe går galt.<br /><br />4. **Begrenset innsikt:** Pasienter har ikke tilgang til rapporter, meldinger eller smertehistorikk som tilhører andre. Alle forespørsler er låst til deres egen pasient-ID på backend.<br /><br />5. **Hosting:** Både backend og database er hostet på sikre plattformer (Railway og MongoDB Atlas), og vi bruker miljøvariabler til å beskytte sensitive nøkler.<br /><br />Dette gir en trygg og strukturert løsning der kun autoriserte brukere har tilgang til relevant informasjon – og pasientenes sikkerhet er ivaretatt på alle nivåer.",
    },
    {
      label: "Hva skjer hvis tokenet er ugyldig eller utløpt?",
      text: "Alle API-kall i frontend sender med `Authorization: Bearer token` i headeren.<br /><br />Hvis tokenet er ugyldig eller mangler, svarer backend med en 401 Unauthorized-feil.<br /><br />Frontend kan da fange dette og sende brukeren tilbake til innlogging. Dette sikrer at ingen kan hente data uten gyldig identitet."
    },
    {
      label: "Hvordan sørger dere for at rapporter ikke blir sendt dobbelt?",
      text: "Vi har satt opp frontend slik at knappen for 'Send rapport' kun aktiveres én gang per klikk. I tillegg nullstilles feltene og en suksessmelding vises.<br /><br />Hvis API-kallet feiler, vises en feilmelding. Dette hindrer at terapeuten trykker flere ganger på rad.<br /><br />På sikt kunne vi vurdert å sette opp en debounce-funksjon eller backend-sjekk som ser om en lik rapport allerede eksisterer."
    }
    
    
    
    
]