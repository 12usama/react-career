import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/Home/FeaturedJobs/Job/JobDetails/JobDetails';
import LogIn from './components/LogIn/LogIn';
import BlogDetails from './components/Blogs/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path:"/blogs/:id",
         element: <BlogDetails></BlogDetails>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
