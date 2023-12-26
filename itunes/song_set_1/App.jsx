import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div className="songs">
            <Card 
                song_cover_art="track_9_song_art.png"
                song_title="Dark Fantasy"
                album_icon="album_icon.png"
                album_title="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

