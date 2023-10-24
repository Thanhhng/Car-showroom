import React from 'react';
import HeroComponent from "../components/Hero";
import Searchbar from "@/components/searchBar";

export default function Home() {
  return (
      <div >
          <HeroComponent />
          <Searchbar />
      </div>
  )
}
