import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (analyticsEndpoint && analyticsWebsiteId && typeof document !== "undefined") {
  const script = document.createElement("script");
  script.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  script.async = true;
  script.defer = true;
  script.dataset.websiteId = analyticsWebsiteId;
  document.body.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
