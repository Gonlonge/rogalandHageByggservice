// // import { useState } from "react";
// // import {
// //     Box,
// //     Container,
// //     Typography,
// //     Grid,
// //     TextField,
// //     Button,
// //     useTheme,
// //     MenuItem,
// //     Snackbar,
// //     Alert,
// //     CircularProgress,
// //     Stack,
// //     Link as MuiLink,
// // } from "@mui/material";
// // import SendIcon from "@mui/icons-material/Send";
// // import EmailIcon from "@mui/icons-material/Email";
// // import PhoneIcon from "@mui/icons-material/Phone";
// // import { useInView } from "react-intersection-observer";
// // import { db } from "../../firebaseConfig";
// // import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// // const inquiryTypes = [
// //     { value: "general", label: "Generell forespørsel" },
// //     { value: "befaring", label: "Ønsker befaring" },
// //     { value: "pricing", label: "Pris/tilbud" },
// // ];

// // const contactPersons = [
// //     {
// //         name: "Alexander Håland",
// //         role: "Daglig leder / Prosjekt",
// //         email: "rhb@rogalandhageogbyggservice.no",
// //         phone: "+47 93 22 09 88",
// //         photoUrl: "/src/assets/workers/alex.jpg",
// //     },
// //     {
// //         name: "Àlēx Mäldé",
// //         role: "Drift & kundekontakt",
// //         email: "rhb@rogalandhageogbyggservice.no",
// //         phone: "+47 93 22 09 88",
// //         photoUrl: "/src/assets/workers/alex.jpg",
// //     },
// // ];

// // function ContactForm() {
// //     const theme = useTheme();
// //     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

// //     const [formData, setFormData] = useState({
// //         firstName: "",
// //         lastName: "",
// //         email: "",
// //         company: "",
// //         phone: "",
// //         inquiryType: "general",
// //         message: "",
// //     });

// //     const [errors, setErrors] = useState({});
// //     const [snackbar, setSnackbar] = useState({
// //         open: false,
// //         message: "",
// //         severity: "success",
// //     });
// //     const [loading, setLoading] = useState(false);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({ ...formData, [name]: value });
// //         if (errors[name]) setErrors({ ...errors, [name]: "" });
// //     };

// //     const validate = () => {
// //         const newErrors = {};
// //         if (!formData.firstName.trim())
// //             newErrors.firstName = "Fornavn er påkrevd";
// //         if (!formData.lastName.trim())
// //             newErrors.lastName = "Etternavn er påkrevd";

// //         if (!formData.email.trim()) {
// //             newErrors.email = "E-post er påkrevd";
// //         } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
// //             newErrors.email = "E-post er ugyldig";
// //         }

// //         if (!formData.company.trim())
// //             newErrors.company = "Firmanavn er påkrevd";

// //         if (
// //             formData.phone &&
// //             !/^[0-9 +()\-]{6,}$/.test(formData.phone.trim())
// //         ) {
// //             newErrors.phone = "Telefonnummer ser ugyldig ut";
// //         }

// //         if (!formData.message.trim()) newErrors.message = "Melding er påkrevd";
// //         return newErrors;
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const validationErrors = validate();
// //         if (Object.keys(validationErrors).length > 0) {
// //             setErrors(validationErrors);
// //             return;
// //         }

// //         try {
// //             setLoading(true);
// //             await addDoc(collection(db, "contactMessages"), {
// //                 ...formData,
// //                 createdAt: serverTimestamp(),
// //                 source: "rogaland-hage-web",
// //             });

// //             setSnackbar({
// //                 open: true,
// //                 message: "Takk! Vi har mottatt henvendelsen din.",
// //                 severity: "success",
// //             });

