import styles from '@/styles/Home.module.css'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link';
import Grant from './Grant';


function Bod() {

  const {data:session} = useSession()

  if (session){

  return (
    <>

      <div className={styles.thebody} style={{ paddingBottom: "50px", width: "100vw", height: "300px", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
        <div style={{ fontFamily: "Manrope", color: "#ECECEC" }}><h1 className={styles.tagline} style={{ fontSize: "80px",  fontWeight: "bold" }}> grants tailored just for you! 💰</h1>  </div>


      <Link href="/onboarding"> <div className={styles.button} style={{ width: "300px", height: "75px", backgroundColor: "#EBD070", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Manrope", borderRadius: "20px" }}>
        <h1 className={styles.buttonfont}  style={{ fontSize: "25px", color:"black" }}>   let's get started </h1> </div>  </Link> 

      </div>


      <div className={styles.marqueecont} style={{ display: "flex", justifyContent: "space-evenly", width: "100vw", height: "280px", backgroundColor: "", alignItems: "center" }}>

      <Grant
      symbol="eth" title="ethereum ecosystem support program (small grants)"
      about=" We award dozens of grants each quarter, across a variety of categories. We support open source projects that strengthen Ethereum's foundations, with a particular focus on builder tools, infrastructure, research, community resources and other public goods. Funding is generally directed toward supporting builders rather than end users."/>
      <Grant
      symbol="sol" title="solana foundation grants"
      about=" The Solana Foundation Grants Program provides milestone-based funding to support initiatives aimed at decentralizing, growing, and securing the Solana network."/>
        
      </div>

      
      <div className={styles.marqueecont1} style={{ display: "none", justifyContent: "space-evenly", width: "100vw", height: "280px", backgroundColor: "", alignItems: "center" }}>
        <Grant/>
        </div>
    </>  
    )}

    else{

    return (
      <>
  
        <div className={styles.thebody} style={{ paddingBottom: "50px", width: "100vw", height: "300px", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
          <div style={{ fontFamily: "Manrope", fontSize: "40px", color: "#ECECEC" }}><h1 className={styles.tagline} style={{ fontSize:"80px", fontWeight: "bold" }}> grants tailored just for you! 💰</h1>
  
          </div>
  
  
          <div className={styles.button}  onClick={()=> signIn()} style={{ cursor:"pointer",width: "300px", height: "75px", backgroundColor: "", border:"1px white solid", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Manrope", borderRadius: "20px" }}>
            <h1 className={styles.buttonfont}  style={{ color:"white", fontSize: "25px", }}>   log in with github </h1> </div>
        </div>
  
  
        <div className={styles.marqueecont} style={{ display: "flex", justifyContent: "space-evenly", width: "100vw", height: "280px", backgroundColor: "", alignItems: "center" }}>
        <Grant/>
        <Grant/>    
        </div>

        <div className={styles.marqueecont1} style={{ display: "none", justifyContent: "space-evenly", width: "100vw", height: "280px", backgroundColor: "", alignItems: "center" }}>
        <Grant/>
        </div>



      </>  
      )
}
}

export default Bod