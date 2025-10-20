// // import { useState } from "react";
// // import {
// //     Box,
// //     Container,
// //     Typography,
// //     Grid,
// //     Card,
// //     CardContent,
// //     Button,
// //     Chip,
// //     Avatar,
// //     List,
// //     ListItem,
// //     ListItemIcon,
// //     ListItemText,
// //     useTheme,
// //     Divider,
// //     Paper,
// //     Stack,
// // } from "@mui/material";
// // import CheckIcon from "@mui/icons-material/Check";
// // import ForestIcon from "@mui/icons-material/Forest";
// // import GrassIcon from "@mui/icons-material/Grass";
// // import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
// // import RoofingIcon from "@mui/icons-material/Roofing";
// // import HandymanIcon from "@mui/icons-material/Handyman";
// // import GroupsIcon from "@mui/icons-material/Groups";
// // import StarBorderIcon from "@mui/icons-material/StarBorder";
// // import BusinessIcon from "@mui/icons-material/Business";
// // import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// // import { useInView } from "react-intersection-observer";
// // import { useNavigate } from "react-router-dom";

// // function AboutUs() {
// //     const theme = useTheme();
// //     const navigate = useNavigate();
// //     const { ref: heroRef, inView: heroInView } = useInView({
// //         triggerOnce: true,
// //         threshold: 0.1,
// //     });

// //     const values = [
// //         {
// //             icon: <GrassIcon />,
// //             title: "Lidenskap for uteområder",
// //             desc: "Vi elsker å skape pene, trygge og lettstelte grøntarealer for borettslag, bedrifter og private hager",
// //         },
// //         {
// //             icon: <ForestIcon />,
// //             title: "Trygg trefelling og beskjæring",
// //             desc: "Sertifisert og erfarent mannskap sørger for sikker felling, stubbefresing og riktig beskjæring",
// //         },
// //         {
// //             icon: <CleaningServicesIcon />,
// //             title: "Sesongrydding & vedlikehold",
// //             desc: "Alt fra løvblåsing og kantklipp om høsten til vårrydding og rens av takrenner",
// //         },
// //         {
// //             icon: <HandymanIcon />,
// //             title: "Små bygg og reparasjoner",
// //             desc: "Vi tar oss av mindre bygg- og vedlikeholdsoppgaver for uteområder, levegger og terrasser",
// //         },
// //     ];

// //     const milestones = [
// //         {
// //             year: "2018",
// //             title: "Oppstart",
// //             text: "Rogaland Hage & Byggeservice ble etablert med fokus på plenklipp og hekk-klipp",
// //         },
// //         {
// //             year: "2019",
// //             title: "Utvider tjenester",
// //             text: "La til trefelling, stubbefresing og rens av takrenner",
// //         },
// //         {
// //             year: "2021",
// //             title: "Sesongavtaler",
// //             text: "Flere borettslag og barnehager får faste vedlikeholdsavtaler",
// //         },
// //         {
// //             year: "2023",
// //             title: "Bygg & service",
// //             text: "Starter med mindre bygg- og vedlikeholdsprosjekter, terrasser og levegger",
// //         },
// //         {
// //             year: "2024",
// //             title: "Fleksible pakkeløsninger",
// //             text: "Lanserer helårsavtaler med rydding vår/høst og beredskap for vinter",
// //         },
// //     ];

// //     const team = [
// //         {
// //             name: "Aleksander Håland.",
// //             role: "Daglig leder / Prosjekt",
// //             initials: "AH",
// //         },
// //         { name: "Olav S.", role: "Drift & kundekontakt", initials: "OS" },
// //     ];

// //     const clients = [
// //         { name: "Borettslag & sameier", icon: <GroupsIcon /> },
// //         { name: "Barnehager & skoler", icon: <BusinessIcon /> },
// //         { name: "Bedrifter & næring", icon: <StarBorderIcon /> },
// //         { name: "Private hageeiere", icon: <ForestIcon /> },
// //     ];

