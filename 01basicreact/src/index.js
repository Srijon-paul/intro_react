import ReactDOM from 'react-dom/client';
import App from './App';
import Youtube from './Youtube';

// more than one element is not allowed in react so there is a empty paranthesis where we can add more than one element and also it will be treated as single element in react

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Youtube/>
  </>
);
