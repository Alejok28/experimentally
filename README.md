
# Experimetality

## General Info

Experimentality is an app to search videos from YouTube using the youtube's api.
The app allows you:
- Search videos.
- See six recommended videos according to your search.
- Watch the video selected.
- See video info like title, description, like count, dislike count and comment count

## Technologies
- [Create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)
- [MaterialUi](https://material-ui.com/)
- [CircleCI](https://circleci.com/)
- [Netlify](https://www.netlify.com/)
- [Jest](https://jestjs.io/)
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro)
- [Docz](https://www.docz.site/)
- [Apisauce](https://github.com/infinitered/apisauce/blob/master/package.json)
- [react-player](https://github.com/CookPete/react-player)

## Instaling

To see the project:
1. Clone the repository.
2. Run `yarn`.
3. Run `yarn start`.
4. Visit http://localhost:3000/.

Also, you can se the demo here: [Experimentaly demo](https://experimentality.netlify.com)

## Test
To test, you must run `yarn test`

## Docs
For the documentation I used `Docz`. This package allows you to see all documentation in a single page with basic usage examples for each components.
To see the docs you must run the command `yarn docz:dev` or visit [Experimentality docs](https://silly-darwin-3e4b7c.netlify.com).

## CI/CD
To CICD I use CircleCI and Netlify. In the `config.yml` file is the step that runs the yarn script to deploy the app to Netlify.
