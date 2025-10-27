// import { useState } from "react";
// import {
//     Box,
//     Container,
//     Typography,
//     Grid,
//     Paper,
//     Stack,
//     Chip,
//     Divider,
//     IconButton,
//     useTheme,
//     Collapse,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// const faqItems = [
//     {
//         question: "Hva er Driftli egentlig?",
//         answer: "Driftli samler kvalitetssikrede fagfolk og tjenester i ett system. Som medlem får du tilgang til forhandlede priser på tømrer, elektriker, rørlegger, renhold, bilverksted, gartner og mer uten tidkrevende tilbudsrunder.",
//     },
//     {
//         question: "Hvordan bli medlem",
//         answer: "For å bli medlem, fyll ut kontaktinformasjonen din og send oss en henvendelse via skjemaet på kontaktside. Du kan også ta kontakt direkte med oss via telefon eller e-post.",
//     },
//     {
//         question: "Hvordan fungerer medlemskapet?",
//         answer: "Som medlem får du tilgang til våre forhandlede rammeavtaler med utvalgte leverandører. Driftli kobler deg direkte med riktig samarbeidspartner basert på ditt behov. Vi sikrer konkurransedyktige priser og kvalitet gjennom disse avtalene, mens oppfølging og koordinering håndteres mellom deg og leverandøren.",
//     },
//     {
//         question: "Hvem kan bruke Driftli?",
//         answer: "Privatpersoner, borettslag, sameier, bedrifter og eiendomsforvaltere. Tjenesten passer for alle som vil ha én ryddig løsning for drift og vedlikehold i stedet for å håndtere mange ulike leverandører selv.",
//     },
//     {
//         question: "Hva koster det å bruke Driftli?",
//         answer: "Medlemskapet i Driftli koster 199 kr per måned. Du betaler kun for utført arbeid eller avtalt vedlikehold. Driftli forhandler ned prisene på vegne av medlemmene, slik at du får tilgang til profesjonelle betingelser og rabatter du normalt ikke ville fått som enkeltkunde.",
//     },
//     {
//         question: "Hvordan velger Driftli leverandører?",
//         answer: "Driftli velger leverandører gjennom en grundig kvalitetssikringsprosess. Vi vurderer fagbrev, erfaring, referanser, forsikringer og HMS-system før de blir godkjent som samarbeidspartnere. Bare aktører som oppfyller våre krav til kvalitet, pålitelighet og service blir en del av nettverket.",
//     },
//     {
//         question: "Gir et lengre medlemskap ekstra fordeler?",
//         answer: "Ja. Som medlem får du allerede tilgang til eksklusive avtaler og rabatter. Men vi ønsker å gi litt ekstra til dem som er med oss over tid. Derfor jobber vi med et lojalitetsprogram som gir deg enda bedre fordeler jo lenger du er medlem – som høyere rabattsatser, prioritert tilgang og spesialtilbud. Det skal lønne seg å være trofast.",
//     },
//     {
//         question: "Hvordan inngår jeg en vedlikeholdsavtale?",
//         answer: "Som medlem inngår du i vår vedlikeholdsavtale, hvor vi har samlet et bredt spekter av tjenester under ett tak gjennom nøye forhandlede rammeavtaler. Du har frihet til å ta kontakt ved behov, og får dermed enkel tilgang til kompetente samarbeidspartnere når det passer deg.",
//     },
//     {
//         question: "Kan jeg bruke Driftli kun ved behov?",
//         answer: "Ja, så lenge du er medlem, står du fritt til å bruke Driftli når behovet oppstår. Det er ingen krav om at du må ha en fast eller løpende tjenesteavtale. Når du sender inn en forespørsel, sørger vi for at den går til riktig aktør blant våre samarbeidspartnere – basert på fagområde og rammeavtale.",
//     },
//     {
//         question: "Hvilke områder dekker dere?",
//         answer: "Driftli samarbeider med leverandører i hele Rogaland. Tjenesten utvides fortløpende til andre regioner. Ta kontakt dersom du ønsker å benytte tjenesten utenfor området.",
//     },
//     {
//         question: "Hvordan betaler jeg for tjenester?",
//         answer: "Privatkunder mottar faktura. Bedrifter og sameier får EHF-faktura. Vi mottar oversikt over utført arbeid fra samarbeidspartnerne. Prisen baseres på de ulike rammeavtalene og de individuelle rabattene som gjelder.",
//     },
//     {
//         question: "Har Driftli garanti på arbeid?",
//         answer: "Våre samarbeidspartnere er nøye utvalgte, seriøse aktører som følger gjeldende lover og forskrifter. Skulle det oppstå problemer med utført arbeid, håndteres dette direkte med den aktuelle leverandøren",
//     },
//     {
//         question: "Kan jeg si opp avtalen når som helst?",
//         answer: "Ja, du kan si opp medlemskapet med 30 dagers oppsigelsestid, uten bindingstid eller skjulte gebyrer. Vær oppmerksom på at fordeler og rabatter opphører når oppsigelsestiden er utløpt. For å få tilgang til dem igjen må du melde deg inn på nytt og betale medlemsavgift.",
//     },
//     {
//         question: "Hvordan kontakter jeg kundeservice?",
//         answer: "Du kan kontakte oss via nettsiden, e-post eller telefon. Vi svarer vanligvis innen 24 timer på hverdager og har utvidet support for bedriftskunder.",
//     },
// ];

