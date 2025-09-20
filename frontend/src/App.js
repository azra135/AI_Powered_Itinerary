import React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import ItineraryForm from "./components/ItineraryForm";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
          backgroundColor: "#f3f4f6", // similar to bg-gray-100
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 6, color: "#2563eb" }} // text-blue-600
        >
          AI Travel Assistant ✈️
        </Typography>

        <Grid container spacing={4} sx={{ width: "100%", maxWidth: 1200 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3 }} // similar to rounded-2xl + shadow-md
            >
              <ItineraryForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3 }} // similar to rounded-2xl + shadow-md
            >
              <Chatbot />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
