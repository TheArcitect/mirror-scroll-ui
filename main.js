import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { ScrollPortal } from "./src/ScrollPortal.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<ScrollPortal />);
