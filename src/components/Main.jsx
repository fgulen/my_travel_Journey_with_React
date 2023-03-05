import fuji from '../images/fuji.png'
import placeIcon from '../images/place.png'

function Body(props){
    return(
        <div className="main">
            <div className="main-pic-body">
                <div>
                    {/* <img src={fuji} alt="" /> */}
                    <img src={process.env.PUBLIC_URL + "/images/" + props.data.imageUrl} alt="" className="card-img" />

                </div>

                <div className='text-wrapper'>
                    <div className="land-google">
                    <img className='main-img' src={placeIcon} /> <p className='main-land'>{props.data.location} </p> <a className='google-link' href={props.data.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className='main-place'> {props.data.title} </h1>
                    <p className='main-date'>{props.data.startDate}-{props.data.endDate}</p>
                    <p className="main-text">{props.data.description}</p>
                </div>
            </div>
            <hr />

        </div>
    );
}

export default Body;