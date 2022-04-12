import React from "react"
import Pomodoro from "./src/Pomodoro.js"
import * as ReactDOMClient from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <Pomodoro />
);