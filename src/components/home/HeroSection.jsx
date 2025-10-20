// // // import {
// // //     Box,
// // //     Container,
// // //     Typography,
// // //     Button,
// // //     Grid,
// // //     Chip,
// // //     Stack,
// // //     useTheme,
// // // } from "@mui/material";
// // // import { useInView } from "react-intersection-observer";
// // // import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// // // import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// // // import gartnerWorkingTwo from "../../assets/gartner-working-two.png";
// // // import gartnerWorking from "../../assets/gartner-working.png";
// // // import houseGarden from "../../assets/house-garden.png";

// // // const backgroundUrl = houseGarden;

// // // function HeroSection() {
// // //     const theme = useTheme();
// // //     const { ref: heroRef, inView: heroInView } = useInView({
// // //         triggerOnce: true,
// // //         threshold: 0.1,
// // //     });

// // //     return (
// // //         <Box
// // //             ref={heroRef}
// // //             sx={{
// // //                 position: "relative",
// // //                 minHeight: "100vh",
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 overflow: "hidden",
// // //                 pb: { xs: 8, md: 10 },
// // //                 backgroundColor: theme.palette.success.dark,
// // //                 "&::before": {
// // //                     content: '""',
// // //                     position: "absolute",
// // //                     inset: 0,
// // //                     backgroundImage: `url(${backgroundUrl})`,
// // //                     backgroundSize: "cover",
// // //                     backgroundPosition: "center",
// // //                     filter: "saturate(1.1) contrast(0.95)",
// // //                     opacity: 0.35,
// // //                     zIndex: 0,
// // //                 },
// // //                 "&::after": {
// // //                     content: '""',
// // //                     position: "absolute",
// // //                     inset: 0,
// // //                     background: `radial-gradient(80% 60% at 15% 20%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.0) 75%),
// // //                        radial-gradient(70% 60% at 85% 80%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0) 80%),
// // //                        linear-gradient(135deg, ${theme.palette.success.dark}55 0%, ${theme.palette.success.main}33 100%)`,
// // //                     zIndex: 1,
// // //                 },
// // //             }}
// // //         >
// // //             {/* Dekorstripe */}
// // //             <Box
// // //                 aria-hidden
// // //                 sx={{
// // //                     position: "absolute",
// // //                     top: "-20%",
// // //                     right: "-15%",
// // //                     width: "70vw",
// // //                     height: "70vh",
// // //                     transform: "rotate(-18deg)",
// // //                     background:
// // //                         "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
// // //                     filter: "blur(2px)",
// // //                     borderRadius: 8,
// // //                     zIndex: 1,
// // //                 }}
// // //             />

// // //             <Container
// // //                 maxWidth="lg"
// // //                 sx={{
// // //                     position: "relative",
// // //                     zIndex: 2,
// // //                     pt: { xs: 12, sm: 14 },
// // //                 }}
// // //             >
// // //                 <Grid container spacing={6} alignItems="center">
// // //                     {/* Venstre side */}
// // //                     <Grid item xs={12} md={6}>
// // //                         <Box
// // //                             sx={{
// // //                                 color: "#fff",
// // //                                 backdropFilter: "blur(10px)",
// // //                                 backgroundColor: "rgba(20,40,20,0.35)",
// // //                                 border: "1px solid rgba(255,255,255,0.15)",
// // //                                 borderRadius: 3,
// // //                                 p: { xs: 3, sm: 5 },
// // //                                 boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
// // //                             }}
// // //                         >
// // //                             <Typography
// // //                                 variant="overline"
// // //                                 sx={{
// // //                                     letterSpacing: 2,
// // //                                     fontWeight: 800,
// // //                                     color: "rgba(255,255,255,0.95)",
// // //                                 }}
// // //                             >
// // //                                 ROGALAND HAGE & BYGGSERVICE
// // //                             </Typography>

// // //                             <Typography
// // //                                 variant="h1"
// // //                                 component="h1"
// // //                                 sx={{
// // //                                     mt: 1,
// // //                                     fontWeight: 900,
// // //                                     lineHeight: 1.05,
// // //                                     letterSpacing: "-0.02em",
// // //                                     fontSize: {
// // //                                         xs: "2.2rem",
// // //                                         sm: "3rem",
// // //                                         md: "3.4rem",
// // //                                     },
// // //                                 }}
// // //                             >
// // //                                 Driftssikkert vedlikehold av ute- og byggområder
// // //                             </Typography>

// // //                             <Typography
// // //                                 variant="body1"
// // //                                 sx={{
// // //                                     mt: 2,
// // //                                     opacity: 0.95,
// // //                                     fontSize: { xs: "1.05rem", sm: "1.15rem" },
// // //                                 }}
// // //                             >
// // //                                 Hagepleie, tømrertjenester og vedlikeholdsarbeid
// // //                                 Vi leverer høy kvalitet, ryddig gjennomføring og
// // //                                 dokumentert resultat – med skreddersydde avtaler
// // //                                 tilpasset dine behov.
// // //                             </Typography>

