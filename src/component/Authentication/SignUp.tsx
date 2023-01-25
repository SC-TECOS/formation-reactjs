import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginService } from "../../services/loginService";
import { Controller, useForm } from "react-hook-form";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import CountrySelect from "../SelectCountry";
import { styled } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "&.MuiFormControlLabel-root ": {
    border: "1px solid black",
    padding: "0px 25px",
    borderRadius: "15px",
    backgroundColor: "#eeeeee",
  },
}));

export default function SignUpComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    // loginService(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Grid container>
                <FormControl component="fieldset">
                  <Controller
                    // rules={{ required: true }}
                    control={control}
                    name="promoting2"
                    render={({ field }) => {
                      console.log(field);
                      return (
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value="business"
                            control={<Radio />}
                            label="Business"
                          />
                          <FormControlLabel
                            value="nonprofit"
                            control={<Radio />}
                            label="Non-Profit"
                          />
                        </RadioGroup>
                      );
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    id="email"
                    label="Company name"
                    autoFocus
                    {...register("name")}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Address"
                    type="text"
                    id="address"
                    autoComplete="current-password"
                    {...register("adress")}
                  />
                </Grid>
                <Grid container>
                  <Grid item sm={6} md={6} lg={6}>
                    <CountrySelect />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item></Grid>
              </Grid>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
