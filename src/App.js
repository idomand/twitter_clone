import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RouterComponent from "./myComponents/RouterComponent/RouterComponent";

import { AuthProvider } from "./lip/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RouterComponent />
      </div>
    </AuthProvider>
  );
}

export default App;
