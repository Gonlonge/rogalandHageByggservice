// import {
//     Box,
//     Container,
//     Grid,
//     Typography,
//     Card,
//     CardActionArea,
//     CardContent,
//     useTheme,
// } from "@mui/material";
// import { useInView } from "react-intersection-observer";
// import { useNavigate } from "react-router-dom";

// // ✅ Ikoner
// import BuildIcon from "@mui/icons-material/Build";
// import BoltIcon from "@mui/icons-material/Bolt";
// import PlumbingIcon from "@mui/icons-material/Plumbing";
// import CarRepairIcon from "@mui/icons-material/CarRepair";
// import RoofingIcon from "@mui/icons-material/Roofing";
// import YardIcon from "@mui/icons-material/Yard";
// import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
// import HandymanIcon from "@mui/icons-material/Handyman";

// // 🖼️ Premium: bakgrunnsbilder for hvert kort (bytt til dine egne filer)
// import imgPlen from "../../assets/privateImages/uteområde-formklippet.jpg";
// import imgHekk from "../../assets/privateImages/innvendig-kjøkken.jpg";
// import imgSesong from "../../assets/privateImages/uteområde-trapp.jpg";
// import imgTakrenner from "../../assets/privateImages/innvendig-soverom.jpg";
// import imgTerrasse from "../../assets/privateImages/utvendig-hage.jpg";
// import imgVaktmester from "../../assets/privateImages/uteområde-terrase.jpg";

// // 🧩 Tjenesteliste
// const features = [
//     {
//         title: "Tømrertjenester",
//         icon: <BuildIcon />,
//         description:
//             "Presist arbeid, solide materialer og varige løsninger for et resultat som både ser bra ut og holder over tid.",
//         image: imgPlen,
//     },
//     {
//         title: "Elektrikerarbeid",
//         icon: <BoltIcon />,
//         description:
//             "Sikre installasjoner, energieffektive løsninger og fagmessig utført arbeid – for et trygt og moderne hjem.",
//         image: imgHekk,
//     },
//     {
//         title: "Rørleggertjenester",
//         icon: <PlumbingIcon />,
//         description:
//             "Installasjon, vedlikehold og reparasjon av rør, kraner og sanitæranlegg – utført trygt og profesjonelt.",
//         image: imgSesong,
//     },
//     {
//         title: "Bilmekaniker",
//         icon: <CarRepairIcon />,
//         description:
//             "Service, reparasjon og vedlikehold av bilen – for trygg, effektiv og problemfri kjøring året rundt.",
//         image: imgTakrenner,
//     },
//     {
//         title: "Blikkenslager",
//         icon: <RoofingIcon />,
//         description:
//             "Montering og vedlikehold av tak, beslag og fasadedetaljer – for et tett, varig og profesjonelt resultat.",
//         image: imgTerrasse,
//     },
//     {
//         title: "Gartner",
//         icon: <YardIcon />,
//         description:
//             "Plenklipp, beskjæring, ugressfjerning og sesongrydding – for en velstelt og innbydende hage hele året.",
//         image: imgVaktmester,
//     },
//     {
//         title: "Fasade & takvask",
//         icon: <CleaningServicesIcon />,
//         description:
//             "Grundig vask av tak, fasader og utvendige flater – for et rent, trygt og velholdt bygg hele året.",
//         image: imgVaktmester,
//     },
//     {
//         title: "Renhold",
//         icon: <HandymanIcon />,
//         description:
//             "Effektivt og grundig renhold av både private og næringsbygg – for et rent, ryddig og trivelig miljø hver dag.",
//         image: imgVaktmester,
//     },
// ];

// // Slugify for ruter
// const slugify = (text) =>
//     text
//         .toLowerCase()
//         .replace(/\s+/g, "-")
//         .replace(/[^\w-]+/g, "");

// export default function FeaturesSection() {
//     const theme = useTheme();
//     const navigate = useNavigate();
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//     // Fallback-bakgrunn
//     const bgFor = (img) =>
//         img
//             ? `url(${img})`
//             : `linear-gradient(135deg, ${theme.palette.grey[300]} 0%, ${theme.palette.grey[200]} 100%)`;

//     return (
//         <Box
//             sx={{
//                 py: { xs: 8, md: 12 },
//                 backgroundColor: theme.palette.background.default,
//             }}
//         >
//             <Container maxWidth="lg">
//                 {/* Topptekst */}
//                 <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
//                     <Typography
//                         variant="overline"
//                         sx={{
//                             letterSpacing: 2,
//                             fontWeight: 700,
//                             color: theme.palette.primary.main,
//                         }}
//                     >
//                         TJENESTER
//                     </Typography>
//                     <Typography
//                         variant="h2"
//                         component="h2"
//                         sx={{ fontWeight: 800, mb: 2 }}
//                     >
//                         Medlemsfordeler for private og bedrifter
//                     </Typography>
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             maxWidth: 760,
//                             mx: "auto",
//                             color: theme.palette.text.secondary,
//                             fontWeight: 400,
//                         }}
//                     >
//                         Høy kvalitet, ryddig gjennomføring og dokumentert
//                         resultat – med fleksible avtaler og trygge leverandører.
//                     </Typography>
//                 </Box>

