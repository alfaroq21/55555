import Profile from "./profile/profile";
import Photo from "./profile/55555.jpg";
import "./App.css";
export default function App() {
  const funprop = () => {
    return alert("this my alert");
  };
  return (
    <div className="App">
      <Profile alfaroq="ENSHERAH" fn="BIN TABON" Photo={Photo} alert={funprop} />
    </div>
  );
}