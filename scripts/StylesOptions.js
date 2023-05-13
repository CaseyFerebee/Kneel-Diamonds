import { setstylesChoice } from "./TransientState.js"





const handleStyleChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "style") {
        setstylesChoice(parseInt(changeEvent.target.value))
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()
    // Fill in the rest
    let stylesHTML = ""
    document.addEventListener("change", handleStyleChoice)


    const divStringArray = styles.map(
        (style) => {
            return `<div>
        <input type='radio' name='style' value='${style.id}' /> ${style.style}
        </div>`
        }
    )
    stylesHTML += divStringArray.join("")
    return stylesHTML
}