//                 {/* Kortvisning */}
//                 <Grid container spacing={4} ref={ref}>
//                     {features.map((f, i) => {
//                         const delay = 0.05 + i * 0.05;
//                         return (
//                             <Grid item xs={12} md={6} key={f.title}>
//                                 <Card
//                                     elevation={0}
//                                     sx={{
//                                         position: "relative",
//                                         zIndex: 0,
//                                         borderRadius: 4,
//                                         overflow: "hidden",
//                                         height: 280,
//                                         "&::before": {
//                                             content: '""',
//                                             position: "absolute",
//                                             inset: 0,
//                                             backgroundImage: bgFor(f.image),
//                                             backgroundSize: "cover",
//                                             backgroundPosition: "center",
//                                             transform: "scale(1.02)",
//                                             transition: "transform .6s ease",
//                                             zIndex: 0,
//                                             pointerEvents: "none",
//                                         },
//                                         "&::after": {
//                                             content: '""',
//                                             position: "absolute",
//                                             inset: 0,
//                                             background:
//                                                 "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0) 75%)",
//                                             zIndex: 1,
//                                             pointerEvents: "none",
//                                         },
//                                         border: `1px solid ${theme.palette.common.white}1A`,
//                                         boxShadow:
//                                             theme.palette.mode === "light"
//                                                 ? "0 18px 44px rgba(0,0,0,0.16)"
//                                                 : "0 18px 44px rgba(0,0,0,0.35)",
//                                         transform: inView
//                                             ? "none"
//                                             : "translateY(16px)",
//                                         opacity: inView ? 1 : 0,
//                                         animation: `fadeUp .6s ease forwards`,
//                                         animationDelay: `${delay}s`,
//                                         transition: "box-shadow .35s ease",
//                                         "&:hover": {
//                                             boxShadow:
//                                                 theme.palette.mode === "light"
//                                                     ? "0 26px 64px rgba(0,0,0,0.22)"
//                                                     : "0 26px 64px rgba(0,0,0,0.45)",
//                                             "&::before": {
//                                                 transform: "scale(1.06)",
//                                             },
//                                         },
//                                     }}
//                                 >
//                                     <CardActionArea
//                                         // onClick={() =>
//                                         //     navigate(
//                                         //         `/tjenester/${slugify(f.title)}`
//                                         //     )
//                                         // }
//                                         sx={{
//                                             position: "relative",
//                                             height: "100%",
//                                             pointerEvents: "auto",
//                                             zIndex: 2,
//                                         }}
//                                     >
//                                         <CardContent
//                                             sx={{
//                                                 position: "absolute",
//                                                 left: 0,
//                                                 right: 0,
//                                                 bottom: 0,
//                                                 p: { xs: 2.5, sm: 3 },
//                                                 color: "#fff",
//                                                 zIndex: 3,
//                                             }}
//                                         >
//                                             {/* ✅ Kun farge på ikon endret */}
//                                             <Box
//                                                 sx={{
//                                                     width: 56,
//                                                     height: 56,
//                                                     borderRadius: "16px",
//                                                     display: "grid",
//                                                     placeItems: "center",
//                                                     mb: 1.5,
//                                                     backgroundColor:
//                                                         theme.palette.primary
//                                                             .main,
//                                                     color: "#fff",
//                                                     boxShadow:
//                                                         "0 6px 16px rgba(0,0,0,0.25)",
//                                                 }}
//                                             >
//                                                 {f.icon}
//                                             </Box>

//                                             <Typography
//                                                 variant="h4"
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     lineHeight: 1.15,
//                                                     letterSpacing: "-0.01em",
//                                                 }}
//                                             >
//                                                 {f.title}
//                                             </Typography>
//                                             <Typography
//                                                 variant="body1"
//                                                 sx={{ mt: 0.75, opacity: 0.95 }}
//                                             >
//                                                 {f.description}
//                                             </Typography>

//                                             <Box
//                                                 sx={{
//                                                     mt: 1.25,
//                                                     fontSize: 14,
//                                                     fontWeight: 700,
//                                                     letterSpacing: ".02em",
//                                                     opacity: 0.95,
//                                                     display: "inline-flex",
//                                                     alignItems: "center",
//                                                 }}
//                                             >
//                                                 {/* Les mer{" "} */}
//                                                 <Box
//                                                     component="span"
//                                                     aria-hidden
//                                                     sx={{
//                                                         ml: 1,
//                                                         transform:
//                                                             "translateY(1px)",
//                                                     }}
//                                                 >
//                                                     {/* → */}
//                                                 </Box>
//                                             </Box>
//                                         </CardContent>
//                                     </CardActionArea>
//                                 </Card>
//                             </Grid>
//                         );
//                     })}
//                 </Grid>
//             </Container>

