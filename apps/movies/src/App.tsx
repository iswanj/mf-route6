import React from "react";
import { AppShell } from "ui";

import { MoviesContent } from "movies-content";
import { PlayList } from "playlist-content";

function App() {
  return (
    <div>
      <AppShell
        title="Movie"
        colorScheme="light"
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
