import logo from "./logo.svg";
import "./App.css";
import { configStore } from "./componets/C-Store/configStore";
import { Provider } from "react-redux";
import Landing from "./componets/Landing";
import { Card, CardContent } from "@mui/material";

const myStore = configStore();
function App() {
  return (
    <Card>
      <CardContent>
        <Provider store={myStore}>
          <Landing />
        </Provider>
      </CardContent>
    </Card>
  );
}

export default App;
