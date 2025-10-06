import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MUILink,
    Stack,
    IconButton,
    Button,
    Divider,
    useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// ⚙️ Tilpass enkelt her
const COMPANY = {
    name: "Rogaland Hage & Byggeservice",
    slogan: "Pålitelig hjelp til hage, vedlikehold og mindre byggoppdrag i Stavanger og Sandnes.",
    email: "rhb@rogalandhageogbyggservice.no",
    phone: "+47 93 22 09 88",
    address: "Stavanger & Sandnes", // ← bytt evt.
    org: "Org.nr: 000 000 000", // ← bytt/ta bort
    facebook: "#", // ← lenke eller fjern
    linkedin: "#", // ← lenke eller fjern
};

// ️🔧 Bytt til din logofil (hvit variant anbefales)
// import logoWhite from "../../assets/rhb-logo-white.svg";

export default function Footer() {
    const theme = useTheme();
    const year = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{ bgcolor: "#0b3d2e", color: "#fff", mt: "auto" }}
        >
            {/* TOP STRIPE */}
            <Box
                sx={{
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    py: { xs: 4, md: 5 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Stack spacing={1.2}>
                                {/* <Box component="img" src={logoWhite} alt={COMPANY.name} sx={{ height: 44, width: "auto" }} /> */}
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 700, letterSpacing: 0.2 }}
                                >
                                    {COMPANY.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        opacity: 0.9,
                                        maxWidth: 640,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {COMPANY.slogan}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                justifyContent={{ md: "flex-end" }}
                            >
                                <Button
                                    variant="contained"
                                    color="success"
                                    size="large"
                                    href="/contact"
                                    sx={{
                                        bgcolor: "#1f8a52",
                                        ":hover": { bgcolor: "#187246" },
                                        fontWeight: 700,
                                        borderRadius: 2,
                                    }}
                                >
                                    Få gratis befaring
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                    href="/about"
                                    sx={{
                                        borderColor: "rgba(255,255,255,0.6)",
                                        color: "#fff",
                                        borderRadius: 2,
                                    }}
                                >
                                    Les mer
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* LINK-OMRÅDE */}
            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
                <Grid container spacing={{ xs: 4, md: 6 }}>
                    {/* Tjenester */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 800, mb: 1.5 }}
                        >
                            Tjenester
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Plenklipp & kantklipp
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Hekk-klipp & beskjæring
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Trefelling & stubbefres
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Sesongrydding (vår/høst)
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Rens av takrenner
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Mindre bygg & vedlikehold
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Selskap */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 800, mb: 1.5 }}
                        >
                            Selskapet
                        </Typography>
                        <Stack spacing={1}>
                            <MUILink
                                href="/contact"
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.9 }}
                            >
                                Kontakt oss
                            </MUILink>
                            {/* <MUILink
                                href="/referanser"
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.9 }}
                            >
                                Referanser
                            </MUILink>
                            <MUILink
                                href="/priser"
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.9 }}
                            >
                                Priser
                            </MUILink> */}
                            <MUILink
                                href="/about"
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.9 }}
                            >
                                Spørsmål & svar
                            </MUILink>
                            <MUILink
                                href="/loginPage"
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.9 }}
                            >
                                Admin
                            </MUILink>
                        </Stack>
                    </Grid>

                    {/* Kontakt */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 800, mb: 1.5 }}
                        >
                            Kontakt
                        </Typography>
                        <Stack spacing={1.2}>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                {COMPANY.address}
                            </Typography>
                            <MUILink
                                variant="body2"
                                href={`tel:${COMPANY.phone}`}
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.95 }}
                            >
                                Telefon: {COMPANY.phone}
                            </MUILink>
                            <MUILink
                                variant="body2"
                                href={`mailto:${COMPANY.email}`}
                                underline="hover"
                                color="inherit"
                                sx={{ opacity: 0.95 }}
                            >
                                E‑post: {COMPANY.email}
                            </MUILink>
                            <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
                                {COMPANY.facebook &&
                                    COMPANY.facebook !== "#" && (
                                        <IconButton
                                            size="small"
                                            aria-label="Facebook"
                                            component="a"
                                            href={COMPANY.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: "#fff" }}
                                        >
                                            <FacebookIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                {COMPANY.linkedin &&
                                    COMPANY.linkedin !== "#" && (
                                        <IconButton
                                            size="small"
                                            aria-label="LinkedIn"
                                            component="a"
                                            href={COMPANY.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: "#fff" }}
                                        >
                                            <LinkedInIcon fontSize="small" />
                                        </IconButton>
                                    )}
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Åpningstider / Juridisk */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 800, mb: 1.5 }}
                        >
                            Åpningstider
                        </Typography>
                        <Stack spacing={0.6} sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Man–Fre: 08:00–18:00
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Lørdag: 10:00–15:00
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Søndag: Stengt
                            </Typography>
                        </Stack>
                        {COMPANY.org && (
                            <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                {COMPANY.org}
                            </Typography>
                        )}
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        borderColor: "rgba(255,255,255,0.12)",
                        my: { xs: 4, md: 6 },
                    }}
                />

                {/* Bottom bar */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1.5, sm: 3 }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                >
                    <Typography variant="body2" sx={{ opacity: 0.75 }}>
                        © {year} {COMPANY.name}. Alle rettigheter reservert
                    </Typography>
                    {/* <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 1, sm: 3 }}
                    >
                        <MUILink
                            href="/personvern"
                            underline="hover"
                            color="inherit"
                            sx={{ opacity: 0.85 }}
                        >
                            Personvern
                        </MUILink>
                        <MUILink
                            href="/vilkar"
                            underline="hover"
                            color="inherit"
                            sx={{ opacity: 0.85 }}
                        >
                            Vilkår
                        </MUILink>
                        <MUILink
                            href="/cookies"
                            underline="hover"
                            color="inherit"
                            sx={{ opacity: 0.85 }}
                        >
                            Informasjonskapsler
                        </MUILink>
                    </Stack> */}
                </Stack>
            </Container>
        </Box>
    );
}
