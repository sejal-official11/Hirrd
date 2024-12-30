import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import AppLayout from "./layouts/app-layout"
import OnBoarding from "./pages/onboarding";
import JobPage from "./pages/Job";
import SavedJobs from "./pages/saved-job";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-jobs";
import LandingPage from "./pages/landing";
import JobListing from "./pages/job-listing";


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>,
      },
      {
        path: '/onboarding',
        element: <OnBoarding/>,
      },
      {
        path: '/jobs',
        element: <JobListing/>,
      },
      {
        path: '/job/:id',
        element: <JobPage/>,
      },
      {
        path: '/post-job',
        element: <PostJob/>,
      },
      {
        path: '/saved-job',
        element: <SavedJobs/>,
      },
      {
        path: '/my-jobs',
        element: <MyJobs/>,
      },
    ],
  },
]);


function App() {

  return (
  
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
      </ThemeProvider> 
  )
}



export default App
