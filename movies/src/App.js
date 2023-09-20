import React from "react"

import {Header} from "./layout/Header"
import {Footer} from "./layout/Footer"
import { Main } from "./layout/Main";
import { Movies } from "./components/Movies";
import { Movie } from "./components/Movie";
import { Preloader } from "./components/Preloader";
import { Search } from "./components/Search";
function App() {
  return (
    <>
    <React.Fragment>

    </React.Fragment>
    <Header />
    <Footer />
    <Main />
    <Movies />
    <Movie />
    <Preloader />
    <Search />

    </>
      

  );
}

export default App;