// function FaqSection() {
//     const theme = useTheme();
//     const [openMap, setOpenMap] = useState({});

//     const toggleOne = (idx) => {
//         setOpenMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
//     };

//     const CardItem = ({ item, index }) => {
//         const isOpen = !!openMap[index];
//         return (
//             <Paper
//                 elevation={0}
//                 onClick={() => toggleOne(index)}
//                 sx={{
//                     p: 2.5,
//                     borderRadius: 3,
//                     border: `1px solid ${theme.palette.grey[200]}`,
//                     backgroundColor:
//                         theme.palette.mode === "light"
//                             ? "#fff"
//                             : theme.palette.background.paper,
//                     transition:
//                         "transform .15s ease, box-shadow .15s ease, border-color .15s ease",
//                     cursor: "pointer",
//                     "&:hover": {
//                         transform: "translateY(-1px)",
//                         boxShadow: "0 8px 24px rgba(0,0,0,.06)",
//                         borderColor: theme.palette.grey[300],
//                     },
//                 }}
//             >
//                 <Stack direction="row" alignItems="center" spacing={1.5}>
//                     <Typography
//                         variant="subtitle1"
//                         fontWeight={700}
//                         sx={{ flex: 1, lineHeight: 1.3 }}
//                     >
//                         {item.question}
//                     </Typography>
//                     <IconButton
//                         size="small"
//                         edge="end"
//                         disableRipple
//                         sx={{ pointerEvents: "none" }}
//                     >
//                         {isOpen ? <RemoveIcon /> : <AddIcon />}
//                     </IconButton>
//                 </Stack>

//                 <Collapse in={isOpen} timeout="auto" unmountOnExit>
//                     <Divider sx={{ my: 1.5 }} />
//                     <Typography variant="body2" color="text.secondary">
//                         {item.answer}
//                     </Typography>
//                 </Collapse>
//             </Paper>
//         );
//     };

//     return (
//         <Box
//             sx={{
//                 py: { xs: 8, md: 10 },
//                 background:
//                     theme.palette.mode === "light"
//                         ? "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)"
//                         : "transparent",
//             }}
//         >
//             <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
//                 <Box sx={{ textAlign: "center", mb: 5 }}>
//                     <Chip
//                         icon={<HelpOutlineIcon />}
//                         label="Vanlige spørsmål Driftli"
//                         sx={{
//                             mb: 2,
//                             fontWeight: 600,
//                             bgcolor:
//                                 theme.palette.mode === "light"
//                                     ? theme.palette.grey[100]
//                                     : "transparent",
//                         }}
//                     />
//                     <Typography
//                         variant="h3"
//                         component="h2"
//                         sx={{ fontWeight: 800, letterSpacing: "-0.3px", mb: 1 }}
//                     >
//                         Alt om medlemskap, tjenester og fordeler
//                     </Typography>
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             maxWidth: 820,
//                             mx: "auto",
//                             color: theme.palette.text.secondary,
//                             fontWeight: 400,
//                         }}
//                     >
//                         Her finner du svar på hvordan Driftli fungerer, hva som
//                         er inkludert og hvordan du får mest ut av medlemskapet
//                     </Typography>
//                 </Box>

