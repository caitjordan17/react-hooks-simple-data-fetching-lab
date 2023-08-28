import React, {useState, useEffect} from "react";

function App(){
    const [dogImage, setDogImage] = useState(null);
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r) => r.json())
        .then((r) => {setDogImage(r.message);
        });
    }, []);

    if(!dogImage){
        return <p>Loading...</p>}

    return(
        <img src={dogImage} alt="A Random Dog"/>
    )
}

export default App;