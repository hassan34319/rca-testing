import { NextResponse } from 'next/server'
import paypal from '@paypal/checkout-server-sdk'

import client from '../../utils/paypal/index'



export async function POST(request: Request) {
  const body = await request.json()


  if(body.order_price || !body.user_id)
  return NextResponse.json({ success: false, error: "Please provide order Id and Price" })


  try{
    const PaypalClient = client()
    // This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const request2 = new paypal.orders.OrdersCreateRequest()
    request2.headers.Prefer = 'return=representation'
    request2.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: `${body.order_price}`,
          },
        },
      ],
    })
    const response = await PaypalClient.execute(request2)
    if (response.statusCode !== 201) {
      console.log("RES: ", response)
      return NextResponse.json({ success: false, error: "Please provide order Id and Price" })
    }


    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB   

    return NextResponse.json({response})
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
    return NextResponse.json({ success: false, error: "No user" })
  }

}