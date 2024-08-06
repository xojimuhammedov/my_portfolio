import BgArrow from "@/components/shared/bgArrow";

async function HomePage() {

  return (
    <div className="max-w-3xl md:max-w-6xl mx-auto">
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-creteRound text-bold text-center max-w-2xl">
          Taking control of your daily life is easy when know how!
        </h1>
        <div className="hidden sm:flex">
          <BgArrow />
        </div>
      </div>
      <h2 className="text-center text-4xl section-title font-creteRound">
        <span>Recent Posts</span>
      </h2>
    </div>
  );
}

export default HomePage;
