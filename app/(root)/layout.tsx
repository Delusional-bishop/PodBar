import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";


import type { Metadata } from "next";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="relative flex flex-col">
    <main className="relative flex bg-black-3">
        <LeftSidebar/>
        <section className="border-2 border-red-600 flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 justify-between items-center md:hidden">
            <Image src='/assets/Capa_1.svg' alt='logo' width={30} height={30}/>
            <mo
            </div>
            <div>
              toaster(notification)
              {children}
            </div>
          </div>
        </section>
        <RightSidebar/>
    </main>
   </div>
  );
}