// //     return (
// //         <Box sx={{ py: { xs: 8, md: 12 } }}>
// //             <Container maxWidth="lg">
// //                 {/* HERO */}
// //                 <Box
// //                     ref={heroRef}
// //                     className={heroInView ? "fade-in" : ""}
// //                     sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
// //                 >
// //                     <Chip
// //                         label="Om Dritli AS"
// //                         sx={{
// //                             mb: 2,
// //                             fontWeight: 600,
// //                             bgcolor: theme.palette.grey[100],
// //                         }}
// //                     />
// //                     <Typography
// //                         variant="h2"
// //                         component="h1"
// //                         sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.5px" }}
// //                     >
// //                         Vi tilbyr et vedlikeholdsabonnement med ferdig
// //                         forhandlede avtaler
// //                     </Typography>
// //                     <Typography
// //                         variant="h6"
// //                         sx={{
// //                             maxWidth: 900,
// //                             mx: "auto",
// //                             color: theme.palette.text.secondary,
// //                             fontWeight: 400,
// //                         }}
// //                     >
// //                         forhandler frem de beste avtalene med seriøse og
// //                         kvalitetssikrede aktører. Vi tilbyr et enkelt og
// //                         forutsigbart vedlikeholdsabonnement for deg som ønsker
// //                         trygghet, effektivitet og faste priser.
// //                     </Typography>
// //                 </Box>

// //                 {/* VERDIER */}
// //                 <Grid container spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
// //                     {values.map((v) => (
// //                         <Grid item xs={12} md={3} key={v.title}>
// //                             <Card
// //                                 sx={{
// //                                     height: "100%",
// //                                     border: `1px solid ${theme.palette.grey[200]}`,
// //                                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// //                                 }}
// //                             >
// //                                 <CardContent sx={{ p: 3 }}>
// //                                     <Stack
// //                                         direction="row"
// //                                         spacing={2}
// //                                         alignItems="center"
// //                                         sx={{ mb: 1 }}
// //                                     >
// //                                         <Box
// //                                             sx={{
// //                                                 p: 1.2,
// //                                                 borderRadius: 2,
// //                                                 bgcolor:
// //                                                     theme.palette.primary.light,
// //                                                 color: theme.palette.primary
// //                                                     .contrastText,
// //                                                 display: "inline-flex",
// //                                             }}
// //                                         >
// //                                             {v.icon}
// //                                         </Box>
// //                                         <Typography
// //                                             variant="h6"
// //                                             fontWeight={700}
// //                                         >
// //                                             {v.title}
// //                                         </Typography>
// //                                     </Stack>
// //                                     <Typography
// //                                         variant="body2"
// //                                         color="text.secondary"
// //                                     >
// //                                         {v.desc}
// //                                     </Typography>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>
// //                     ))}
// //                 </Grid>

// //                 {/* TJENESTER */}
// //                 <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }}>
// //                     <Grid item xs={12} md={6}>
// //                         <Typography
// //                             variant="h4"
// //                             fontWeight={800}
// //                             sx={{ mb: 2 }}
// //                         >
// //                             Våre mest brukte tjenester
// //                         </Typography>
// //                         <List dense>
// //                             {[
// //                                 "Plenklipp & kantklipp",
// //                                 "Hekk-klipp & beskjæring",
// //                                 "Trefelling & stubbefresing",
// //                                 "Sesongrydding vår / høst",
// //                                 "Rens av takrenner",
// //                                 "Mindre bygg- & vedlikeholdsjobber",
// //                             ].map((t) => (
// //                                 <ListItem
// //                                     key={t}
// //                                     disableGutters
// //                                     sx={{ mb: 0.5 }}
// //                                 >
// //                                     <ListItemIcon sx={{ minWidth: 32 }}>
// //                                         <CheckIcon
// //                                             color="success"
// //                                             fontSize="small"
// //                                         />
// //                                     </ListItemIcon>
// //                                     <ListItemText primary={t} />
// //                                 </ListItem>
// //                             ))}
// //                         </List>
// //                         <Typography
// //                             variant="body2"
// //                             color="text.secondary"
// //                             sx={{ mt: 2 }}
// //                         >
// //                             Vi skreddersyr helårs og sesongavtaler tilpasset
// //                             ditt uteområde
// //                         </Typography>
// //                     </Grid>

