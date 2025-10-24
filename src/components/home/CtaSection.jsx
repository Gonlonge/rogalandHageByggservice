// import {
//     Box,
//     Container,
//     Typography,
//     Button,
//     Grid,
//     Stack,
//     useTheme,
// } from "@mui/material";
// import { alpha } from "@mui/material/styles";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { useInView } from "react-intersection-observer";
// // import { useNavigate } from "react-router-dom";

// import gartnerWorking from "../../assets/privateImages/utvendig-hage.jpg";
// import houseGardenTwo from "../../assets/house-garden-two.png";

// const benefits = [
//     "Rask besvarelse – vanligvis innen 24t*",
//     "Smarte avtaler. Klare priser. Ferdig forhandlet.",
//     "Forsikret, ryddig og HMS-dokumentert arbeid",
//     "Vi samarbeider kun med verifiserte aktører",
// ];

// function CtaSection() {
//     const theme = useTheme();
//     // const navigate = useNavigate();
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//     const ctaImage = gartnerWorking || houseGardenTwo;

//     return (
//         <Box
//             ref={ref}
//             sx={{
//                 py: { xs: 8, md: 10 },
//                 background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//                 color: theme.palette.common.white,
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             {/* Diagonal dekor (diskré) */}
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     top: "-25%",
//                     right: "-10%",
//                     width: "70vw",
//                     height: "90vh",
//                     transform: "rotate(-16deg)",
//                     background: `linear-gradient(90deg, ${alpha(
//                         theme.palette.common.white,
//                         0.12
//                     )}, ${alpha(theme.palette.common.white, 0.04)})`,
//                     borderRadius: 8,
//                     filter: "blur(1px)",
//                     pointerEvents: "none",
//                 }}
//             />
//             {/* Radiale highlights */}
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     inset: 0,
//                     background: `radial-gradient(600px 300px at 15% 20%, ${alpha(
//                         theme.palette.common.white,
//                         0.1
//                     )}, transparent 60%),
//                       radial-gradient(520px 260px at 85% 70%, ${alpha(
//                           theme.palette.common.white,
//                           0.08
//                       )}, transparent 60%)`,
//                     pointerEvents: "none",
//                 }}
//             />

//             <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
//                 <Grid container spacing={4} alignItems="center">
//                     {/* VENSTRE: Glasskort med innhold */}
//                     <Grid
//                         item
//                         xs={12}
//                         md={7}
//                         className={inView ? "fade-in" : ""}
//                     >
//                         <Box
//                             sx={{
//                                 backdropFilter: "blur(8px)",
//                                 backgroundColor: alpha(
//                                     theme.palette.common.white,
//                                     0.1
//                                 ),
//                                 border: `1px solid ${alpha(
//                                     theme.palette.common.white,
//                                     0.28
//                                 )}`,
//                                 borderRadius: 3,
//                                 p: { xs: 3, md: 4 },
//                                 boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
//                             }}
//                         >
//                             <Typography
//                                 variant="h2"
//                                 component="h2"
//                                 sx={{
//                                     fontWeight: 800,
//                                     mb: 1.5,
//                                     fontSize: { xs: "2rem", md: "2.5rem" },
//                                     letterSpacing: "-0.01em",
//                                     color: theme.palette.common.white,
//                                 }}
//                             >
//                                 Kvalitet i alt fra håndverk til vedlikehold –
//                                 samlet i en profesjonell avtale
//                             </Typography>

//                             <Typography
//                                 variant="h6"
//                                 sx={{
//                                     mb: 3,
//                                     fontWeight: 400,
//                                     color: alpha(
//                                         theme.palette.common.white,
//                                         0.95
//                                     ),
//                                 }}
//                             >
//                                 Vi leverer håndverk, service og vedlikehold
//                                 innen alle fag: tømrer, elektriker, rørlegger,
//                                 renhold, fasadevask, bilverksted og
//                                 gartnerarbeid – ryddig og forutsigbart.
//                             </Typography>

