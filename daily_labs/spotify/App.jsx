import { createRoot } from "react-dom/client"
import NavigationBar from "./components/NavigationBar.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Card 
                song_cover_art="track_7_cover_art.png"
                song_title="Devil In A New Dress"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
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

