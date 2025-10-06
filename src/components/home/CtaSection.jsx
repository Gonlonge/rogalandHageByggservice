import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Stack,
    useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

// Bytt gjerne til ditt gartner-bilde
import gartnerWorking from "../../assets/gartner-working.png";
// Fallback hvis ikke finnes lokalt
import houseGardenTwo from "../../assets/house-garden-two.png";

const benefits = [
    "Rask befaring – vanligvis innen 24t*",
    "Fastpris/avtale uten overraskelser",
    "Forsikret, ryddig og HMS-dokumentert arbeid",
    "Fast vedlikeholdsplan gjennom året",
];

function CtaSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const ctaImage = gartnerWorking || houseGardenTwo;

    return (
        <Box
            ref={ref}
            sx={{
                py: { xs: 8, md: 10 },
                background: `linear-gradient(135deg, ${theme.palette.success.dark} 0%, ${theme.palette.success.main} 100%)`,
                color: "white",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Diagonal dekor (diskré) */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    top: "-25%",
                    right: "-10%",
                    width: "70vw",
                    height: "90vh",
                    transform: "rotate(-16deg)",
                    background:
                        "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                    borderRadius: 8,
                    filter: "blur(1px)",
                    pointerEvents: "none",
                }}
            />
            {/* Radiale highlights */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(600px 300px at 15% 20%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(520px 260px at 85% 70%, rgba(255,255,255,0.08), transparent 60%)",
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* VENSTRE: Glasskort med innhold */}
                    <Grid
                        item
                        xs={12}
                        md={7}
                        className={inView ? "fade-in" : ""}
                    >
                        <Box
                            sx={{
                                backdropFilter: "blur(8px)",
                                backgroundColor: "rgba(255,255,255,0.10)",
                                border: "1px solid rgba(255,255,255,0.28)",
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    letterSpacing: 2,
                                    fontWeight: 800,
                                    opacity: 0.95,
                                }}
                            >
                                ROGALAND HAGE & BYGGSERVICE
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 1.5,
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Klar for et uteområde som alltid ser bra ut?
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ mb: 3, fontWeight: 400, opacity: 0.95 }}
                            >
                                Vi leverer plen, hekk, terrasse og vedlikehold –
                                ryddig, forutsigbart og gjort skikkelig.
                            </Typography>

                            {/* Fordeler – runde ikon-sirkler */}
                            <Grid container spacing={1.5} sx={{ mb: 3 }}>
                                {benefits.map((benefit, i) => (
                                    <Grid
                                        key={benefit}
                                        item
                                        xs={12}
                                        sm={6}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                borderRadius: "50%",
                                                display: "grid",
                                                placeItems: "center",
                                                mr: 1.25,
                                                p: 0.5,
                                                backgroundColor:
                                                    "rgba(255,255,255,0.18)",
                                                border: "1px solid rgba(255,255,255,0.28)",
                                            }}
                                        ></Box>
                                        <Typography variant="body1">
                                            {benefit}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ flexWrap: "wrap" }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    href="/contact"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 800,
                                        textTransform: "none",
                                        background:
                                            "linear-gradient(90deg, #66bb6a, #43a047 60%, #2e7d32)",
                                        boxShadow:
                                            "0 12px 26px rgba(67,160,71,0.45)",
                                        "&:hover": {
                                            transform: "translateY(-1px)",
                                            boxShadow:
                                                "0 16px 34px rgba(67,160,71,0.55)",
                                        },
                                        transition: "all .25s ease",
                                    }}
                                >
                                    Bestill befaring
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<SearchOutlinedIcon />} // 👈 swapped icon
                                    href="/about"
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 800,
                                        textTransform: "none",
                                        color: "#fff",
                                        borderColor: "rgba(255,255,255,0.6)",
                                        backgroundColor:
                                            "rgba(255,255,255,0.08)",
                                        "&:hover": {
                                            borderColor: "#fff",
                                            backgroundColor:
                                                "rgba(255,255,255,0.16)",
                                            transform: "translateY(-1px)",
                                        },
                                        transition: "all .25s ease",
                                    }}
                                >
                                    Se tjenester
                                </Button>
                            </Stack>

                            <Typography
                                variant="caption"
                                sx={{
                                    mt: 1.5,
                                    display: "block",
                                    opacity: 0.85,
                                }}
                            >
                                *Gjelder hverdager i Rogaland.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* HØYRE: Bilde med glow + lett hover */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        className={inView ? "slide-in-right" : ""}
                        sx={{
                            display: { xs: "none", md: "block" },
                            animationDelay: "0.25s",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: 3,
                                overflow: "hidden",
                                height: 420,
                                // glow bak bildet
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: -20,
                                    background:
                                        "radial-gradient(60% 50% at 50% 10%, rgba(255,255,255,0.18), rgba(255,255,255,0))",
                                    zIndex: 0,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={ctaImage}
                                alt="Gartner i arbeid – befaring og vedlikehold"
                                loading="lazy"
                                decoding="async"
                                sx={{
                                    position: "relative",
                                    zIndex: 1,
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 3,
                                    boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                    transition: "transform .4s ease",
                                    "&:hover": {
                                        transform:
                                            "translateY(-4px) scale(1.01)",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CtaSection;