// //                     <Grid item xs={12} md={6}>
// //                         <Card
// //                             sx={{
// //                                 height: "100%",
// //                                 border: `1px solid ${theme.palette.grey[200]}`,
// //                                 display: "flex",
// //                                 flexDirection: "column",
// //                             }}
// //                         >
// //                             <CardContent sx={{ p: 3 }}>
// //                                 <Typography
// //                                     variant="h6"
// //                                     fontWeight={700}
// //                                     sx={{ mb: 1 }}
// //                                 >
// //                                     Hvorfor velge oss?
// //                                 </Typography>
// //                                 <List dense>
// //                                     {[
// //                                         "Lokal og fleksibel service",
// //                                         "Fast kontaktperson",
// //                                         "Forutsigbare priser og avtaler",
// //                                         "Fokus på HMS og trygg utførelse",
// //                                         "Rask respons ved hasteoppdrag",
// //                                     ].map((t) => (
// //                                         <ListItem key={t} disableGutters>
// //                                             <ListItemIcon sx={{ minWidth: 32 }}>
// //                                                 <CheckIcon
// //                                                     color="success"
// //                                                     fontSize="small"
// //                                                 />
// //                                             </ListItemIcon>
// //                                             <ListItemText primary={t} />
// //                                         </ListItem>
// //                                     ))}
// //                                 </List>
// //                             </CardContent>
// //                         </Card>
// //                     </Grid>
// //                 </Grid>

// //                 {/* TEAM — SENTRERT */}
// //                 <Box sx={{ mb: { xs: 6, md: 10 } }}>
// //                     <Typography
// //                         variant="h4"
// //                         fontWeight={800}
// //                         sx={{ mb: 3, textAlign: "center" }}
// //                     >
// //                         Møt teamet
// //                     </Typography>
// //                     <Grid container spacing={3} justifyContent="center">
// //                         {team.map((t) => (
// //                             <Grid item xs={12} sm={6} md={3} key={t.name}>
// //                                 <Card
// //                                     sx={{
// //                                         height: "100%",
// //                                         textAlign: "center",
// //                                         border: `1px solid ${theme.palette.grey[200]}`,
// //                                     }}
// //                                 >
// //                                     <CardContent sx={{ p: 3 }}>
// //                                         <Avatar
// //                                             sx={{
// //                                                 width: 72,
// //                                                 height: 72,
// //                                                 mx: "auto",
// //                                                 mb: 1.5,
// //                                                 bgcolor:
// //                                                     theme.palette.primary.main,
// //                                                 fontWeight: 700,
// //                                             }}
// //                                         >
// //                                             {t.initials}
// //                                         </Avatar>
// //                                         <Typography
// //                                             variant="subtitle1"
// //                                             fontWeight={700}
// //                                         >
// //                                             {t.name}
// //                                         </Typography>
// //                                         <Typography
// //                                             variant="body2"
// //                                             color="text.secondary"
// //                                         >
// //                                             {t.role}
// //                                         </Typography>
// //                                     </CardContent>
// //                                 </Card>
// //                             </Grid>
// //                         ))}
// //                     </Grid>
// //                 </Box>

