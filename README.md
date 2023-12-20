# INST377 Final Project
**Authors:** Anish Babu, Alexia Early, Jason Li

### About Our Project
Our goal with this project was to take data about job openings in Germany accessible for anyone looking to find jobs overseas. We know that looking for jobs is already stressful and for those who are interested in going overseas to Germany face even more stress. This website makes it easy learn about the opportunities there while offering a unique and simple format that allows users to research and save listings for future use. Our website allows the user to easily find jobs in Germany through an intuitive organization/sorting system on the website. For those who want to go overseas but do not know what kind of job (i.e. sponsorship, visa work, remote, etc.) they want in Germany, there will be a questionnaire they can fill out to find which is best for them. The data we use for this project is from Arbeitnow API. This is an open source API that was built in Berlin and has extensive information on job opportunities in Germany. 

### Target Browsers
This project is meant to work on any laptop or PC browser (Chrome, Safari, Firefox, etc.) with no issue. Attempting to load on iPhones, Androids, or tablets will not work due to formatting issues.

### Future Development
In the future, we hope to expand our reach beyond Germany and continue to include other European countries in order to expand our reach. This will allow us to reach a much larger audience for those seeking jobs in countries like France or Italy. With further development we could also explore a messaging interface between applicants and recruiters.

## User Manual
How to run:
- Clone repository from GitHub
- Install dependencies: `npm i`
- Start the web application: `npm start`
- Stop the web application: CTRL + C in your terminal
- load http://localhost:3000/ to access website

## Developer Manual

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### API: https://www.arbeitnow.com/api/job-board-api
`FETCH ("https://www.arbeitnow.com/api/job-board-api")` Retrieves information including:
- Job Title
- Description
- Company
- Location
- Job Type
- Additional Tags
- Link to Apply

This project also uses supabase to collect and store data within a database.

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
