"use client";

import React from "react";
import { useRouter } from "next/router";
import Shoes from "@/Modules/Components/Constants/Shoes";
import DetailsPage from '../../src/Modules/Components/DetailsPage/DetailsPage'

function ShoeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  const shoeDetails = Shoes.find(shoe => shoe._id === id);

  if (!shoeDetails) {
    return <p>Shoe not found</p>;
  }

  return (
      <div>
        <DetailsPage 
        shoeDetails={shoeDetails}
        />
      </div>
  );
}

export default ShoeDetailsPage;
