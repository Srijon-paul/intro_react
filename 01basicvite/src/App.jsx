import Youtube from "./Youtube"

// we can inject variable inside the html elements using curly braces but it must be something which can be evaluated and not any logic expression
function App() {
  const username = "Srijon"
  return (
    <>
      <h1>Hello Srijon! this is vite + react app {2+2}</h1>
      {/*{2+2} can be evaluated */}
      <Youtube/>
      <h1>Hello Srijon! this is vite {username}</h1>
    </>
  )
}
export default App
