import React from 'react'
import {Bling as GPT} from 'react-gpt'

const AdNative = () => {
    return (
        <div id="tl-infeed-ad">
            {/* <-- /22979003/rm_test_infeed_native --> */}
            <GPT 
                adUnitPath='/22979003/rm_test_infeed_native'
                slotSize={[1,1]}
            />
        </div>
    )
}

export default AdNative
