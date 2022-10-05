import React from 'react'

export default function CustomInput({ label,icon, placeholder }) {
    return (
        <>
            <label className='row'>
                <div className='col-12'>
                    <div className='letterSpacing4 w-100 ms-n3 fs-6 text-primary'>{label}</div>
                </div>
                <div className='col-12'>
                <div className='row rounded-2 py-2 w-100 bg-light'>
                    <div className='col-1'>
                        <img src={icon} alt="$"></img>
                    </div>
                    <div className='col-11 d-flex justify-content-end'>
                        <input className="border-0 text-end bg-light" pattern='0-9' style={{ outline: "none" }} type="text" placeholder={placeholder} />
                    </div>
                </div>
                </div>
            </label>

        </>
    )
}