// //             setFormData({
// //                 firstName: "",
// //                 lastName: "",
// //                 email: "",
// //                 company: "",
// //                 phone: "",
// //                 inquiryType: "general",
// //                 message: "",
// //             });
// //             setErrors({});
// //         } catch (error) {
// //             console.error("Firebase-feil:", error);
// //             setSnackbar({
// //                 open: true,
// //                 message: "Noe gikk galt. Prøv igjen senere.",
// //                 severity: "error",
// //             });
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

// //     return (
// //         <Box sx={{ py: 8 }}>
// //             <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
// //                 <Grid container spacing={6}>
// //                     {/* Left side – contacts */}
// //                     <Grid
// //                         item
// //                         xs={12}
// //                         md={5}
// //                         className={inView ? "fade-in" : ""}
// //                     >
// //                         <Box sx={{ maxWidth: 520 }}>
// //                             <Typography
// //                                 variant="h2"
// //                                 component="h1"
// //                                 sx={{ fontWeight: 700, mb: 1 }}
// //                             >
// //                                 Kontakt Rogaland Hage & Byggeservice
// //                             </Typography>

// //                             <Typography
// //                                 variant="body1"
// //                                 sx={{
// //                                     mb: 4,
// //                                     color: theme.palette.text.secondary,
// //                                     maxWidth: 480,
// //                                 }}
// //                             >
// //                                 Vi hjelper borettslag, bedrifter og private i
// //                                 Rogaland med plen, hekk, trefelling,
// //                                 sesongrydding og små bygg/vedlikehold. Kontakt
// //                                 oss direkte eller bruk skjemaet ved siden av
// //                             </Typography>

// //                             <Stack spacing={4}>
// //                                 {contactPersons.map((p) => (
// //                                     <Stack
// //                                         key={p.email}
// //                                         direction={{ xs: "column", sm: "row" }}
// //                                         spacing={2}
// //                                         alignItems="flex-start"
// //                                     >
// //                                         <Box
// //                                             component="img"
// //                                             src={p.photoUrl}
// //                                             alt={p.name}
// //                                             sx={{
// //                                                 width: { xs: 140, sm: 140 },
// //                                                 height: { xs: 140, sm: 140 },
// //                                                 objectFit: "cover",
// //                                                 borderRadius: 2,
// //                                                 flexShrink: 0,
// //                                             }}
// //                                         />
// //                                         <Box sx={{ flex: 1 }}>
// //                                             <Typography
// //                                                 variant="subtitle1"
// //                                                 fontWeight={700}
// //                                             >
// //                                                 {p.name}
// //                                             </Typography>
// //                                             <Typography
// //                                                 variant="body2"
// //                                                 color="text.secondary"
// //                                                 sx={{ mb: 1 }}
// //                                             >
// //                                                 {p.role}
// //                                             </Typography>
// //                                             <Stack spacing={0.5}>
// //                                                 <MuiLink
// //                                                     href={`mailto:${p.email}`}
// //                                                     underline="hover"
// //                                                     variant="body2"
// //                                                     sx={{
// //                                                         display: "flex",
// //                                                         alignItems: "center",
// //                                                     }}
// //                                                 >
// //                                                     <EmailIcon
// //                                                         sx={{
// //                                                             fontSize: 16,
// //                                                             mr: 0.5,
// //                                                         }}
// //                                                     />
// //                                                     {p.email}
// //                                                 </MuiLink>
// //                                                 <MuiLink
// //                                                     href={`tel:${p.phone.replace(
// //                                                         /\s+/g,
// //                                                         ""
// //                                                     )}`}
// //                                                     underline="hover"
// //                                                     variant="body2"
// //                                                     sx={{
// //                                                         display: "flex",
// //                                                         alignItems: "center",
// //                                                     }}
// //                                                 >
// //                                                     <PhoneIcon
// //                                                         sx={{
// //                                                             fontSize: 16,
// //                                                             mr: 0.5,
// //                                                         }}
// //                                                     />
// //                                                     {p.phone}
// //                                                 </MuiLink>
// //                                             </Stack>
// //                                         </Box>
// //                                     </Stack>
// //                                 ))}
// //                             </Stack>
// //                         </Box>
// //                     </Grid>

