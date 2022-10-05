import React from 'react'

export default function PriceIndicator({label}) {
  return (
    <div className='row container'>
        <div className='col-7'>
            <p className='mb-0 fw-bold  text-white wordSpacing'>{label}</p>
            <p className='customFontSize fw-bold text-success'>/ person</p>

        </div>
        <div className='col-4 text-success fw-bold letterSpacing2'><h1>$0.00</h1></div>

    </div>
  )
}
