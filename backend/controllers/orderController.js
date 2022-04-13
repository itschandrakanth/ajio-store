import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc create new order
// @route /api/orders
// @access private

const addOrderItems = asyncHandler( async(req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No orders found')
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
    }
})

export { addOrderItems }