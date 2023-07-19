import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../Icons/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAsync } from "../../Redux/Slices/LoginSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const SendData = () => {
    const data = { email, password };
    dispatch(LoginAsync(data));

    if (rememberMe) {
      // Encrypt password before storing it
      const encryptedPassword = password;
      localStorage.setItem("email", email);
      localStorage.setItem("password", encryptedPassword);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };

  const data = useSelector((state) => state.Login);

  useEffect(() => {
    if (rememberMe) {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      if (storedEmail && storedPassword) {
        setEmail(storedEmail);
        // Decrypt password before setting it as state
        setPassword(storedPassword);
      }
    }
  }, [rememberMe]);

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      setRememberMe(true);
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("password"));
    }
    if (localStorage.getItem("token") && data.Loged === false) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } else if (data.Loged) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <Grid sx={{ height: "100vh" }} container>
      <Grid sx={{ height: "100%" }} item xs={12} md={8}>
        <Typography
          variant="div"
          component="div"
          sx={{
            background: "#012939",
            padding: "25px",
            height: "100%",
          }}
        >
          <Typography
            className="d-flex flex-column justify-content-between h-100"
            variant="div"
            component="div"
          >
            <Typography
              style={{ width: "250px", height: "70px" }}
              variant="div"
              component="div"
            >
              <img className="w-100 h-100" src={Logo} alt="" />
            </Typography>

            <Typography variant="div" component="div">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 ps-4 my-3 btnLogin"
              />
              <div className="relative w-full">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Enter Your Password"
                  id="password"
                  autoComplete="current-password"
                  className="p-2 ps-4 mt-1 mb-3 btnLogin relative"
                />
                <button
                  type="button"
                  className={`absolute right-4 top-[40%] translate-y-[-50%] cursor-pointer text-dark-green`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>

              <Typography variant="div" component="div">
                <Link
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginLeft: "2%",
                  }}
                >
                  Forgot Password?
                </Link>
              </Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    name="rememberMe"
                    color="primary"
                  />
                }
                sx={{ color: "#fff", marginLeft: "1%" }}
                label="Remember Me"
              />

              <Typography
                sx={{ margin: "30px 0" }}
                variant="div"
                component="div"
              >
                <Button
                  onClick={SendData}
                  sx={{
                    width: "100%",
                    background: "#7DB00E",
                    color: "white",
                    padding: "10px",
                    fontSize: "22px",
                    fontWeight: "bold",
                    border: "1px solid #7DB00E",
                  }}
                >
                  Log in
                </Button>
              </Typography>
            </Typography>

            <Typography
              variant="div"
              component="div"
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: "30px",
                padding: "10px 30px",
              }}
            >
              This site is protected by reCAPTCHA and the Google
              <Typography
                variant="span"
                sx={{ color: "#7DB00E", marginLeft: "5px" }}
              >
                Privacy Policy
              </Typography>{" "}
              and
              <Typography
                variant="span"
                sx={{ color: "#7DB00E", marginLeft: "5px" }}
              >
                Terms of Service
              </Typography>{" "}
              apply.
            </Typography>
          </Typography>
        </Typography>
      </Grid>
      <Grid sx={{ height: "100%" }} item xs={12} md={4}>
        <Typography
          className="d-flex flex-column justify-content-center align-items-center text-white p-5 p-md-3 p-lg-5 h-100"
          variant="div"
          component="div"
        >
          <Typography
            variant="div"
            component="div"
            sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}
          >
            Level up your community
          </Typography>

          <Typography
            className="my-3"
            variant="div"
            component="div"
            sx={{
              background: "#D9D9D9",
              height: "600px",
              width: "100%",
            }}
          ></Typography>

          <Typography variant="div" component="div" className="w-100 mt-2">
            <Link to="/register">
              <Button
                sx={{
                  color: "white",
                  width: "100%",
                  fontSize: "22px",
                  background: "#7DB00E",
                  border: "1px solid #7DB00E",
                }}
              >
                Signup Free
              </Button>
            </Link>
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
