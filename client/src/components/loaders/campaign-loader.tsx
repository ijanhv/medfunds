import React from 'react'
import { Skeleton } from '../ui/skeleton'


const CampaignLoader = () => {
  return (
    <div className="container2 w-full h-full">
  
    <div className="flex flex-col space-y-3 h-full w-full">
      <Skeleton
        className="h-[400px] w-full

      rounded-xl"
      />
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[200px]" />
      </div>
    </div>
  </div>
  )
}

export default CampaignLoader