// //                     {/* Right side – form */}
// //                     <Grid
// //                         item
// //                         xs={12}
// //                         md={7}
// //                         ref={ref}
// //                         className={inView ? "slide-in-right" : ""}
// //                         sx={{ animationDelay: "0.2s" }}
// //                     >
// //                         <Box
// //                             sx={{
// //                                 p: { xs: 3, md: 4 },
// //                                 borderRadius: 4,
// //                                 border: "1px solid",
// //                                 borderColor: theme.palette.grey[200],
// //                             }}
// //                         >
// //                             <Typography
// //                                 variant="h5"
// //                                 fontWeight={600}
// //                                 sx={{ mb: 3 }}
// //                             >
// //                                 Send oss en melding
// //                             </Typography>

// //                             <form onSubmit={handleSubmit} noValidate>
// //                                 <Grid container spacing={3}>
// //                                     <Grid item xs={12} sm={6}>
// //                                         <TextField
// //                                             label="Fornavn"
// //                                             name="firstName"
// //                                             value={formData.firstName}
// //                                             onChange={handleChange}
// //                                             fullWidth
// //                                             required
// //                                             error={!!errors.firstName}
// //                                             helperText={errors.firstName}
// //                                         />
// //                                     </Grid>
// //                                     <Grid item xs={12} sm={6}>
// //                                         <TextField
// //                                             label="Etternavn"
// //                                             name="lastName"
// //                                             value={formData.lastName}
// //                                             onChange={handleChange}
// //                                             fullWidth
// //                                             required
// //                                             error={!!errors.lastName}
// //                                             helperText={errors.lastName}
// //                                         />
// //                                     </Grid>
// //                                     <Grid item xs={12}>
// //                                         <TextField
// //                                             label="E-post"
// //                                             name="email"
// //                                             type="email"
// //                                             value={formData.email}
// //                                             onChange={handleChange}
// //                                             fullWidth
// //                                             required
// //                                             error={!!errors.email}
// //                                             helperText={errors.email}
// //                                         />
// //                                     </Grid>
// //                                     <Grid item xs={12} sm={6}>
// //                                         <TextField
// //                                             label="Firma"
// //                                             name="company"
// //                                             value={formData.company}
// //                                             onChange={handleChange}
// //                                             fullWidth
// //                                             required
// //                                             error={!!errors.company}
// //                                             helperText={errors.company}
// //                                         />
// //                                     </Grid>
// //                                     <Grid item xs={12} sm={6}>
// //                                         <TextField
// //                                             label="Telefon (valgfritt)"
// //                                             name="phone"
// //                                             value={formData.phone}
// //                                             onChange={handleChange}
// //                                             fullWidth
// //                                             error={!!errors.phone}
// //                                             helperText={errors.phone}
// //                                         />
// //                                     </Grid>
// //                                     <Grid item xs={12}>
// //                                         <TextField
// //                                             select
// //                                             label="Type henvendelse"
// //                                             name="inquiryType"
// //                                             value={formData.inquiryType}
// //                                             onChange={handleChange}
// //                                             fullWidth
// //                                         >
// //                                             {inquiryTypes.map((option) => (
// //                                                 <MenuItem
// //                                                     key={option.value}
// //                                                     value={option.value}
// //                                                 >
// //                                                     {option.label}
// //                                                 </MenuItem>
// //                                             ))}
// //                                         </TextField>
// //                                     </Grid>
// //                                     <Grid item xs={12}>
// //                                         <TextField
// //                                             label="Din melding"
// //                                             name="message"
// //                                             value={formData.message}
// //                                             onChange={handleChange}
// //                                             multiline
// //                                             rows={5}
// //                                             fullWidth
// //                                             required
// //                                             error={!!errors.message}
// //                                             helperText={errors.message}
// //                                         />
// //                                     </Grid>
// //                                     <Grid item xs={12}>
// //                                         <Button
// //                                             type="submit"
// //                                             variant="contained"
// //                                             color="primary"
// //                                             size="large"
// //                                             endIcon={!loading && <SendIcon />}
// //                                             disabled={loading}
// //                                             sx={{
// //                                                 py: 1.5,
// //                                                 px: 4,
// //                                                 borderRadius: "8px",
// //                                                 fontWeight: 600,
// //                                             }}
// //                                         >
// //                                             {loading ? (
// //                                                 <CircularProgress size={22} />
// //                                             ) : (
// //                                                 "Send henvendelse"
// //                                             )}
// //                                         </Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </form>
// //                         </Box>
// //                     </Grid>
// //                 </Grid>
// //             </Container>