//             {/* Keyframes */}
//             <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//         </Box>
//     );
// }

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

// ✅ Ikoner
import BuildIcon from "@mui/icons-material/Build";
import BoltIcon from "@mui/icons-material/Bolt";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import RoofingIcon from "@mui/icons-material/Roofing";
import YardIcon from "@mui/icons-material/Yard";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandymanIcon from "@mui/icons-material/Handyman";

// 🖼️ Premium: bakgrunnsbilder for hvert kort (bytt til dine egne filer)
import imgElektriker from "../../assets/privateImages/ai-elektriker.jpg";
import imgTømrer from "../../assets/privateImages/ai-tømrer.jpg";
import imgVaktmester from "../../assets/privateImages/ai-husvask.jpg";
import boligVask from "../../assets/privateImages/ai-boligvask.jpg";
import imgGartner from "../../assets/privateImages/ai-gartner.jpg";
import imgBilmekaniker from "../../assets/privateImages/ai-bilmekaniker.jpg";
import imgRørlegger from "../../assets/privateImages/ai-rørlegger.jpg";
import imgBlikkenslager from "../../assets/privateImages/ai-blikkenslager.jpg";

// 🧩 Tjenesteliste
const features = [
    {
        title: "Tømrertjenester",
        icon: <BuildIcon sx={{ fontSize: 22 }} />,
        description:
            "Presist arbeid, solide materialer og varige løsninger for et resultat som både ser bra ut og holder over tid.",
        image: imgTømrer,
    },
    {
        title: "Elektrikerarbeid",
        icon: <BoltIcon sx={{ fontSize: 22 }} />,
        description:
            "Sikre installasjoner, energieffektive løsninger og fagmessig utført arbeid – for et trygt og moderne hjem.",
        image: imgElektriker,
    },
    {
        title: "Rørleggertjenester",
        icon: <PlumbingIcon sx={{ fontSize: 22 }} />,
        description:
            "Installasjon, vedlikehold og reparasjon av rør, kraner og sanitæranlegg utført trygt og profesjonelt.",
        image: imgRørlegger,
    },
    {
        title: "Bilmekaniker",
        icon: <CarRepairIcon sx={{ fontSize: 22 }} />,
        description:
            "Service, reparasjon og vedlikehold av bilen – for trygg, effektiv og problemfri kjøring året rundt.",
        image: imgBilmekaniker,
    },
    {
        title: "Blikkenslager",
        icon: <RoofingIcon sx={{ fontSize: 22 }} />,
        description:
            "Montering og vedlikehold av tak, beslag og fasadedetaljer – for et tett, varig og profesjonelt resultat.",
        image: imgBlikkenslager,
    },
    {
        title: "Gartner",
        icon: <YardIcon sx={{ fontSize: 22 }} />,
        description:
            "Plenklipp, beskjæring, ugressfjerning og sesongrydding – for en velstelt og innbydende hage hele året.",
        image: imgGartner,
    },
    {
        title: "Fasade & takvask",
        icon: <CleaningServicesIcon sx={{ fontSize: 22 }} />,
        description:
            "Grundig vask av tak, fasader og utvendige flater – for et rent, trygt og velholdt bygg hele året.",
        image: imgVaktmester,
    },
    {
        title: "Renhold",
        icon: <HandymanIcon sx={{ fontSize: 22 }} />,
        description:
            "Effektivt og grundig renhold av både private og næringsbygg – for et rent, ryddig og trivelig miljø hver dag.",
        image: boligVask,
    },
];

// Slugify for ruter
const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

export default function FeaturesSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Fallback-bakgrunn
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
                        Medlemsfordeler for private og bedrifter
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
                        resultat – med fleksible avtaler og trygge leverandører.
                    </Typography>
                </Box>

                {/* Kortvisning */}
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
                                        height: 280, // ✅ Alle kort samme høyde
                                        display: "block",
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
                                            zIndex: 2,
                                            display: "flex",
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
                                                zIndex: 3,
                                            }}
                                        >
                                            {/* ✅ RUND ikonbakgrunn + konsistent størrelse */}
                                            <Box
                                                sx={{
                                                    width: 45,
                                                    height: 45,
                                                    borderRadius: "50%", // ⭕️ Rund
                                                    display: "grid",
                                                    placeItems: "center",
                                                    mb: 1.5,
                                                    bgcolor:
                                                        theme.palette.primary
                                                            .light,
                                                    color: theme.palette
                                                        .primary,
                                                    boxShadow:
                                                        "0 6px 16px rgba(0,0,0,0.25)",
                                                    flexShrink: 0,
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
                                                sx={{
                                                    mt: 0.75,
                                                    opacity: 0.95,
                                                }}
                                            >
                                                {f.description}
                                            </Typography>
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
