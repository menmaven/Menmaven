import Image from "next/image";
import styles from "./page.module.css";
import Testiomonial from "../Modules/Components/Testimonial/Testiomonial";
import MainContactPage from "../Modules/Components/Contact/MainContactPage";
import Footer from "@/Modules/Components/Footer/Footer";
import TestimonialPage from "../Modules/Components/Testimonial/TestimonialPage";

export default function Home() {
  return (
    <div>
     <TestimonialPage />
     <MainContactPage />
     <Footer />
    </div>
  );
}
