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

const faqItems = [
    {
        question: "Hva er Driftli egentlig?",
        answer: "Driftli samler kvalitetssikrede fagfolk og tjenester i ett system. Som medlem får du tilgang til forhandlede priser på tømrer, elektriker, rørlegger, renhold, bilverksted, gartner og mer uten tidkrevende tilbudsrunder.",
    },
    {
        question: "Hvordan fungerer medlemskapet?",
        answer: "Du tegner et vedlikeholdsabonnement der Driftli håndterer koordinering, avtaler og oppfølging for deg. Du får tilgang til faste leverandører, forutsigbare priser og månedlig oversikt over alt arbeid som utføres.",
    },
    {
        question: "Hvem kan bruke Driftli?",
        answer: "Privatpersoner, borettslag, sameier, bedrifter og eiendomsforvaltere. Tjenesten passer for alle som vil ha én ryddig løsning for drift og vedlikehold i stedet for å håndtere mange ulike leverandører selv.",
    },
    {
        question: "Hva koster det å bruke Driftli?",
        answer: "Selve medlemstjenesten koster ingenting. Du betaler kun for utført arbeid eller avtalt vedlikehold. Driftli forhandler ned prisene på vegne av medlemmene slik at du får tilgang til profesjonelle betingelser.",
    },
    {
        question: "Kan jeg velge mine egne leverandører?",
        answer: "Du kan bruke egne leverandører, men Driftli anbefaler våre godkjente partnere. De er forhåndskvalifisert på pris, forsikring, HMS og service. Dette gir trygghet, bedre oppfølging og garantier gjennom oss.",
    },
    {
        question: "Er fagfolkene forsikret og godkjent?",
        answer: "Ja. Alle leverandører i Driftli-nettverket har dokumentert fagbrev, ansvarsforsikring og HMS-system. Vi godkjenner ikke aktører uten gyldig dokumentasjon.",
    },
    {
        question: "Hvordan inngår jeg en vedlikeholdsavtale?",
        answer: "Etter en gratis behovskartlegging setter vi opp en plan som passer deg, månedlig, sesongbasert eller årlig. Du får fast pris og tydelig oversikt over hva som inngår.",
    },
    {
        question: "Kan jeg bruke Driftli kun ved behov?",
        answer: "Ja. Du kan bestille enkeltoppdrag uten å ha fast avtale. Men de fleste velger medlemskap for å få rabatter, prioritet og enklere håndtering av flere fag samtidig.",
    },
    {
        question: "Hvilke områder dekker dere?",
        answer: "Driftli samarbeider med leverandører i hele Rogaland. Tjenesten utvides fortløpende til andre regioner. Ta kontakt dersom du ønsker å benytte tjenesten utenfor området.",
    },
    {
        question: "Hvordan betaler jeg for tjenester?",
        answer: "Privatkunder får faktura eller Vipps. Bedrifter og sameier får EHF-faktura og månedlig oversikt over alt arbeid. Alle priser er faste og avtalt på forhånd.",
    },
    {
        question: "Har Driftli garanti på arbeid?",
        answer: "Ja. Vi tilbyr fornøydgaranti gjennom våre partnerbedrifter. Eventuelle feil eller mangler blir rettet kostnadsfritt innen rimelig tid.",
    },
    {
        question: "Kan jeg si opp avtalen når som helst?",
        answer: "Ja. Du kan avslutte når som helst med 30 dagers oppsigelse. Ingen bindingstid eller skjulte gebyrer.",
    },
    {
        question: "Hvordan blir jeg leverandør i Driftli?",
        answer: "Leverandører som ønsker å samarbeide med oss kan kontakte oss direkte via kontaktskjemaet på nettsiden. Vi vurderer fagområde, referanser, HMS og kapasitet før godkjenning.",
    },
    {
        question: "Hvordan kontakter jeg kundeservice?",
        answer: "Du kan kontakte oss via nettsiden, e-post eller telefon. Vi svarer vanligvis innen 24 timer på hverdager og har utvidet support for bedriftskunder.",
    },
];

function FaqSection() {
    const theme = useTheme();
    const [openMap, setOpenMap] = useState({});

    const toggleOne = (idx) => {
        setOpenMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    const CardItem = ({ item, index }) => {
        const isOpen = !!openMap[index];
        return (
            <Paper
                elevation={0}
                onClick={() => toggleOne(index)}
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
                        {item.question}
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
                        {item.answer}
                    </Typography>
                </Collapse>
            </Paper>
        );
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
                    {faqItems.map((item, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <CardItem item={item} index={idx} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default FaqSection;
