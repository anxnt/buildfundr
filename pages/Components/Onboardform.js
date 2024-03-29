import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';



function Onboardform() {

  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const allQuestionsAnswered = Object.values(formData).every((value) => value);

    if (allQuestionsAnswered) {
      console.log('Form data:', formData);
      setFormSubmitted(true);
      router.push('/grants')
    } 
    
      else {
      alert('Please answer all the questions before submitting.');
    }
  };  

  return (
<div className={styles.bodyg} style={{height:"610px", width:"100vw", display:"flex", justifyContent:"space-evenly", alignItems:"center", overflowY:"hidden"}}>

<div className={styles.onboarding1} style={{padding:"50px", width:"800px", backgroundColor:"white", height:"550px", borderRadius:"20px", overflowY:"scroll", overflowX:"hidden" }}> 
<form method="POST">

      <label className={styles.titleg} style={{margin:"50px"}}>
       Who are you?
       <br></br>

        <select className={styles.answerg} name="question1" required value={formData.question1}  onChange={(e) => setFormData({ ...formData, question1: e.target.value })} >
          <option value="">--Select answer--</option>
          <option value="a">full stack dev </option>
          <option value="b"> frontend dev </option>
          <option value="c"> backend dev</option>
          <option value="d">blockchain dev </option>
        </select>
      </label>
      <br></br><br></br><br></br><br></br>
      <label className={styles.titleg} style={{margin:"50px"}}>
        which language do you prefer?
        <br></br>
        <select className={styles.answerg} name="question2" required value={formData.question2} onChange={(e) => setFormData({ ...formData, question2: e.target.value })}>
          <option value="">--Select answer--</option>
          <option value="a"> javascript </option>
          <option value="b"> python</option>
          <option value="c"> rust </option>
          <option value="d"> solidity </option>
        </select>
      </label>
      <br></br><br></br><br></br><br></br>
      <label className={styles.titleg} style={{margin:"50px"}} >
        what's your experience?
        <br></br>
        <select className={styles.answerg} name="question3" required value={formData.question3} onChange={(e) => setFormData({ ...formData, question3: e.target.value })}>
          <option value="">--Select answer--</option>
          <option value="a"> less than 1 year </option>
          <option value="b"> 1-2 year </option>
          <option value="c"> 2-5 year</option>
          <option value="d"> 5+ year </option>
        </select>
      </label>
      <br></br><br></br><br></br><br></br>
      <label className={styles.titleg} style={{margin:"50px" }}>
       which chain are you building on?
        <select className={styles.answerg} name="question4" required value={formData.question4} onChange={(e) => setFormData({ ...formData, question4: e.target.value })}>
          <option value="">--Select answer--</option>
          <option value="a"> solona </option>
          <option value="b"> ethereum </option>
          <option value="c"> other </option>
          <option value="d"> none </option>
        </select>
      </label>
      <br></br><br></br><br></br><br></br>
      <label className={styles.titleg} style={{margin:"50px"}}>
        do you have a team?
        <select className={styles.answerg} name="question5" required value={formData.question5} onChange={(e) => setFormData({ ...formData, question5: e.target.value })}>
          <option value="">--Select answer--</option>
          <option value="a">no </option>
          <option value="b">2 builders</option>
          <option value="c">2-5 builders</option>
          <option value="d">5+ builders</option>
        </select>
      </label>
      <br></br><br></br><br></br><br></br>
      <button className={styles.buttong} style={{height:"60px", width:"180px", marginLeft:"100px", backgroundColor:"black", color:"white", fontFamily:"Manrope", fontWeight:"bold", fontSize:"25px", borderRadius:"10px"}} type="submit" onClick={handleSubmit}>Submit</button>
    </form>      
</div>




<div className={styles.onboarding2} style={{width:"450px", backgroundColor:"white", height:"550px", borderRadius:"20px", display:"flex", alignItems: 'center', justifyContent: 'center'}}>
<img src="/Images/piccolo-grillmaster.gif" alt="My Image" style={{ width:"100%", height: "100%", borderRadius: "20px", objectFit: 'cover',  }} />
</div>

</div>
  )
}

export default Onboardform