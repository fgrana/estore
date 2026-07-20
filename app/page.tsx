import Headers from "@/components/layout/Headers";
import { Component } from "@/components/carousel/carousel";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Headers></Headers>
      <h1>home</h1>

      <Component />
      <Footer></Footer>
    </>
  );
}
