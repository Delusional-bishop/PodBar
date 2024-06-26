import Image from 'next/image'
import React from 'react'

const podcastCard = ({title,description,imgURL,podcastId}:{
    title:string,
    description:string,
    imgURL:string,
    podcastId:number,
}) => {
  return (
    <div className='cursor pointer'>
      <figure className='flex flex-col gap-2'>
        <Image 
        src={imgURL}
        width={174}
        height={174}
        alt={title}
        className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'/>
        <div className='flex flex-col'>
          <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
          <h1 className='text-12 truncate capitalize font-normal text-white-1'>{description}</h1>
        </div>
      </figure>
    </div>
  )
}

export default podcastCard
