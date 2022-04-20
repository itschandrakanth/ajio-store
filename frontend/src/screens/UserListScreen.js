import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { deleteUser, listUsers } from '../actions/userActions'

function UserListScreen() {
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const {loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listUsers()) // from actions
        } else {
            history.push('/login')
        }
    }, [dispatch, successDelete, history, userInfo]);

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteUser(id)) // from actions
        }
    }
  return (
    <>

    </>
  )
}

export default UserListScreen