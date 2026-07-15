import { Component } from "@/components/carousel/carousel";
import Footer from "@/components/layout/Footer";
import Headers from "@/components/layout/Headers";
import "../globals.css";

export default function brands() {
  return (
    <>
    <Headers></Headers>
    <div className="container">
      <h1>brands</h1>
      <Component  />
    </div>
    <Footer></Footer>
    </>
  );
}
