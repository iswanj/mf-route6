import React from "react";
import { AppShell } from "ui";

import { PlayList } from "playlist-content";
import { MoviesContent } from "movies-content";

function App() {
  return (
    <div>
      <AppShell
        title="Playlist"
        colorScheme="dark"
        routes={[
          {
            path: "/",
            element: MoviesContent,
          },
          {
            path: "/playlist",
            element: PlayList,
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
