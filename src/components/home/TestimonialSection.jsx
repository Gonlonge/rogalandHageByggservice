// // // import {
// // //     Box,
// // //     Container,
// // //     Typography,
// // //     Paper,
// // //     Avatar,
// // //     useTheme,
// // //     Grid,
// // //     Stack,
// // //     Chip,
// // // } from "@mui/material";
// // // import { useInView } from "react-intersection-observer";
// // // import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

// // // const customers = [
// // //     {
// // //         id: 1,
// // //         company: "Borettslaget Vestre Hage (Stavanger)",
// // //         logo: null, // bruk evt. lokal logo
// // //         contact: "Anne L., styreleder",
// // //         usage: "Fast avtale på plenklipp, hekkeklipp og rens av takrenner. Sesongrydding vår/høst.",
// // //         tags: ["Plen", "Hekk", "Takrenner", "Sesong"],
// // //     },
// // //     {
// // //         id: 2,
// // //         company: "Smeaheia Barnehage (Sandnes)",
// // //         logo: null,
// // //         contact: "Pål R., styrer",
// // //         usage: "Uteområde-vedlikehold: plen, busker, sandkassebytte og sikkerhetssjekk av lekeområder.",
// // //         tags: ["Uteområde", "Busker", "Sandkasse", "Trygghet"],
// // //     },
// // //     {
// // //         id: 3,
// // //         company: "Forus Næringspark Drift",
// // //         logo: null,
// // //         contact: "Mona H., driftsleder",
// // //         usage: "Vaktmestertjenester, brøyting/strøing og løpende vedlikehold av fellesarealer.",
// // //         tags: ["Vaktmester", "Brøyting", "Fellesareal"],
// // //     },
// // // ];

// // // function TestimonialSection() {
// // //     const theme = useTheme();
// // //     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

// // //     return (
// // //         <Box
// // //             sx={{
// // //                 py: { xs: 8, md: 12 },
// // //                 backgroundColor: theme.palette.grey[50],
// // //                 position: "relative",
// // //                 overflow: "hidden",
// // //                 "&::before": {
// // //                     content: '""',
// // //                     position: "absolute",
// // //                     inset: 0,
// // //                     background:
// // //                         "radial-gradient(600px 300px at 12% 18%, rgba(76,175,80,0.08), transparent 60%), radial-gradient(520px 260px at 88% 70%, rgba(0,160,176,0.06), transparent 60%)",
// // //                 },
// // //             }}
// // //         >
// // //             <Container maxWidth="lg">
// // //                 <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
// // //                     <Typography
// // //                         variant="overline"
// // //                         sx={{
// // //                             letterSpacing: 2,
// // //                             fontWeight: 700,
// // //                             color: theme.palette.primary.main,
// // //                         }}
// // //                     >
// // //                         KUNDECASE
// // //                     </Typography>
// // //                     <Typography
// // //                         variant="h2"
// // //                         component="h2"
// // //                         sx={{ fontWeight: 800, mb: 2 }}
// // //                     >
// // //                         Våre kunder i Rogaland
// // //                     </Typography>
// // //                     <Typography
// // //                         variant="h6"
// // //                         sx={{
// // //                             maxWidth: 760,
// // //                             mx: "auto",
// // //                             color: theme.palette.text.secondary,
// // //                         }}
// // //                     >
// // //                         Borettslag, barnehager og næringsbygg får forutsigbart
// // //                         vedlikehold ryddig levert.
// // //                     </Typography>
// // //                 </Box>

// // //                 <Grid container spacing={4} ref={ref}>
// // //                     {customers.map((c, idx) => (
// // //                         <Grid
// // //                             item
// // //                             xs={12}
// // //                             md={4}
// // //                             key={c.id}
// // //                             className={inView ? "fade-up" : ""}
// // //                             sx={{ animationDelay: `${0.15 + idx * 0.1}s` }}
// // //                         >
// // //                             <Paper
// // //                                 elevation={0}
// // //                                 sx={{
// // //                                     position: "relative",
// // //                                     p: 3,
// // //                                     height: "100%",
// // //                                     borderRadius: 4,
// // //                                     backdropFilter: "blur(2px)",
// // //                                     background:
// // //                                         theme.palette.mode === "light"
// // //                                             ? "linear-gradient(180deg, #fff, #fafafa)"
// // //                                             : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
// // //                                     border: "1px solid rgba(0,0,0,0.06)",
// // //                                     transition:
// // //                                         "transform .25s ease, box-shadow .25s ease",
// // //                                     "&:hover": {
// // //                                         transform: "translateY(-4px)",
// // //                                         boxShadow:
// // //                                             theme.palette.mode === "light"
// // //                                                 ? "0 12px 28px rgba(0,0,0,0.08)"
// // //                                                 : "0 12px 28px rgba(0,0,0,0.35)",
// // //                                     },
// // //                                     // venstre aksentlinje
// // //                                     "&::before": {
// // //                                         content: '""',
// // //                                         position: "absolute",
// // //                                         left: 10,
// // //                                         top: 12,
// // //                                         bottom: 12,
// // //                                         width: 4,
// // //                                         borderRadius: 2,
// // //                                         opacity: 0.9,
// // //                                     },
// // //                                 }}
// // //                             >
// // //                                 {/* Dekorativt quote-ikon */}
// // //                                 <Box
// // //                                     aria-hidden
// // //                                     sx={{
// // //                                         position: "absolute",
// // //                                         right: 12,
// // //                                         top: 12,
// // //                                         color: "rgba(0,0,0,0.08)",
// // //                                         fontSize: 0,
// // //                                     }}
// // //                                 >
// // //                                     <FormatQuoteRoundedIcon
// // //                                         sx={{ fontSize: 36 }}
// // //                                     />
// // //                                 </Box>

