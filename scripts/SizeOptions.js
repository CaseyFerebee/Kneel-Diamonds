import { setSizesChoice } from "./TransientState.js"



const handleSizesChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "size") {
        setSizesChoice(parseInt(changeEvent.target.value))
    }
}






export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    // Fill in the rest
    let sizesHTML = ""
    document.addEventListener("change", handleSizesChoice)

    const divStringArray = sizes.map(
        (size) => {
            return `<div>
        <input type='radio' name='size' value='${size.id}' /> ${size.carets}
        </div>`
        }
    )

    sizesHTML += divStringArray.join("")
    return sizesHTML
}