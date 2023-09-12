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
import { getAnonymousToken } from './services/registration.service';
import { tokenNames } from './lib/enums';
const { userToken, anonymous, anonymousRefresh } = tokenNames;

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
  const [hasToken, setHasToken] = useState<boolean>(false);
  const isLoggedIn = !!localStorage.getItem(`${userToken}`);
  const isSeenBefore = !!localStorage.getItem(`${anonymous}`);

  const setAnonymousToken = async () => {
    const id = await getAnonymousToken();
    localStorage.setItem(`${anonymous}`, JSON.stringify(id.data));
    localStorage.setItem(`${anonymousRefresh}`, id.data.refresh_token);
    setHasToken(true);
  };

  useEffect(() => {
    if (!isLoggedIn && !isSeenBefore) {
      setAnonymousToken();
    } else {
      setHasToken(true);
    }
  }, []);

  return (
    <>
      {hasToken && (
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
