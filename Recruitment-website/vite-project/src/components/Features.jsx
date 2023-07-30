import React from 'react'
import FeatureBox from './FeatureBox'

const Features = () => {
  return (
    <div id='features'>
        <div className="f-container">
            <FeatureBox title='Comlete your profile'/>
            <FeatureBox title='Receive Job offers'/>
            <FeatureBox title='Accept Dream Job'/>
        </div>
    </div>
  )
}

export default Features