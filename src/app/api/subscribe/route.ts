import { NextResponse } from "next/server";
import * as SibApiV3Sdk from '@sendinblue/client'

export async function POST(request: Request) {
  console.log('I entered');
  const body = await request.json();
  const { email } = body;
  // eslint-disable-next-line prefer-const
  let apiInstance = new SibApiV3Sdk.ContactsApi();
  apiInstance.setApiKey(
    SibApiV3Sdk.ContactsApiApiKeys.apiKey,
    process.env.NEXT_PUBLIC_API_KEY as string
  );
  // eslint-disable-next-line prefer-const
  let createContact = new SibApiV3Sdk.CreateContact();
  console.log(email);
  createContact.email = email;
  createContact.listIds = [3];

  const res_cont = await apiInstance.createContact(createContact)
  console.log(res_cont);
  return NextResponse.json(res_cont);
}


