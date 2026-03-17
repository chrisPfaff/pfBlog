import "./index.scss";

import App from "./App.tsx";
import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use hydration if pre-rendered HTML exists, otherwise create fresh root
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
