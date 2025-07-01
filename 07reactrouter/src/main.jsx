import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import User from './components/user/User.jsx'
import Github, {githubInfoLoader} from './components/github/Github.jsx'

// this element creates router variable which is further get called by "RouterProvider" for the router functionality
/**
 * Creates a React Router configuration using `createBrowserRouter` and `createRoutesFromElements`.
 *
 * - The root route (`'/'`) uses the `Layout` component as its main layout.
 * - The empty path route (`<Route path='' element={<Home/>} />`) also renders the `Home` component at the root path.
 *   - Note: Having both an index route and an empty path route pointing to the same component is redundant.
 * - The `'about'` route renders the `About` component at the `/about` path.
 * Defines the main routing structure for the application, with a layout wrapper and nested routes for Home and About pages.
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    // "layout" is the main path or starting path whose path is declared as "/" and is sandwitched with <Router>
    <Route path='/' element={<Layout/>}>
      // this is under same component hence given empty path
      <Route path='' element={<Home/>} />
      // this is under "/about" which loads the about section
      <Route path='about/' element={<About/>} />
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>} />
      </Route>
      <Route
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} /> // since we are exporting from the component itself additional loader is required
      // this should be used at the last route which show the element used when nothing is found or error 404
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

/**
 * Notes on the `loader` used in the Github route:
 *
 * - The `loader` prop in the `<Route>` element allows you to provide a data loading function for that route.
 * - In this example, `githubInfoLoader` is imported from the Github component file and assigned to the `loader` prop.
 * - When the `/github` route is matched, React Router will call `githubInfoLoader` before rendering the `Github` component.
 * - The data returned by the loader is made available to the component via the `useLoaderData` hook.
 * - This pattern is useful for fetching data required by a route before the component renders, enabling better data-driven routing and SSR support.
 */