// // //                             {/* Service chips */}
// // //                             <Stack
// // //                                 direction="row"
// // //                                 spacing={1.5} // 🔹 gir horisontal avstand mellom chips
// // //                                 rowGap={1.5} // 🔹 gir vertikal avstand hvis de brytes til ny linje
// // //                                 sx={{ mt: 3, flexWrap: "wrap" }}
// // //                             >
// // //                                 {[
// // //                                     "Plen & hekk",
// // //                                     "Terrasse & småbygg",
// // //                                     "Takrenner & fasadevask",
// // //                                     "Vaktmester",
// // //                                     "Sesong (brøyting)",
// // //                                 ].map((label) => (
// // //                                     <Chip
// // //                                         key={label}
// // //                                         label={label}
// // //                                         variant="outlined"
// // //                                         sx={{
// // //                                             color: "#fff",
// // //                                             borderColor:
// // //                                                 "rgba(255,255,255,0.35)",
// // //                                             backdropFilter: "blur(6px)",
// // //                                             fontWeight: 500,
// // //                                             px: 0.5,
// // //                                         }}
// // //                                     />
// // //                                 ))}
// // //                             </Stack>

// // //                             <Stack
// // //                                 direction="row"
// // //                                 spacing={2}
// // //                                 sx={{ mt: 3, flexWrap: "wrap" }}
// // //                             >
// // //                                 <Button
// // //                                     variant="contained"
// // //                                     size="large"
// // //                                     href="/contact"
// // //                                     endIcon={<ArrowForwardIcon />}
// // //                                     sx={{
// // //                                         borderRadius: 2,
// // //                                         px: 3,
// // //                                         py: 1.5,
// // //                                         fontWeight: 800,
// // //                                         textTransform: "none",
// // //                                         background:
// // //                                             "linear-gradient(90deg, #66bb6a, #43a047 60%, #2e7d32)",
// // //                                         boxShadow:
// // //                                             "0 12px 26px rgba(67,160,71,0.45)",
// // //                                         "&:hover": {
// // //                                             transform: "translateY(-1px)",
// // //                                             boxShadow:
// // //                                                 "0 16px 34px rgba(67,160,71,0.55)",
// // //                                         },
// // //                                         transition: "all .25s ease",
// // //                                     }}
// // //                                 >
// // //                                     Bestill befaring
// // //                                 </Button>

// // //                                 <Button
// // //                                     variant="outlined"
// // //                                     size="large"
// // //                                     startIcon={<SearchOutlinedIcon />}
// // //                                     href="/about"
// // //                                     sx={{
// // //                                         borderRadius: 2,
// // //                                         px: 3,
// // //                                         py: 1.5,
// // //                                         fontWeight: 800,
// // //                                         textTransform: "none",
// // //                                         color: "#fff",
// // //                                         borderColor: "rgba(255,255,255,0.6)",
// // //                                         backgroundColor:
// // //                                             "rgba(255,255,255,0.08)",
// // //                                         "&:hover": {
// // //                                             borderColor: "#fff",
// // //                                             backgroundColor:
// // //                                                 "rgba(255,255,255,0.16)",
// // //                                             transform: "translateY(-1px)",
// // //                                         },
// // //                                         transition: "all .25s ease",
// // //                                     }}
// // //                                 >
// // //                                     Se tjenester
// // //                                 </Button>
// // //                             </Stack>
// // //                         </Box>
// // //                     </Grid>

// // //                     {/* Høyre side – staggered images */}
// // //                     <Grid item xs={12} md={6}>
// // //                         <Box
// // //                             sx={{
// // //                                 position: "relative",
// // //                                 height: { xs: 380, sm: 520, md: 600 },
// // //                             }}
// // //                         >
// // //                             <Box
// // //                                 sx={{
// // //                                     position: "absolute",
// // //                                     top: { xs: "6%", md: "8%" },
// // //                                     right: { xs: "2%", md: "10%" },
// // //                                     width: { xs: "72%", md: "58%" },
// // //                                     borderRadius: 3,
// // //                                     overflow: "hidden",
// // //                                     transform: "rotate(-4deg)",
// // //                                     boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
// // //                                     border: "1px solid rgba(255,255,255,0.15)",
// // //                                 }}
// // //                             >
// // //                                 <Box
// // //                                     component="img"
// // //                                     src={gartnerWorkingTwo}
// // //                                     alt="Uteområde – team i arbeid"
// // //                                     loading="eager"
// // //                                     sx={{
// // //                                         width: "100%",
// // //                                         height: "auto",
// // //                                         display: "block",
// // //                                     }}
// // //                                 />
// // //                             </Box>