//                             {/* Fordeler */}
//                             <Grid container spacing={1.5} sx={{ mb: 3 }}>
//                                 {benefits.map((benefit) => (
//                                     <Grid
//                                         key={benefit}
//                                         item
//                                         xs={12}
//                                         sm={6}
//                                         sx={{
//                                             display: "flex",
//                                             alignItems: "center",
//                                         }}
//                                     >
//                                         <Box
//                                             sx={{
//                                                 borderRadius: "50%",
//                                                 display: "grid",
//                                                 placeItems: "center",
//                                                 mr: 1.25,
//                                                 p: 0.5,
//                                                 backgroundColor: alpha(
//                                                     theme.palette.common.white,
//                                                     0.18
//                                                 ),
//                                                 border: `1px solid ${alpha(
//                                                     theme.palette.common.white,
//                                                     0.28
//                                                 )}`,
//                                                 width: 12,
//                                                 height: 12,
//                                             }}
//                                         />
//                                         <Typography
//                                             variant="body1"
//                                             sx={{
//                                                 color: theme.palette.common
//                                                     .white,
//                                             }}
//                                         >
//                                             {benefit}
//                                         </Typography>
//                                     </Grid>
//                                 ))}
//                             </Grid>

//                             <Stack
//                                 direction="row"
//                                 spacing={2}
//                                 sx={{ flexWrap: "wrap" }}
//                             >
//                                 {/* Gull-CTA */}
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     size="large"
//                                     href="tel:+4793220988"
//                                     endIcon={<ArrowForwardIcon />}
//                                     sx={{
//                                         borderRadius: 2,
//                                         px: 3,
//                                         py: 1.5,
//                                         fontWeight: 800,
//                                         textTransform: "none",
//                                         color: theme.palette.secondary
//                                             .contrastText,
//                                         backgroundColor:
//                                             theme.palette.secondary.main,
//                                         backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark})`,
//                                         boxShadow: `0 12px 26px ${alpha(
//                                             theme.palette.secondary.dark,
//                                             0.35
//                                         )}`,
//                                         "&:hover": {
//                                             transform: "translateY(-1px)",
//                                             backgroundImage: `linear-gradient(90deg, ${
//                                                 theme.palette.secondary.light
//                                             }, ${
//                                                 theme.palette.secondary.dark
//                                             } 60%, ${alpha(
//                                                 theme.palette.secondary.dark,
//                                                 0.9
//                                             )})`,
//                                             boxShadow: `0 16px 34px ${alpha(
//                                                 theme.palette.secondary.dark,
//                                                 0.5
//                                             )}`,
//                                         },
//                                         transition: "all .25s ease",
//                                     }}
//                                 >
//                                     Kontakt oss
//                                 </Button>

//                                 {/* Outline på mørk bakgrunn */}
//                                 <Button
//                                     variant="outlined"
//                                     size="large"
//                                     startIcon={<SearchOutlinedIcon />}
//                                     href="/about"
//                                     sx={{
//                                         borderRadius: 2,
//                                         px: 3,
//                                         py: 1.5,
//                                         fontWeight: 800,
//                                         textTransform: "none",
//                                         color: theme.palette.common.white,
//                                         borderColor: alpha(
//                                             theme.palette.common.white,
//                                             0.6
//                                         ),
//                                         backgroundColor: alpha(
//                                             theme.palette.common.white,
//                                             0.08
//                                         ),
//                                         "&:hover": {
//                                             borderColor:
//                                                 theme.palette.common.white,
//                                             backgroundColor: alpha(
//                                                 theme.palette.common.white,
//                                                 0.16
//                                             ),
//                                             transform: "translateY(-1px)",
//                                         },
//                                         transition: "all .25s ease",
//                                     }}
//                                 >
//                                     Se tjenester
//                                 </Button>
//                             </Stack>

