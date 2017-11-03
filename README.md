# universal-react-router-v4-jforaker

Demo app showing data fetching and react-router v4 for server and client rendering.

Similar to the demo app [Ryan Florence](https://github.com/ryanflorence) shows in his
[introductory video for react-router 4](https://www.youtube.com/watch?v=a4kqMQorcnE), this app fetches data
about from the GitHub API and displays repos. The difference is that in this demo, the markup of the page
is initially rendered on the server side, and when the user clicks on one of the links, the Gist data is rendered
on the client side without another request to the server, using the same React components and react-router link
elements that the backend is using (hence “universal”).

Each subpage contains custom meta tags via Helmet that can be parsed server-side

## [Demo](https://universal-react-router-v4-jforaker-tkeuwckyox.now.sh)

## How to Run

Install the node modules used by the application:

    npm install

Build JavaScript bundles for the server- and client-side code using webpack:

    npm run build

Run the application in production:

    npm start


## Local Development

To speed up local development when working on the source code, you can start the application in watch mode.

To automatically rebuild the client JavaScript bundle when client source code changes:

    npm run dev

You can then go to [localhost:3000](http://localhost:3000/) in your favorite browser to see the Repos.


## License

Published under the [MIT License](LICENSE.md).