// // //                             <Box
// // //                                 sx={{
// // //                                     position: "absolute",
// // //                                     bottom: { xs: "4%", md: "8%" },
// // //                                     left: { xs: "3%", md: "6%" },
// // //                                     width: { xs: "86%", md: "68%" },
// // //                                     borderRadius: 4,
// // //                                     overflow: "hidden",
// // //                                     transform: "rotate(3deg)",
// // //                                     boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
// // //                                     border: "1px solid rgba(255,255,255,0.18)",
// // //                                 }}
// // //                             >
// // //                                 <Box
// // //                                     component="img"
// // //                                     src={gartnerWorking}
// // //                                     alt="Byggservice – kontroll og kvalitet"
// // //                                     loading="lazy"
// // //                                     sx={{
// // //                                         width: "100%",
// // //                                         height: "auto",
// // //                                         display: "block",
// // //                                     }}
// // //                                 />
// // //                             </Box>

// // //                             <Box
// // //                                 aria-hidden
// // //                                 sx={{
// // //                                     position: "absolute",
// // //                                     top: "50%",
// // //                                     left: "50%",
// // //                                     transform: "translate(-50%, -50%)",
// // //                                     width: { xs: 380, md: 520 },
// // //                                     height: { xs: 380, md: 520 },
// // //                                     borderRadius: "50%",
// // //                                     background:
// // //                                         "radial-gradient(closest-side, rgba(255,255,255,0.12), rgba(255,255,255,0))",
// // //                                     pointerEvents: "none",
// // //                                 }}
// // //                             />
// // //                         </Box>
// // //                     </Grid>
// // //                 </Grid>
// // //             </Container>

// // //             {/* Wave-divider nederst */}
// // //             <Box
// // //                 aria-hidden
// // //                 sx={{
// // //                     position: "absolute",
// // //                     bottom: -1,
// // //                     left: 0,
// // //                     width: "100%",
// // //                     lineHeight: 0,
// // //                     zIndex: 2,
// // //                 }}
// // //             >
// // //                 <svg
// // //                     viewBox="0 0 1440 90"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                     preserveAspectRatio="none"
// // //                     style={{ display: "block", width: "100%", height: 90 }}
// // //                 >
// // //                     <path
// // //                         d="M0,32 C240,88 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
// // //                         fill={theme.palette.background.default}
// // //                         fillOpacity="1"
// // //                     />
// // //                 </svg>
// // //             </Box>
// // //         </Box>
// // //     );
// // // }

// // // export default HeroSection;

// // import {
// //     Box,
// //     Container,
// //     Typography,
// //     Button,
// //     Grid,
// //     Chip,
// //     Stack,
// //     useTheme,
// // } from "@mui/material";
// // import { useInView } from "react-intersection-observer";
// // import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// // import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// // import gartnerWorkingTwo from "../../assets/privateImages/uteområde-formklippet.jpg";
// // import uteområdeFormklippet from "../../assets/privateImages/innvendig-kjøkken.jpg";
// // import houseGarden from "../../assets/house-garden.png";

// // const backgroundUrl = houseGarden;

// // function HeroSection() {
// //     const theme = useTheme();
// //     const { ref: heroRef, inView: heroInView } = useInView({
// //         triggerOnce: true,
// //         threshold: 0.1,
// //     });

// //     return (
// //         <Box
// //             ref={heroRef}
// //             sx={{
// //                 position: "relative",
// //                 minHeight: "100vh",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 overflow: "hidden",
// //                 pb: { xs: 8, md: 10 },
// //                 backgroundColor: theme.palette.success.dark,
// //                 "&::before": {
// //                     content: '""',
// //                     position: "absolute",
// //                     inset: 0,
// //                     backgroundImage: `url(${backgroundUrl})`,
// //                     backgroundSize: "cover",
// //                     backgroundPosition: "center",
// //                     filter: "saturate(1.1) contrast(0.95)",
// //                     opacity: 0.35,
// //                     zIndex: 0,
// //                 },
// //                 "&::after": {
// //                     content: '""',
// //                     position: "absolute",
// //                     inset: 0,
// //                     background: `radial-gradient(80% 60% at 15% 20%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.0) 75%),
// //                        radial-gradient(70% 60% at 85% 80%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0) 80%),
// //                        linear-gradient(135deg, ${theme.palette.success.dark}55 0%, ${theme.palette.success.main}33 100%)`,
// //                     zIndex: 1,
// //                 },
// //             }}
// //         >
// //             {/* Dekorstripe */}
// //             <Box
// //                 aria-hidden
// //                 sx={{
// //                     position: "absolute",
// //                     top: "-20%",
// //                     right: "-15%",
// //                     width: "70vw",
// //                     height: "70vh",
// //                     transform: "rotate(-18deg)",
// //                     background:
// //                         "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
// //                     filter: "blur(2px)",
// //                     borderRadius: 8,
// //                     zIndex: 1,
// //                 }}
// //             />

