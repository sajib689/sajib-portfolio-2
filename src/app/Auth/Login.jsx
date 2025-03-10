"use client";

import { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation"; // ✅ Correct import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter(); // ✅ Correct variable name

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    login(email, password)
      .then((res) => {
        console.log(res);
        router.push("/dashboard"); // ✅ Correct way to navigate
      })
      .catch((err) => {
        console.error("Login Error:", err);
        setError("Invalid email or password");
      });

    console.log("Logging in with:", { email, password });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 6,
          textAlign: "center",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Typography sx={{ marginBottom: "25px" }} variant="h5" gutterBottom>
          Admin Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error && !email}
            helperText={error && !email ? "Email is required" : ""}
            InputProps={{ style: { color: "#fff" } }}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#777" },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error && !password}
            helperText={error && !password ? "Password is required" : ""}
            InputProps={{ style: { color: "#fff" } }}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#777" },
              },
            }}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            type="submit"
            sx={{
              p: 1,
              fontSize: "14px",
              bgcolor: "#ff9ff3",
              "&:hover": { bgcolor: "#f368e0" },
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
