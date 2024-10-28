import Hero from "./components/Hero";



export default function Home() {
  return (
   <main className="bg-black-100 flex w-full flex-col mx-auto items-center justify-center relative overflow-hidden max-[640px]:px-10 px-2">
    <div className="">
        <Hero />
    </div>
   </main>
  );
}
