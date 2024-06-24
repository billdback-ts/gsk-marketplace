"use client";

import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/react";

export default function Liveboards() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <LiveboardEmbed
        frameParams={{ height: "85vh" }}
        liveboardId="03072703-4724-44ff-a54f-6d59598708de"
      ></LiveboardEmbed>
    </main>
  );
}
