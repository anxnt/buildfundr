import Onboardform from "./Components/Onboardform"
import { getSession } from "next-auth/react";

function onboarding() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "150px", width: "100vw", fontFamily: "Manrope", fontWeight: "light" }}>
        <div style={{ height: "50px", width: "400px", display: "flex", justifyContent: "center", alignItems: "center", color: "#DEDEDE", fontSize: "25px", }}>
          <h1> buildfundr</h1>

        </div>

        <div style={{ height: "50px", width: "300px", display: "flex", justifyContent: "space-evenly", alignItems: "center", }}>
        </div>
      </div>
      <Onboardform />

    </> 
  )
}

 export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}


export default onboarding