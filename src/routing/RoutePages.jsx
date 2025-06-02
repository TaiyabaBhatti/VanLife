import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/VansPage/VansPage";
import VanDetailedPage from "../pages/VansPage/DetaliedPage/VanDetailedPage";
import { makeServer } from "../config/server";
import VanDetails from "../pages/VansPage/DetaliedPage/VanDetails";
import VanPhotos from "../pages/VansPage/DetaliedPage/VanPhotos";
import VanPricing from "../pages/VansPage/DetaliedPage/VanPricing";

makeServer();
// makeServer();
export default function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetailedPage />}>
        <Route path="pricing" element={<VanPricing />} />
        <Route path="photos" element={<VanPhotos />} />
        <Route index element={<VanDetails />} />
      </Route>
    </Routes>
  );
}