// //             <Container
// //                 maxWidth="lg"
// //                 sx={{
// //                     position: "relative",
// //                     zIndex: 2,
// //                     pt: { xs: 12, sm: 14 },
// //                 }}
// //             >
// //                 <Grid container spacing={6} alignItems="center">
// //                     {/* Venstre side */}
// //                     <Grid item xs={12} md={6}>
// //                         <Box
// //                             sx={{
// //                                 color: "#fff",
// //                                 backdropFilter: "blur(10px)",
// //                                 backgroundColor: "rgba(20,40,20,0.35)",
// //                                 border: "1px solid rgba(255,255,255,0.15)",
// //                                 borderRadius: 3,
// //                                 p: { xs: 3, sm: 5 },
// //                                 boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
// //                             }}
// //                         >
// //                             <Typography
// //                                 variant="overline"
// //                                 sx={{
// //                                     letterSpacing: 2,
// //                                     fontWeight: 800,
// //                                     color: "rgba(255,255,255,0.95)",
// //                                 }}
// //                             >
// //                                 Driftli AS
// //                             </Typography>

// //                             <Typography
// //                                 variant="h1"
// //                                 component="h1"
// //                                 sx={{
// //                                     mt: 1,
// //                                     fontWeight: 900,
// //                                     lineHeight: 1.05,
// //                                     letterSpacing: "-0.02em",
// //                                     fontSize: {
// //                                         xs: "2.2rem",
// //                                         sm: "3rem",
// //                                         md: "3.4rem",
// //                                     },
// //                                 }}
// //                             >
// //                                 Fordelene starter med oss
// //                             </Typography>

// //                             <Typography
// //                                 variant="body1"
// //                                 sx={{
// //                                     mt: 2,
// //                                     opacity: 0.95,
// //                                     fontSize: { xs: "1.05rem", sm: "1.15rem" },
// //                                 }}
// //                             >
// //                                 Driftli startet med en enkel ide, å gi
// //                                 privatpersoner og bedrifter tilgang til fordeler
// //                                 de ellers ikke ville fått alene. Vi forhandler
// //                                 frem profesjonelle rammeavtaler med håndverkere,
// //                                 bilverksteder og fritidstilbydere og samler alt
// //                                 i ett oversiktlig vedlikeholdsabonnement. Som
// //                                 medlem får du kvalitetssikrede leverandører,
// //                                 forutsigbare priser og frihet fra tidskrevende
// //                                 tilbudsrunder. Vi samler pålitelige leverandører
// //                                 og profesjonelle avtaler i ett system slik at du
// //                                 sparer tid, penger og bekymringer.
// //                             </Typography>

// //                             {/* Service chips */}
// //                             <Stack
// //                                 direction="row"
// //                                 spacing={1.5} // 🔹 gir horisontal avstand mellom chips
// //                                 rowGap={1.5} // 🔹 gir vertikal avstand hvis de brytes til ny linje
// //                                 sx={{ mt: 3, flexWrap: "wrap" }}
// //                             >
// //                                 {[
// //                                     "Tømrertjenester",
// //                                     "Eletriker",
// //                                     "Rørlegger",
// //                                     "Bilmekaniker",
// //                                     "Blikenslager",
// //                                     "Fasade og takvask",
// //                                     "Renhold",
// //                                     "Gartner",
// //                                 ].map((label) => (
// //                                     <Chip
// //                                         key={label}
// //                                         label={label}
// //                                         variant="outlined"
// //                                         sx={{
// //                                             color: "#fff",
// //                                             borderColor:
// //                                                 "rgba(255,255,255,0.35)",
// //                                             backdropFilter: "blur(6px)",
// //                                             fontWeight: 500,
// //                                             px: 0.5,
// //                                         }}
// //                                     />
// //                                 ))}
// //                             </Stack>

// //                             <Stack
// //                                 direction="row"
// //                                 spacing={2}
// //                                 sx={{ mt: 3, flexWrap: "wrap" }}
// //                             >
// //                                 <Button
// //                                     variant="contained"
// //                                     size="large"
// //                                     href="tel:+4793220988" // 🔹 Direkte ringe-link
// //                                     endIcon={<ArrowForwardIcon />}
// //                                     sx={{
// //                                         borderRadius: 2,
// //                                         px: 3,
// //                                         py: 1.5,
// //                                         fontWeight: 800,
// //                                         textTransform: "none",
// //                                         background:
// //                                             "linear-gradient(90deg, #66bb6a, #43a047 60%, #2e7d32)",
// //                                         boxShadow:
// //                                             "0 12px 26px rgba(67,160,71,0.45)",
// //                                         "&:hover": {
// //                                             transform: "translateY(-1px)",
// //                                             boxShadow:
// //                                                 "0 16px 34px rgba(67,160,71,0.55)",
// //                                         },
// //                                         transition: "all .25s ease",
// //                                     }}
// //                                 >
// //                                     Kontakt oss
// //                                 </Button>

