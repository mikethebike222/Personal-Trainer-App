import React, { useState } from 'react'
import styles from './Form.module.css'
import axios from 'axios'

const Form = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];


    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        age: '',
        height: '',
        weight: '',
        commit: 'Yes',
        goal: '',
        stuck: '',
        start: 'Immediately',
        signature: '',
        signup: false,
        date: formattedDate,
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const postData = async () => {
                try {
                    const response = await axios.post(
                        'https://coachingbackend-ewf9ehbce4aee4cp.westus-01.azurewebsites.net/submit/',
                        formData,
                        {
                            headers: { 'Content-Type': 'application/json' }
                        }
                    )
                    console.log(response.data)
                    setFormData(({
                        fname: '',
                        lname: '',
                        email: '',
                        phone: '',
                        age: '',
                        height: '',
                        weight: '',
                        commit: 'Yes',
                        goal: '',
                        stuck: '',
                        start: 'Immediately',
                        signature: '',
                        signup: false,
                        date: formattedDate,
                    }))

                } catch (error) {
                    console.error('Error posting data:', error)
                }
            }
            postData() 
        }   
         else {
            console.log('Form submission failed due to validation errors.')
        }
    }

    const validateForm = (data) => {
        const errors = {}

        if (data.fname.trim() === '') {
            errors.fname = 'First Name is required'
        } 

        if (data.lname.trim() === '') {
            errors.lname = 'Last Name is required'
        } 


        if (data.email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid. Email addresses should follow the format user@domain.com.'
        }

        if (!data.phone) {
            errors.phone = 'Phone number is required';
        } else {
            const digitsOnly = data.phone.replace(/\D/g, ''); // Remove non-digit characters
            if (digitsOnly.length < 10) {
                errors.phone = 'Phone number must include at least 10 digits';
            }
        }        

        if (!data.age) {
            errors.age = 'Age is required'
        } else if (Number(data.age) <= 5 || Number(data.age) >= 100 || !/^\d+$/.test(data.age)) {
            errors.age = 'Please enter a valid age'
        }

        if (!data.height){
            errors.height = 'Height is required'
        }

        if (!data.weight){
            errors.weight = 'Weight is required'
        }

        if (!data.goal) {
            errors.goal = "Goal Weight is required"
        } 

        const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        const expectedSignature = `${formatName(data.fname)} ${formatName(data.lname)}`

        if (data.signature !== expectedSignature) {
            errors.signature = "Invalid signature, should be your legal first and last name"
          }
        


        return errors;
    };


    return(
        <div className = {styles.formContainer}>
            <h1 >LET'S DO THIS.</h1>
            <form onSubmit={handleSubmit}>
                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='firstname'>First Name (required)</label>
                {errors.fname && (
                    <div className={styles.errorBox}>
                        {errors.fname}
                    </div>
                )}
                <input type='text' value={formData.fname} name='fname' onChange={handleChange}/>
                </div>
                <div className= {styles.formGroup}>
                <label htmlFor='lastname'>Last Name (required)</label>
                {errors.lname && (
                    <div className={styles.errorBox}>
                        {errors.lname}
                    </div>
                )}
                <input type='text' value={formData.lname} onChange={handleChange} name='lname'/>
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='email'>Email (required)</label>
                {errors.email && (
                    <div className={styles.errorBox}>
                        {errors.email}
                    </div>
                )}
                <input type='text' value={formData.email} onChange={handleChange} name='email'/>
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='phone'>Phone # (required)</label>
                {errors.phone && (
                    <div className={styles.errorBox}>
                        {errors.phone}
                    </div>
                )}
                <input type='text' value={formData.phone} onChange={handleChange} name='phone'/>
                </div>
                </div>

                <div className= {styles.formRow}>              
                <div className= {styles.formGroup}>
                <label htmlFor='age'>Age (required)</label>
                {errors.age && (
                    <div className={styles.errorBox}>
                        {errors.age}
                    </div>
                )}
                <input type='text' value={formData.age} onChange={handleChange} name='age'/>
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='height'>Height, Feet and Inches (required)</label>
                {errors.height && (
                    <div className={styles.errorBox}>
                        {errors.height}
                    </div>
                )}
                <input type='text' value={formData.height} onChange={handleChange} name='height'/>
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='weight'>Weight in pounds (required)</label>
                {errors.weight && (
                    <div className={styles.errorBox}>
                        {errors.weight}
                    </div>
                )}
                <input type='text' value={formData.weight} onChange={handleChange} name='weight'/>
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='commit'>Are you in a position to commit to a financial investment for at least 8 weeks into this training? (required)</label>
                <select name='commit' id='commit' value={formData.commit} onChange={handleChange}>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
                </div>
                </div>
                <div className= {styles.formGroup}>
                <label htmlFor='goalWeight'>Do you have a goal weight in mind, if so what is it? (required)</label>
                {errors.goal && (
                    <div className={styles.errorBox}>
                        {errors.goal}
                    </div>
                )}
                <input type='text' value={formData.goal} onChange={handleChange} name='goal'/>
                </div>

                <label htmlFor='stuck'>Where are you getting stuck right now on your own, and why are you looking to be coached?</label>
                <textarea name='stuck' id='stuck' cols='30' rows = '10' type='text' value={formData.stuck} onChange={handleChange}></textarea>
                
                <label htmlFor='start'>If accepted, how soon are you looking to get started</label>
                <select name='start' id='start' value={formData.start} onChange={handleChange}>
                    <option value='immediately'>Immediately</option>
                    <option value='twoWeeks'>2 Weeks</option>
                    <option value='fourWeeks'>4 Weeks</option>
                    <option value='oneMonth'>1 Month +</option>
                </select>
                <h3> Book a Free Interest Call (required)</h3>
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3_yT57KQimlOC-1mpm93G8rzeYEHMA0d4196v3jRlYs8s4wmEi6GBsR5toJQGhujFnQJ8sXCiw?gv=true"  width="100%" height="600"></iframe>


                <h4>Jacob Oestreicher Coaching – DISCLAIMER & CANCELLATION POLICY</h4>
                <p>Cancellation Policy:
Jacob Oestreicher Coaching enforces a strict no-refund policy. Once a client has committed to a coaching program, no refunds will be issued under any circumstances.

Disclaimer:
Before beginning any program with Jacob Oestreicher Coaching, it is essential for clients to consult with their healthcare provider to ensure they are medically cleared to participate in physical activities and make lifestyle, nutrition, and exercise changes. Clients are responsible for following up with their healthcare provider regarding any changes during their coaching program.

Clients must immediately inform their coach of any discomfort, pain, significant fatigue, or other unusual symptoms experienced during or after training sessions. It is crucial to understand that while Jacob Oestreicher is a certified fitness professional, he is not a licensed medical doctor or registered dietician. Therefore, Jacob Oestreicher and his coaching staff are not liable for any injuries, health issues, or damages that may occur from following the training programs. Clients assume full responsibility and liability for all decisions and actions taken during and after their coaching engagement.

The guidance provided by Jacob Oestreicher Coaching is for educational purposes only and should not be considered as medical advice. Clients are advised to consult with a physician or qualified healthcare professional for any health-related issues. It is also the client's responsibility to understand the contents and limitations of the services provided. Distributing or sharing of program materials with non-clients is strictly prohibited.

By signing here with Jacob Oestreicher Coaching, clients confirm they have read, understood, and agreed to the terms outlined in this policy.</p>

                <label htmlFor='signature'>Signature (required)</label>
                {errors.signature && (
                    <div className={styles.errorBox}>
                        {errors.signature}
                    </div>
                )}
                <input type='text' name='signature' value={formData.signature} onChange={handleChange}/>
                <div className={styles.checkboxRow}>
                    <label className = {styles.checkboxlabel} htmlFor='signup'>
                        <input
                        className = {styles.checkInput}
                        type='checkbox'
                        name='signup'
                        checked={formData.signup}
                        onChange={(e) =>
                        setFormData({ ...formData, signup: e.target.checked })
                        }
                        />    
                    I agree to receive SMS and email updates related to Jacob Oestreicher Coaching.
                    </label>
                </div>
                <button className = {styles.formButton} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form