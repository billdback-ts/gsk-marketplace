"use client";

import { SageEmbed } from "@thoughtspot/visual-embed-sdk/react";

export default function Home() {
  console.log("Embedding ThoughtSpot Sage.");

  const searchOptions = {
    searchQuery: "what are my top selling products?",
    executeSearch: true,
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <SageEmbed
        frameParams={{ height: "85vh" }}
        disableWorksheetChange={true}
        dataSource="cd252e5c-b552-49a8-821d-3eadaa049cca"
        searchOptions={searchOptions}
      ></SageEmbed>
    </main>
  );
}
