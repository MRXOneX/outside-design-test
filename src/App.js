import {useState} from "react";
import Popup from "./components/Popup";

function App() {
    const [visiblePopup, setVisiblePopup] = useState(false)

    const openPopup = () => {
        setVisiblePopup(true)
    }
    const closePopup = () => {
        setVisiblePopup(false)
    }

    return (
        <div className={visiblePopup ? "app app__popup-active" : "app app__popup-disabled"}>
            {visiblePopup
                ? <Popup closePopup={closePopup}/>
                : <button className="app__button" onClick={openPopup}>
                    Налоговый вычет
                </button>
            }
        </div>
    );
}

export default App;
