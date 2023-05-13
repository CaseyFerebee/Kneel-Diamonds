import { saveOrderSubmission } from "./TransientState.js"


const handleOrdersSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrders") {
        saveOrderSubmission()
    }
}


export const placeOrders = () => {
    document.addEventListener("click", handleOrdersSubmissionClick)



    return "<button id='saveOrders'>Save Order</button>"
}