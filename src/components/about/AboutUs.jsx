import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    Stack,
    Collapse,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import VerifiedIcon from "@mui/icons-material/Verified";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HubIcon from "@mui/icons-material/Hub";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { ref: heroRef, inView: heroInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [showAll, setShowAll] = useState(false);

    const values = [
        {
            icon: <VerifiedIcon />,
            title: "Vi forhandler – du får fordelen",
            desc: "Du får tilgang til priser og vilkår som normalt er forbeholdt storkunder.",
        },
        {
            icon: <ReceiptLongIcon />,
            title: "Kvalitet du kan stole på",
            desc: "Alle leverandører er nøye valgt ut og har dokumentert erfaring.",
        },
        {
            icon: <SupportAgentIcon />,
            title: "Rask tilgang til riktige aktører",
            desc: "Vi prioriterer hastebehov og kobler deg raskt med riktig tjenesteyter.",
        },
        {
            icon: <HubIcon />,
            title: "En kontakt for alt",
            desc: "Alt drift og koordinering samlet på ett sted – bedre flyt i hverdagen.",
        },
    ];

    const team = [
        {
            name: "Aleksander Håland",
            role: "Daglig leder / Prosjekt",
            initials: "AH",
        },
        { name: "Alexander Molde", role: "Salg / driftsleder", initials: "AM" },
    ];

    // 9 synlige punkter før “Vis mer”
    const services = [
        "Tømrertjenester",
        "Taktekker",
        "Rørlegger",
        "Elektriker",
        "Ventilasjonstekniker",
        "Maler",
        "Blikkenslager",
        "Glassmester",
        "Trappeleverandør",
        "Kjøkkenleverandør",
        "Baderomsinnredning",
        "Renholdstjenester",
        "Gartnerfirma",
        "Vaktmestertjenester",
        "Bilverksted",
        "Dekkhotell",
        "Fritidstilbud",
        "Grunnarbeid og graving",
        "Betongarbeid",
        "Murer",
    ];

    const initialCount = 9;
    const top = services.slice(0, initialCount);
    const rest = services.slice(initialCount);

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                overflowX: "clip",
                position: "relative",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                {/* HERO */}
                <Box
                    ref={heroRef}
                    className={heroInView ? "fade-in" : ""}
                    sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: "-0.5px",
                            mt: 6,
                        }}
                    >
                        Driftlis tjenestefordeler
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 900,
                            mx: "auto",
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                        }}
                    >
                        Driftli gir deg tilgang til utvalgte leverandører og
                        lokale fordelsavtaler med bedre vilkår, enklere tilgang
                        og høyere trygghet.
                    </Typography>
                </Box>

                {/* VERDIER */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Grid container spacing={3}>
                        {values.map((v) => (
                            <Grid item xs={12} md={3} key={v.title}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        border: `1px solid ${theme.palette.grey[200]}`,
                                        boxShadow:
                                            "0 4px 12px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            sx={{ mb: 1 }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 1.2,
                                                    borderRadius: 2,
                                                    bgcolor:
                                                        theme.palette.primary
                                                            .light,
                                                    color: theme.palette.primary
                                                        .contrastText,
                                                    display: "inline-flex",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {v.icon}
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                            >
                                                {v.title}
                                            </Typography>
                                        </Stack>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {v.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* TJENESTER */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                fontWeight={800}
                                sx={{ mb: 2 }}
                            >
                                Driftli tjenester
                            </Typography>

                            <List dense id="services-list">
                                {top.map((t) => (
                                    <ListItem
                                        key={t}
                                        disableGutters
                                        sx={{ mb: 0.5 }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <CheckIcon
                                                color="success"
                                                fontSize="small"
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={t} />
                                    </ListItem>
                                ))}

                                <Collapse
                                    in={showAll}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    {rest.map((t) => (
                                        <ListItem
                                            key={t}
                                            disableGutters
                                            sx={{ mb: 0.5 }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CheckIcon
                                                    color="success"
                                                    fontSize="small"
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary={t} />
                                        </ListItem>
                                    ))}
                                </Collapse>
                            </List>

                            {rest.length > 0 && (
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => setShowAll((v) => !v)}
                                    aria-expanded={showAll}
                                    aria-controls="services-list"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 600,
                                        textTransform: "none",
                                        color: theme.palette.primary.main,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {showAll
                                        ? "Vis færre"
                                        : `Vis mer (${rest.length})`}
                                </Button>
                            )}
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    height: "100%",
                                    border: `1px solid ${theme.palette.grey[200]}`,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{ mb: 1 }}
                                    >
                                        Hvorfor velge oss?
                                    </Typography>
                                    <List dense>
                                        {[
                                            "Kvalitetssikrede fagfolk med dokumentert erfaring",
                                            "Forutsigbare avtaler og faste priser – ingen skjulte kostnader",
                                            "Én kontaktperson som koordinerer hele prosessen for deg",
                                            "Arbeid utført med forsikring og komplett HMS-dokumentasjon",
                                            "Rask respons – vanligvis innen 24 timer",
                                            "Tilgang til rabatterte priser gjennom våre rammeavtaler",
                                            "Ingen binding – bruk tjenesten når du trenger den",
                                            "Alle leverandører følger gjeldende regelverk",
                                            "Tilpasset privatpersoner, bedrifter og sameier",
                                            "Vi følger opp kvalitet og kundetilfredshet – hele veien",
                                        ].map((t) => (
                                            <ListItem key={t} disableGutters>
                                                <ListItemIcon
                                                    sx={{ minWidth: 32 }}
                                                >
                                                    <CheckIcon
                                                        color="success"
                                                        fontSize="small"
                                                    />
                                                </ListItemIcon>
                                                <ListItemText primary={t} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* TEAM */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Typography
                        variant="h4"
                        fontWeight={800}
                        sx={{ textAlign: "center", mb: 1 }}
                    >
                        Driftli teamet
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 900,
                            mx: "auto",
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                            textAlign: "center",
                            mb: 8,
                        }}
                    >
                        Vi hjelper privatpersoner, bedrifter og borettslag med å
                        få enklere tilgang til tjenester og lokale
                        fordelsavtaler. Som medlem får du gode priser,
                        kvalitetssikrede leverandører og én fast kontaktperson
                        som følger opp.
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {team.map((t) => (
                            <Grid item xs={12} sm={6} md={3} key={t.name}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        textAlign: "center",
                                        border: `1px solid ${theme.palette.grey[200]}`,
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Avatar
                                            sx={{
                                                width: 72,
                                                height: 72,
                                                mx: "auto",
                                                mb: 1.5,
                                                bgcolor:
                                                    theme.palette.primary.main,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {t.initials}
                                        </Avatar>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={700}
                                        >
                                            {t.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {t.role}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* CTA */}
                <Box sx={{ textAlign: "center" }}>
                    <Stack
                        spacing={2}
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate("/contact")}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: "50px",
                                fontWeight: 700,
                            }}
                        >
                            Kontakt oss
                        </Button>
                        <Button
                            component="a"
                            href="tel:+4793220988"
                            variant="outlined"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: "50px",
                                fontWeight: 700,
                            }}
                        >
                            Ring oss direkte
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutUs;
