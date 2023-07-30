import React from 'react'

const FeatureBox = (props) => {
  return (
    <div className="f-box">
        <div className="f-box-img">
            <img src="" alt="" />
        </div>
        <div className="f-box-text">
            <h2>{props.title}</h2>
            <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis quis mollitia. </p>
        </div>
    </div>
  )
}

export default FeatureBox