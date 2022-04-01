import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthInfo } from "../@hooks/auth";

type MainProps = {
  authInfo: AuthInfo,
}

const Main: React.FC<MainProps> = ({
  authInfo,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (authInfo.accessToken === "") {
      navigate("/login");
    }
  });

  return (
    <div>
      {authInfo.accessToken}
      {authInfo.refreshToken}
    </div>
  );
};

export default Main;
