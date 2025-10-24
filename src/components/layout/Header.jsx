import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    useMediaQuery,
    useTheme,
    Drawer,
    Stack,
    Divider,
    useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

// ✅ Logos
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";

function Header({ scrolled }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [user, setUser] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => setUser(u));
        return () => unsub();
    }, []);

    const pages = [
        { label: "Hjem", path: "/" },
        { label: "Tjenester", path: "/about" },
        { label: "Kontakt", path: "/contact" },
        ...(user ? [{ label: "Admin", path: "/admin" }] : []),
    ];

    const isHome = location.pathname === "/";
    const textColor = isHome ? "#fff" : "#000";

    // ⬇️ NYTT: trigge blur mye tidligere (8px)
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
    const isBlurred =
        typeof scrolled === "boolean" ? scrolled || trigger : trigger;

    const handleNavigate = (path) => {
        navigate(path);
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: isBlurred
                        ? isHome
                            ? "rgba(0,0,0,0.15)"
                            : "rgba(255,255,255,0.15)"
                        : "transparent",
                    backdropFilter: isBlurred ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isBlurred ? "blur(8px)" : "none",
                    transition:
                        "background-color 0.3s ease, backdrop-filter 0.3s ease",
                    boxShadow: isBlurred
                        ? "0px 2px 10px rgba(0,0,0,0.05)"
                        : "none",
                    color: textColor,
                    borderBottom: "none",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{ minHeight: { xs: 64, md: 80 } }}
                    >
                        {/* Desktop logo */}
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                mr: 2,
                                textDecoration: "none",
                                py: 0.5,
                            }}
                        >
                            <Box
                                component="img"
                                src={isHome ? logoWhite : logoBlack}
                                alt="Logo"
                                sx={{
                                    height: { md: 120, lg: 122 },
                                    width: "auto",
                                }}
                            />
                        </Box>

                        {/* Mobile logo */}
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: { xs: "flex", md: "none" },
                                alignItems: "center",
                                mr: 1,
                                textDecoration: "none",
                                py: 0.25,
                            }}
                        >
                            <Box
                                component="img"
                                src={isHome ? logoWhite : logoBlack}
                                alt="Logo"
                                sx={{ height: 80, width: "auto" }}
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop nav */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.path}
                                    onClick={() => handleNavigate(page.path)}
                                    sx={{
                                        mx: 1,
                                        my: 2,
                                        color: textColor,
                                        position: "relative",
                                        fontWeight:
                                            location.pathname === page.path
                                                ? 600
                                                : 500,
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 0,
                                            left: "50%",
                                            width:
                                                location.pathname === page.path
                                                    ? "100%"
                                                    : "0%",
                                            height: 2,
                                            backgroundColor: textColor,
                                            transition: "all 0.3s ease",
                                            transform: "translateX(-50%)",
                                        },
                                        "&:hover::after": { width: "100%" },
                                    }}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile menu button */}
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                                sx={{ color: textColor }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Full-screen mobile drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                keepMounted
                PaperProps={{
                    sx: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(6px)",
                        color: "#fff",
                    },
                }}
                ModalProps={{ disableScrollLock: true }}
            >
                {/* Drawer header */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 2,
                        py: 1.5,
                    }}
                >
                    <Box
                        component={RouterLink}
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src={logoWhite}
                            alt="Logo"
                            sx={{ height: 36, width: "auto" }}
                        />
                    </Box>
                    <IconButton
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        sx={{ color: "#fff" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

                {/* Drawer links */}
                <Box sx={{ px: 2 }}>
                    <Stack spacing={1} sx={{ mt: 2 }}>
                        {pages.map((page) => {
                            const active = location.pathname === page.path;
                            return (
                                <Button
                                    key={page.path}
                                    onClick={() => handleNavigate(page.path)}
                                    fullWidth
                                    sx={{
                                        justifyContent: "flex-start",
                                        py: 2,
                                        px: 1.5,
                                        fontSize: "1.25rem",
                                        textTransform: "none",
                                        color: "#fff",
                                        borderRadius: 2,
                                        ...(active && {
                                            background:
                                                "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                                        }),
                                        "&:hover": {
                                            background: "rgba(255,255,255,0.1)",
                                        },
                                    }}
                                >
                                    {page.label}
                                </Button>
                            );
                        })}
                    </Stack>
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ px: 2, py: 2, opacity: 0.7, fontSize: 12 }}>
                    © {new Date().getFullYear()} Driftli AS
                </Box>
            </Drawer>
        </>
    );
}

export default Header;
