import React from "react";
import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import EventComponent from "./events/EventComponents";

const App = () => {
  return (
    <div>
      <GuestList />
      <EventComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
