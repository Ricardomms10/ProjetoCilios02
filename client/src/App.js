import './App.css';
import { AppRoutes } from './contain';
import { GlobalStyles } from "../src/GlobalStyled/GlobalStyled"
import { AuthProvider } from './contexts/Context';


function App() {


  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