// // //                                 {/* Header */}
// // //                                 <Box
// // //                                     sx={{
// // //                                         display: "flex",
// // //                                         alignItems: "center",
// // //                                         mb: 2.5,
// // //                                         pl: 3,
// // //                                     }}
// // //                                 >
// // //                                     {c.logo ? (
// // //                                         <Avatar
// // //                                             src={c.logo}
// // //                                             alt={c.company}
// // //                                             variant="rounded"
// // //                                             sx={{
// // //                                                 width: 56,
// // //                                                 height: 56,
// // //                                                 mr: 2,
// // //                                             }}
// // //                                         />
// // //                                     ) : (
// // //                                         <Avatar
// // //                                             variant="rounded"
// // //                                             sx={{
// // //                                                 width: 56,
// // //                                                 height: 56,
// // //                                                 mr: 2,
// // //                                                 fontWeight: 700,
// // //                                                 bgcolor: `${theme.palette.secondary.contrastText}`,
// // //                                                 color: theme.palette.primary
// // //                                                     .main,
// // //                                                 border: `1px solid ${theme.palette.primary.main}40`,
// // //                                             }}
// // //                                         >
// // //                                             {c.company
// // //                                                 .split(" ")
// // //                                                 .map((w) => w[0])
// // //                                                 .filter(Boolean)
// // //                                                 .slice(0, 2)
// // //                                                 .join("")
// // //                                                 .toUpperCase()}
// // //                                         </Avatar>
// // //                                     )}
// // //                                     <Box>
// // //                                         <Typography
// // //                                             variant="subtitle1"
// // //                                             fontWeight={700}
// // //                                             sx={{ lineHeight: 1.2 }}
// // //                                         >
// // //                                             {c.company}
// // //                                         </Typography>
// // //                                         <Typography
// // //                                             variant="body2"
// // //                                             color="text.secondary"
// // //                                         >
// // //                                             {c.contact}
// // //                                         </Typography>
// // //                                     </Box>
// // //                                 </Box>

// // //                                 {/* Body */}
// // //                                 <Typography
// // //                                     variant="body1"
// // //                                     sx={{
// // //                                         color: theme.palette.text.primary,
// // //                                         pl: 3,
// // //                                     }}
// // //                                 >
// // //                                     {c.usage}
// // //                                 </Typography>

// // //                                 {/* Tags */}
// // //                                 {c.tags?.length ? (
// // //                                     <Stack
// // //                                         direction="row"
// // //                                         spacing={1}
// // //                                         sx={{ mt: 2, pl: 3, flexWrap: "wrap" }}
// // //                                     >
// // //                                         {c.tags.map((t) => (
// // //                                             <Chip
// // //                                                 key={t}
// // //                                                 label={t}
// // //                                                 size="small"
// // //                                                 sx={{
// // //                                                     height: 24,
// // //                                                     borderRadius: "999px",
// // //                                                     color: theme.palette.primary
// // //                                                         .main,
// // //                                                     bgcolor: `${theme.palette.primary.main}12`,
// // //                                                     border: `1px solid ${theme.palette.primary.main}26`,
// // //                                                     mr: 1,
// // //                                                     mb: 1,
// // //                                                 }}
// // //                                             />
// // //                                         ))}
// // //                                     </Stack>
// // //                                 ) : null}
// // //                             </Paper>
// // //                         </Grid>
// // //                     ))}
// // //                 </Grid>
// // //             </Container>

// // //             {/* animasjon */}
// // //             <style>{`
// // //         @keyframes fadeUp {
// // //           from { opacity: 0; transform: translateY(12px); }
// // //           to   { opacity: 1; transform: translateY(0); }
// // //         }
// // //         .fade-up { animation: fadeUp .5s ease forwards; }
// // //       `}</style>
// // //         </Box>
// // //     );
// // // }

// // // export default TestimonialSection;

// // import {
// //     Box,
// //     Container,
// //     Typography,
// //     Paper,
// //     Avatar,
// //     useTheme,
// //     Grid,
// //     Stack,
// //     Chip,
// //     Rating,
// // } from "@mui/material";
// // import { useInView } from "react-intersection-observer";
// // import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
// // import StarRoundedIcon from "@mui/icons-material/StarRounded";

