import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ListPage from "@/Modules/Components/Listpage/ListPage";
import Shoes from "@/Modules/Components/Constants/Shoes";
import Link from "next/link";
import CartListPage from "@/Modules/Components/Cart/CartListPage";

function Index() {
  return (
    <div>
      <CartListPage />
    </div>
  );
}

export default Index;
