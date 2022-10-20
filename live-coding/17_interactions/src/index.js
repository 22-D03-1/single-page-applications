import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App"

/**
 * Unsere index.js initiiert unsere Webapp. Es wird:
 * - das div mit der id "root" gefunden und als Startpunkt gesetzt
 * - innerhalb von "root" unsere React App eingebunden inklusive
 *   des App Components
 */
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)