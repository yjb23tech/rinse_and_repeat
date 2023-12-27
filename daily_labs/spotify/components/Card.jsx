const Card = (props) => {
    return (
        <div className="song-card">
            <img src={`images/${props.song_cover_art}`} />
            <div className="song-card-content">
                <h4>{props.song_title}</h4>
                <div className="info-group">
                    <img src={`images/${props.album_icon}`} />
                    <p>{props.album_name}</p>
                </div>
                <div className="info-group">
                    <img src={`images/${props.artist_icon}`} />
                    <p>{props.artist_name}</p>
                </div>
                <div>
                    <img src={`images/${props.genre_icon}`} />
                    <p>{props.genre_name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 