// //             <Snackbar
// //                 open={snackbar.open}
// //                 autoHideDuration={6000}
// //                 onClose={handleCloseSnackbar}
// //                 anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
// //             >
// //                 <Alert
// //                     onClose={handleCloseSnackbar}
// //                     severity={snackbar.severity}
// //                     elevation={6}
// //                     variant="filled"
// //                 >
// //                     {snackbar.message}
// //                 </Alert>
// //             </Snackbar>
// //         </Box>
// //     );
// // }

// // export default ContactForm;

// import { useState } from "react";
// import {
//     Box,
//     Container,
//     Typography,
//     Grid,
//     TextField,
//     Button,
//     useTheme,
//     MenuItem,
//     Snackbar,
//     Alert,
//     CircularProgress,
//     Stack,
//     Link as MuiLink,
// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { useInView } from "react-intersection-observer";
// import { db } from "../../firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// /** ✅ Import images instead of using "/src/..." */
// import aleksanderPhoto from "../../assets/workers/aleksander.png";
// // If the second person has a different file, change this import:
// import alexPhoto from "../../assets/workers/alex.jpg";

// const inquiryTypes = [
//     { value: "Generell forespørsel", label: "Generell forespørsel" },
//     { value: "befaring", label: "Ønsker befaring" },
//     { value: "Bli medlem", label: "Bli medlem" },
//     { value: "Pris/tilbud", label: "Pris/tilbud" },
// ];

// const contactPersons = [
//     {
//         name: "Alexander Håland",
//         role: "Daglig leder / Prosjekt",
//         email: "post@driftli.no",
//         phone: "+47 93 22 09 88",
//         photoUrl: aleksanderPhoto,
//     },
//     {
//         name: "Àlēx Mäldé",
//         role: "Drift & kundekontakt",
//         email: "post@driftli.no",
//         phone: "+47 93 22 09 88",
//         photoUrl: alexPhoto,
//     },
// ];

// function ContactForm() {
//     const theme = useTheme();
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         company: "",
//         phone: "",
//         inquiryType: "general",
//         message: "",
//     });

//     const [errors, setErrors] = useState({});
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: "",
//         severity: "success",
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         if (errors[name]) setErrors({ ...errors, [name]: "" });
//     };

//     const validate = () => {
//         const newErrors = {};
//         if (!formData.firstName.trim())
//             newErrors.firstName = "Fornavn er påkrevd";
//         if (!formData.lastName.trim())
//             newErrors.lastName = "Etternavn er påkrevd";

//         if (!formData.email.trim()) {
//             newErrors.email = "E-post er påkrevd";
//         } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//             newErrors.email = "E-post er ugyldig";
//         }

//         if (!formData.company.trim())
//             newErrors.company = "Firmanavn er påkrevd";

//         if (
//             formData.phone &&
//             !/^[0-9 +()\-]{6,}$/.test(formData.phone.trim())
//         ) {
//             newErrors.phone = "Telefonnummer ser ugyldig ut";
//         }

