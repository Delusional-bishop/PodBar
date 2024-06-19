import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <div>
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6'>
            <Link href="/" className='flex cursor-pointer items-center gap-1 pb-9 max-lg:justify-center'>
              <Image src='/assets/Capa_1.svg' alt='logo' width={50} height={27}/>
              <h1 className="text-24 font-extrabold text-white max-lg:hidden">PodBar</h1>
            </Link>
            </nav>
        </section>
      
    </div>
  )
}

export default LeftSidebar
