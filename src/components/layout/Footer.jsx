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
    alpha,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const COMPANY = {
    name: "Driftli AS",
    slogan: "Profesjonelle fordeler for bygg, bil og fritid.",
    email: "post@driftli.no",
    phone: "+47 93 22 09 88",
    address: "Stavanger & Sandnes",
    org: "Org.nr: 936 366 821",
    facebook: "#",
    linkedin: "#",
};

export default function Footer() {
    const theme = useTheme();
    const year = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.common.white,
                mt: "auto",
            }}
        >
            {/* TOP STRIPE */}
            <Box
                sx={{
                    borderBottom: `1px solid ${alpha(
                        theme.palette.common.white,
                        0.12
                    )}`,
                    py: { xs: 4, md: 5 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Stack spacing={1.2}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        letterSpacing: 0.2,
                                    }}
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
                                {/* Gull-gradient knapp */}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="tel:+4793220988"
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.3,
                                        fontWeight: 800,
                                        textTransform: "none",
                                        color: theme.palette.secondary
                                            .contrastText,
                                        backgroundColor:
                                            theme.palette.secondary.main,
                                        backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark})`,
                                        boxShadow: `0 8px 20px ${alpha(
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
                                            boxShadow: `0 12px 26px ${alpha(
                                                theme.palette.secondary.dark,
                                                0.5
                                            )}`,
                                        },
                                        transition: "all .25s ease",
                                    }}
                                >
                                    Kontakt oss
                                </Button>

                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                    href="/about"
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1.3,
                                        fontWeight: 700,
                                        textTransform: "none",
                                        borderColor: alpha(
                                            theme.palette.common.white,
                                            0.6
                                        ),
                                        color: theme.palette.common.white,
                                        "&:hover": {
                                            borderColor:
                                                theme.palette.common.white,
                                            backgroundColor: alpha(
                                                theme.palette.common.white,
                                                0.1
                                            ),
                                        },
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
                            {[
                                "Tømrertjenester",
                                "Elektriker",
                                "Rørlegger",
                                "Bilmekaniker",
                                "Blikkenslager",
                                "Fasade og takvask",
                                "Renhold",
                                "Gartner",
                            ].map((service) => (
                                <Typography
                                    key={service}
                                    variant="body2"
                                    sx={{ opacity: 0.9 }}
                                >
                                    {service}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Selskapet */}
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
                                E-post: {COMPANY.email}
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
                        borderColor: alpha(theme.palette.common.white, 0.12),
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
                </Stack>
            </Container>
        </Box>
    );
}