//         if (!formData.message.trim()) newErrors.message = "Melding er påkrevd";
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         try {
//             setLoading(true);
//             await addDoc(collection(db, "contactMessages"), {
//                 ...formData,
//                 createdAt: serverTimestamp(),
//                 source: "rogaland-hage-web",
//             });

//             setSnackbar({
//                 open: true,
//                 message: "Takk! Vi har mottatt henvendelsen din.",
//                 severity: "success",
//             });

//             setFormData({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 company: "",
//                 phone: "",
//                 inquiryType: "general",
//                 message: "",
//             });
//             setErrors({});
//         } catch (error) {
//             console.error("Firebase-feil:", error);
//             setSnackbar({
//                 open: true,
//                 message: "Noe gikk galt. Prøv igjen senere.",
//                 severity: "error",
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

//     return (
//         <Box sx={{ py: 8 }}>
//             <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
//                 <Grid container spacing={6}>
//                     {/* Left side – contacts */}
//                     <Grid
//                         item
//                         xs={12}
//                         md={5}
//                         className={inView ? "fade-in" : ""}
//                     >
//                         <Box sx={{ maxWidth: 520 }}>
//                             <Typography
//                                 variant="h2"
//                                 component="h1"
//                                 sx={{ fontWeight: 700, mb: 1 }}
//                             >
//                                 Kontakt Driftli AS
//                             </Typography>

//                             <Typography
//                                 variant="body1"
//                                 sx={{
//                                     mb: 4,
//                                     color: theme.palette.text.secoprindary,
//                                     maxWidth: 480,
//                                 }}
//                             >
//                                 Vi hjelper borettslag, bedrifter og private i
//                                 Rogaland med alt innen drift og vedlikehold fra
//                                 tømrer, elektriker og rørlegger til renhold,
//                                 fasadevask og gartnerarbeid. Ta kontakt for et
//                                 fast og forutsigbart samarbeid
//                             </Typography>

//                             <Stack spacing={4}>
//                                 {contactPersons.map((p) => (
//                                     <Stack
//                                         key={p.email}
//                                         direction={{ xs: "column", sm: "row" }}
//                                         spacing={2}
//                                         alignItems="flex-start"
//                                     >
//                                         <Box
//                                             component="img"
//                                             src={p.photoUrl}
//                                             alt={p.name}
//                                             loading="lazy"
//                                             sx={{
//                                                 width: { xs: 140, sm: 140 },
//                                                 height: { xs: 140, sm: 140 },
//                                                 aspectRatio: "1 / 1", // holder rammen kvadratisk
//                                                 objectFit: "contain", // viser hele bildet uten cropping
//                                                 backgroundColor: (t) =>
//                                                     t.palette.grey[100], // diskret bakgrunn bak “letterboxing”
//                                                 borderRadius: 2,
//                                                 border: (t) =>
//                                                     `1px solid ${t.palette.grey[200]}`,
//                                                 flexShrink: 0,
//                                             }}
//                                         />

//                                         <Box sx={{ flex: 1 }}>
//                                             <Typography
//                                                 variant="subtitle1"
//                                                 fontWeight={700}
//                                             >
//                                                 {p.name}
//                                             </Typography>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="text.secondary"
//                                                 sx={{ mb: 1 }}
//                                             >
//                                                 {p.role}
//                                             </Typography>
//                                             <Stack spacing={0.5}>
//                                                 <MuiLink
//                                                     href={`mailto:${p.email}`}
//                                                     underline="hover"
//                                                     variant="body2"
//                                                     sx={{
//                                                         display: "flex",
//                                                         alignItems: "center",
//                                                         color: "inherit", // 🔹 behold tekstfarge fra parent
//                                                         textDecorationColor:
//                                                             "rgba(0,0,0,0.3)", // diskret strek ved hover
//                                                         "&:hover": {
//                                                             color: "inherit",
//                                                         }, // 🔹 ingen blåfarge ved hover
//                                                     }}
//                                                 >
//                                                     <EmailIcon
//                                                         sx={{
//                                                             fontSize: 16,
//                                                             mr: 0.5,
//                                                         }}
//                                                     />
//                                                     {p.email}
//                                                 </MuiLink>

//                                                 <MuiLink
//                                                     href={`tel:${p.phone.replace(
//                                                         /\s+/g,
//                                                         ""
//                                                     )}`}
//                                                     underline="hover"
//                                                     variant="body2"
//                                                     sx={{
//                                                         display: "flex",
//                                                         alignItems: "center",
//                                                         color: "inherit", // 🔹 samme som over
//                                                         textDecorationColor:
//                                                             "rgba(0,0,0,0.3)",
//                                                         "&:hover": {
//                                                             color: "inherit",
//                                                         },
//                                                     }}
//                                                 >
//                                                     <PhoneIcon
//                                                         sx={{
//                                                             fontSize: 16,
//                                                             mr: 0.5,
//                                                         }}
//                                                     />
//                                                     {p.phone}
//                                                 </MuiLink>
//                                             </Stack>
//                                         </Box>
//                                     </Stack>
//                                 ))}
//                             </Stack>
//                         </Box>
//                     </Grid>

//                     {/* Right side – form */}
//                     <Grid
//                         item
//                         xs={12}
//                         md={7}
//                         ref={ref}
//                         className={inView ? "slide-in-right" : ""}
//                         sx={{ animationDelay: "0.2s" }}
//                     >
//                         <Box
//                             sx={{
//                                 p: { xs: 3, md: 4 },
//                                 borderRadius: 4,
//                                 border: "1px solid",
//                                 borderColor: theme.palette.grey[200],
//                             }}
//                         >
//                             <Typography
//                                 variant="h5"
//                                 fontWeight={600}
//                                 sx={{ mb: 3 }}
//                             >
//                                 Send oss en melding
//                             </Typography>

//                             <form onSubmit={handleSubmit} noValidate>
//                                 <Grid container spacing={3}>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             label="Fornavn"
//                                             name="firstName"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                             fullWidth
//                                             required
//                                             error={!!errors.firstName}
//                                             helperText={errors.firstName}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             label="Etternavn"
//                                             name="lastName"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                             fullWidth
//                                             required
//                                             error={!!errors.lastName}
//                                             helperText={errors.lastName}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             label="E-post"
//                                             name="email"
//                                             type="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             fullWidth
//                                             required
//                                             error={!!errors.email}
//                                             helperText={errors.email}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             label="Firma"
//                                             name="company"
//                                             value={formData.company}
//                                             onChange={handleChange}
//                                             fullWidth
//                                             required
//                                             error={!!errors.company}
//                                             helperText={errors.company}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             label="Telefon (valgfritt)"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             fullWidth
//                                             error={!!errors.phone}
//                                             helperText={errors.phone}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             select
//                                             label="Type henvendelse"
//                                             name="inquiryType"
//                                             value={formData.inquiryType}
//                                             onChange={handleChange}
//                                             fullWidth
//                                         >
//                                             {inquiryTypes.map((option) => (
//                                                 <MenuItem
//                                                     key={option.value}
//                                                     value={option.value}
//                                                 >
//                                                     {option.label}
//                                                 </MenuItem>
//                                             ))}
//                                         </TextField>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             label="Din melding"
//                                             name="message"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             multiline
//                                             rows={5}
//                                             fullWidth
//                                             required
//                                             error={!!errors.message}
//                                             helperText={errors.message}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Button
//                                             type="submit"
//                                             variant="contained"
//                                             color="primary"
//                                             size="large"
//                                             endIcon={!loading && <SendIcon />}
//                                             disabled={loading}
//                                             sx={{
//                                                 py: 1.5,
//                                                 px: 4,
//                                                 borderRadius: "8px",
//                                                 fontWeight: 600,
//                                             }}
//                                         >
//                                             {loading ? (
//                                                 <CircularProgress size={22} />
//                                             ) : (
//                                                 "Send henvendelse"
//                                             )}
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </form>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>

//             <Snackbar
//                 open={snackbar.open}
//                 autoHideDuration={6000}
//                 onClose={handleCloseSnackbar}
//                 anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//             >
//                 <Alert
//                     onClose={handleCloseSnackbar}
//                     severity={snackbar.severity}
//                     elevation={6}
//                     variant="filled"
//                 >
//                     {snackbar.message}
//                 </Alert>
//             </Snackbar>
//         </Box>
//     );
// }

// export default ContactForm;
import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    useTheme,
    MenuItem,
    Snackbar,
    Alert,
    CircularProgress,
    Stack,
    Link as MuiLink,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useInView } from "react-intersection-observer";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/** ✅ Import images instead of using "/src/..." */
