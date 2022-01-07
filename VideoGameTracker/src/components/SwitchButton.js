import React from "react"

function SwitchButton ({ game, onChange, setOnChange }) {
    
    function handleClick () {
        switch (game.list) {
            case "Wishlist":
                fetch(`http://localhost:3000/games/${game.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        list: "Playing"
                    })})
                setOnChange(!onChange)
                break;
            case "Playing":
                fetch(`http://localhost:3000/games/${game.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        list: "Completed"
                    })})
                setOnChange(!onChange)
        }
    }
    
    switch (game.list) {
        case "Wishlist": return <button className="switchButton" onClick={handleClick}>Move to Playing</button>
        case "Playing": return <button className="switchButton" onClick={handleClick}>Move to Completed</button>
        case "Completed": return <button style={{cursor:"auto"}} className="switchButton">   Completed!   </button>
    }
}

export default SwitchButton;