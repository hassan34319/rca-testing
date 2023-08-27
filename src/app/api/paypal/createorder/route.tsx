/* eslint-disable import/order */
/* eslint-disable perfectionist/sort-imports */
import client from '../../../utils/paypal/index'
import { NextResponse } from 'next/server'
import paypal from '@paypal/checkout-server-sdk'


export async function POST(request: Request) {
  const body = await request.json()


  if(body.order_price || !body.user_id)
  return NextResponse.json({ success: false, error: "Please provide order Id and Price" })


  try{
    const PaypalClient = client()
    const req = new paypal.orders.OrdersCreateRequest()
    req.headers.Prefer = 'return=representation'
    req.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: body.order_price,
          },
        },
      ],
    })
    const response = await PaypalClient.execute(request)
    if (response.statusCode !== 201) {
      console.log("RES: ", response)
      return NextResponse.json({ success: false, error: "ERROR FROM PAYPAL EXUCUTION" })
    }

    // ...

    // // Your Custom Code for doing something with order
    // // Usually Store an order in the database like MongoDB

    // ...   

    return NextResponse.json({ success: true, message : "order added successfully" })
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
    return NextResponse.json({ success: false, error: "No user found" })
  }

}