// // const customers = [
// //     {
// //         id: 1,
// //         company: "Barbro",
// //         logo: null,
// //         contact: "Hemmestveitbakken 56, 4021 Stavanger",
// //         usage: "Gravearbeid/planting av hekk. Hyggelige, kompetente og effektive unge menn. Kommer til å kontakte firmaet igjen for oppdrag til våren.",
// //         tags: ["Privatkunde", "Hekk", "Anmeldelse"],
// //     },
// //     {
// //         id: 2,
// //         company: "Mathias Hjalmar",
// //         logo: null,
// //         contact: "Lokes Gate 5, 4330 Ålgård",
// //         usage: "Profesjonelle og detaljorienterte, anbefales.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 3,
// //         company: "Kenneth",
// //         logo: null,
// //         contact: "Bekkasinveien 23, 4318 Sandnes",
// //         usage: "Godt fornøyd med resultatet. God befaring og diskusjon rundt løsninger. Ryddig prosess, kjapp respons og prisoverslag som var lett å følge. Bruker gjerne tjenestene igjen.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 4,
// //         company: "Jostein Mindor",
// //         logo: null,
// //         contact: "Grasheibakken 1, 4034 Stavanger",
// //         usage: "God og hyggelig kommunikasjon. God kvalitet på arbeidet.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 5,
// //         company: "Tom Kristian",
// //         logo: null,
// //         contact: "Varabergkroken 1 B, 4051 Sola",
// //         usage: "Utført som avtalt! Tipp topp.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 6,
// //         company: "Asgeir",
// //         logo: null,
// //         contact: "Roald Amundsens veg 46, 4340 Bryne",
// //         usage: "Terrasse levert med høy kvalitet og øye for detaljer. Punktlige, profesjonelle og veldig hyggelige. Akkurat slik vi ønsket oss – til og med litt bedre! Anbefales.",
// //         tags: ["Privatkunde", "Terrasse", "Anmeldelse"],
// //     },
// //     {
// //         id: 7,
// //         company: "Linn",
// //         logo: null,
// //         contact: "Skarahødden 11–13, 4326 Sandnes",
// //         usage: "God service, flinke fagfolk og rask, enkel kommunikasjon. God innsikt i faget og gjennomtenkte løsninger. Jobben ble gjort effektivt – 10/10!",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 8,
// //         company: "Sondre",
// //         logo: null,
// //         contact: "Stølsbrotet 51, 4072 Randaberg",
// //         usage: "Hyggelig håndverker som møter opp til avtalt tid og leverer iht. ønsker. Kommer med gode innspill og anbefalinger. Profesjonell og tar seg tid til en prat.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 9,
// //         company: "Håvard",
// //         logo: null,
// //         contact: "Sandskjellveien 48, 4310 Hommersåk",
// //         usage: "Fint utført, gode råd underveis, åpen og lett kommunikasjon.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// //     {
// //         id: 10,
// //         company: "Birgit",
// //         logo: null,
// //         contact: "Gustav Vigelands vei 27, 4023 Stavanger",
// //         usage: "Helt topp. God informasjon og veiledning. Bra resultat.",
// //         tags: ["Privatkunde", "Anmeldelse"],
// //     },
// // ];

// // function TestimonialSection() {
// //     const theme = useTheme();
// //     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

// //     return (
// //         <Box
// //             sx={{
// //                 py: { xs: 8, md: 12 },
// //                 backgroundColor: theme.palette.grey[50],
// //                 position: "relative",
// //                 overflow: "hidden",
// //                 "&::before": {
// //                     content: '""',
// //                     position: "absolute",
// //                     inset: 0,
// //                     background:
// //                         "radial-gradient(600px 300px at 12% 18%, rgba(76,175,80,0.08), transparent 60%), radial-gradient(520px 260px at 88% 70%, rgba(0,160,176,0.06), transparent 60%)",
// //                 },
// //             }}
// //         >
// //             <Container maxWidth="lg">
// //                 <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
// //                     <Typography
// //                         variant="overline"
// //                         sx={{
// //                             letterSpacing: 2,
// //                             fontWeight: 700,
// //                             color: theme.palette.primary.main,
// //                         }}
// //                     >
// //                         KUNDECASE
// //                     </Typography>
// //                     <Typography
// //                         variant="h2"
// //                         component="h2"
// //                         sx={{ fontWeight: 800, mb: 2 }}
// //                     >
// //                         Våre kunder i Rogaland
// //                     </Typography>
// //                     <Typography
// //                         variant="h6"
// //                         sx={{
// //                             maxWidth: 760,
// //                             mx: "auto",
// //                             color: theme.palette.text.secondary,
// //                         }}
// //                     >
// //                         Ekte tilbakemeldinger fra privatkunder og borettslag –
// //                         fornøyde med kvalitet, service og kommunikasjon.
// //                     </Typography>
// //                 </Box>

