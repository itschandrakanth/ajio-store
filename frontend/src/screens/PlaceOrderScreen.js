import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { ORDER_DETAILS_RESET } from '../constants/orderConstants'

function PlaceOrderScreen({ history }) {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } else if (!cart.paymentMethod) {
    history.push('/payment')
  }

  // calculating prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 500 ? 0 : 100)
  cart.taxPrice = addDecimals(Number(cart.itemsPrice * 0.18).toFixed(2))

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  )

  const orderCreate = useSelector((state) => state.orderCreate)
  // take the state available

  const { order, success, error } = orderCreate

  useEffect(() => {

  }, [])

  return (
    <>

    </>
  )
}

export default PlaceOrderScreen