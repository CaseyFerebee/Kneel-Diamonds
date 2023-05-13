import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StylesOptions.js'
import { Orders } from './orders.js'
import { placeOrders } from './saveOrders.js'

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const stylesOptionHTML = await StyleOptions()
    const sizeOptionHTML = await SizeOptions()
    const placeOrdersHTML =  placeOrders()
    const ordersHTML = await  Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesOptionHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrdersHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}
document.addEventListener("newOrderCreated", render)


render()