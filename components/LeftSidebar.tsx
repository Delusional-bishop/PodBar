'use client';
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


const LeftSidebar = () => {
  const pathname= usePathname();
  const router= useRouter();
  return (
    <div>
        <section className='left_sidebar min-h-screen '>
            <nav className='flex flex-col gap-6'>
            <Link href="/" className='flex cursor-pointer items-center gap-1 pb-9 max-lg:justify-center'>
              <Image src='/assets/Capa_1.svg' alt='logo' width={50} height={27}/>
              <h1 className="text-24 font-extrabold text-white max-lg:hidden">PodBar</h1>
            </Link>


            {sidebarLinks.map(({ label , route ,imgURL })=>{
              const isActive= pathname ===route || pathname.startsWith(`  ${route}/`);
              return <Link href={route} key={label} className={cn('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',{
                ' border-r-4 bg-nav-focus border-pink-1':isActive
              })}>
                  <Image src={imgURL} alt={label} width={24} height={24}/>
                  <p>{label}</p>
              </Link>
})}
            

            </nav>
        </section>
      
    </div>
  )
}

export default LeftSidebar
