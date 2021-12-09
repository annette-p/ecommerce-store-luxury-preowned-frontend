## Local Development Environment Setup

### Pre-requisites

* A functional backend REST API service of Luxury Preowned.
* An [EmailJS](https://www.emailjs.com/) account.
  * Follow the [documentation](https://www.emailjs.com/docs/) to [add an email service](https://www.emailjs.com/docs/tutorial/adding-email-service/), and [create an email template](https://www.emailjs.com/docs/tutorial/creating-email-template/) with the following content. 

```
Subject: Luxury Preowned | {{ subject }}
Content:
{{ body }}

{{ content }}
```

* Create a `.env` file in the same directory as `index.js` with the below-contents.

```
# desired port the app will run on
PORT=3000

# the website address for backend REST API service of Luxury Preowned
REACT_APP_BACKEND_API=https://xxx

# EmailJS configuration
# - obtain from https://dashboard.emailjs.com/admin
REACT_APP_EMAILJS_SERVICE_ID=xxx
# - obtain from https://dashboard.emailjs.com/admin/templates
REACT_APP_EMAILJS_TEMPLATE_ID=xxx
# - obtain from https://dashboard.emailjs.com/admin/integration
REACT_APP_EMAILJS_USER_ID=xxx
```

### Setting up

* Install the required NodeJS packages

```
npm install
```

* Start the application

```
npm start
```


