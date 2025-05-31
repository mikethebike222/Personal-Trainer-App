import React, { useState } from 'react'
import styles from './Form.module.css'
import axios from 'axios'

const Form = () => {
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
                        'http://127.0.0.1:8000/sends/',
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
            errors.phone = 'Phone number is required'
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Phone number must be 10 digits in format XXXXXXXXXX'
        }

        if (!data.age) {
            errors.age = 'Age is required'
        } else if (Number(data.age) <= 5 || Number(data.age) >= 100 || !/^\d+$/.test(data.age)) {
            errors.age = 'Please enter a valid age'
        }

        if (!data.height){
            errors.height = 'Height is required'
        } else if (!/^[1-9]'\d{1,2}$/.test(data.height)){
            errors.height = "Please enter height like 6'7 for '6 foot 7 inches'"
        }

        if (!data.weight){
            errors.weight = 'Weight is required'
        } else if (!/^\d{2,3}$/.test(data.weight) ){
            errors.weight = "Please enter a valid rounded weight like 123 for 123.3lbs"
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
            <h1>LET'S DO THIS.</h1>
            <form onSubmit={handleSubmit}>
                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='firstname'>First Name (required)</label>
                <input type='text' value={formData.fname} name='fname' onChange={handleChange}/>
                {errors.fname && (
                    <span className={styles.errorMessage}>
                        {errors.fname}
                    </span>
                )}
                </div>
                <div className= {styles.formGroup}>
                <label htmlFor='lastname'>Last Name (required)</label>
                <input type='text' value={formData.lname} onChange={handleChange} name='lname'/>
                {errors.lname && (
                    <span className={styles.errorMessage}>
                        {errors.lname}
                    </span>
                )}
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='email'>Email (required)</label>
                <input type='text' value={formData.email} onChange={handleChange} name='email'/>
                {errors.email && (
                    <span className={styles.errorMessage}>
                        {errors.email}
                    </span>
                )}
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='phone'>Phone # (required)</label>
                <input type='text' value={formData.phone} onChange={handleChange} name='phone'/>
                {errors.phone && (
                    <span className={styles.errorMessage}>
                        {errors.phone}
                    </span>
                )}
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='age'>Age (required)</label>
                <input type='text' value={formData.age} onChange={handleChange} name='age'/>
                {errors.age && (
                    <span className={styles.errorMessage}>
                        {errors.age}
                    </span>
                )}
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='height'>Height, feet and inches (e.g. 5'7) (required)</label>
                <input type='text' value={formData.height} onChange={handleChange} name='height'/>
                {errors.height && (
                    <span className={styles.errorMessage}>
                        {errors.height}
                    </span>
                )}
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='weight'>Weight in pounds (required)</label>
                <input type='text' value={formData.weight} onChange={handleChange} name='weight'/>
                {errors.weight && (
                    <span className={styles.errorMessage}>
                        {errors.weight}
                    </span>
                )}
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
                <input type='text' value={formData.goal} onChange={handleChange} name='goal'/>
                {errors.goal && (
                    <span className={styles.errorMessage}>
                        {errors.goal}
                    </span>
                )}
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
                <input type='text' name='signature' value={formData.signature} onChange={handleChange}/>
                {errors.signature && (
                    <span className={styles.errorMessage}>
                        <div className= {styles.errorSignature}>
                        {errors.signature}
                        </div>
                    </span>
                )}
            
                <button className = {styles.formButton} type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Form