// //                 <Grid container spacing={4} ref={ref}>
// //                     {customers.map((c, idx) => (
// //                         <Grid
// //                             item
// //                             xs={12}
// //                             md={4}
// //                             key={c.id}
// //                             className={inView ? "fade-up" : ""}
// //                             sx={{ animationDelay: `${0.15 + idx * 0.1}s` }}
// //                         >
// //                             <Paper
// //                                 elevation={0}
// //                                 sx={{
// //                                     position: "relative",
// //                                     p: 3,
// //                                     height: "100%",
// //                                     borderRadius: 4,
// //                                     backdropFilter: "blur(2px)",
// //                                     background:
// //                                         theme.palette.mode === "light"
// //                                             ? "linear-gradient(180deg, #fff, #fafafa)"
// //                                             : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
// //                                     border: "1px solid rgba(0,0,0,0.06)",
// //                                     transition:
// //                                         "transform .25s ease, box-shadow .25s ease",
// //                                     "&:hover": {
// //                                         transform: "translateY(-4px)",
// //                                         boxShadow:
// //                                             theme.palette.mode === "light"
// //                                                 ? "0 12px 28px rgba(0,0,0,0.08)"
// //                                                 : "0 12px 28px rgba(0,0,0,0.35)",
// //                                     },
// //                                 }}
// //                             >
// //                                 {/* Dekorativt quote-ikon */}
// //                                 <Box
// //                                     aria-hidden
// //                                     sx={{
// //                                         position: "absolute",
// //                                         right: 12,
// //                                         top: 12,
// //                                         color: "rgba(0,0,0,0.08)",
// //                                         fontSize: 0,
// //                                     }}
// //                                 >
// //                                     <FormatQuoteRoundedIcon
// //                                         sx={{ fontSize: 36 }}
// //                                     />
// //                                 </Box>

// //                                 {/* Header */}
// //                                 <Box
// //                                     sx={{
// //                                         display: "flex",
// //                                         alignItems: "center",
// //                                         mb: 2.5,
// //                                         pl: 3,
// //                                     }}
// //                                 >
// //                                     {c.logo ? (
// //                                         <Avatar
// //                                             src={c.logo}
// //                                             alt={c.company}
// //                                             variant="rounded"
// //                                             sx={{
// //                                                 width: 56,
// //                                                 height: 56,
// //                                                 mr: 2,
// //                                             }}
// //                                         />
// //                                     ) : (
// //                                         <Avatar
// //                                             variant="rounded"
// //                                             sx={{
// //                                                 width: 56,
// //                                                 height: 56,
// //                                                 mr: 2,
// //                                                 fontWeight: 700,
// //                                                 bgcolor: `${theme.palette.secondary.contrastText}`,
// //                                                 color: theme.palette.primary
// //                                                     .main,
// //                                                 border: `1px solid ${theme.palette.primary.main}40`,
// //                                             }}
// //                                         >
// //                                             {c.company
// //                                                 .split(" ")
// //                                                 .map((w) => w[0])
// //                                                 .filter(Boolean)
// //                                                 .slice(0, 2)
// //                                                 .join("")
// //                                                 .toUpperCase()}
// //                                         </Avatar>
// //                                     )}
// //                                     <Box>
// //                                         <Typography
// //                                             variant="subtitle1"
// //                                             fontWeight={700}
// //                                             sx={{ lineHeight: 1.2 }}
// //                                         >
// //                                             {c.company}
// //                                         </Typography>
// //                                         <Typography
// //                                             variant="body2"
// //                                             color="text.secondary"
// //                                         >
// //                                             {c.contact}
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>

// //                                 {/* Body */}
// //                                 <Typography
// //                                     variant="body1"
// //                                     sx={{
// //                                         color: theme.palette.text.primary,
// //                                         pl: 3,
// //                                         mb: 2,
// //                                     }}
// //                                 >
// //                                     {c.usage}
// //                                 </Typography>

// //                                 {/* 5-stjerners vurdering nederst */}
// //                                 <Box
// //                                     sx={{
// //                                         pl: 3,
// //                                         mt: "auto",
// //                                         display: "flex",
// //                                         alignItems: "center",
// //                                         gap: 1,
// //                                     }}
// //                                 >
// //                                     <Rating
// //                                         name={`rating-${c.id}`}
// //                                         value={5}
// //                                         readOnly
// //                                         size="small"
// //                                         precision={0.5}
// //                                         icon={
// //                                             <StarRoundedIcon fontSize="inherit" />
// //                                         }
// //                                         emptyIcon={
// //                                             <StarRoundedIcon fontSize="inherit" />
// //                                         }
// //                                         sx={{
// //                                             color: theme.palette.warning.main,
// //                                         }}
// //                                     />
// //                                     <Typography
// //                                         variant="caption"
// //                                         color="text.secondary"
// //                                         sx={{ fontWeight: 500 }}
// //                                     >
// //                                         5.0
// //                                     </Typography>
// //                                 </Box>

// //                                 {/* Tags */}
// //                                 {c.tags?.length ? (
// //                                     <Stack
// //                                         direction="row"
// //                                         spacing={1}
// //                                         sx={{ mt: 2, pl: 3, flexWrap: "wrap" }}
// //                                     >
// //                                         {c.tags.map((t) => (
// //                                             <Chip
// //                                                 key={t}
// //                                                 label={t}
// //                                                 size="small"
// //                                                 sx={{
// //                                                     height: 24,
// //                                                     borderRadius: "999px",
// //                                                     color: theme.palette.primary
// //                                                         .main,
// //                                                     bgcolor: `${theme.palette.primary.main}12`,
// //                                                     border: `1px solid ${theme.palette.primary.main}26`,
// //                                                     mr: 1,
// //                                                     mb: 1,
// //                                                 }}
// //                                             />
// //                                         ))}
// //                                     </Stack>
// //                                 ) : null}
// //                             </Paper>
// //                         </Grid>
// //                     ))}
// //                 </Grid>
// //             </Container>

