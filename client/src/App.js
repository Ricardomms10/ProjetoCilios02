import './App.css';
import { AppRoutes } from './routes/appRoutes'
import { GlobalStyles } from "./styles/GlobalStyled/GlobalStyled"
import { AuthProvider } from './hooks/AuthProvider';


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