import aleksanderPhoto from "../../assets/workers/aleksander.png";
import alexPhoto from "../../assets/workers/alex.jpg";

const inquiryTypes = [
    { value: "Generell forespørsel", label: "Generell forespørsel" },
    { value: "befaring", label: "Ønsker befaring" },
    { value: "Bli medlem", label: "Bli medlem" },
    { value: "Pris/tilbud", label: "Pris/tilbud" },
];

const contactPersons = [
    {
        name: "Alexander Håland",
        role: "Daglig leder / Prosjekt",
        email: "post@driftli.no",
        phone: "+47 93 22 09 88",
        photoUrl: aleksanderPhoto,
    },
    {
        name: "Alexander Molde",
        role: "Salg / driftleder",
        email: "alex@driftli.no",
        phone: "+47 40 07 50 93",
        photoUrl: alexPhoto,
    },
];

function ContactForm() {
    const theme = useTheme();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: "Generell forespørsel", // ✅ forhåndsvalgt verdi
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim())
            newErrors.firstName = "Fornavn er påkrevd";
        if (!formData.lastName.trim())
            newErrors.lastName = "Etternavn er påkrevd";

        if (!formData.email.trim()) {
            newErrors.email = "E-post er påkrevd";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "E-post er ugyldig";
        }

        if (!formData.company.trim())
            newErrors.company = "Firmanavn er påkrevd";

        if (
            formData.phone &&
            !/^[0-9 +()\-]{6,}$/.test(formData.phone.trim())
        ) {
            newErrors.phone = "Telefonnummer ser ugyldig ut";
        }

        if (!formData.message.trim()) newErrors.message = "Melding er påkrevd";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);
            await addDoc(collection(db, "contactMessages"), {
                ...formData,
                createdAt: serverTimestamp(),
                source: "rogaland-hage-web",
            });

            setSnackbar({
                open: true,
                message: "Takk! Vi har mottatt henvendelsen din.",
                severity: "success",
            });

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                phone: "",
                inquiryType: "Generell forespørsel", // ✅ behold som default etter innsending
                message: "",
            });
            setErrors({});
        } catch (error) {
            console.error("Firebase-feil:", error);
            setSnackbar({
                open: true,
                message: "Noe gikk galt. Prøv igjen senere.",
                severity: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4 } }}>
                <Grid container spacing={6}>
                    {/* Left side – contacts */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        className={inView ? "fade-in" : ""}
                    >
                        <Box sx={{ maxWidth: 520 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{ fontWeight: 700, mb: 1 }}
                            >
                                Kontakt Driftli AS
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    color: theme.palette.text.secondary,
                                    maxWidth: 480,
                                }}
                            >
                                Vi hjelper borettslag, bedrifter og private i
                                Rogaland med alt innen drift og vedlikehold fra
                                tømrer, elektriker og rørlegger til renhold,
                                fasadevask og gartnerarbeid. Ta kontakt for et
                                fast og forutsigbart samarbeid
                            </Typography>

                            <Stack spacing={4}>
                                {contactPersons.map((p) => (
                                    <Stack
                                        key={p.email}
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={2}
                                        alignItems="flex-start"
                                    >
                                        <Box
                                            component="img"
                                            src={p.photoUrl}
                                            alt={p.name}
                                            loading="lazy"
                                            sx={{
                                                width: { xs: 140, sm: 140 },
                                                height: { xs: 140, sm: 140 },
                                                aspectRatio: "1 / 1",
                                                objectFit: "contain",
                                                backgroundColor: (t) =>
                                                    t.palette.grey[100],
                                                borderRadius: 2,
                                                border: (t) =>
                                                    `1px solid ${t.palette.grey[200]}`,
                                                flexShrink: 0,
                                            }}
                                        />

                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={700}
                                            >
                                                {p.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 1 }}
                                            >
                                                {p.role}
                                            </Typography>
                                            <Stack spacing={0.5}>
                                                <MuiLink
                                                    href={`mailto:${p.email}`}
                                                    underline="hover"
                                                    variant="body2"
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        color: "inherit",
                                                        textDecorationColor:
                                                            "rgba(0,0,0,0.3)",
                                                        "&:hover": {
                                                            color: "inherit",
                                                        },
                                                    }}
                                                >
                                                    <EmailIcon
                                                        sx={{
                                                            fontSize: 16,
                                                            mr: 0.5,
                                                        }}
                                                    />
                                                    {p.email}
                                                </MuiLink>

                                                <MuiLink
                                                    href={`tel:${p.phone.replace(
                                                        /\s+/g,
                                                        ""
                                                    )}`}
                                                    underline="hover"
                                                    variant="body2"
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        color: "inherit",
                                                        textDecorationColor:
                                                            "rgba(0,0,0,0.3)",
                                                        "&:hover": {
                                                            color: "inherit",
                                                        },
                                                    }}
                                                >
                                                    <PhoneIcon
                                                        sx={{
                                                            fontSize: 16,
                                                            mr: 0.5,
                                                        }}
                                                    />
                                                    {p.phone}
                                                </MuiLink>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right side – form */}
                    <Grid
                        item
                        xs={12}
                        md={7}
                        ref={ref}
                        className={inView ? "slide-in-right" : ""}
                        sx={{ animationDelay: "0.2s" }}
                    >
                        <Box
                            sx={{
                                p: { xs: 3, md: 4 },
                                borderRadius: 4,
                                border: "1px solid",
                                borderColor: theme.palette.grey[200],
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                sx={{ mb: 3 }}
                            >
                                Send oss en melding
                            </Typography>

                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Fornavn"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            fullWidth
                                            required
                                            error={!!errors.firstName}
                                            helperText={errors.firstName}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Etternavn"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            fullWidth
                                            required
                                            error={!!errors.lastName}
                                            helperText={errors.lastName}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="E-post"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            fullWidth
                                            required
                                            error={!!errors.email}
                                            helperText={errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Firma"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            fullWidth
                                            required
                                            error={!!errors.company}
                                            helperText={errors.company}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Telefon (valgfritt)"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            fullWidth
                                            error={!!errors.phone}
                                            helperText={errors.phone}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            select
                                            label="Type henvendelse"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            fullWidth
                                            required
                                        >
                                            {inquiryTypes.map((option) => (
                                                <MenuItem
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            label="Din melding"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            multiline
                                            rows={5}
                                            fullWidth
                                            required
                                            error={!!errors.message}
                                            helperText={errors.message}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            endIcon={!loading && <SendIcon />}
                                            disabled={loading}
                                            sx={{
                                                py: 1.5,
                                                px: 4,
                                                borderRadius: "8px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {loading ? (
                                                <CircularProgress size={22} />
                                            ) : (
                                                "Send henvendelse"
                                            )}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    elevation={6}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default ContactForm;