// //                                 <Button
// //                                     variant="outlined"
// //                                     size="large"
// //                                     startIcon={<SearchOutlinedIcon />}
// //                                     href="/about"
// //                                     sx={{
// //                                         borderRadius: 2,
// //                                         px: 3,
// //                                         py: 1.5,
// //                                         fontWeight: 800,
// //                                         textTransform: "none",
// //                                         color: "#fff",
// //                                         borderColor: "rgba(255,255,255,0.6)",
// //                                         backgroundColor:
// //                                             "rgba(255,255,255,0.08)",
// //                                         "&:hover": {
// //                                             borderColor: "#fff",
// //                                             backgroundColor:
// //                                                 "rgba(255,255,255,0.16)",
// //                                             transform: "translateY(-1px)",
// //                                         },
// //                                         transition: "all .25s ease",
// //                                     }}
// //                                 >
// //                                     Se tjenester
// //                                 </Button>
// //                             </Stack>
// //                         </Box>
// //                     </Grid>

// //                     {/* Høyre side – staggered images */}
// //                     <Grid item xs={12} md={6}>
// //                         <Box
// //                             sx={{
// //                                 position: "relative",
// //                                 height: { xs: 380, sm: 520, md: 600 },
// //                             }}
// //                         >
// //                             <Box
// //                                 sx={{
// //                                     position: "absolute",
// //                                     top: { xs: "6%", md: "8%" },
// //                                     right: { xs: "2%", md: "10%" },
// //                                     width: { xs: "72%", md: "58%" },
// //                                     borderRadius: 3,
// //                                     overflow: "hidden",
// //                                     transform: "rotate(-4deg)",
// //                                     boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
// //                                     border: "1px solid rgba(255,255,255,0.15)",
// //                                 }}
// //                             >
// //                                 <Box
// //                                     component="img"
// //                                     src={gartnerWorkingTwo}
// //                                     alt="Uteområde – team i arbeid"
// //                                     loading="eager"
// //                                     sx={{
// //                                         width: "100%",
// //                                         height: "auto",
// //                                         display: "block",
// //                                     }}
// //                                 />
// //                             </Box>

// //                             <Box
// //                                 sx={{
// //                                     position: "absolute",
// //                                     bottom: { xs: "4%", md: "8%" },
// //                                     left: { xs: "3%", md: "6%" },
// //                                     width: { xs: "86%", md: "68%" },
// //                                     borderRadius: 4,
// //                                     overflow: "hidden",
// //                                     transform: "rotate(3deg)",
// //                                     boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
// //                                     border: "1px solid rgba(255,255,255,0.18)",
// //                                 }}
// //                             >
// //                                 <Box
// //                                     component="img"
// //                                     src={uteområdeFormklippet}
// //                                     alt="Byggservice – kontroll og kvalitet"
// //                                     loading="lazy"
// //                                     sx={{
// //                                         width: "100%",
// //                                         height: "auto",
// //                                         display: "block",
// //                                     }}
// //                                 />
// //                             </Box>

// //                             <Box
// //                                 aria-hidden
// //                                 sx={{
// //                                     position: "absolute",
// //                                     top: "50%",
// //                                     left: "50%",
// //                                     transform: "translate(-50%, -50%)",
// //                                     width: { xs: 380, md: 520 },
// //                                     height: { xs: 380, md: 520 },
// //                                     borderRadius: "50%",
// //                                     background:
// //                                         "radial-gradient(closest-side, rgba(255,255,255,0.12), rgba(255,255,255,0))",
// //                                     pointerEvents: "none",
// //                                 }}
// //                             />
// //                         </Box>
// //                     </Grid>
// //                 </Grid>
// //             </Container>

// //             {/* Wave-divider nederst */}
// //             <Box
// //                 aria-hidden
// //                 sx={{
// //                     position: "absolute",
// //                     bottom: -1,
// //                     left: 0,
// //                     width: "100%",
// //                     lineHeight: 0,
// //                     zIndex: 2,
// //                 }}
// //             >
// //                 <svg
// //                     viewBox="0 0 1440 90"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     preserveAspectRatio="none"
// //                     style={{ display: "block", width: "100%", height: 90 }}
// //                 >
// //                     <path
// //                         d="M0,32 C240,88 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
// //                         fill={theme.palette.background.default}
// //                         fillOpacity="1"
// //                     />
// //                 </svg>
// //             </Box>
// //         </Box>
// //     );
// // }

// // export default HeroSection;

