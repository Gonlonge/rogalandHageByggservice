import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#43a047", // grønn (MUI green 600)
            light: "#66bb6a", // grønn (green 400)
            dark: "#2e7d32", // grønn (green 800)
            contrastText: "#fff",
        },
        secondary: {
            main: "#00a0b0",
            light: "#33b3c1",
            dark: "#007080",
            contrastText: "#fff",
        },
        accent: {
            main: "#ff8a65",
            light: "#ffab91",
            dark: "#e64a19",
        },
        success: {
            main: "#4caf50",
            light: "#81c784",
            dark: "#388e3c",
        },
        warning: {
            main: "#ff9800",
            light: "#ffb74d",
            dark: "#f57c00",
        },
        error: {
            main: "#f44336",
            light: "#e57373",
            dark: "#d32f2f",
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#555555",
            900: "#2e2e2e",
        },
        background: {
            default: "#f9f9f9",
            paper: "#ffffff",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.8)",
            secondary: "rgba(0, 0, 0, 0.55)",
            disabled: "rgba(0, 0, 0, 0.32)",
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 700, fontSize: "2.5rem", lineHeight: 1.2 },
        h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.2 },
        h3: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.2 },
        h4: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.2 },
        h5: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.2 },
        h6: { fontWeight: 500, fontSize: "0.875rem", lineHeight: 1.2 },
        body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.5 },
        body2: { fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.5 },
        button: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            textTransform: "none",
        },
    },
    spacing: 8,
    shape: { borderRadius: 8 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "10px 24px",
                    fontWeight: 500,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
                },
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: "#2e7d32", // mørk grønn (tidl. #7e57c2)
                    },
                },
                outlined: {
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                    overflow: "hidden",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: { boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)" },
            },
        },
    },
});

export default theme;
