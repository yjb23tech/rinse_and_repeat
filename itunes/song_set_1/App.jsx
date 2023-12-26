import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div className="songs">
            <Card 
                song_cover_art=""
                song_title=""
                album_icon=""
                album_title=""
                artist_icon=""
                artist_name=""
                genre_icon=""
                genre_name=""
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

