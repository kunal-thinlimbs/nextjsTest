import Link from'next/link'

const Profile = (props) => {

    Profile.getInitialProps = ({query}) => {
       
return query
        
      }
      console.log("ggg",props)

  return <div  style={{textAlign:'center'}}><h1
 >Profile Page {props.name}</h1>
  
  <br />
  <Link href="/">Go Back</Link> 
<br/>
 <h2> its done by directory system as pages/profile/index.js</h2>
  </div>;
};

export default Profile;





