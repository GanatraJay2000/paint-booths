// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as SibApiV3Sdk from "@sendinblue/client";

const apiInstance = new SibApiV3Sdk.ContactsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.API_KEY as string,
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = req.body.email;
  createContact.attributes = {
    FIRSTNAME: req.body.fname,
    LASTNAME: req.body.lname,
    COMPANY: req.body.company,
    PHONE: req.body.phone ?? "",
    CONTACT_PREFERENCE: req.body.contact.toString(),
    PRODUCT: req.body.product.toString() ?? "",
    MESSAGE: req.body.message ?? "",
  };
  createContact.listIds = [7];
  apiInstance.createContact(createContact).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data),
      );
      res.status(200);
    },
    function (error) {
      res.status(500).json({ error: error.response.body });
    },
  );
  // addEmailToList(req.body);
}
