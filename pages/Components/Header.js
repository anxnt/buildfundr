 import {useSession, signIn, signOut} from 'next-auth/react'
 import styles from '@/styles/Home.module.css'

function Header() {

  const {data:session} = useSession()

  if (session){

  
  return (
  
   <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"150px", width:"100vw",  fontFamily:"Manrope", fontWeight:"light"}}>
       <div className={styles.logo} style={{height:"50px", width:"400px", display:"flex", justifyContent:"center", alignItems:"center", color:"#ECECEC", fontSize:"25px", }}>
        <a href='/' > <h1 > buildfundr</h1></a>
       </div>

       <div style={{height:"50px", width:"400px", display:"flex", justifyContent:"space-evenly", alignItems:"center", }}>
      <h1 className={styles.menu} style={{color:"#5F5F5F", fontWeight:"lighter",fontSize:"35px"}}> about</h1>
       <h1 className={styles.menu} style={{cursor:"pointer", color:"#EBD070", fontWeight:"lighter", fontSize:"35px"}} onClick={()=> signOut()}> sign out </h1> 
       </div>


    </div>
  )
  }
  else{
    return(
     
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"150px", width:"100vw",  fontFamily:"Manrope", fontWeight:"light"}}>
      <div style={{height:"50px", width:"400px", display:"flex", justifyContent:"center", alignItems:"center", color:"#ECECEC", fontSize:"25px", }}>
      <a href='/' ><h1 className={styles.logo}> buildfundr</h1> </a> 
      </div>

      <div style={{height:"50px", width:"400px", display:"flex", justifyContent:"space-evenly", alignItems:"center", }}>
      <h1 className={styles.menu} style={{color:"#5F5F5F", fontWeight:"lighter",fontSize:"35px"}}> about</h1>
      <h1 className={styles.menu} style={{cursor:"pointer", color:"#EBD070", fontWeight:"lighter", fontSize:"35px"}} onClick={()=> signIn()}> log in </h1> 
      </div>


   </div>

   )
    }
  }


export default Header