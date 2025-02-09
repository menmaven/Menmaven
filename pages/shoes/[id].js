"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Shoes from "@/Modules/Components/Constants/Shoes";
import DetailsPage from "../../src/Modules/Components/DetailsPage/DetailsPage";
import allItems from "../../src/Modules/Components/Constants/index";
import DesktopDetailsPage from "@/Modules/Components/DetailsPage/DesktopDetailsPage";

function ShoeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  if (!id) {
    return <p>Loading...</p>;
  }

  // const shoeDetails = Shoes.find(shoe => shoe.id === id);
  const shoeDetails = allItems.find((item) => item.id === id);

  if (!shoeDetails) {
    return <p>Shoe not found</p>;
  }

  return (
    <div>
      {width > 768 ? (
        <DesktopDetailsPage shoeDetails={shoeDetails} />
      ) : (
        <DetailsPage shoeDetails={shoeDetails} />
      )}
    </div>
  );
}

export default ShoeDetailsPage;
