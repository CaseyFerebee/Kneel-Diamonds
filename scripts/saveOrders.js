import { saveOrderSubmission  } from "./Transientstate.js"


const handleOrdersSubmissionClick= (clickEvent) => {
    if (clickEvent.target.id === "saveOrders") {
        saveOrderSubmission()  
    }
}


export const saveOrders = () => {
    document.addEventListener("click", handleOrdersSubmissionClick)

    return "<button id='saveOrders'>Save Order</button>" 
}