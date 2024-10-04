import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper, Link } from "@mui/material";

function Login({ setIsAdminLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
    

      if (response.ok) {
        setMessage("Login successful!");
        // Store token in localStorage
        localStorage.setItem("token", data.token);

        // Check user role after login
        if (data.user.role === "admin") {
          setIsAdminLoggedIn(true); // Set admin state to true
          navigate("/dashboard"); // Redirect to the admin dashboard
        } else {
          navigate("/"); // Redirect to home page if not admin
        }
      } else {
        setMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred while logging in. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f6f8"
      px={2} // Adds padding on the sides for mobile view
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: "1.5rem", sm: "2rem" }, // Padding increases on larger screens
          width: { xs: "100%", sm: "400px" }, // Full width on small screens, fixed on larger screens
          maxWidth: "500px", // Set a max width for very large screens
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2rem" } }} // Adjust font size for responsiveness
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            variant="outlined"
            autoComplete="email"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            variant="outlined"
            autoComplete="current-password"
          />
          {message && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
          <Box mt={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading} // Disable button while loading
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" }, // Adjust button font size
                py: { xs: "0.6rem", sm: "0.8rem" }, // Adjust padding for responsiveness
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Typography variant="body2" color="textSecondary">
              Don't have an account?{" "}
              <Link href="/signup" underline="none">
                Create an account
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
