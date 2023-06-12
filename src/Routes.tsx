import { Route, Routes } from "react-router-dom"

import { CompleteOrderPage } from "./pages/CompleteOrder/Index"
import { HomePage } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/completeOrder'
          element={<CompleteOrderPage />}
        />
      </Route>
    </Routes>
  )
}
