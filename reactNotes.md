# React
## there are various types of react application from where we can start using react.
## among them we are doing in 1. CRA(Create React Application) which maybe considered as core React Appliaction 2. Vite React which also does the same job as CRA but it doesn't give all the dependencies like CRA.
## 1. package.json consists of what are the dependencies of react and we start those services using scripts using "npm"
## 2. usually we remove those files of unwanted css and js files which are predefined as the startup page in react. We can start using the barebone html page in react by removing those files while keeping files like:

### 1.in vite - App.jsx, main.jsx. jsx files are mandatory for vite application and the file should be named with first letter in capital(rules setted in vite).
### 2. in CRA js as well as jsx will work fine.(here index.js is the main file)

## 3. we can also add customised function in main.jsx or index.js just we need to write function which we want to return or inject and save it with extension .jsx or .js(in CRA) with the first letter as capital. Also we need to export that to import it in index.js or main.jsx(in vite).
## 4. we need call our created function or default function with <function_name/> in main.jsx or index.js
## 5. normal variables can be called by its name only
## 6. here normal objects are not understood by react so their is special react object or component where we can declare it as object with certain conditions keeping in mind.
```
// this is how react element is created
const AreactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    'visit google'
);
```