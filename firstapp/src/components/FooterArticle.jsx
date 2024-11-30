import React from 'react'

const FooterArticle = ({data}) => {
    const {id, title, description, imgSrc}= data
  return (
   <div className='grid grid-cols-3 gap-2'>
    <img src={imgSrc} alt={title} />
    <div className='col-span-2 flex flex-col gap-2'>
        <h1 className='text-4xl text-red-300 font-bold'> {id} </h1>
        <h2 className='text-2xl'> {title} </h2>
        <p className='text-xl text-gray-500'> {description} </p>
    </div>
   </div>
  )
}

export default FooterArticle