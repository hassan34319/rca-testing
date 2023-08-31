/* eslint-disable prefer-const */
import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

export async function POST(request: Request) {
  console.log('I entered');
  const body = await request.json();
  const { email, subject, message } = body;

  let apiInstance = new SibApiV3Sdk.ContactsApi();
  apiInstance.setApiKey(
    SibApiV3Sdk.ContactsApiApiKeys.apiKey,
    process.env.NEXT_PUBLIC_API_KEY as string
  );
  // eslint-disable-next-line prefer-const
  let identifier = email;

  apiInstance.getContactInfo(identifier).then(
    (data) => {
      console.log(`API called successfully. Returned data: ${JSON.stringify(data)}`);
    },
    async (error) => {
      console.error(error);
      let createContact = new SibApiV3Sdk.CreateContact();
      console.log(email);
      createContact.email = email;
      createContact.listIds = [6];

      const res_cont = await apiInstance.createContact(createContact);
    }
  );

  // eslint-disable-next-line prefer-const
  let apiInstance2 = new SibApiV3Sdk.TransactionalEmailsApi();
  apiInstance2.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    process.env.NEXT_PUBLIC_API_KEY as string
  );
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

  sendSmtpEmail = {
    to: [
      {
        email,
      },
    ],
    templateId: 3,
    params: {
      Subject: subject,
      message,
    },
    headers: {
      'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
      'api-key': process.env.NEXT_PUBLIC_API_KEY,
      'content-type': 'application/json',
      accept: 'application/json',
    },
  };

  const res3 = await apiInstance2.sendTransacEmail(sendSmtpEmail);
  console.log(res3);
  return NextResponse.json(res3);
}
