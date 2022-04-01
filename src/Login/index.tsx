import { useEffect } from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AuthInfo } from "../@hooks/auth";

type LoginProps = {
  authInfo: AuthInfo,
  onGoogleLoginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void,
  onGoogleLoginFailure: (error: any) => void,
}

const Login: React.FC<LoginProps> = ({
  authInfo,
  onGoogleLoginSuccess,
  onGoogleLoginFailure,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (authInfo.accessToken !== "") {
      navigate("/");
    }
  });

  return (
    <div>
      <GoogleLogin
        clientId="128479543423-ssg0g9ckue0nda2k45ada2lc1arip9qn.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onGoogleLoginSuccess}
        onFailure={onGoogleLoginFailure}
      />
    </div>
  );
};

export default Login;