// //             {/* animasjon */}
// //             <style>{`
// //         @keyframes fadeUp {
// //           from { opacity: 0; transform: translateY(12px); }
// //           to   { opacity: 1; transform: translateY(0); }
// //         }
// //         .fade-up { animation: fadeUp .5s ease forwards; }
// //       `}</style>
// //         </Box>
// //     );
// // }

// // export default TestimonialSection;
// import {
//     Box,
//     Container,
//     Typography,
//     Paper,
//     Avatar,
//     useTheme,
//     Stack,
//     Chip,
//     Rating,
//     Button,
// } from "@mui/material";
// import { useInView } from "react-intersection-observer";
// import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const customers = [
//     {
//         id: 1,
//         company: "Asgeir",
//         contact: "Roald Amundsens veg 46, 4340 Bryne",
//         usage: "Terrasse levert med høy kvalitet og øye for detaljer. Punktlige, profesjonelle og veldig hyggelige. Akkurat slik vi ønsket oss – til og med litt bedre! Anbefales.",
//         tags: ["MittAnbud", "Terrasse", "Privatkunde"],
//     },
//     {
//         id: 2,
//         company: "Kenneth",
//         contact: "Bekkasinveien 23, 4318 Sandnes",
//         usage: "Godt fornøyd med resultatet. God befaring og diskusjon rundt løsninger. Ryddig prosess, kjapp respons og prisoverslag som var lett å følge. Bruker gjerne tjenestene igjen.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 3,
//         company: "Barbro",
//         contact: "Hemmestveitbakken 56, 4021 Stavanger",
//         usage: "Gravearbeid og planting av hekk. Hyggelige, kompetente og effektive unge menn. Kommer til å kontakte firmaet igjen for oppdrag til våren.",
//         tags: ["MittAnbud", "Hekk", "Privatkunde"],
//     },
//     {
//         id: 4,
//         company: "Linn",
//         contact: "Skarahødden 11–13, 4326 Sandnes",
//         usage: "God service, flinke fagfolk og rask, enkel kommunikasjon. God innsikt i faget og gjennomtenkte løsninger. Jobben ble gjort effektivt – 10/10!",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 5,
//         company: "Sondre",
//         contact: "Stølsbrotet 51, 4072 Randaberg",
//         usage: "Hyggelig håndverker som møter opp til avtalt tid og leverer iht. ønsker. Kommer med gode innspill og anbefalinger. Profesjonell og tar seg tid til en prat.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 6,
//         company: "Håvard",
//         contact: "Sandskjellveien 48, 4310 Hommersåk",
//         usage: "Fint utført, gode råd underveis, åpen og lett kommunikasjon.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 7,
//         company: "Birgit",
//         contact: "Gustav Vigelands vei 27, 4023 Stavanger",
//         usage: "Helt topp. God informasjon og veiledning. Bra resultat.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 8,
//         company: "Jostein Mindor",
//         contact: "Grasheibakken 1, 4034 Stavanger",
//         usage: "God og hyggelig kommunikasjon. God kvalitet på arbeidet.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 9,
//         company: "Tom Kristian",
//         contact: "Varabergkroken 1 B, 4051 Sola",
//         usage: "Utført som avtalt! Tipp topp.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
//     {
//         id: 10,
//         company: "Mathias Hjalmar",
//         contact: "Lokes Gate 5, 4330 Ålgård",
//         usage: "Profesjonelle og detaljorienterte, anbefales.",
//         tags: ["MittAnbud", "Privatkunde"],
//     },
// ];

// function TestimonialSection() {
//     const theme = useTheme();
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//     return (
//         <Box
//             sx={{
//                 py: { xs: 6, md: 10 },
//                 backgroundColor: theme.palette.grey[50],
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             <Container maxWidth="lg">
//                 <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
//                     <Typography
//                         variant="overline"
//                         sx={{
//                             letterSpacing: 2,
//                             fontWeight: 700,
//                             color: theme.palette.primary.main,
//                         }}
//                     >
//                         KUNDECASE
//                     </Typography>

//                     <Typography
//                         variant="h2"
//                         component="h2"
//                         sx={{ fontWeight: 800, mb: 1.5 }}
//                     >
//                         Våre kunder i Rogaland
//                     </Typography>
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             maxWidth: 760,
//                             mx: "auto",
//                             color: theme.palette.text.secondary,
//                         }}
//                     >
//                         Alle anmeldelsene er hentet fra våre kunder på{" "}
//                         <strong>Mittanbud</strong>
//                     </Typography>
//                 </Box>

