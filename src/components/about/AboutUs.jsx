import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    Divider,
    Paper,
    Stack,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ForestIcon from "@mui/icons-material/Forest";
import GrassIcon from "@mui/icons-material/Grass";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import RoofingIcon from "@mui/icons-material/Roofing";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupsIcon from "@mui/icons-material/Groups";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { ref: heroRef, inView: heroInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const values = [
        {
            icon: <GrassIcon />,
            title: "Lidenskap for uteområder",
            desc: "Vi elsker å skape pene, trygge og lettstelte grøntarealer for borettslag, bedrifter og private hager",
        },
        {
            icon: <ForestIcon />,
            title: "Trygg trefelling og beskjæring",
            desc: "Sertifisert og erfarent mannskap sørger for sikker felling, stubbefresing og riktig beskjæring",
        },
        {
            icon: <CleaningServicesIcon />,
            title: "Sesongrydding & vedlikehold",
            desc: "Alt fra løvblåsing og kantklipp om høsten til vårrydding og rens av takrenner",
        },
        {
            icon: <HandymanIcon />,
            title: "Små bygg og reparasjoner",
            desc: "Vi tar oss av mindre bygg- og vedlikeholdsoppgaver for uteområder, levegger og terrasser",
        },
    ];

    const milestones = [
        {
            year: "2018",
            title: "Oppstart",
            text: "Rogaland Hage & Byggeservice ble etablert med fokus på plenklipp og hekk-klipp",
        },
        {
            year: "2019",
            title: "Utvider tjenester",
            text: "La til trefelling, stubbefresing og rens av takrenner",
        },
        {
            year: "2021",
            title: "Sesongavtaler",
            text: "Flere borettslag og barnehager får faste vedlikeholdsavtaler",
        },
        {
            year: "2023",
            title: "Bygg & service",
            text: "Starter med mindre bygg- og vedlikeholdsprosjekter, terrasser og levegger",
        },
        {
            year: "2024",
            title: "Fleksible pakkeløsninger",
            text: "Lanserer helårsavtaler med rydding vår/høst og beredskap for vinter",
        },
    ];

    const team = [
        {
            name: "Aleksander Håland.",
            role: "Daglig leder / Prosjekt",
            initials: "AH",
        },
        { name: "Olav S.", role: "Drift & kundekontakt", initials: "OS" },
    ];

    const clients = [
        { name: "Borettslag & sameier", icon: <GroupsIcon /> },
        { name: "Barnehager & skoler", icon: <BusinessIcon /> },
        { name: "Bedrifter & næring", icon: <StarBorderIcon /> },
        { name: "Private hageeiere", icon: <ForestIcon /> },
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                {/* HERO */}
                <Box
                    ref={heroRef}
                    className={heroInView ? "fade-in" : ""}
                    sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
                >
                    <Chip
                        label="Om Rogaland Hage & Byggeservice"
                        sx={{
                            mb: 2,
                            fontWeight: 600,
                            bgcolor: theme.palette.grey[100],
                        }}
                    />
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.5px" }}
                    >
                        Vi tar vare på hager og uteområder – året rundt
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
                        Som lokal leverandør i Rogaland hjelper vi borettslag,
                        barnehager, bedrifter og private med plenklipp,
                        hekk-klipp, sesongrydding, trefelling, småbygg og
                        vedlikehold. Vårt mål er pene, trygge uteområder og
                        forutsigbare avtaler
                    </Typography>
                </Box>

                {/* VERDIER */}
                <Grid container spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
                    {values.map((v) => (
                        <Grid item xs={12} md={3} key={v.title}>
                            <Card
                                sx={{
                                    height: "100%",
                                    border: `1px solid ${theme.palette.grey[200]}`,
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
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
                                                    theme.palette.primary.light,
                                                color: theme.palette.primary
                                                    .contrastText,
                                                display: "inline-flex",
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

                {/* TJENESTER */}
                <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            fontWeight={800}
                            sx={{ mb: 2 }}
                        >
                            Våre mest brukte tjenester
                        </Typography>
                        <List dense>
                            {[
                                "Plenklipp & kantklipp",
                                "Hekk-klipp & beskjæring",
                                "Trefelling & stubbefresing",
                                "Sesongrydding vår / høst",
                                "Rens av takrenner",
                                "Mindre bygg- & vedlikeholdsjobber",
                            ].map((t) => (
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
                        </List>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 2 }}
                        >
                            Vi skreddersyr helårs og sesongavtaler tilpasset
                            ditt uteområde
                        </Typography>
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
                                        "Lokal og fleksibel service",
                                        "Fast kontaktperson",
                                        "Forutsigbare priser og avtaler",
                                        "Fokus på HMS og trygg utførelse",
                                        "Rask respons ved hasteoppdrag",
                                    ].map((t) => (
                                        <ListItem key={t} disableGutters>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
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

                {/* TEAM — SENTRERT */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Typography
                        variant="h4"
                        fontWeight={800}
                        sx={{ mb: 3, textAlign: "center" }}
                    >
                        Møt teamet
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
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Klar for å avtale befaring eller få pristilbud?
                    </Typography>
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
                            variant="outlined"
                            size="large"
                            href="tel:+4793220988"
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
                    <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                        sx={{ mt: 1.5 }}
                    >
                        Vi tilbyr gratis befaring i Stavanger og Sandnes området
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutUs;
