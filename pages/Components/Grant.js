import React from 'react'
import styles from '@/styles/Home.module.css'

function Grant(props) {
  return (


    <div className={styles.grantc} style={{ backgroundColor: "#EEEEEE", height: "270px", width: "500px", borderRadius: "20px", display: "flex", overflow: "hidden", flexDirection: "column", }}>
      <div className={styles.grantc1} style={{ backgroundColor: "", width: "100%", height: "80px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <div className={styles.grantc2} style={{ color: "black", backgroundColor: "white", height: "50px", width: "50px", borderRadius: "50px", fontFamily: "Manrope", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {props.symbol} </div>

        <div className={styles.grantc3} style={{ color: "black", backgroundColor: "white", height: "50px", width: "400px", borderRadius: "10px", fontFamily: "Manrope", fontSize: "15px", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {props.title}</div>

      </div>

      <div className={styles.grantc4} style={{ backgroundColor: "", width: "100%", height: "140px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "7.5px" }}>

        <div className={styles.grantc5} style={{ color: "black", backgroundColor: "white", height: "140px", width: "460px", borderRadius: "10px", fontFamily: "Manrope", fontSize: "15px", fontWeight: "", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginBottom: "7.5px", padding: '5px' }}>
          {props.about}
        </div>

      </div>

      <div className={styles.grantc6} style={{ color: "black", backgroundColor: "", width: "100%", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "7px" }}>

        <a href={props.link} target='_blank'>  <button className={styles.grantc7} style={{ cursor: "pointer", backgroundColor: "#EBD070", border: "none", height: "40px", width: "110px", borderRadius: "10px", fontFamily: "Manrope", marginBottom: "7px", fontSize: "15px", fontWeight: "", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginLeft: "350px" }}>
          <p style={{ fontWeight: "bold", color: "black" }}> apply</p> </button> </a>

      </div>
    </div>
  )
}

export default Grant