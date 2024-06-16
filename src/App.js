
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { PictureCard } from "./components/PictureCard";



function App() {
  return (
    <>
      <Navbar />
      {
        <div className="hello">
          <Card className="card1" />
          <PictureCard />
         
        </div>
      }
    </>
  );
}

export default App;
