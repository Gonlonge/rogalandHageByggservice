// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#43a047", // grønn (MUI green 600)
//             light: "#66bb6a", // grønn (green 400)
//             dark: "#2e7d32", // grønn (green 800)
//             contrastText: "#fff",
//         },
//         secondary: {
//             main: "#00a0b0",
//             light: "#33b3c1",
//             dark: "#007080",
//             contrastText: "#fff",
//         },
//         accent: {
//             main: "#ff8a65",
//             light: "#ffab91",
//             dark: "#e64a19",
//         },
//         success: {
//             main: "#4caf50",
//             light: "#81c784",
//             dark: "#388e3c",
//         },
//         warning: {
//             main: "#ff9800",
//             light: "#ffb74d",
//             dark: "#f57c00",
//         },
//         error: {
//             main: "#f44336",
//             light: "#e57373",
//             dark: "#d32f2f",
//         },
//         grey: {
//             50: "#fafafa",
//             100: "#f5f5f5",
//             200: "#eeeeee",
//             300: "#e0e0e0",
//             400: "#bdbdbd",
//             500: "#9e9e9e",
//             600: "#757575",
//             700: "#616161",
//             800: "#555555",
//             900: "#2e2e2e",
//         },
//         background: {
//             default: "#f9f9f9",
//             paper: "#ffffff",
//         },
//         text: {
//             primary: "rgba(0, 0, 0, 0.8)",
//             secondary: "rgba(0, 0, 0, 0.55)",
//             disabled: "rgba(0, 0, 0, 0.32)",
//         },
//     },
//     typography: {
//         fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//         h1: { fontWeight: 700, fontSize: "2.5rem", lineHeight: 1.2 },
//         h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.2 },
//         h3: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.2 },
//         h4: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.2 },
//         h5: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.2 },
//         h6: { fontWeight: 500, fontSize: "0.875rem", lineHeight: 1.2 },
//         body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.5 },
//         body2: { fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.5 },
//         button: {
//             fontWeight: 500,
//             fontSize: "0.875rem",
//             lineHeight: 1.75,
//             textTransform: "none",
//         },
//     },
//     spacing: 8,
//     shape: { borderRadius: 8 },
//     components: {
//         MuiButton: {
//             styleOverrides: {
//                 root: {
//                     borderRadius: 8,
//                     padding: "10px 24px",
//                     fontWeight: 500,
//                     textTransform: "none",
//                     boxShadow: "none",
//                     "&:hover": { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
//                 },
//                 containedPrimary: {
//                     "&:hover": {
//                         backgroundColor: "#2e7d32", // mørk grønn (tidl. #7e57c2)
//                     },
//                 },
//                 outlined: {
//                     borderWidth: 2,
//                     "&:hover": { borderWidth: 2 },
//                 },
//             },
//         },
//         MuiCard: {
//             styleOverrides: {
//                 root: {
//                     borderRadius: 12,
//                     boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
//                     overflow: "hidden",
//                 },
//             },
//         },
//         MuiAppBar: {
//             styleOverrides: {
//                 root: { boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)" },
//             },
//         },
//     },
// });

// export default theme;

// theme.js
// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        // 🔵 Hovedpalett – blå på hvit bakgrunn
        primary: {
            main: "#2F5EA8", // blå (brand)
            light: "#5F85C8",
            dark: "#1D3E73",
            contrastText: "#FFFFFF",
        },
        // 🔹 Sekundær – dyp blå/grå (UI-kontrast, AppBar, chips m.m.)
        secondary: {
            main: "#0D2B4A",
            light: "#274766",
            dark: "#081A2D",
            contrastText: "#FFFFFF",
        },

        // (valgfritt) Aksentblå for små highlights
        accent: {
            main: "#2F7FD3",
            light: "#5AA6F2",
            dark: "#125EAA",
        },

        // ✅ Semantiske farger (klassiske og nøytrale mot blått)
        success: {
            main: "#2E7D6A", // teal/grønn – spiller fint med blått
            light: "#4CAF93",
            dark: "#1E5A4C",
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#F59E0B", // amber
            light: "#FBC14A",
            dark: "#B36E06",
            contrastText: "#1A1A1A",
        },
        error: {
            main: "#D32F2F", // klassisk rød
            light: "#E57373",
            dark: "#9A0007",
            contrastText: "#FFFFFF",
        },

        // ⚪ Hvit nettside
        background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
        },

        text: {
            primary: "#1A1A1A",
            secondary: "rgba(0,0,0,0.62)",
            disabled: "rgba(0,0,0,0.38)",
        },

        divider: "#E6E9EF",
        grey: {
            50: "#f7f9fc",
            100: "#eef2f7",
            200: "#e3e8f0",
            300: "#cfd7e3",
            400: "#b6c2d4",
            500: "#8f9bb3",
            600: "#6b768a",
            700: "#515b6d",
            800: "#3a4453",
            900: "#252c36",
        },

        // 🌈 (valgfritt) Gradient-tokens for gjenbruk
        gradients: {
            primary: "linear-gradient(90deg, #5F85C8, #2F5EA8 60%, #1D3E73)",
            primaryHover:
                "linear-gradient(90deg, #5F85C8, #1D3E73 60%, #152C52)",
        },
    },

    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 700, fontSize: "2.5rem", lineHeight: 1.2 },
        h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.25 },
        h3: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.3 },
        h4: { fontWeight: 600, fontSize: "1.25rem" },
        h5: { fontWeight: 600, fontSize: "1rem" },
        h6: { fontWeight: 500, fontSize: "0.875rem" },
        body1: { fontSize: "1rem", lineHeight: 1.6 },
        body2: { fontSize: "0.95rem", lineHeight: 1.6 },
        button: { fontWeight: 600, textTransform: "none", letterSpacing: 0.3 },
    },

    spacing: 8,
    shape: { borderRadius: 10 },

    components: {
        MuiCssBaseline: {
            styleOverrides: (themeParam) => ({
                "html, body, #root": { height: "100%" },
                body: {
                    backgroundColor: themeParam.palette.background.default,
                    color: themeParam.palette.text.primary,
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                },
            }),
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#0D2B4A", // secondary.main
                    color: "#FFFFFF",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    borderBottom: "1px solid #E6E9EF",
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: "10px 22px",
                    fontWeight: 600,
                    boxShadow: "none",
                    transition: "all .2s ease",
                    "&:hover": { boxShadow: "0 4px 10px rgba(0,0,0,0.08)" },
                },
                // Primærknapp = blå
                containedPrimary: ({ theme }) => ({
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.main,
                    backgroundImage: theme.palette.gradients.primary,
                    "&:hover": {
                        backgroundImage: theme.palette.gradients.primaryHover,
                    },
                }),
                outlinedPrimary: {
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                },
                // Sekundærknapp = mørk blå (alternativ stil)
                containedSecondary: ({ theme }) => ({
                    color: theme.palette.secondary.contrastText,
                    backgroundColor: theme.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.dark,
                    },
                }),
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E9EF",
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: { borderColor: "#CFD7E3" },
                root: {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#B6C2D4",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2F5EA8",
                    },
                    backgroundColor: "#FFFFFF",
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                outlined: { borderColor: "#CFD7E3" },
            },
        },

        MuiDivider: {
            styleOverrides: { root: { borderColor: "#E6E9EF" } },
        },
    },
});

export default theme;
