import axios from 'axios';

const listId = `${process.env.REACT_APP_MAILCHIMP_AUDIENCE}`;
const apiKey = `${process.env.REACT_APP_MAILCHIMP_KEY}`;

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const {
    firstName,
    lastName,
    email
  } = body;

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Please provide an email address.'
      }),
    }
  }

  try {
    const payload = {
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
      email_address: email,
      status: 'subscribed',
    }

    const {
      data
    } = await axios.post(`https://us5.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
      headers: {
        Authorization: `Basic ${apiKey}`,
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}