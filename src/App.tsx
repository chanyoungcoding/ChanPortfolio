import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/loading-screen'
import { auth } from './firebase'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/Not-found'
import Test from './pages/Test'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
    ]
  },

  {
    path: "test",
    element: <Test/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

function App() {

  const [loading, setLoading] = useState(true);

  const init = async () => {
    //firebase
    await auth.authStateReady();
    setLoading(false);
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <GlobalStyles/>
      {loading ? <LoadingScreen/> : <RouterProvider router={router}/>}
    </>
  )
}

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: white;
    color: white;
    font-family: system-ui, 
    -apple-system, BlinkMacSystemFont, 
    'Segoe UI', 
    Roboto, 
    Oxygen, 
    Ubuntu, 
    Cantarell, 
    'Open Sans', 
    'Helvetica Neue', 
    sans-serif;
  }
  ::-webkit-scrollbar {
    display:none;
  }
`

export default App
