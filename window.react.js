/**
 * Re-assign window.React in production mode.
 * From react-material-ui
 */
 if (window && !window.hasOwnProperty('React')) {
   window.React = React;
 }