// //                 {/* CTA */}
// //                 <Box sx={{ textAlign: "center" }}>
// //                     <Typography variant="h5" sx={{ mb: 2 }}>
// //                         Klar for å avtale befaring eller få pristilbud?
// //                     </Typography>
// //                     <Stack
// //                         spacing={2}
// //                         direction={{ xs: "column", sm: "row" }}
// //                         justifyContent="center"
// //                     >
// //                         <Button
// //                             variant="contained"
// //                             size="large"
// //                             onClick={() => navigate("/contact")}
// //                             sx={{
// //                                 px: 4,
// //                                 py: 1.5,
// //                                 borderRadius: "50px",
// //                                 fontWeight: 700,
// //                             }}
// //                         >
// //                             Kontakt oss
// //                         </Button>
// //                         <Button
// //                             variant="outlined"
// //                             size="large"
// //                             href="tel:+4793220988"
// //                             sx={{
// //                                 px: 4,
// //                                 py: 1.5,
// //                                 borderRadius: "50px",
// //                                 fontWeight: 700,
// //                             }}
// //                         >
// //                             Ring oss direkte
// //                         </Button>
// //                     </Stack>
// //                     <Typography
// //                         variant="caption"
// //                         display="block"
// //                         color="text.secondary"
// //                         sx={{ mt: 1.5 }}
// //                     >
// //                         Vi tilbyr gratis befaring i Stavanger og Sandnes området
// //                     </Typography>
// //                 </Box>
// //             </Container>
// //         </Box>
// //     );
// // }

// // export default AboutUs;

// import {
//     Box,
//     Container,
//     Typography,
//     Grid,
//     Card,
//     CardContent,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     useTheme,
// } from "@mui/material";
// import HandymanIcon from "@mui/icons-material/Handyman";
// import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
// import PlumbingIcon from "@mui/icons-material/Plumbing";
// import BuildIcon from "@mui/icons-material/Build";
// import RoofingIcon from "@mui/icons-material/Roofing";
// import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
// import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
// import GrassIcon from "@mui/icons-material/Grass";
// import CheckIcon from "@mui/icons-material/Check";
// import { useInView } from "react-intersection-observer";

// const values = [
//     {
//         icon: <HandymanIcon />,
//         title: "Tømrertjenester",
//         desc: "Alt fra små reparasjoner til større byggeoppdrag – alltid nøyaktig, solid og forskriftsmessig utført.",
//     },
//     {
//         icon: <ElectricBoltIcon />,
//         title: "Elektriker",
//         desc: "Autoriserte elektrikere som leverer trygg og moderne installasjon, service og feilsøking.",
//     },
//     {
//         icon: <PlumbingIcon />,
//         title: "Rørlegger",
//         desc: "Erfarne fagfolk for alt innen vann, avløp og sanitær – fra lekkasjer til komplette oppgraderinger.",
//     },
//     {
//         icon: <BuildIcon />,
//         title: "Bilmekaniker",
//         desc: "Service, reparasjon og EU-kontroll utført av profesjonelle verksteder med kvalitet i fokus.",
//     },
//     {
//         icon: <RoofingIcon />,
//         title: "Blikkenslager",
//         desc: "Presis utførelse i metallarbeid, taktekking og beslag – både estetisk og funksjonelt.",
//     },
//     {
//         icon: <LocalLaundryServiceIcon />,
//         title: "Fasade og takvask",
//         desc: "Effektiv og skånsom rengjøring som forlenger levetiden på bygg og overflater.",
//     },
//     {
//         icon: <CleaningServicesIcon />,
//         title: "Renhold",
//         desc: "Profesjonelt renhold for bedrift og privat – fleksible avtaler og høy kvalitet hver gang.",
//     },
//     {
//         icon: <GrassIcon />,
//         title: "Gartner",
//         desc: "Vedlikehold, beplantning og sesongarbeid – vi holder hager og grøntområder i topp stand hele året.",
//     },
// ];

// function ServicesSection() {
//     const theme = useTheme();
//     const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

//     return (
//         <Box
//             ref={ref}
//             sx={{
//                 py: { xs: 8, md: 10 },
//                 backgroundColor: theme.palette.grey[50],
//             }}
//         >
//             <Container maxWidth="lg">
//                 <Typography
//                     variant="overline"
//                     sx={{
//                         textAlign: "center",
//                         display: "block",
//                         fontWeight: 700,
//                         letterSpacing: 2,
//                         mb: 2,
//                         color: theme.palette.primary.main,
//                     }}
//                 >
//                     DRIFTLI TJENESTER
//                 </Typography>

//                 <Typography
//                     variant="h3"
//                     align="center"
//                     sx={{
//                         fontWeight: 800,
//                         mb: 6,
//                         color: theme.palette.text.primary,
//                     }}
//                 >
//                     Kvalitetssikrede fagfolk – alt samlet på ett sted
//                 </Typography>

