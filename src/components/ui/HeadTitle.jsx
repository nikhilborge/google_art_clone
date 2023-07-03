import React from 'react'

const HeadTitle = ({title, subTitle}) => {
  return (
    <div className="text-center mb-12">
    <h2 className="text-4xl font-base">{title}</h2>
    <p>{subTitle}</p>
  </div>
  )
}

export default HeadTitle