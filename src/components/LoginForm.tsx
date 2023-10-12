import { ChangeEvent, FormEvent, useState } from "react";
import { Container, Typography, TextField } from "@mui/material";
import { useToast } from "../hook/toastContext";
import { isValidEmail } from "../utils/utils";
import { FormContainer, LoginButton } from "./styles";
import { login } from "../service/login";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const { showToast } = useToast()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail)
    if (!isValidEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      showToast("Congratulations! Login successful.", "success");
    } catch (error: any) {
      showToast(typeof error === "string" ? error : JSON.stringify(error), "error");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <FormContainer>
      <Container maxWidth="sm">
        <Typography variant="h4" component="div" gutterBottom>
          Login Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            margin="normal"
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <LoginButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Login
          </LoginButton>
        </form>
      </Container>
    </FormContainer>
  );
}

export default LoginForm;