//                             <Typography
//                                 variant="caption"
//                                 sx={{
//                                     mt: 1.5,
//                                     display: "block",
//                                     color: alpha(
//                                         theme.palette.common.white,
//                                         0.85
//                                     ),
//                                 }}
//                             >
//                                 *Gjelder hverdager i Rogaland.
//                             </Typography>
//                         </Box>
//                     </Grid>

//                     {/* HØYRE: Bilde */}
//                     <Grid
//                         item
//                         xs={12}
//                         md={5}
//                         className={inView ? "slide-in-right" : ""}
//                         sx={{
//                             display: { xs: "none", md: "block" },
//                             animationDelay: "0.25s",
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 position: "relative",
//                                 borderRadius: 3,
//                                 overflow: "hidden",
//                                 height: 420,
//                                 "&::before": {
//                                     content: '""',
//                                     position: "absolute",
//                                     inset: -20,
//                                     background: `radial-gradient(60% 50% at 50% 10%, ${alpha(
//                                         theme.palette.common.white,
//                                         0.18
//                                     )}, ${alpha(
//                                         theme.palette.common.white,
//                                         0
//                                     )})`,
//                                     zIndex: 0,
//                                 },
//                             }}
//                         >
//                             <Box
//                                 component="img"
//                                 src={ctaImage}
//                                 alt="Gartner i arbeid – befaring og vedlikehold"
//                                 loading="lazy"
//                                 decoding="async"
//                                 sx={{
//                                     position: "relative",
//                                     zIndex: 1,
//                                     display: "block",
//                                     width: "100%",
//                                     height: "100%",
//                                     objectFit: "cover",
//                                     borderRadius: 3,
//                                     boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
//                                     border: `1px solid ${alpha(
//                                         theme.palette.common.white,
//                                         0.25
//                                     )}`,
//                                     transition: "transform .4s ease",
//                                     "&:hover": {
//                                         transform:
//                                             "translateY(-4px) scale(1.01)",
//                                     },
//                                 }}
//                             />
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }

// export default CtaSection;

import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Stack,
    useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useInView } from "react-intersection-observer";
// import { useNavigate } from "react-router-dom";

import gartnerWorking from "../../assets/house-garden.png";
import houseGardenTwo from "../../assets/house-garden.png";

const benefits = [
    "Rask respons – vi følger opp innen 24 timer",
    "Storkunderabatter – priser du ikke får som privatperson",
    "Ferdig forhandlede rammeavtaler – vi har gjort jobben for deg",
    "Alt på ett sted – håndverk, bilverksted, fritidstilbud og mer",
    "Trygghet og forutsigbarhet – kun seriøse & lokale leverandører",
    "En kontaktflate – mange tjenester – enkelt, effektivt og oversiktlig",
];