//                 <div ref={ref}>
//                     <Swiper
//                         modules={[Navigation, Pagination, Autoplay]}
//                         slidesPerView={1}
//                         spaceBetween={16}
//                         navigation
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 5000, disableOnInteraction: false }}
//                         breakpoints={{
//                             600: { slidesPerView: 2 },
//                             900: { slidesPerView: 3 },
//                             1200: { slidesPerView: 4 },
//                             1600: { slidesPerView: 5 },
//                         }}
//                         style={{ paddingBottom: 36 }}
//                         className={inView ? "fade-up" : ""}
//                     >
//                         {customers.map((c) => (
//                             <SwiperSlide key={c.id}>
//                                 <Paper
//                                     elevation={0}
//                                     sx={{
//                                         position: "relative",
//                                         p: 2.5,
//                                         borderRadius: 3,
//                                         backdropFilter: "blur(2px)",
//                                         background:
//                                             theme.palette.mode === "light"
//                                                 ? "linear-gradient(180deg, #fff, #fafafa)"
//                                                 : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
//                                         border: "1px solid rgba(0,0,0,0.06)",
//                                         transition:
//                                             "transform .25s ease, box-shadow .25s ease",
//                                         "&:hover": {
//                                             transform: "translateY(-3px)",
//                                             boxShadow:
//                                                 theme.palette.mode === "light"
//                                                     ? "0 8px 18px rgba(0,0,0,0.07)"
//                                                     : "0 8px 18px rgba(0,0,0,0.3)",
//                                         },
//                                         display: "flex",
//                                         flexDirection: "column",
//                                         height: "100%",
//                                         minHeight: {
//                                             xs: 200,
//                                             sm: 220,
//                                             md: 240,
//                                         },
//                                     }}
//                                 >
//                                     <Box
//                                         aria-hidden
//                                         sx={{
//                                             position: "absolute",
//                                             right: 12,
//                                             top: 12,
//                                             color: "rgba(0,0,0,0.06)",
//                                         }}
//                                     >
//                                         <FormatQuoteRoundedIcon
//                                             sx={{ fontSize: 28 }}
//                                         />
//                                     </Box>

//                                     {/* Header */}
//                                     <Box
//                                         sx={{
//                                             display: "flex",
//                                             alignItems: "center",
//                                             mb: 1.5,
//                                         }}
//                                     >
//                                         <Avatar
//                                             variant="rounded"
//                                             sx={{
//                                                 width: 48,
//                                                 height: 48,
//                                                 mr: 1.5,
//                                                 fontWeight: 700,
//                                                 bgcolor: `${theme.palette.secondary.contrastText}`,
//                                                 color: theme.palette.primary
//                                                     .main,
//                                                 border: `1px solid ${theme.palette.primary.main}40`,
//                                                 fontSize: 14,
//                                             }}
//                                         >
//                                             {c.company
//                                                 .split(" ")
//                                                 .map((w) => w[0])
//                                                 .filter(Boolean)
//                                                 .slice(0, 2)
//                                                 .join("")
//                                                 .toUpperCase()}
//                                         </Avatar>
//                                         <Box>
//                                             <Typography
//                                                 variant="subtitle2"
//                                                 fontWeight={700}
//                                             >
//                                                 {c.company}
//                                             </Typography>
//                                             <Typography
//                                                 variant="caption"
//                                                 color="text.secondary"
//                                             >
//                                                 {c.contact}
//                                             </Typography>
//                                         </Box>
//                                     </Box>

//                                     {/* Body */}
//                                     <Typography
//                                         variant="body2"
//                                         sx={{
//                                             color: theme.palette.text.primary,
//                                             mb: 1.5,
//                                             flexGrow: 1,
//                                             fontSize: 14,
//                                             lineHeight: 1.4,
//                                         }}
//                                     >
//                                         {c.usage}
//                                     </Typography>

//                                     {/* Rating */}
//                                     <Box
//                                         sx={{
//                                             mt: "auto",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             gap: 0.5,
//                                         }}
//                                     >
//                                         <Rating
//                                             value={5}
//                                             readOnly
//                                             size="small"
//                                             precision={0.5}
//                                             icon={
//                                                 <StarRoundedIcon fontSize="inherit" />
//                                             }
//                                             emptyIcon={
//                                                 <StarRoundedIcon fontSize="inherit" />
//                                             }
//                                             sx={{
//                                                 color: theme.palette.warning
//                                                     .main,
//                                             }}
//                                         />
//                                         <Typography
//                                             variant="caption"
//                                             color="text.secondary"
//                                             sx={{ fontWeight: 500 }}
//                                         >
//                                             5.0
//                                         </Typography>
//                                     </Box>

