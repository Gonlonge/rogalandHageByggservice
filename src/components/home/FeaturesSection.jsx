import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    useTheme,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

// Fjern de gamle ikon-importene og bruk disse:
import GrassIcon from "@mui/icons-material/Grass";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ForestIcon from "@mui/icons-material/Forest";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import RoofingIcon from "@mui/icons-material/Roofing";
import DeckIcon from "@mui/icons-material/Deck";
import HandymanIcon from "@mui/icons-material/Handyman";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

// 🖼️ Premium: bakgrunnsbilder for hvert kort (bytt til dine egne filer)
import imgPlen from "../../assets/privateImages/uteområde-formklippet.jpg";
import imgHekk from "../../assets/privateImages/innvendig-kjøkken.jpg";
import imgSesong from "../../assets/privateImages/uteområde-trapp.jpg";
import imgTakrenner from "../../assets/privateImages/innvendig-soverom.jpg";
import imgTerrasse from "../../assets/privateImages/utvendig-hage.jpg";
import imgVaktmester from "../../assets/privateImages/uteområde-terrase.jpg";

// Innhold (gartner/bygg)
const features = [
    {
        title: "Plenklipp & kanting",
        icon: <GrassIcon />,
        description:
            "Fast intervall, jevn høyde og rene kanter – for en plen som alltid ser nyklipt ut.",
        image: imgPlen,
    },
    {
        title: "Hekkeklipp & buskform",
        icon: <ContentCutIcon />,
        description:
            "Presis formklipp, riktig tidspunkt og ryddig bortkjøring av hageavfall.",
        image: imgHekk,
    },

    {
        title: "Rydding & sesongarbeid",
        icon: <CleaningServicesIcon />,
        description:
            "Vår- og høstklargjøring, løvblåsing, ugress og helhetsrydding – klart til bruk.",
        image: imgSesong,
    },
    {
        title: "Takrenner & fasadevask",
        icon: <RoofingIcon />,
        description:
            "Rens av renner, vask av fasader/heller og forebyggende vedlikehold.",
        image: imgTakrenner,
    },
    {
        title: "Terrasse & småbygg",
        icon: <DeckIcon />,
        description:
            "Ny terrasse, levegger og små reparasjoner – solid, rett og pent.",
        image: imgTerrasse,
    },
    {
        title: "Vaktmester & faste avtaler",
        icon: <HandymanIcon />,
        description:
            "Fast tilsyn og årshjul for borettslag, sameier og bedrifter – én partner.",
        image: imgVaktmester,
    },
];

// slugify for ruter
const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

export default function FeaturesSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Hjelper for fallback hvis bilde mangler
    const bgFor = (img) =>
        img
            ? `url(${img})`
            : `linear-gradient(135deg, ${theme.palette.grey[300]} 0%, ${theme.palette.grey[200]} 100%)`;

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                {/* Topptekst */}
                <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: 2,
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                        }}
                    >
                        TJENESTER
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{ fontWeight: 800, mb: 2 }}
                    >
                        Hagepleie & byggservice
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 760,
                            mx: "auto",
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                        }}
                    >
                        Høy kvalitet, ryddig gjennomføring og dokumentert
                        resultat med god plass til fleksible avtaler
                    </Typography>
                </Box>

                {/* 2-kolonne premium kort */}
                <Grid container spacing={4} ref={ref}>
                    {features.map((f, i) => {
                        const delay = 0.05 + i * 0.05;
                        return (
                            <Grid item xs={12} md={6} key={f.title}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        position: "relative",
                                        zIndex: 0,
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        height: 280,

                                        // Background image
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            backgroundImage: bgFor(f.image),
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            transform: "scale(1.02)",
                                            transition: "transform .6s ease",
                                            zIndex: 0,
                                            pointerEvents: "none",
                                        },

                                        // 🔥 NEW gradient shadow overlay
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0) 75%)",
                                            zIndex: 1,
                                            pointerEvents: "none",
                                        },

                                        border: `1px solid ${theme.palette.common.white}1A`,
                                        boxShadow:
                                            theme.palette.mode === "light"
                                                ? "0 18px 44px rgba(0,0,0,0.16)"
                                                : "0 18px 44px rgba(0,0,0,0.35)",
                                        transform: inView
                                            ? "none"
                                            : "translateY(16px)",
                                        opacity: inView ? 1 : 0,
                                        animation: `fadeUp .6s ease forwards`,
                                        animationDelay: `${delay}s`,
                                        transition: "box-shadow .35s ease",
                                        "&:hover": {
                                            boxShadow:
                                                theme.palette.mode === "light"
                                                    ? "0 26px 64px rgba(0,0,0,0.22)"
                                                    : "0 26px 64px rgba(0,0,0,0.45)",
                                            "&::before": {
                                                transform: "scale(1.06)",
                                            },
                                        },
                                    }}
                                >
                                    <CardActionArea
                                        // onClick={() =>
                                        //     navigate(
                                        //         `/tjenester/${slugify(f.title)}`
                                        //     )
                                        // }
                                        sx={{
                                            position: "relative",
                                            height: "100%",
                                            pointerEvents: "auto",
                                            zIndex: 2, // ← hele klikkflaten ligger over skyggen
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                position: "absolute",
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                p: { xs: 2.5, sm: 3 },
                                                color: "#fff",
                                                zIndex: 3, // tekst/ikon over bildet
                                            }}
                                        >
                                            {/* Ikonbadge + tekst */}
                                            <Box
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: "16px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                    mb: 1.5,
                                                    color: theme.palette.primary
                                                        .main,

                                                    border: `2px solid ${theme.palette.primary.main}33`,
                                                    boxShadow:
                                                        "0 6px 16px rgba(0,0,0,0.25)",
                                                }}
                                            >
                                                {f.icon}
                                            </Box>

                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 800,
                                                    lineHeight: 1.15,
                                                    letterSpacing: "-0.01em",
                                                }}
                                            >
                                                {f.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ mt: 0.75, opacity: 0.95 }}
                                            >
                                                {f.description}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    mt: 1.25,
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    letterSpacing: ".02em",
                                                    opacity: 0.95,
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                Les mer{" "}
                                                <Box
                                                    component="span"
                                                    aria-hidden
                                                    sx={{
                                                        ml: 1,
                                                        transform:
                                                            "translateY(1px)",
                                                    }}
                                                >
                                                    →
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>

            {/* Keyframes */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </Box>
    );
}
