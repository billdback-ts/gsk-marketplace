"use client";
import { SearchEmbed } from "@thoughtspot/visual-embed-sdk/react";

export default function Search() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <SearchEmbed
        frameParams={{ height: "85vh" }}
        dataSource="cd252e5c-b552-49a8-821d-3eadaa049cca"
      ></SearchEmbed>
    </main>
  );
}
