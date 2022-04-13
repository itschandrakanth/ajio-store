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

        const createdOrder = await order.save()

        res.status(200).json(createdOrder)
    }
})


// @desc Get order by Id
// @route /api/orders/:id
// @access private
const getOrderById = asyncHandler( async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )

    if(order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

export { addOrderItems, getOrderById }