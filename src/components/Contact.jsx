import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {Box,Button,Container,TextField,Typography,Alert,CircularProgress,Paper,} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const FormikTextField = ({ name, label, multiline = false, rows = 1 }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <TextField
        {...field}
        label={label}
        fullWidth
        margin="normal"
        multiline={multiline}
        rows={rows}
        variant="outlined"
        color="primary"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    )}
  </Field>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = (values, resetForm, setSubmitting) => {
    const SERVICE_ID = "service_1s170i5";
    const TEMPLATE_ID = "template_4ubb8b6";
    const PUBLIC_KEY = "J7RpXmc9aZbyrY4w5";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setSubmitError(null);
        resetForm();
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitError("Failed to send message. Please try again later.");
        setSubmitting(false);
        console.error("EmailJS error:", error);
      });
  };

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
        >
          <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body2" align="center" color="#1769aa" mb={3}>
              Feel free to drop a message. I'd love to connect!
            </Typography>

            {submitted && (
              <Alert severity="success" onClose={() => setSubmitted(false)} sx={{ mb: 2 }}>
                Thank you! I will reply to your message shortly.
              </Alert>
            )}
            {submitError && (
              <Alert severity="error" onClose={() => setSubmitError(null)} sx={{ mb: 2 }}>
                {submitError}
              </Alert>
            )}

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                sendEmail(values, resetForm, setSubmitting);
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <FormikTextField name="name" label="Your Name" />
                  <FormikTextField name="email" label="Email Address" />
                  <FormikTextField name="subject" label="Subject" />
                  <FormikTextField name="message" label="Message" multiline rows={4} />

                  <Box sx={{ position: "relative", mt: 3 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        borderRadius: 8,
                        background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                        color: "#fff",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
                  </Box>
                </Form>
              )}
            </Formik>
          </Paper>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Box sx={{ mt: 4,display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",gap:2 , textAlign: "center" }}>
            <Typography variant="subtitle1" starticon={<CallIcon/>}  gutterBottom>
              <IoIosCall />: <strong>+91 8963932223</strong>
            </Typography>
            <Typography variant="subtitle1">
              <FaLocationDot />: <strong>Khandwa (M.P.), India</strong>
            </Typography>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default ContactForm;
