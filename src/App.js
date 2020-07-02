import React, { useState } from "react";

//components
import Goddess from "./components/Goddess";
import Footer from "./components/Footer";

// content
import oracleArr from "./components/oracleArr";

// css
import "./App.css";

function App() {
    const [oracle, setOracle] = useState(
        "Willkommen im Tempel der Sophia. Bitte die Göttin der Weisheit um ihren Rat und klicke auf 'Frage die Göttin'."
    );

    const getOracle = () => {
        const max = oracleArr.length;
        const index = Math.floor(Math.random() * Math.floor(max));
        setOracle(oracleArr[index]);
    };

    return (
        <div className="App">
            <Goddess getOracle={getOracle} oracle={oracle} />
            <Footer />
        </div>
    );
}

export default App;
