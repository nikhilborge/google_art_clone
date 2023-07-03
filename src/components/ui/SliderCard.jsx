import React from 'react'

const SliderCard = ({img, title, sub}) => {
  return (
    <div className="px-4">
            <div className="group relative w-min-80 h-64 overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt="Card"
              />
              <div className="absolute top-0 right-0 hidden group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">Heart</p>
              </div>
              <div className="absolute bottom-0 left-0 hidden group-hover:block transition-transform duration-300 transform-gpu p-4">
                <div>
                  <h2 className="">{title}</h2>
                  <span className="text-xs">{sub}</span>
                </div>
              </div>
            </div>
          </div>
  )
}

export default SliderCard