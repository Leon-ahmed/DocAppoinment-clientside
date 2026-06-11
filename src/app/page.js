import Image from "next/image";
import Banner from "@/components/Banner";
import Whyus from "@/components/Whyus";
import Reviews from "@/components/Reviews";
export default function Home() {
  return (
    <div className="">
  <Banner></Banner>
  <Whyus></Whyus>
  <Reviews></Reviews>
    </div>
  );
}
