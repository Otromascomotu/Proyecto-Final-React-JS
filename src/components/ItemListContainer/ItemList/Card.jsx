import React from 'react'
import Image_1 from '../../assets/imgs/Jugo_Naranja.svg'

const Card = () => {
  return (
    <div className="p-10">  
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Image_1} alt="vasoDeJugoNaranjaSplash"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Jugo de Naranja</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Precio</span>
        </div>
      </div>
    </div>
  )
}

export default Card;
