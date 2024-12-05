/* General Reset */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #fcfafa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.game-container {
    width: 90%;
    max-width: 800px;
    background: #250c0c;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
}

header {
    background-color: #f39508;
    color: white;
    text-align: center;
    padding: 1rem;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
}

.player {
    margin: 1rem;
    text-align: center;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    width: 100%;
}

.player.active {
    border-color: #f39508;
}

.score {
    font-size: 2rem;
    margin: 0.5rem 0;
    color: #f39508;
}

.controls {
    margin-top: 1.5rem;
    text-align: center;
}

button {
    background-color: #f39508;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;
}

button:hover {
    background-color: #f39508;
}

.dice {
    margin-top: 1rem;
    width: 50px;
    height: 50px;
    background-color: #f39508;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    visibility: hidden;
}
.bild {
opacity: 1;
position: relative;  
    width: 300px; 
    height: 300px;
    position: absolute;  
    top: 120px;  
    right: 450px;  
    width: 100px;
    height: 100px;
}
.bildd{
    opacity: 1;
    position: relative;  
    width: 300px; 
    height: 300px;
    position: absolute;  
    bottom: 140px;  
    right: 450px;  
    width: 100px;
    height: 100px;
}
