import BlogCard from "@/components/cards/blog";
import BgArrow from "@/components/shared/bgArrow";
import Image from "next/image";

import BlogImage from "../../../public/blogs/blog.jpg";
import AlStarImage from "../../../public/about/10.jpg";
import SerEnergies from "../../../public/about/05.jpg";
import AssiTech from "../../../public/about/07.jpg";
import SamTrip from "../../../public/about/09.jpg";

async function HomePage() {
  return (
    <div className="max-w-3xl md:max-w-6xl mx-auto">
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-creteRound text-bold text-center max-w-2xl">
          Create and develop a website for your business with us!
        </h1>
        <div className="hidden sm:flex">
          <BgArrow />
        </div>
      </div>
      <h2 className="text-center text-4xl section-title font-creteRound">
        <span>Recent Posts</span>
      </h2>
      <div className="flex flex-col space-y-24 mt-24">
        <BlogCard
          img={BlogImage}
          title={"Create Business Website"}
          pathname={"/"}
          subtitle={"We create busines website for you"}
        />
      </div>
      <h2 className="text-center text-4xl mt-24 section-title font-creteRound">
        <span>Our Projects</span>
      </h2>
      <div className="flex flex-col space-y-24 mt-24">
        <BlogCard
          img={AlStarImage}
          title={"ALSTAR Website"}
          pathname={"http://alstar.uz/"}
          subtitle={
            "ALSTAR is a brand of PE, FR-B1, FR-A2 type Aluminum Composite Panel (ACP) owned by “GOLDEN HAPPINESS” LLC"
          }
        />
        <BlogCard
          img={SerEnergies}
          title={"SER ENERGIES GROUP Website"}
          pathname={"http://serenergies.com/"}
          subtitle={
            "SER ENERGIES GROUP Website is Drawing construction project according the main project design."
          }
        />
        <BlogCard
          img={AssiTech}
          title={"ASSITECHBIO Website"}
          pathname={"https://assitech.uz/"}
          subtitle={
            "Our company ASSITECHBIO specializes in: sales and service of ultrasound devices and organization of ultrasound courses."
          }
        />
        <BlogCard
          img={SamTrip}
          title={"Samandar Trip Tour"}
          subtitle={"Samandar Trip Tour is support to get Uzbekistan visa."}
          pathname={"https://samtrip.uz/"}
        />
      </div>
    </div>
  );
}

export default HomePage;