//                                     {/* Tags */}
//                                     {c.tags?.length ? (
//                                         <Stack
//                                             direction="row"
//                                             spacing={1}
//                                             sx={{ mt: 1.5, flexWrap: "wrap" }}
//                                         >
//                                             {c.tags.map((t) => (
//                                                 <Chip
//                                                     key={t}
//                                                     label={t}
//                                                     size="small"
//                                                     sx={{
//                                                         height: 22,
//                                                         borderRadius: "999px",
//                                                         color: theme.palette
//                                                             .primary.main,
//                                                         bgcolor: `${theme.palette.primary.main}12`,
//                                                         border: `1px solid ${theme.palette.primary.main}26`,
//                                                         fontSize: 11,
//                                                     }}
//                                                 />
//                                             ))}
//                                         </Stack>
//                                     ) : null}
//                                 </Paper>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 {/* Knapp til MittAnbud-profil (valgfritt) */}
//                 {/*
//         <Box textAlign="center" mt={3}>
//           <Button
//             variant="outlined"
//             color="primary"
//             href="https://mittanbud.no/profil/DITT_FIRMANAVN"
//             target="_blank"
//           >
//             Se alle anmeldelsene på MittAnbud
//           </Button>
//         </Box>
//         */}
//             </Container>

//             {/* Swiper styling */}
//             <style>{`
//         .swiper-button-prev, .swiper-button-next {
//           color: ${theme.palette.primary.main};
//           transform: scale(0.8);
//         }
//         .swiper-pagination-bullet {
//           background: ${theme.palette.primary.main};
//           opacity: 0.4;
//         }
//         .swiper-pagination-bullet-active {
//           opacity: 1;
//           background: ${theme.palette.primary.main};
//         }
//       `}</style>
//         </Box>
//     );
// }

// export default TestimonialSection;

