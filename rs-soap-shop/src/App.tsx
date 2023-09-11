import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import AboutPage from './pages/aboutPage';
import CartPage from './pages/cartPage';
import SingInPage from './pages/singInPage';
import SignUpPage from './pages/singnUpPage';
import ProfilePage from './pages/profilePage';
import Footer from './components/footer';
import PageNotFound from './pages/pageNotFound';
import DetailedProductPage from './pages/detailedProductPage';
import { getAnonimousToken } from './services/registration.service';

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  const [token, setToken] = useState(null);
  const isLoggedIn = !!localStorage.getItem('token');
  const isSeenBefore = !!localStorage.getItem('anonimousToken');

  const setAnonimousToken = async () => {
    const id = await getAnonimousToken();
    console.log('got anonimous id');
    localStorage.setItem('anonimousToken', id.data.access_token);
    console.log('token is set: ' + id.data.access_token);
    setToken(id.data.access_token);
  };

  useEffect(() => {
    if (!isLoggedIn && !isSeenBefore) {
      setAnonimousToken();
      console.log('hello new visitor');
    } else {
      setToken('token');
    }
  },[]);

  return (
    <>
      {token && (
        <Routes>
          <Route
            path='/'
            element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/our-products'
            element={
              <AppLayout>
                <ProductsPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/our-products/:category'
            element={
              <AppLayout>
                <ProductsPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/our-products/:category/:subcategory'
            element={
              <AppLayout>
                <ProductsPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/about-us'
            element={
              <AppLayout>
                <AboutPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/cart'
            element={
              <AppLayout>
                <CartPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/sign-in'
            element={
              <AppLayout>
                <SingInPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/sign-up'
            element={
              <AppLayout>
                <SignUpPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/profile'
            element={
              <AppLayout>
                <ProfilePage />
              </AppLayout>
            }
          ></Route>
          <Route
            path='/product/:key'
            element={
              <AppLayout>
                <DetailedProductPage />
              </AppLayout>
            }
          ></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