// // HeroSection.jsx
// import {
//     Box,
//     Container,
//     Typography,
//     Button,
//     Grid,
//     Chip,
//     Stack,
//     useTheme,
// } from "@mui/material";
// import { alpha } from "@mui/material/styles";
// import { useInView } from "react-intersection-observer";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// import gartnerWorkingTwo from "../../assets/privateImages/uteområde-formklippet.jpg";
// import uteområdeFormklippet from "../../assets/privateImages/innvendig-kjøkken.jpg";
// import houseGarden from "../../assets/house-garden.png";

// const backgroundUrl = houseGarden;

// function HeroSection() {
//     const theme = useTheme();
//     const { ref: heroRef } = useInView({ triggerOnce: true, threshold: 0.1 });

//     return (
//         <Box
//             ref={heroRef}
//             sx={{
//                 position: "relative",
//                 minHeight: "100vh",
//                 display: "flex",
//                 alignItems: "center",
//                 overflow: "hidden",
//                 pb: { xs: 8, md: 10 },
//                 // Mørk base fra theme
//                 backgroundColor: theme.palette.primary.dark,
//                 "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     inset: 0,
//                     backgroundImage: `url(${backgroundUrl})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     filter: "saturate(1.05) contrast(0.95)",
//                     opacity: 0.35,
//                     zIndex: 0,
//                 },
//                 "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     inset: 0,
//                     // Overlays fra theme + alpha
//                     background: `radial-gradient(80% 60% at 15% 20%, ${alpha(
//                         theme.palette.common.black,
//                         0.45
//                     )} 0%, ${alpha(
//                         theme.palette.common.black,
//                         0.2
//                     )} 35%, ${alpha(theme.palette.common.black, 0)} 75%),
//                      radial-gradient(70% 60% at 85% 80%, ${alpha(
//                          theme.palette.common.black,
//                          0.35
//                      )} 0%, ${alpha(
//                         theme.palette.common.black,
//                         0.1
//                     )} 45%, ${alpha(theme.palette.common.black, 0)} 80%),
//                      linear-gradient(135deg, ${alpha(
//                          theme.palette.primary.dark,
//                          0.33
//                      )} 0%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
//                     zIndex: 1,
//                 },
//             }}
//         >
//             {/* Dekorstripe */}
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     top: "-20%",
//                     right: "-15%",
//                     width: "70vw",
//                     height: "70vh",
//                     transform: "rotate(-18deg)",
//                     background: `linear-gradient(90deg, ${alpha(
//                         theme.palette.common.white,
//                         0.12
//                     )}, ${alpha(theme.palette.common.white, 0.02)})`,
//                     filter: "blur(2px)",
//                     borderRadius: 8,
//                     zIndex: 1,
//                 }}
//             />

//             <Container
//                 maxWidth="lg"
//                 sx={{
//                     position: "relative",
//                     zIndex: 2,
//                     pt: { xs: 12, sm: 14 },
//                 }}
//             >
//                 <Grid container spacing={6} alignItems="center">
//                     {/* Venstre side */}
//                     <Grid item xs={12} md={6}>
//                         <Box
//                             sx={{
//                                 color: theme.palette.common.white,
//                                 backdropFilter: "blur(10px)",
//                                 backgroundColor: alpha(
//                                     theme.palette.primary.dark,
//                                     0.35
//                                 ),
//                                 border: `1px solid ${alpha(
//                                     theme.palette.common.white,
//                                     0.15
//                                 )}`,
//                                 borderRadius: 3,
//                                 p: { xs: 3, sm: 5 },
//                                 boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
//                             }}
//                         >
//                             <Typography
//                                 variant="h1"
//                                 component="h1"
//                                 sx={{
//                                     mt: 1,
//                                     fontWeight: 900,
//                                     lineHeight: 1.05,
//                                     letterSpacing: "-0.02em",
//                                     color: theme.palette.common.white,
//                                     fontSize: {
//                                         xs: "2.2rem",
//                                         sm: "3rem",
//                                         md: "3.4rem",
//                                     },
//                                 }}
//                             >
//                                 Fordelene starter med oss
//                             </Typography>

//                             <Typography
//                                 variant="body1"
//                                 sx={{
//                                     mt: 2,
//                                     color: alpha(
//                                         theme.palette.common.white,
//                                         0.95
//                                     ),
//                                     fontSize: { xs: "1.05rem", sm: "1.15rem" },
//                                 }}
//                             >
//                                 Driftli startet med en enkel ide, å gi
//                                 privatpersoner og bedrifter tilgang til fordeler
//                                 de ellers ikke ville fått alene. Vi forhandler
//                                 frem profesjonelle rammeavtaler med håndverkere,
//                                 bilverksteder og fritidstilbydere og samler alt
//                                 i ett oversiktlig vedlikeholdsabonnement. Som
//                                 medlem får du kvalitetssikrede leverandører,
//                                 forutsigbare priser og frihet fra tidskrevende
//                                 tilbudsrunder. Vi samler pålitelige leverandører
//                                 og profesjonelle avtaler i ett system slik at du
//                                 sparer tid, penger og bekymringer.
//                             </Typography>

