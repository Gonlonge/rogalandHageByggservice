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
        question: "Tilbyr dere gratis befaring?",
        answer: "Ja. Vi tilbyr gratis og uforpliktende befaring i Stavanger- og Sandnes-området (og nærliggende kommuner etter avtale). Vi går gjennom behov, avklarer omfang og gir fastpris der det er mulig.",
    },
    {
        question: "Hvilke områder dekker dere?",
        answer: "Primært Stavanger, Sandnes, Sola og Randaberg. Vi kan også ta oppdrag i resten av Rogaland etter avtale, særlig ved større jobber eller sesongavtaler.",
    },
    {
        question: "Hvilke tjenester leverer dere?",
        answer: "Plenklipp og kantklipp, hekk-klipp og beskjæring, trefelling og stubbefresing, sesongrydding (vår/høst), rens av takrenner, samt mindre bygg- og vedlikeholdsjobber som levegger og terrassearbeid.",
    },
    {
        question: "Hvordan prises jobben – timepris eller fastpris?",
        answer: "Vi gir fastpris etter befaring på tydelig avgrensede jobber (f.eks. hekk-klipp, rens av takrenner, stubbefresing). Løpende vedlikehold (f.eks. ukentlig plenklipp) kan prises som fast månedspris eller timepris etter avtale.",
    },
    {
        question: "Hva med bortkjøring av hageavfall?",
        answer: "Vi kan ta med og levere hageavfall mot et tillegg som dekker transport og mottaksgebyr. Vil du spare kostnaden, kan vi stable avfallet på anvist plass hos deg.",
    },
    {
        question: "Er dere forsikret – og hvordan jobber dere med HMS?",
        answer: "Ja. Vi har gyldig ansvarsforsikring og følger sikre arbeidsrutiner. Ved trefelling vurderer vi fallretning, sperrer av området og bruker riktig verneutstyr og sikring.",
    },
    {
        question: "Trenger jeg tillatelse til trefelling?",
        answer: "På egen tomt er det som regel greit, men sjekk alltid regulering, naboavtaler og evt. vernebestemmelser. I borettslag/sameie må styret godkjenne. Vi veileder deg gjerne.",
    },
    {
        question: "Når kommer dere – og hva om det regner?",
        answer: "Vi avtaler tidsvindu for oppmøte. Lett regn stopper sjelden oss. Ved kraftig regn eller vind som påvirker kvalitet/sikkerhet, ombooker vi i dialog med deg.",
    },
    {
        question: "Hvordan fungerer sesong- og helårsavtaler?",
        answer: "Vi setter opp en plan med hyppighet (f.eks. ukentlig/annenhver uke plenklipp, vår- og høstrydding, hekk-klipp etter sesong). Fast månedlig pris gir forutsigbarhet.",
    },
    {
        question: "Kan dere jobbe når jeg ikke er hjemme?",
        answer: "Ja. Mange kunder gir oss tilgang via lås/portkode eller nøkkelboks. Vi avtaler løsning som er trygg og ryddig for begge parter.",
    },
    {
        question: "Hvilke betalingsmåter tilbyr dere?",
        answer: "Faktura (privat og bedrift), EHF for virksomheter. Vipps aksepteres på mindre jobber. For større prosjekt kan delbetaling avtales.",
    },
    {
        question: "Har dere garanti på arbeid?",
        answer: "Vi har fornøyd-garanti. Oppdager du noe, sier du fra innen 3 dager, så retter vi opp uten ekstra kostnad.",
    },
    {
        question: "Kan jeg avbestille eller flytte timen?",
        answer: "Ja. Gi beskjed senest 24 timer før avtalt tid for kostnadsfri ombooking/avbestilling. Ved senere avbestilling kan gebyr tilkomme for tapt tid.",
    },
    {
        question: "Tar dere bilder før/etter?",
        answer: "Kun med samtykke. Noen kunder ønsker dokumentasjon, andre ikke. Vi respekterer ditt valg – og publiserer ingenting uten godkjenning.",
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
                onClick={() => toggleOne(index)} // ✅ hele kortet klikker
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
                        sx={{ pointerEvents: "none" }} // ✅ ikon følger bare status, klikk deaktiveres
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
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Chip
                        icon={<HelpOutlineIcon />}
                        label="Vanlige spørsmål – Rogaland Hage & Byggeservice"
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
                        Alt om hage, vedlikehold og avtaler
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
                        Her finner du svar på det meste. Finner du ikke svaret
                        ta kontakt, så hjelper vi deg raskt
                    </Typography>
                </Box>

                {/* FAQ – to kolonner på md+ */}
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
