import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import productsArr from "./store/productArr";
import AuthContext from "./store/auth-context";

function App() {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/store' exact>
                        {authCtx.isLoggedIn && (
                            <StorePage products={productsArr} />
                        )}
                        {!authCtx.isLoggedIn && <Redirect to='/login'/>}
                    </Route>
                    <Route path='/store/:productId'>
                        <ProductPage products={productsArr} />
                    </Route>
                    <Route path='/about'>
                        <AboutPage />
                    </Route>
                    <Route path='/login'>
                        <LoginPage />
                    </Route>
                    <Route path='/contact'>
                        <ContactPage />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
            </>
    );
}

export default App;
