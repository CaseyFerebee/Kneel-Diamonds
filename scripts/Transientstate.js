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