//                 <Grid container spacing={2}>
//                     {faqItems.map((item, idx) => (
//                         <Grid item xs={12} md={6} key={idx}>
//                             <CardItem item={item} index={idx} />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }

// export default FaqSection;

import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Stack,
    Chip,
    Divider,
    IconButton,
    useTheme,
    Collapse,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PropTypes from "prop-types";

/** ---------- Top-level CardItem (ikke inni FaqSection) ---------- */
function CardItem({ faqItem, isOpen, onToggle }) {
    const theme = useTheme();
    return (
        <Paper
            elevation={0}
            onClick={onToggle}
            sx={{
                p: 2.5,
                borderRadius: 3,
                border: `1px solid ${theme.palette.grey[200]}`,
                backgroundColor:
                    theme.palette.mode === "light"
                        ? "#fff"
                        : theme.palette.background.paper,
                transition:
                    "transform .15s ease, box-shadow .15s ease, border-color .15s ease",
                cursor: "pointer",
                "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,.06)",
                    borderColor: theme.palette.grey[300],
                },
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1.5}>
                <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ flex: 1, lineHeight: 1.3 }}
                >
                    {faqItem.question}
                </Typography>
                <IconButton
                    size="small"
                    edge="end"
                    disableRipple
                    sx={{ pointerEvents: "none" }}
                >
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Stack>

            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <Divider sx={{ my: 1.5 }} />
                <Typography variant="body2" color="text.secondary">
                    {faqItem.answer}
                </Typography>
            </Collapse>
        </Paper>
    );
}