function CtaSection() {
    const theme = useTheme();
    // const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const ctaImage = gartnerWorking || houseGardenTwo;

    return (
        <Box
            ref={ref}
            sx={{
                py: { xs: 8, md: 10 },
                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                color: theme.palette.common.white,
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
                    background: `linear-gradient(90deg, ${alpha(
                        theme.palette.common.white,
                        0.12
                    )}, ${alpha(theme.palette.common.white, 0.04)})`,
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
                    background: `radial-gradient(600px 300px at 15% 20%, ${alpha(
                        theme.palette.common.white,
                        0.1
                    )}, transparent 60%),
                      radial-gradient(520px 260px at 85% 70%, ${alpha(
                          theme.palette.common.white,
                          0.08
                      )}, transparent 60%)`,
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
                                backgroundColor: alpha(
                                    theme.palette.common.white,
                                    0.1
                                ),
                                border: `1px solid ${alpha(
                                    theme.palette.common.white,
                                    0.28
                                )}`,
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 1.5,
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    letterSpacing: "-0.01em",
                                    color: theme.palette.common.white,
                                }}
                            >
                                Alt samlet fagfolk, tjenester og trygghet i en
                                avtale.
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontWeight: 400,
                                    color: alpha(
                                        theme.palette.common.white,
                                        0.95
                                    ),
                                }}
                            >
                                Vi tilbyr et bredt spekter av
                                håndverkstjenester, vedlikehold av bil å hus og
                                fritidsrelaterte løsninger strukturert,
                                kvalitetssikret og enkelt for deg.
                            </Typography>

                            {/* Fordeler */}
                            <Grid container spacing={1.5} sx={{ mb: 3 }}>
                                {benefits.map((benefit) => (
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
                                                backgroundColor: alpha(
                                                    theme.palette.common.white,
                                                    0.18
                                                ),
                                                border: `1px solid ${alpha(
                                                    theme.palette.common.white,
                                                    0.28
                                                )}`,
                                                width: 12,
                                                height: 12,
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.common
                                                    .white,
                                            }}
                                        >
                                            {benefit}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* CTA-knapper – responsiv, avstand på mobil og fyller bredden */}
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 1.25, sm: 2 }}
                                sx={{
                                    alignItems: { xs: "stretch", sm: "center" },
                                    justifyContent: { sm: "space-between" },
                                    width: "100%",
                                }}
                            >
                                {/* Kontakt oss */}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="/contact"
                                    endIcon={<ArrowForwardIcon />}
                                    fullWidth
                                    sx={{
                                        // Fyll hele bredden på mobil, del bredden jevnt på større skjermer
                                        width: { xs: "100%", sm: "auto" },
                                        flex: { sm: 1 },
                                        borderRadius: 2,
                                        px: { xs: 2.25, sm: 3 },
                                        py: 1.5,
                                        fontWeight: 800,
                                        textTransform: "none",
                                        color: theme.palette.secondary
                                            .contrastText,
                                        backgroundColor:
                                            theme.palette.secondary.main,
                                        backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark})`,
                                        boxShadow: `0 12px 26px ${alpha(
                                            theme.palette.secondary.dark,
                                            0.35
                                        )}`,
                                        transition: "all .25s ease",
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
                                            boxShadow: `0 16px 34px ${alpha(
                                                theme.palette.secondary.dark,
                                                0.5
                                            )}`,
                                        },
                                    }}
                                >
                                    Bli medlem
                                </Button>

                                {/* Se tjenester */}
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<SearchOutlinedIcon />}
                                    href="/about"
                                    fullWidth
                                    sx={{
                                        width: { xs: "100%", sm: "auto" },
                                        flex: { sm: 1 },
                                        borderRadius: 2,
                                        px: { xs: 2.25, sm: 3 },
                                        py: 1.5,
                                        fontWeight: 800,
                                        textTransform: "none",
                                        color: theme.palette.common.white,
                                        borderColor: alpha(
                                            theme.palette.common.white,
                                            0.6
                                        ),
                                        backgroundColor: alpha(
                                            theme.palette.common.white,
                                            0.08
                                        ),
                                        transition: "all .25s ease",
                                        "&:hover": {
                                            borderColor:
                                                theme.palette.common.white,
                                            backgroundColor: alpha(
                                                theme.palette.common.white,
                                                0.16
                                            ),
                                            transform: "translateY(-1px)",
                                        },
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
                                    color: alpha(
                                        theme.palette.common.white,
                                        0.85
                                    ),
                                }}
                            >
                                *Rogalandsbasert oppstart med nasjonale
                                ambisjoner
                            </Typography>
                        </Box>
                    </Grid>

                    {/* HØYRE: Bilde */}
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
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: -20,
                                    background: `radial-gradient(60% 50% at 50% 10%, ${alpha(
                                        theme.palette.common.white,
                                        0.18
                                    )}, ${alpha(
                                        theme.palette.common.white,
                                        0
                                    )})`,
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
                                    border: `1px solid ${alpha(
                                        theme.palette.common.white,
                                        0.25
                                    )}`,
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
