import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import useLogin from '../@hooks/auth';
import Login from '../Login';
import Main from '../Main';

const App: React.FC = () => {
  const { initialized, authInfo, onGoogleLoginSuccess, onGoogleLoginFailure } = useLogin();

  if (!initialized) {
    // TODO: loading page
    return <div>loading...</div>;
  }
  
  return (
    <Routes>
      <Route path="/login" element={<Login authInfo={authInfo} onGoogleLoginSuccess={onGoogleLoginSuccess} onGoogleLoginFailure={onGoogleLoginFailure} />} />
      <Route path="/" element={<Main authInfo={authInfo} />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
