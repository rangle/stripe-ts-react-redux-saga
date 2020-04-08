# Stripe Integrations for Payment and Terminal using React with typescript

A starter for an online store that implements the AWS Serverless functions provided by rangle/Stripe-AWS-nodejs-backend. 
This project demostraits Stripe Elements, Stripe Terminal using Simulator.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Typescript, Redux and Saga's are also a major component of this app.

Design considerations: Extensive use of Functional Components and Hooks.

## Getting Started

this project deploys to AWS S3, this project also implements AWS Cognito for Authentication - it's very poorly implemented at this stage.  
setup an AWS account and Serverless  
https://serverless.com/framework/docs/getting-started/  
https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/  
install the AWS cli tools and serverless tools.   

update the serverless.yml file to suite your needs, the current serverless.yml is configured to use a real domain name through CloudFront which is beyond the scope of this readme.  
https://serverless.com/framework/docs/providers/aws/events/cloudfront/  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn deploy`

Builds a package and uploads via Serverless to an AWS S3 bucket

## Running the tests
- write then
- run them
- create a pull request
- Much thanks!

## Deployment
Upload to AWS and run from your own domain, or the AWS domain provided. 
```text
npm run deploy
```
The app initially tries to populate the catalog from the lambda functions in https://github.com/theopolisme/react-native-stripe-terminal
all the endpoints are in the Saga's folder which treats each backend call as a service.
 
## Authors
* **Ken Easson** - *Initial work* - [Rangle.io](https://rangle.io)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments
* Dave McDonald - *Overall project support*
* José Guillén - *Serverless and AWS assistance*
* Jason Santos - *Typescript and Code Review*
* The many others at *Rangle.io* that have helped me learn all this tech!

