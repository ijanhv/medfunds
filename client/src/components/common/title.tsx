import React from 'react'

const Title = ({
    title, 
    subtitle
}: {
    title: string,
    subtitle: string
}) => {
  return (
    <div className='space-y-3'>
     <h3 className="text-3xl lg:text-5xl font-semibold ">
        {title}
      </h3>
      <p className="text-foreground/70 text-base">
        {subtitle}
      </p></div>
  )
}

export default Title