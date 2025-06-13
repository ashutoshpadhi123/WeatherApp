import React from 'react'
import HomePage from './pages/HomePage.jsx';
import Countries from './pages/Countries.jsx';
import Cities from './pages/Cities.jsx';
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,

} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/cities' element={<Cities />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;


}

export default App