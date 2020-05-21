import React from "react";

import Link from'next/link'

const Homepage = () => (
  <div style={{textAlign:'center'}}>
<h1>Home Page</h1>

    <Link href="/about">
    <a>About Page </a>
    </Link>
    <br />
    <br />

    <Link href="/profile?name=mango"
    
    as="/profile/mango"
    ><a>Profile MANGO </a>



    </Link> 

    <br />
   
   <Link href="/profile?name=sango"
    
    as="/profile/sango"
    ><a>Profile Sango </a>



    </Link> 

    <br />
<Link href="/profile?name=ganzo"
    
    as="/profile/ganzo"
    >
    <a>Profile Ganzo </a>



    </Link> 

  </div>
);

export default Homepage;
