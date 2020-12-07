import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyRouter from "./myComponents/MyRouter";

import { AuthProvider } from "./lip/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <MyRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
