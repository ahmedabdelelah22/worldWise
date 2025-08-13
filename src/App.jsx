import { lazy, Suspense } from "react"
import { BrowserRouter, Routes , Route ,Navigate } from "react-router-dom"
import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import ProtectedRoute from "./pages/ProtectedRoute"

import CityList from "./components/CityList"
import City from "./components/City"
import Form from "./components/Form"
import CountryList from "./components/CountryList"
import SpinnerFullPage from "./components/SpinnerFullPage"

// import Product from "./pages/Product"
// import Homepage from "./pages/Homepage"
// import Pricing from "./pages/Pricing"
// import PageNotFound from "./pages/PageNotFound"
// import AppLayout from "./pages/AppLayout"
// import Login from "./pages/Login"

// before spliting bundle=====================================================================================
// ist/assets/index-b5f9d9cc.css   30.21 kB │ gzip:   5.06 kB
// dist/assets/index-5a843e77.js   509.88 kB │ gzip: 148.89 kB
// ✓ built in 44.70s
const Homepage = lazy(()=>import("./pages/Homepage"));
const Product = lazy(()=>import("./pages/Product"));
const Pricing = lazy(()=>import("./pages/Pricing"));
const PageNotFound = lazy(()=>import("./pages/PageNotFound"));
const AppLayout = lazy(()=>import("./pages/AppLayout"));
const Login = lazy(()=>import("./pages/Login"));
// after spliting bundle============================================================================================
// dist/index.html                           0.46 kB │ gzip:   0.31 kB
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-b9276e6f.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-2f896d7c.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-4a2cdb30.css           26.54 kB │ gzip:   4.37 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-96147548.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-d6b26cda.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-fea71bf3.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-c97fbec9.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-aceb352a.js          0.66 kB │ gzip:   0.41 kB
// dist/assets/Product-ca3e60a4.js           0.85 kB │ gzip:   0.48 kB
// dist/assets/Login-72ef6329.js             1.00 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-99abd41d.js       156.96 kB │ gzip:  46.25 kB
// dist/assets/index-1ea965eb.js           351.38 kB │ gzip: 102.19 kB
// ✓ built in 40.92s


function App() {


  return (
      <AuthProvider>
  <CitiesProvider>

  <BrowserRouter>
  <Suspense fallback={<SpinnerFullPage />}>
  <Routes>
    <Route index element={<Homepage />} />
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />
   <Route path="app" element={<ProtectedRoute> <AppLayout /></ProtectedRoute>}>
      <Route index element={<Navigate replace to='cities'/>}/>
   <Route path="cities" element={<CityList />}/>
    <Route path="cities/:id" element={<City/>}/>
    <Route path="countries" element={<CountryList />}/>
   <Route path="form" element={<Form/>}/>
   </Route>

  <Route path="login" element={<Login />} />

    <Route path="*" element={<PageNotFound />} />
  </Routes>
  </Suspense>
  </BrowserRouter>

</CitiesProvider>
  </AuthProvider>
  )
}

export default App
