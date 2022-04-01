import { useEffect, useState } from "react"
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

export type AuthInfo = {
  accessToken: string,
  refreshToken: string
}

const useLogin = () => {
  const [initialized, setInitialized] = useState(false);
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    accessToken: "",
    refreshToken: "",
  });

  useEffect(() => {
    // TODO: localstorage handling
    setInitialized(true);
  }, []);

  // TODO
  const login = async () => {
    setAuthInfo({
      accessToken: "dummy",
      refreshToken: "dummy",
    });
  }

  const onGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    login();
  }

  const onGoogleLoginFailure = (error: any) => {
    console.log(error);
  };

  return {
    initialized,
    authInfo,
    onGoogleLoginSuccess,
    onGoogleLoginFailure,
  };
}

export default useLogin;