import {
    Box,
    Container,
    Typography,
    Paper,
    Avatar,
    useTheme,
    Stack,
    Chip,
    Rating,
    Button,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const customers = [
    {
        id: 1,
        company: "Asgeir",
        contact: "Roald Amundsens veg 46, 4340 Bryne",
        usage: "Terrasse levert med høy kvalitet og øye for detaljer. Punktlige, profesjonelle og veldig hyggelige. Akkurat slik vi ønsket oss – til og med litt bedre! Anbefales.",
        tags: ["MittAnbud", "Terrasse", "Privatkunde"],
        sourceUrl: null, // legg inn MittAnbud-lenke hvis du har
    },
    {
        id: 2,
        company: "Kenneth",
        contact: "Bekkasinveien 23, 4318 Sandnes",
        usage: "Godt fornøyd med resultatet. God befaring og diskusjon rundt løsninger. Ryddig prosess, kjapp respons og prisoverslag som var lett å følge. Bruker gjerne tjenestene igjen.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 3,
        company: "Barbro",
        contact: "Hemmestveitbakken 56, 4021 Stavanger",
        usage: "Gravearbeid og planting av hekk. Hyggelige, kompetente og effektive unge menn. Kommer til å kontakte firmaet igjen for oppdrag til våren.",
        tags: ["MittAnbud", "Hekk", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 4,
        company: "Linn",
        contact: "Skarahødden 11–13, 4326 Sandnes",
        usage: "God service, flinke fagfolk og rask, enkel kommunikasjon. God innsikt i faget og gjennomtenkte løsninger. Jobben ble gjort effektivt – 10/10!",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 5,
        company: "Sondre",
        contact: "Stølsbrotet 51, 4072 Randaberg",
        usage: "Hyggelig håndverker som møter opp til avtalt tid og leverer iht. ønsker. Kommer med gode innspill og anbefalinger. Profesjonell og tar seg tid til en prat.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 6,
        company: "Håvard",
        contact: "Sandskjellveien 48, 4310 Hommersåk",
        usage: "Fint utført, gode råd underveis, åpen og lett kommunikasjon.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 7,
        company: "Birgit",
        contact: "Gustav Vigelands vei 27, 4023 Stavanger",
        usage: "Helt topp. God informasjon og veiledning. Bra resultat.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 8,
        company: "Jostein Mindor",
        contact: "Grasheibakken 1, 4034 Stavanger",
        usage: "God og hyggelig kommunikasjon. God kvalitet på arbeidet.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 9,
        company: "Tom Kristian",
        contact: "Varabergkroken 1 B, 4051 Sola",
        usage: "Utført som avtalt! Tipp topp.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
    {
        id: 10,
        company: "Mathias Hjalmar",
        contact: "Lokes Gate 5, 4330 Ålgård",
        usage: "Profesjonelle og detaljorienterte, anbefales.",
        tags: ["MittAnbud", "Privatkunde"],
        sourceUrl: null,
    },
];

function TestimonialSection() {
    const theme = useTheme();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Lokal state: hvilke kort er "utvidet"
    const [expandedIds, setExpandedIds] = useState(new Set());

    const toggleExpand = (id) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.grey[50],
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: 2,
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                        }}
                    >
                        KUNDECASE
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{ fontWeight: 800, mb: 1.5 }}
                    >
                        Våre kunder i Rogaland
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 760,
                            mx: "auto",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Alle anmeldelsene er hentet fra våre kunder på{" "}
                        <strong>MittAnbud</strong>
                    </Typography>
                </Box>

                <div ref={ref}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={16}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            600: { slidesPerView: 2 },
                            900: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                            1600: { slidesPerView: 5 },
                        }}
                        style={{ paddingBottom: 15 }}
                        className={inView ? "fade-up" : ""}
                    >
                        {customers.map((c) => {
                            const expanded = expandedIds.has(c.id);
                            return (
                                <SwiperSlide key={c.id}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            position: "relative",
                                            p: 2.5,
                                            borderRadius: 3,
                                            backdropFilter: "blur(2px)",
                                            background:
                                                theme.palette.mode === "light"
                                                    ? "linear-gradient(180deg, #fff, #fafafa)"
                                                    : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                                            border: "1px solid rgba(0,0,0,0.06)",
                                            transition:
                                                "transform .25s ease, box-shadow .25s ease",
                                            "&:hover": {
                                                transform: "translateY(-3px)",
                                                boxShadow:
                                                    theme.palette.mode ===
                                                    "light"
                                                        ? "0 8px 18px rgba(0,0,0,0.07)"
                                                        : "0 8px 18px rgba(0,0,0,0.3)",
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%",
                                            minHeight: {
                                                xs: 200,
                                                sm: 220,
                                                md: 240,
                                            },
                                        }}
                                    >
                                        <Box
                                            aria-hidden
                                            sx={{
                                                position: "absolute",
                                                right: 12,
                                                top: 12,
                                                color: "rgba(0,0,0,0.06)",
                                            }}
                                        >
                                            <FormatQuoteRoundedIcon
                                                sx={{ fontSize: 28 }}
                                            />
                                        </Box>

                                        {/* Header */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 1.5,
                                            }}
                                        >
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    mr: 1.5,
                                                    fontWeight: 700,
                                                    bgcolor: `${theme.palette.secondary.contrastText}`,
                                                    color: theme.palette.primary
                                                        .main,
                                                    border: `1px solid ${theme.palette.primary.main}40`,
                                                    fontSize: 14,
                                                }}
                                            >
                                                {c.company
                                                    .split(" ")
                                                    .map((w) => w[0])
                                                    .filter(Boolean)
                                                    .slice(0, 2)
                                                    .join("")
                                                    .toUpperCase()}
                                            </Avatar>
                                            <Box>
                                                <Typography
                                                    variant="subtitle2"
                                                    fontWeight={700}
                                                >
                                                    {c.company}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {c.contact}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Body med line-clamp */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme.palette.text
                                                    .primary,
                                                mb: 1,
                                                flexGrow: 1,
                                                fontSize: 14,
                                                lineHeight: 1.4,
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                ...(expanded
                                                    ? {}
                                                    : { WebkitLineClamp: 4 }), // 3 linjer som standard
                                            }}
                                        >
                                            {c.usage}
                                        </Typography>

                                        {/* Knapper: Vis mer / Se på MittAnbud */}
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            sx={{ mb: 1 }}
                                        >
                                            <Button
                                                size="small"
                                                variant="text"
                                                onClick={() =>
                                                    toggleExpand(c.id)
                                                }
                                                sx={{
                                                    textTransform: "none",
                                                    px: 0.5,
                                                    minWidth: 0,
                                                }}
                                            >
                                                {expanded
                                                    ? "Vis mindre"
                                                    : "Vis mer"}
                                            </Button>

                                            {c.sourceUrl ? (
                                                <Button
                                                    size="small"
                                                    variant="text"
                                                    href={c.sourceUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        textTransform: "none",
                                                        px: 0.5,
                                                        minWidth: 0,
                                                    }}
                                                >
                                                    Se på MittAnbud
                                                </Button>
                                            ) : null}
                                        </Stack>

                                        {/* Rating */}
                                        <Box
                                            sx={{
                                                mt: "auto",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            <Rating
                                                value={5}
                                                readOnly
                                                size="small"
                                                precision={0.5}
                                                icon={
                                                    <StarRoundedIcon fontSize="inherit" />
                                                }
                                                emptyIcon={
                                                    <StarRoundedIcon fontSize="inherit" />
                                                }
                                                sx={{
                                                    color: theme.palette.warning
                                                        .main,
                                                }}
                                            />
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ fontWeight: 500 }}
                                            >
                                                5.0
                                            </Typography>
                                        </Box>

                                        {/* Tags */}
                                        {c.tags?.length ? (
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                sx={{ mt: 1, flexWrap: "wrap" }}
                                            >
                                                {c.tags.map((t) => (
                                                    <Chip
                                                        key={t}
                                                        label={t}
                                                        size="small"
                                                        sx={{
                                                            height: 22,
                                                            borderRadius:
                                                                "999px",
                                                            color: theme.palette
                                                                .primary.main,
                                                            bgcolor: `${theme.palette.primary.main}12`,
                                                            border: `1px solid ${theme.palette.primary.main}26`,
                                                            fontSize: 11,
                                                        }}
                                                    />
                                                ))}
                                            </Stack>
                                        ) : null}
                                    </Paper>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </Container>

            {/* Swiper styling */}
            <style>{`
        .swiper-button-prev, .swiper-button-next {
          color: ${theme.palette.primary.main};
          transform: scale(0.8);
        }
        .swiper-pagination-bullet {
          background: ${theme.palette.primary.main};
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: ${theme.palette.primary.main};
        }
      `}</style>
        </Box>
    );
}

export default TestimonialSection;
