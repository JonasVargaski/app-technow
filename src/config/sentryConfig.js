import * as Sentry from '@sentry/browser';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://6d69de8543d749378c2c1f1595394046@sentry.io/1774713',
  });
}
