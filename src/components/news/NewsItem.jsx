import React from 'react'

const NewsItem=(props)=>{

    let {title,description,imgsrc,newsUrl} =props;
    return (
      <div>
        <div className="card mb-3 card1 mx-3 my-3" style={{width: "30 rem"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgsrc} className="img-fluid rounded-start center image" alt="..."/>
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" type="button" className="btn btn-info">Read more</a>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem
