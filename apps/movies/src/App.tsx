import React from "react";
import { AppShell } from "ui";

import MoviesContent from "./routes/MoviesContent";

function App() {
  return (
    <div>
      <AppShell
        title="Movie"
        colorScheme="light"
        routes={[
          {
            path: "/",
            element: () => <MoviesContent />,
          },
          {
            path: "/playlist",
            element: () => <div>Playlist</div>,
          },
        ]}
        navLinks={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
      />
    </div>
  );
}

export default App;
