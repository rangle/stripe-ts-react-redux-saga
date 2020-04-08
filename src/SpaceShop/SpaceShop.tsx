import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import Authenticate from "../Session/Authenticate";
import Catalogue from "../Catalogue/CatalogueComponent";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import {PaymentStatus} from "../Checkout/PaymentStatusComponent";
import LegalContact from "../Legal/contact";
import PrivacyPolicy from "../Legal/privacyPolicy";
import TermsOfService from "../Legal/termsOfService";
import Footer from "./Footer";
// import {useSelector} from "react-redux";
// import {isLoggedInSelector} from "../Session/sessionSelector";
import LogoutPage from "../Session/LogoutPage";
import WebHook from "./WebHook";

export const SpaceShop: React.FC = () => {

    // const isLoggedIn = useSelector(isLoggedInSelector);
    // console.log('Is Logged In', isLoggedIn);
    // return (isLoggedIn)
    //     ? (<MainBody />)
    //     : (<NotLoggedIn />);
    return <MainBody />
}

const basepath = 'https://shopdevel.kene.info';

const NotLoggedIn: React.FC = () => <>
    <Router>
        <Switch>
            <Route path="/stripewebhooks">
                <WebHook />
            </Route>
            <Route path="/in">
                <Authenticate />
            </Route>
            <Route path="*">
                <div className="login-container">
                    <a href={"https://authdevel.kene.info/login?client_id=2egmh16mjherp1rj54l5cdchp3&response_type=code&scope=aws.cognito.signin.user.admin+openid+profile&redirect_uri=" + basepath + "/in"}>
                        Click here to log in
                    </a>
                </div>
            </Route>
        </Switch>
    </Router>
</>

const MainBody: React.FC = () => <>
    <PaymentStatus/>
    <Router>
        <div className="logout">
            <Link to="logout">Log Out</Link>
        </div>
        <Switch>
            <Route exact path="/logout">
                <LogoutPage />
            </Route>
            <Route exact path="/">
                <Catalogue/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route exact path="/checkout">
                <Checkout/>
            </Route>
            <Route exact path="/contact">
                <LegalContact/>
            </Route>
            <Route exact path="/privacy">
                <PrivacyPolicy/>
            </Route>
            <Route exact path="/terms">
                <TermsOfService/>
            </Route>
        </Switch>
        <hr/>
        <Footer/>
    </Router>
</>


