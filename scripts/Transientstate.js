const transientState = {
    "metalsId": 0,
    "styleId": 0,
    "sizesId":0
}


export const setMetalsChoice = (metalId) => {
    transientState.metalsId = metalId
        console.log(transientState)
}
export const setstylesChoice = (styleId) => {
    transientState.styleId = styleId
    console.log(transientState)
}

export const setSizesChoice = (sizeid) => {
    transientState.sizesId = sizeid
    console.log(transientState)
}


export const saveOrderSubmission =async() => {
    const postOptions ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)

}

