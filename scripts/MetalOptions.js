import { setMetalsChoice } from "./Transientstate.js"


const handleMetalChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "metal") {
        setMetalsChoice(parseInt(changeEvent.target.value))
    }
}



export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let choicesHTML = ""
    document.addEventListener("change", handleMetalChoice )


    const divStringArray = metals.map(
        (metal) => {
            return `<div>
        <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
        }
    )

    choicesHTML += divStringArray.join("")
    return choicesHTML
}