//                 {/* Ikon-kort for alle fag */}
//                 <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }}>
//                     {values.map((value, i) => (
//                         <Grid item xs={12} sm={6} md={3} key={i}>
//                             <Card
//                                 elevation={3}
//                                 sx={{
//                                     height: "100%",
//                                     borderRadius: 3,
//                                     transition:
//                                         "transform 0.3s ease, box-shadow 0.3s ease",
//                                     "&:hover": {
//                                         transform: "translateY(-6px)",
//                                         boxShadow:
//                                             "0 16px 32px rgba(0,0,0,0.15)",
//                                     },
//                                 }}
//                             >
//                                 <CardContent
//                                     sx={{
//                                         textAlign: "center",
//                                         p: 3,
//                                     }}
//                                 >
//                                     <Box
//                                         sx={{
//                                             color: theme.palette.primary.main,
//                                             fontSize: 48,
//                                             mb: 1,
//                                         }}
//                                     >
//                                         {value.icon}
//                                     </Box>
//                                     <Typography
//                                         variant="h6"
//                                         sx={{
//                                             fontWeight: 700,
//                                             mb: 1,
//                                         }}
//                                     >
//                                         {value.title}
//                                     </Typography>
//                                     <Typography
//                                         variant="body2"
//                                         color="text.secondary"
//                                     >
//                                         {value.desc}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>

//                 {/* TJENESTER */}
//                 <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }}>
//                     <Grid item xs={12} md={6}>
//                         <Typography
//                             variant="h4"
//                             fontWeight={800}
//                             sx={{ mb: 2 }}
//                         >
//                             Våre mest brukte tjenester
//                         </Typography>
//                         <List dense>
//                             {[
//                                 "Tømrertjenester",
//                                 "Elektriker",
//                                 "Rørlegger",
//                                 "Bilmekaniker",
//                                 "Blikkenslager",
//                                 "Fasade og takvask",
//                                 "Renhold",
//                                 "Gartner",
//                             ].map((t) => (
//                                 <ListItem
//                                     key={t}
//                                     disableGutters
//                                     sx={{ mb: 0.5 }}
//                                 >
//                                     <ListItemIcon sx={{ minWidth: 32 }}>
//                                         <CheckIcon
//                                             color="success"
//                                             fontSize="small"
//                                         />
//                                     </ListItemIcon>
//                                     <ListItemText primary={t} />
//                                 </ListItem>
//                             ))}
//                         </List>
//                         <Typography
//                             variant="body2"
//                             color="text.secondary"
//                             sx={{ mt: 2 }}
//                         >
//                             Vi skreddersyr service og vedlikeholdsplaner for
//                             privat, borettslag og bedrift
//                         </Typography>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                         <Card
//                             sx={{
//                                 height: "100%",
//                                 border: `1px solid ${theme.palette.grey[200]}`,
//                                 display: "flex",
//                                 flexDirection: "column",
//                             }}
//                         >
//                             <CardContent sx={{ p: 3 }}>
//                                 <Typography
//                                     variant="h6"
//                                     fontWeight={700}
//                                     sx={{ mb: 1 }}
//                                 >
//                                     Hvorfor velge Driftli?
//                                 </Typography>
//                                 <List dense>
//                                     {[
//                                         "Kvalitetssikrede fagfolk",
//                                         "Fastpris og forutsigbare avtaler",
//                                         "Én kontakt som koordinerer alt",
//                                         "Forsikret arbeid og HMS dokumentasjon",
//                                         "Rask hjelp vanligvis innen 24 timer",
//                                     ].map((t) => (
//                                         <ListItem key={t} disableGutters>
//                                             <ListItemIcon sx={{ minWidth: 32 }}>
//                                                 <CheckIcon
//                                                     color="success"
//                                                     fontSize="small"
//                                                 />
//                                             </ListItemIcon>
//                                             <ListItemText primary={t} />
//                                         </ListItem>
//                                     ))}
//                                 </List>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }

