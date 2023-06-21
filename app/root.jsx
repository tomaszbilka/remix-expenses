import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react';

import Error from '~/components/util/Error';
import styles from '~/styles/shared.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

const Document = ({ title, children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Meta />
      <Links />
      <title>{title}</title>
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document title={error.statusText}>
        <main>
          <Error title={error.statusText}>
            <p>{error?.message || 'Sth went wrong! Try again later!'}</p>
            <p>
              Back to <Link to="/">safety</Link>
            </p>
          </Error>
        </main>
      </Document>
    );
  }

  return (
    <Document title="An error">
      <main>
        <Error title="An error">
          <p>{error?.message || 'Sth went wrong! Try again later!'}</p>
          <p>
            Back to <Link to="/">safety</Link>
          </p>
        </Error>
      </main>
    </Document>
  );
};