CardItem.propTypes = {
    faqItem: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

/** -------------------- Data -------------------- */
const faqItems = [
    {
        question: "Hva er Driftli egentlig?",
        answer: "Driftli samler kvalitetssikrede fagfolk og tjenester i ett system. Som medlem får du tilgang til forhandlede priser på tømrer, elektriker, rørlegger, renhold, bilverksted, gartner og mer uten tidkrevende tilbudsrunder.",
    },
    {
        question: "Hvordan bli medlem",
        answer: "For å bli medlem, fyll ut kontaktinformasjonen din og send oss en henvendelse via skjemaet på kontaktside. Du kan også ta kontakt direkte med oss via telefon eller e-post.",
    },
    {
        question: "Hvordan fungerer medlemskapet?",
        answer: "Som medlem får du tilgang til våre forhandlede rammeavtaler med utvalgte leverandører. Driftli kobler deg direkte med riktig samarbeidspartner basert på ditt behov. Vi sikrer konkurransedyktige priser og kvalitet gjennom disse avtalene, mens oppfølging og koordinering håndteres mellom deg og leverandøren.",
    },
    {
        question: "Hvem kan bruke Driftli?",
        answer: "Privatpersoner, borettslag, sameier, bedrifter og eiendomsforvaltere. Tjenesten passer for alle som vil ha én ryddig løsning for drift og vedlikehold i stedet for å håndtere mange ulike leverandører selv.",
    },
    {
        question: "Hva koster det å bruke Driftli?",
        answer: "Medlemskapet i Driftli koster 199 kr per måned. Du betaler kun for utført arbeid eller avtalt vedlikehold. Driftli forhandler ned prisene på vegne av medlemmene, slik at du får tilgang til profesjonelle betingelser og rabatter du normalt ikke ville fått som enkeltkunde.",
    },
    {
        question: "Hvordan velger Driftli leverandører?",
        answer: "Driftli velger leverandører gjennom en grundig kvalitetssikringsprosess. Vi vurderer fagbrev, erfaring, referanser, forsikringer og HMS-system før de blir godkjent som samarbeidspartnere. Bare aktører som oppfyller våre krav til kvalitet, pålitelighet og service blir en del av nettverket.",
    },
    {
        question: "Gir et lengre medlemskap ekstra fordeler?",
        answer: "Ja. Som medlem får du allerede tilgang til eksklusive avtaler og rabatter. Men vi ønsker å gi litt ekstra til dem som er med oss over tid. Derfor jobber vi med et lojalitetsprogram som gir deg enda bedre fordeler jo lenger du er medlem – som høyere rabattsatser, prioritert tilgang og spesialtilbud. Det skal lønne seg å være trofast.",
    },
    {
        question: "Hvordan inngår jeg en vedlikeholdsavtale?",
        answer: "Som medlem inngår du i vår vedlikeholdsavtale, hvor vi har samlet et bredt spekter av tjenester under ett tak gjennom nøye forhandlede rammeavtaler. Du har frihet til å ta kontakt ved behov, og får dermed enkel tilgang til kompetente samarbeidspartnere når det passer deg.",
    },
    {
        question: "Kan jeg bruke Driftli kun ved behov?",
        answer: "Ja, så lenge du er medlem, står du fritt til å bruke Driftli når behovet oppstår. Det er ingen krav om at du må ha en fast eller løpende tjenesteavtale. Når du sender inn en forespørsel, sørger vi for at den går til riktig aktør blant våre samarbeidspartnere – basert på fagområde og rammeavtale.",
    },
    {
        question: "Hvilke områder dekker dere?",
        answer: "Driftli samarbeider med leverandører i hele Rogaland. Tjenesten utvides fortløpende til andre regioner. Ta kontakt dersom du ønsker å benytte tjenesten utenfor området.",
    },
    {
        question: "Hvordan betaler jeg for tjenester?",
        answer: "Privatkunder mottar faktura. Bedrifter og sameier får EHF-faktura. Vi mottar oversikt over utført arbeid fra samarbeidspartnerne. Prisen baseres på de ulike rammeavtalene og de individuelle rabattene som gjelder.",
    },
    {
        question: "Har Driftli garanti på arbeid?",
        answer: "Våre samarbeidspartnere er nøye utvalgte, seriøse aktører som følger gjeldende lover og forskrifter. Skulle det oppstå problemer med utført arbeid, håndteres dette direkte med den aktuelle leverandøren.",
    },
    {
        question: "Kan jeg si opp avtalen når som helst?",
        answer: "Ja, du kan si opp medlemskapet med 30 dagers oppsigelsestid, uten bindingstid eller skjulte gebyrer. Vær oppmerksom på at fordeler og rabatter opphører når oppsigelsestiden er utløpt. For å få tilgang til dem igjen må du melde deg inn på nytt og betale medlemsavgift.",
    },
    {
        question: "Hvordan kontakter jeg kundeservice?",
        answer: "Du kan kontakte oss via nettsiden, e-post eller telefon. Vi svarer vanligvis innen 24 timer på hverdager og har utvidet support for bedriftskunder.",
    },
];

/** -------------------- Component -------------------- */
function FaqSection() {
    const theme = useTheme();
    const [openMap, setOpenMap] = useState({});

    const toggleOne = (idx) => {
        setOpenMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 10 },
                background:
                    theme.palette.mode === "light"
                        ? "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)"
                        : "transparent",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Chip
                        icon={<HelpOutlineIcon />}
                        label="Vanlige spørsmål Driftli"
                        sx={{
                            mb: 2,
                            fontWeight: 600,
                            bgcolor:
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[100]
                                    : "transparent",
                        }}
                    />
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{ fontWeight: 800, letterSpacing: "-0.3px", mb: 1 }}
                    >
                        Alt om medlemskap, tjenester og fordeler
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 820,
                            mx: "auto",
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                        }}
                    >
                        Her finner du svar på hvordan Driftli fungerer, hva som
                        er inkludert og hvordan du får mest ut av medlemskapet
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    {faqItems.map((faqItem, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <CardItem
                                faqItem={faqItem}
                                isOpen={!!openMap[idx]}
                                onToggle={() => toggleOne(idx)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default FaqSection;
