import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Chip,
    Stack,
    useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import gartnerWorkingTwo from "../../assets/privateImages/ai-elektriker.jpg";
import uteområdeFormklippet from "../../assets/privateImages/ai-husvask.jpg";
import houseGarden from "../../assets/house-garden.png";

const backgroundUrl = houseGarden;

function HeroSection() {
    const theme = useTheme();
    const { ref: heroRef } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <Box
            ref={heroRef}
            sx={{
                position: "relative",
                minHeight: { xs: "auto", md: "92vh" },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                pb: { xs: 8, md: 10 },
                backgroundColor: theme.palette.primary.dark,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${backgroundUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(1.05) contrast(0.95)",
                    opacity: 0.35,
                    zIndex: 0,
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(80% 60% at 15% 20%, ${alpha(
                        theme.palette.common.black,
                        0.45
                    )} 0%, ${alpha(
                        theme.palette.common.black,
                        0.2
                    )} 35%, ${alpha(theme.palette.common.black, 0)} 75%),
                     radial-gradient(70% 60% at 85% 80%, ${alpha(
                         theme.palette.common.black,
                         0.35
                     )} 0%, ${alpha(
                        theme.palette.common.black,
                        0.1
                    )} 45%, ${alpha(theme.palette.common.black, 0)} 80%),
                     linear-gradient(135deg, ${alpha(
                         theme.palette.primary.dark,
                         0.33
                     )} 0%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    pt: { xs: 10, sm: 12, md: 14 },
                    pb: { xs: 8, md: 0 },
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 4, sm: 5, md: 8 }}
                    alignItems="center"
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* === LEFT TEXT SIDE === */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                color: theme.palette.common.white,
                                backdropFilter: "blur(8px)",
                                backgroundColor: alpha(
                                    theme.palette.primary.dark,
                                    0.35
                                ),
                                border: `1px solid ${alpha(
                                    theme.palette.common.white,
                                    0.14
                                )}`,
                                borderRadius: 3,
                                p: { xs: 2.5, sm: 3, md: 5 },
                                boxShadow: "0 16px 50px rgba(0,0,0,0.35)",
                            }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    fontWeight: 900,
                                    lineHeight: 1.08,
                                    letterSpacing: "-0.02em",
                                    color: theme.palette.common.white,
                                    fontSize: {
                                        xs: "clamp(1.8rem, 6vw, 2.2rem)",
                                        sm: "clamp(2rem, 5vw, 2.6rem)",
                                        md: "clamp(2.4rem, 4vw, 3.2rem)",
                                    },
                                }}
                            >
                                Fordelene starter med oss
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 1.8,
                                    color: alpha(
                                        theme.palette.common.white,
                                        0.95
                                    ),
                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.05rem",
                                        md: "1.12rem",
                                    },
                                }}
                            >
                                Driftli gir privatpersoner og bedrifter tilgang
                                til fordeler man normalt bare får som stor
                                kunde. Vi forhandler rammeavtaler med diverse
                                yrkestjenester, fritidstilbydere og bilrelaterte
                                tjenester – og samler alt i et enkelt
                                vedlikeholdsabonnement. Med Driftli får du
                                kvalitetssikrede leverandører, faste priser og
                                mindre administrasjon
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={1}
                                rowGap={1}
                                sx={{ mt: 2.25, flexWrap: "wrap" }}
                            >
                                {[
                                    "Tømrertjenester",
                                    "Elektriker",
                                    "Rørlegger",
                                    "Bilverksted",
                                    "Blikkenslager",
                                    "Fasade og takvask",
                                    "Renhold",
                                    "Gartner",
                                ].map((label) => (
                                    <Chip
                                        key={label}
                                        label={label}
                                        variant="outlined"
                                        sx={{
                                            color: theme.palette.common.white,
                                            borderColor: alpha(
                                                theme.palette.common.white,
                                                0.35
                                            ),
                                            fontWeight: 500,
                                            fontSize: {
                                                xs: "0.75rem",
                                                sm: "0.8rem",
                                            },
                                            height: { xs: 26, sm: 30 },
                                        }}
                                    />
                                ))}
                            </Stack>

                            {/* CTA buttons */}
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 1.5, sm: 2 }}
                                sx={{
                                    mt: { xs: 2.5, sm: 3 },
                                    alignItems: { xs: "stretch", sm: "center" },
                                    "& > *": {
                                        width: { xs: "100%", sm: "auto" },
                                    },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="/contact"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        borderRadius: 2,
                                        px: { xs: 2, sm: 3 },
                                        py: { xs: 1.2, sm: 1.4 },
                                        fontWeight: 800,
                                        textTransform: "none",
                                        fontSize: { xs: "1rem", sm: "1.05rem" },
                                        color: theme.palette.secondary
                                            .contrastText,
                                        backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark})`,
                                        boxShadow: `0 10px 24px ${alpha(
                                            theme.palette.secondary.dark,
                                            0.35
                                        )}`,
                                        "&:hover": {
                                            transform: "translateY(-1px)",
                                            backgroundImage: `linear-gradient(90deg, ${
                                                theme.palette.secondary.light
                                            }, ${
                                                theme.palette.secondary.dark
                                            } 60%, ${alpha(
                                                theme.palette.secondary.dark,
                                                0.9
                                            )})`,
                                        },
                                        transition: "all .25s ease",
                                    }}
                                >
                                    Bli medlem
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<SearchOutlinedIcon />}
                                    href="/about"
                                    sx={{
                                        borderRadius: 2,
                                        px: { xs: 2, sm: 3 },
                                        py: { xs: 1.2, sm: 1.4 },
                                        fontWeight: 800,
                                        textTransform: "none",
                                        fontSize: { xs: "1rem", sm: "1.05rem" },
                                        color: theme.palette.common.white,
                                        borderColor: alpha(
                                            theme.palette.common.white,
                                            0.6
                                        ),
                                        backgroundColor: alpha(
                                            theme.palette.common.white,
                                            0.08
                                        ),
                                        "&:hover": {
                                            backgroundColor: alpha(
                                                theme.palette.common.white,
                                                0.16
                                            ),
                                            transform: "translateY(-1px)",
                                        },
                                        transition: "all .25s ease",
                                    }}
                                >
                                    Se tjenester
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* === RIGHT IMAGES SIDE === */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            position: "relative",
                            mt: { xs: 4, sm: 5, md: 0 }, // pushes images below text on mobile
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                height: {
                                    xs: 280,
                                    sm: 360,
                                    md: 520,
                                },
                                width: "100%",
                            }}
                        >
                            {/* Top image */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: "5%", md: "8%" },
                                    right: { xs: "6%", md: "10%" },
                                    width: {
                                        xs: "48%",
                                        sm: "46%",
                                        md: "44%",
                                    },
                                    borderRadius: { xs: 2, md: 3 },
                                    overflow: "hidden",
                                    transform: "rotate(-4deg)",
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                                    border: `1px solid ${alpha(
                                        theme.palette.common.white,
                                        0.15
                                    )}`,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={gartnerWorkingTwo}
                                    alt="Uteområde – team i arbeid"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </Box>

                            {/* Bottom image */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: { xs: "3%", md: "8%" },
                                    left: { xs: "6%", md: "6%" },
                                    width: {
                                        xs: "60%",
                                        sm: "56%",
                                        md: "52%",
                                    },
                                    borderRadius: { xs: 3, md: 4 },
                                    overflow: "hidden",
                                    transform: "rotate(3deg)",
                                    boxShadow: "0 28px 80px rgba(0,0,0,0.55)",
                                    border: `1px solid ${alpha(
                                        theme.palette.common.white,
                                        0.18
                                    )}`,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={uteområdeFormklippet}
                                    alt="Byggservice – kontroll og kvalitet"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </Box>

                            {/* Glow ring */}
                            <Box
                                aria-hidden
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: { xs: 200, sm: 260, md: 340 },
                                    height: { xs: 200, sm: 260, md: 340 },
                                    borderRadius: "50%",
                                    background: `radial-gradient(closest-side, ${alpha(
                                        theme.palette.common.white,
                                        0.12
                                    )}, ${alpha(
                                        theme.palette.common.white,
                                        0
                                    )})`,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Wave-divider */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    bottom: -1,
                    left: 0,
                    width: "100%",
                    lineHeight: 0,
                    zIndex: 2,
                }}
            >
                <svg
                    viewBox="0 0 1440 90"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ display: "block", width: "100%", height: 80 }}
                >
                    <path
                        d="M0,32 C240,88 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
                        fill={theme.palette.background.default}
                    />
                </svg>
            </Box>
        </Box>
    );
}

export default HeroSection;
