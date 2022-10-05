import React from 'react'
import CustomInput from './CustomInput'
import PriceIndicator from './PriceIndicator'
import DollarIcon from './icon-dollar.svg'
import PersonIcon from './icon-person.svg'

export default function Card() {

    return (
        <div className='d-md-flex justify-content-center bg-white rounded-4 customBorder'>
                <div className="rounded-4 p-3 bg-white row p-3 border border-5 border-white m-0" style={{maxWidth:"25em",maxHeight:"25em"}}>
                    <div className='col-12 py-1 '>
                        <CustomInput label="Bill" icon={DollarIcon} placeholder="0" />
                    </div>
                    <div className='col-12 py-1 letterSpacing4 h-0 ms-n3'>Select Tip %</div>
                    <div className='col-12 py-1 row'>
                        <div className='col-4 p-1 border border-white'>
                            <button className='p-2 text-white rounded-2 border-0 w-100 fw-bold btn btn-primary'>5%</button>
                        </div>
                        <div className='col-4 p-1 border border-white'>
                            <button className='p-2 text-white rounded-2 border-0 w-100 fw-bold btn btn-primary'>10%</button>
                        </div>
                        <div className='col-4 p-1 border border-white'>
                            <button className='p-2 text-white rounded-2 border-0 w-100 fw-bold btn btn-primary'>15%</button>
                        </div>
                        <div className='col-4 p-1 border border-white'>
                            <button className='p-2 text-white rounded-2 border-0 w-100 fw-bold btn btn-primary'>25%</button>
                        </div>
                        <div className='col-4 p-1 border border-white'>
                            <button className='p-2 text-white rounded-2 border-0 w-100 fw-bold btn btn-primary'>50%</button>
                        </div>
                        <div className='col-4 p-1 border border-white'>
                            <button className='p-2 rounded-2 border-0 w-100 fw-bold btn btn-light text-success'>Custom</button>
                        </div>
                    </div>
                    <div className='col-12 py-1 '>
                        <CustomInput label="Number Of People" icon={PersonIcon} placeholder="0" />
                    </div>

                </div>
                <div className="rounded-4 py-4 bg-primary container row align-items-md-between border border-5 border-white w-100 h-100 m-0" style={{maxWidth:"25em",maxHeight:"22em"}}>
                    <div className='col-12'>
                        <div className='mb-3'>
                            <PriceIndicator label="Tips Amount" />
                        </div>
                        <div className=''>
                            <PriceIndicator label="Total" />
                        </div>
                    </div>
                    <div className='col-12 h-100'>
                        <button className='border-0 p-3 rounded-2 bg-dark w-100 text-primary fw-bold' style={{marginTop:"35%"}}>Reset</button>
                    </div>

                </div>
            </div>

    )
}
