import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
    <Navbar setDarkMode={setDarkMode} />
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
