import About from "./about";
import Link from "next/link";

import Header from "../header/header.js";

import Homepage from "../common/homepage";


const App = () => {
  // const client = new ApolloClient({
  //   uri: "http://localhost:9000/graphql"
  // })
  return (
    <h1  style={{textAlign:'center'}}>
       
     <Header />
       
        <Homepage />
       
    </h1>
  );
};
export default App;
