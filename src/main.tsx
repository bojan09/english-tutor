import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Type-safe env access
const env = import.meta.env;

if (!env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error(
    "Missing VITE_CLERK_PUBLISHABLE_KEY in .env – add it to project root!"
  );
}
const publishableKey = env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
