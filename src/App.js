import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <AppHeader />
      <div className="SideMenuAndPageContent">
        
        <SideMenu>

        </SideMenu>
        <PageContent></PageContent>
      </div>
   
    </div>
  );
}
export default App;
