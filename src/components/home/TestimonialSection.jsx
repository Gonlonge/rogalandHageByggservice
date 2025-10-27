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
