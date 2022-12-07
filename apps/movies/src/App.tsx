import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <div>
      <AppShell
        title="Movie"
        colorScheme="light"
        routes={[
          {
            path: "/",
            element: () => <div>Hello</div>,
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
