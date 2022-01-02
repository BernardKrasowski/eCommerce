import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const docSnap = await getDoc(userRef);

        this.setState({
          currentUser: {
            id: docSnap.id,
            ...docSnap.data(),
          },
        });
      }
      // console.log("User save on State", this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SigninAndSignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