//                             {/* Service chips */}
//                             <Stack
//                                 direction="row"
//                                 spacing={1.5}
//                                 rowGap={1.5}
//                                 sx={{ mt: 3, flexWrap: "wrap" }}
//                             >
//                                 {[
//                                     "Tømrertjenester",
//                                     "Elektriker",
//                                     "Rørlegger",
//                                     "Bilmekaniker",
//                                     "Blikkenslager",
//                                     "Fasade og takvask",
//                                     "Renhold",
//                                     "Gartner",
//                                 ].map((label) => (
//                                     <Chip
//                                         key={label}
//                                         label={label}
//                                         variant="outlined"
//                                         sx={{
//                                             color: theme.palette.common.white,
//                                             borderColor: alpha(
//                                                 theme.palette.common.white,
//                                                 0.35
//                                             ),
//                                             backdropFilter: "blur(6px)",
//                                             fontWeight: 500,
//                                             px: 0.5,
//                                         }}
//                                     />
//                                 ))}
//                             </Stack>

//                             <Stack
//                                 direction="row"
//                                 spacing={2}
//                                 sx={{ mt: 3, flexWrap: "wrap" }}
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
//                         </Box>
//                     </Grid>

//                     {/* Høyre side – staggered images */}
//                     <Grid item xs={12} md={6}>
//                         <Box
//                             sx={{
//                                 position: "relative",
//                                 height: { xs: 380, sm: 520, md: 600 },
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     position: "absolute",
//                                     top: { xs: "6%", md: "8%" },
//                                     right: { xs: "2%", md: "10%" },
//                                     width: { xs: "72%", md: "58%" },
//                                     borderRadius: 3,
//                                     overflow: "hidden",
//                                     transform: "rotate(-4deg)",
//                                     boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
//                                     border: `1px solid ${alpha(
//                                         theme.palette.common.white,
//                                         0.15
//                                     )}`,
//                                 }}
//                             >
//                                 <Box
//                                     component="img"
//                                     src={gartnerWorkingTwo}
//                                     alt="Uteområde – team i arbeid"
//                                     loading="eager"
//                                     sx={{
//                                         width: "100%",
//                                         height: "auto",
//                                         display: "block",
//                                     }}
//                                 />
//                             </Box>

//                             <Box
//                                 sx={{
//                                     position: "absolute",
//                                     bottom: { xs: "4%", md: "8%" },
//                                     left: { xs: "3%", md: "6%" },
//                                     width: { xs: "86%", md: "68%" },
//                                     borderRadius: 4,
//                                     overflow: "hidden",
//                                     transform: "rotate(3deg)",
//                                     boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
//                                     border: `1px solid ${alpha(
//                                         theme.palette.common.white,
//                                         0.18
//                                     )}`,
//                                 }}
//                             >
//                                 <Box
//                                     component="img"
//                                     src={uteområdeFormklippet}
//                                     alt="Byggservice – kontroll og kvalitet"
//                                     loading="lazy"
//                                     sx={{
//                                         width: "100%",
//                                         height: "auto",
//                                         display: "block",
//                                     }}
//                                 />
//                             </Box>

//                             <Box
//                                 aria-hidden
//                                 sx={{
//                                     position: "absolute",
//                                     top: "50%",
//                                     left: "50%",
//                                     transform: "translate(-50%, -50%)",
//                                     width: { xs: 380, md: 520 },
//                                     height: { xs: 380, md: 520 },
//                                     borderRadius: "50%",
//                                     background: `radial-gradient(closest-side, ${alpha(
//                                         theme.palette.common.white,
//                                         0.12
//                                     )}, ${alpha(
//                                         theme.palette.common.white,
//                                         0
//                                     )})`,
//                                     pointerEvents: "none",
//                                 }}
//                             />
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>

//             {/* Wave-divider nederst */}
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     bottom: -1,
//                     left: 0,
//                     width: "100%",
//                     lineHeight: 0,
//                     zIndex: 2,
//                 }}
//             >
//                 <svg
//                     viewBox="0 0 1440 90"
//                     xmlns="http://www.w3.org/2000/svg"
//                     preserveAspectRatio="none"
//                     style={{ display: "block", width: "100%", height: 90 }}
//                 >
//                     <path
//                         d="M0,32 C240,88 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
//                         fill={theme.palette.background.default}
//                         fillOpacity="1"
//                     />
//                 </svg>
//             </Box>
//         </Box>
//     );
// }

// export default HeroSection;

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

