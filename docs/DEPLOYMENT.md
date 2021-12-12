## Deployment Instructions

### Pre-requisites

* A functional backend REST API service of Luxury Preowned.
* Signup for a free [Netlify](https://www.netlify.com/) account.

### Deploy Application to Netlify

* Login to Netlify](https://www.netlify.com/)
* Click <b>New site from Git</b>
* Click <b>GitHub</b> as the Git provider to connect.
* Select the git repository.
* For the site settings, 
  * specify "build command" as `npm run build` and publish directory as `build`. 
  * click "Show advance" to add the list of environments variables required to be in `.env` file for local development - refer to [DEVELOPMENT.md](DEVELOPMENT.md).
* Click <b>Deploy site</b> button.
