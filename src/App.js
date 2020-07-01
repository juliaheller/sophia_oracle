import React, { useState } from "react";

//components
import Goddess from "./components/Goddess";
import Footer from "./components/Footer";

// content
import oracleArr from "./components/oracleArr";

// css
import "./App.css";

function App() {
    const [oracle, setOracle] = useState("");

    const getOracle = () => {
        const max = oracleArr.length;
        const index = Math.floor(Math.random() * Math.floor(max));
        setOracle(oracleArr[index]);
        console.log(oracle);
    };

    return (
        <div className="App">
            <Goddess oracle={oracle} />
            <Footer getOracle={getOracle} />
        </div>
    );
}

export default App;