// export default ServicesSection;

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
import VerifiedIcon from "@mui/icons-material/Verified";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HubIcon from "@mui/icons-material/Hub";

import GroupsIcon from "@mui/icons-material/Groups";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BusinessIcon from "@mui/icons-material/Business";
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
            icon: <VerifiedIcon />,
            title: "Kvalitetssikrede fagfolk",
            desc: "Vi samler seriøse leverandører på ett sted med dokumentert kompetanse, forsikring og HMS.",
        },
        {
            icon: <ReceiptLongIcon />,
            title: "Fastpris og forutsigbarhet",
            desc: "Klare avtaler uten overraskelser. Du vet hva som leveres og hva det koster.",
        },
        {
            icon: <SupportAgentIcon />,
            title: "Rask respons",
            desc: "Behovskartlegging og oppstart raskt. Vi prioriterer hasteoppdrag når det trengs.",
        },
        {
            icon: <HubIcon />,
            title: "Én kontakt for alt",
            desc: "Drift og koordinering i ett løp. Mindre mas for deg, bedre flyt i hverdagen.",
        },
    ];

    const milestones = [
        {
            year: "2020",
            title: "Idéen blir født",
            text: "Driftli-konseptet etableres med mål om å samle kvalitetssikrede fagfolk i én plattform.",
        },
        {
            year: "2021",
            title: "Pilot i Rogaland",
            text: "De første kundene får prøve vedlikeholdsabonnementet. Fokus på borettslag og småbedrifter.",
        },
        {
            year: "2022",
            title: "Utvidelse av fagområder",
            text: "Elektriker, rørlegger, renhold og fasadevask legges til i tjenestespekteret.",
        },
        {
            year: "2023",
            title: "Digitale avtaler og medlemskap",
            text: "Kunder kan tegne og administrere avtaler digitalt med fastpris og enkel oversikt.",
        },
        {
            year: "2024",
            title: "Full lansering av Driftli",
            text: "Driftli lanseres offentlig som Norges første komplette plattform for drift og vedlikehold.",
        },
        {
            year: "2025",
            title: "Profesjonelle rammeavtaler",
            text: "Nye medlemsavtaler for bedrifter og sameier med felles drifts- og vedlikeholdsplaner.",
        },
    ];

    const team = [
        {
            name: "Aleksander Håland",
            role: "Daglig leder / Prosjekt",
            initials: "AH",
        },
        { name: "Àlēx Mäldé", role: "Drift & kundekontakt", initials: "ÀM" },
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
                        Vedlikeholdsabonnement med profesjonelle avtaler
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
                        Vi forhandler frem gode betingelser med kvalitetssikrede
                        aktører. Med Driftli får du en enkel og forutsigbar
                        løsning for drift og vedlikehold, med klare priser og
                        trygg gjennomføring.
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
                                "Tømrertjenester",
                                "Elektriker",
                                "Rørlegger",
                                "Bilmekaniker",
                                "Blikkenslager",
                                "Fasade og takvask",
                                "Renhold",
                                "Gartner",
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
                                        "Kvalitetssikrede fagfolk",
                                        "Fastpris og forutsigbare avtaler",
                                        "En kontakt som koordinerer alt",
                                        "Forsikret arbeid og HMS dokumentasjon",
                                        "Rask hjelp vanligvis innen 24 timer",
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

                {/* TEAM — SENTRERT (uendret struktur) */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Typography
                        variant="h4"
                        fontWeight={800}
                        sx={{ textAlign: "center", mb: 1 }}
                    >
                        Møt teamet
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
                        Driftli forhandler frem rammeavtaler med faggrupper som
                        tømrer, elektriker, rørlegger, gartner, blikkenslager,
                        mekaniker og fritidsordninger. Som medlem får du tilgang
                        til disse avtalene og fordelene de gir. Ønsker du å bli
                        medlem og få tilgang til markedets beste rammeavtaler?
                        Kontakt oss i dag, eller bruk skjemaet ved siden av for
                        mer informasjon.
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
