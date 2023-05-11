import styles from '@/styles/Home.module.css'

function Secondhead(props) {
  return (
    <div className={styles.theheader} style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"150px", width:"100vw",  fontFamily:"Manrope", fontWeight:"light"}}>
    <div style={{height:"50px", width:"400px", display:"flex", justifyContent:"center", alignItems:"center", color:"#DEDEDE", fontSize:"25px", }}>
    <a href="/"><h1> buildfundr</h1></a>

    </div>

    <div style={{height:"50px", width:"450px", display:"flex", justifyContent:"space-evenly", alignItems:"center", }}>
    <h1 className={styles.menu} style={{color:"#5F5F5F", fontWeight:"lighter",fontSize:"35px"}}> about</h1>
    <h1 className={styles.menu} style={{color:"#EBD070", fontWeight:"lighter",fontSize:"35px"}}> {props.name} </h1>

    </div>
    </div>
  )
}

export default Secondhead