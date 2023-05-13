

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metals&_expand=style&_expand=sizes")
    const orders =  await fetchResponse.json()




    let ordersHTML = ""

    const order = orders.map(
        (order) => {
        const orderPrice = order.metals.price + order.style.price + order.sizes.price


            return ` <section class="order">
            <div>Order #${order.id} costs ${orderPrice}</div>
            
    </section> 
    `
        }
    )

    ordersHTML += order .join("")
    return ordersHTML
}


