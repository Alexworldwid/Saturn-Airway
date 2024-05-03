import Image from "next/image";
import Search from "../comps/search";
import ManageFlight from "../comps/manageFlight";

export const metadata = {
  title: "Saturn | Home",
  description: "Generated by create next app",
};

export default function Home() {
  return (
        <main key={Home} className="bg-[#dae3ea] flex flex-col min-h-screen items-center min-w-full">
          <section className="bg-[#dae3ea] flex flex-col items-center w-full  p-6 ">
            <Search />

            <div className="w-full flex flex-col items-center md:grid md:grid-cols-2 max-w-[1440px]">
              <div className="mb-4 flex flex-col items-start">
                <h1 className="text-4xl mb-3 font-bold max-w-[600px] lg:text-6xl">Hello, Where do you want to explore?</h1>
                <p className="text-xl mb-3 max-w-[600px] lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vero exercitationem laudantium</p>
                <button className="bg-slate-400 p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white">SEE DETAILS</button>
              </div>

              <div className="w-full">
                <Image src="/images/Lorem-Ipsum-alternatives-768x492.png" className="w-full max-w-[800px] h-auto" width={200} height={100} alt="fakeimg" />
              </div>
            </div>

          </section>

          <ManageFlight />
        </main>
  );
}