import gartnerWorkingTwo from "../../assets/privateImages/uteområde-formklippet.jpg";
import uteområdeFormklippet from "../../assets/privateImages/innvendig-kjøkken.jpg";
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
                minHeight: "100vh",
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
            {/* Dekorstripe */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    top: "-20%",
                    right: "-15%",
                    width: "70vw",
                    height: "70vh",
                    transform: "rotate(-18deg)",
                    background: `linear-gradient(90deg, ${alpha(
                        theme.palette.common.white,
                        0.12
                    )}, ${alpha(theme.palette.common.white, 0.02)})`,
                    filter: "blur(2px)",
                    borderRadius: 8,
                    zIndex: 1,
                }}
            />

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    pt: { xs: 12, sm: 14 },
                }}
            >
                <Grid container spacing={6} alignItems="center">
                    {/* Venstre side */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                color: theme.palette.common.white,
                                backdropFilter: "blur(10px)",
                                backgroundColor: alpha(
                                    theme.palette.primary.dark,
                                    0.35
                                ),
                                border: `1px solid ${alpha(
                                    theme.palette.common.white,
                                    0.15
                                )}`,
                                borderRadius: 3,
                                p: { xs: 3, sm: 5 },
                                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                            }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    mt: 1,
                                    fontWeight: 900,
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.02em",
                                    color: theme.palette.common.white,
                                    fontSize: {
                                        xs: "2.2rem",
                                        sm: "3rem",
                                        md: "3.4rem",
                                    },
                                }}
                            >
                                Fordelene starter med oss
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 2,
                                    color: alpha(
                                        theme.palette.common.white,
                                        0.95
                                    ),
                                    fontSize: { xs: "1.05rem", sm: "1.15rem" },
                                }}
                            >
                                Driftli startet med en enkel ide, å gi
                                privatpersoner og bedrifter tilgang til fordeler
                                de ellers ikke ville fått alene. Vi forhandler
                                frem profesjonelle rammeavtaler med håndverkere,
                                bilverksteder og fritidstilbydere og samler alt
                                i ett oversiktlig vedlikeholdsabonnement. Som
                                medlem får du kvalitetssikrede leverandører,
                                forutsigbare priser og frihet fra tidskrevende
                                tilbudsrunder. Vi samler pålitelige leverandører
                                og profesjonelle avtaler i ett system slik at du
                                sparer tid, penger og bekymringer.
                            </Typography>

                            {/* Service chips */}
                            <Stack
                                direction="row"
                                spacing={1.5}
                                rowGap={1.5}
                                sx={{ mt: 3, flexWrap: "wrap" }}
                            >
                                {[
                                    "Tømrertjenester",
                                    "Elektriker",
                                    "Rørlegger",
                                    "Bilmekaniker",
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
                                            backdropFilter: "blur(6px)",
                                            fontWeight: 500,
                                            px: 0.5,
                                        }}
                                    />
                                ))}
                            </Stack>

                            {/* CTA-knapper */}
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 2, sm: 2.5 }}
                                sx={{
                                    mt: 3,
                                    flexWrap: "wrap",
                                    alignItems: { xs: "stretch", sm: "center" },
                                    "& > *": {
                                        width: { xs: "100%", sm: "auto" },
                                    },
                                }}
                            >
                                {/* Gull-CTA */}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="tel:+4793220988"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
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
                                        transition: "all .25s ease",
                                    }}
                                >
                                    Kontakt oss
                                </Button>

                                {/* Outline på mørk bakgrunn */}
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<SearchOutlinedIcon />}
                                    href="/about"
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
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
                                        "&:hover": {
                                            borderColor:
                                                theme.palette.common.white,
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

                    {/* Høyre side – staggered images */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                height: { xs: 380, sm: 520, md: 600 },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: "6%", md: "8%" },
                                    right: { xs: "2%", md: "10%" },
                                    width: { xs: "72%", md: "58%" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    transform: "rotate(-4deg)",
                                    boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
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
                                    loading="eager"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: { xs: "4%", md: "8%" },
                                    left: { xs: "3%", md: "6%" },
                                    width: { xs: "86%", md: "68%" },
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    transform: "rotate(3deg)",
                                    boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
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
                                    loading="lazy"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </Box>

                            <Box
                                aria-hidden
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: { xs: 380, md: 520 },
                                    height: { xs: 380, md: 520 },
                                    borderRadius: "50%",
                                    background: `radial-gradient(closest-side, ${alpha(
                                        theme.palette.common.white,
                                        0.12
                                    )}, ${alpha(
                                        theme.palette.common.white,
                                        0
                                    )})`,
                                    pointerEvents: "none",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Wave-divider nederst */}
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
                    style={{ display: "block", width: "100%", height: 90 }}
                >
                    <path
                        d="M0,32 C240,88 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
                        fill={theme.palette.background.default}
                        fillOpacity="1"
                    />
                </svg>
            </Box>
        </Box>
    );
}

export default HeroSection;
