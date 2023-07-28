import Grant from "./Components/Grant"
import Secondhead from "./Components/Secondhead"
import styles from '@/styles/Home.module.css'
import { getSession, useSession } from "next-auth/react";



function grants() {
 const {data: session, status} = useSession();

 
 if (status === "loading") {
  return <p>Loading...</p>;
}

if (!session) {
  return <p>Please sign in to see this page</p>;
}

  return (
    <>
    <Secondhead name={session.user.name}/>
    <div style={{width:"100vw", height:"100px",  display:"flex", justifyContent:"center", alignItems:"center"}}>
    <h1 className={styles.greeting}> 
        👋 Hello, {session.user.name}! <br></br>
This grants would be perfect for you.
    </h1>
    </div>
    <div style={{width:"100vw", height:"auto", display:"grid", justifyContent:"center", alignItems:"center", backgroundColor:"", position:"absolute", padding:"50px"}}>
    <div className={styles.grantsgrid} style={{ display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "50px",}}>

    <Grant symbol="eth" title="ethereum ecosystem support program (small grants)" link="https://esp.ethereum.foundation/applicants/small-grants/apply"
     about=" We award dozens of grants each quarter, across a variety of categories. We support open source projects that strengthen Ethereum's foundations, with a particular focus on builder tools, infrastructure, research, community resources and other public goods. Funding is generally directed toward supporting builders rather than end users."/>
    
    <Grant symbol="sol" title="solana foundation grants" link="https://share.hsforms.com/1GE1hYdApQGaDiCgaiWMXHA5lohw"
     about="The Solana Foundation Grants Program provides milestone-based funding to support initiatives aimed at decentralizing, growing, and securing the Solana network." />
    
    <Grant symbol="sol" title="evernew capital " link="https://docs.google.com/forms/d/e/1FAIpQLSfqQagLGoSfZvAy2PUyFXQPR8OMdSCKFJO0WBcjGUNqC76aUQ/viewform"
    about=" Evernew Capital focuses on supporting DeFi, NFT, and infrastructure projects that add new dimensions of utility to the Solana Ecosystem and the multi-chain crypto ecosystem as a whole."/>
    
    <Grant symbol="eth" title=" aave grants dao " link="https://aavegrants.org/apply-for-a-grant"
    about=" Aave Grants DAO “is a community-led grants program to fund ideas submitted by the Aave protocol’s community, with a focus on empowering a wider network of community developers. The community has allocated $1 million per quarter for two quarters for funding grants."/>
    
    <Grant symbol="fil" title="filecoin dev grants " link="https://github.com/filecoin-project/devgrants/issues/new?assignees=SeedingTrees&labels=&template=microgrant.md&title=Next+Step+Microgrant%3A+%3CYour+Title+Here%3E"
    about=" the Filecoin project has focused primarily on research, specification and implementation of a decentralized storage network protocol. "/>
    
    <Grant symbol="algo" title="algogrand accelerate " link="https://docs.google.com/forms/d/e/1FAIpQLSddmHyCY3HdqNVeO51sBmx8LfkOP5_OJmetKaxm1EGE2Fpj7Q/viewform"
    about=" Algorand Accelerate is the first start-up accelerator for developers and entrepreneurs building on Algorand. We will fund and support passionate founders building promising decentralized applications on the Algorand platform.    "/>
    </div>
    
    </div>

    </>
    
  )
}

{/* export async function getServerSideProps(context) {
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
*/}

export default grants