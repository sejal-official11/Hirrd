import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Landing from "./pages/landing"
import OnBoarding from "./pages/onboarding";
import JobListing from "./pages/job-listning";
import JobPage from "./pages/Job";
import SavedJobs from "./pages/saved-job";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-jobs";


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element: <Landing/>,
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
    <RouterProvider router={router}/>
  )
}

export default App
