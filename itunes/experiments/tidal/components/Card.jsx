const Card = (props) => {
    return (
        <div className="row-song-card">
            <img src={`images/${props.song_cover_art}`} />
            <div className="agg-text">
                <h3>{props.song_title}</h3>
                <div className="info-group">
                    <img src={`images/${props.album_icon}`} />
                    <p>{props.album_title}</p>
                </div>
                <div className="info-group">
                    <img src={`images/${props.artist_icon}`} />
                    <p>{props.artist_name}</p>
                </div>
                <div className="info-group">
                    <img src={`images/${props.genre_icon}`} />
                    <p>{props.genre_name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 