// Form page displays a form for the user to submit

import React, { useState } from 'react'
import styles from './Form.module.css'
import axios from 'axios'


// Form component collects user information and submits it to the backend
const Form = () => {

    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]

    // Initial values for the form fields using useState hook
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        age: '',
        height: '',
        weight: '',
        commit: 'Yes',
        hasJob: 'Yes',
        monthlyIncome: '',
        whatsapp: '',
        goal: '',
        stuck: '',
        start: 'Immediately',
        signature: '',
        signup: false,
        date: formattedDate,
    })

    // useState hook used to track validation errors
    const [errors, setErrors] = useState({})
    
    // Indicates if the form is currently submitting
    const [loading, setLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    // Updates the local state whenever an input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        
        // Clear monthly income if job status changes to No
        if (name === 'hasJob' && value === 'No') {
            setFormData(prev => ({
                ...prev,
                hasJob: value,
                monthlyIncome: ''
            }))
        }
    }

    // Function handles the submit button click functionality
    const handleSubmit = async (e) => {

        e.preventDefault()
        const newErrors = validateForm(formData)

        // Check for errors 
        setErrors(newErrors)
        
        // If there are no errors we want to post the form submition 
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            setSubmitStatus('');

            // Ensure optional fields are never undefined to avoid bugs
            const dataToSend = {
                ...formData,
                stuck: formData.stuck === '' ? 'none' : formData.stuck,
                whatsapp: formData.whatsapp === '' ? 'none' : formData.whatsapp,
                monthlyIncome: formData.monthlyIncome === '' ? 'N/A' : formData.monthlyIncome
            }

            // Function to post data to backend API and catch any potential errors
            const postData = async () => {
            try {

                // Send form data to backend API
                const response = await axios.post(
                    'https://coachingbackend-ewf9ehbce4aee4cp.westus-01.azurewebsites.net/submit/',
                    dataToSend,
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                console.log(response.data)

                // Reset form back to initial state
                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    age: '',
                    height: '',
                    weight: '',
                    commit: 'Yes',
                    hasJob: 'Yes',
                    monthlyIncome: '',
                    whatsapp: '',
                    goal: '',
                    stuck: '',
                    start: 'Immediately',
                    signature: '',
                    signup: false,
                    date: formattedDate,
                })
                setSubmitStatus('success');
            } catch (error) {
                console.error('Error posting data:', error)
                setSubmitStatus('error')
            } finally {
                // Set loading back to false
                setLoading(false)
            }
        }
        // Call the function
        postData()

        } else {
            // Form was invalid — display errors
            setSubmitStatus('error');
            console.log('Form submission failed due to validation errors.')
        }
    }

    // Basic validation checks for required fields
    const validateForm = (data) => {

        const errors = {}

        // Validate each required field
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

        // Validate monthly income if they have a job
        if (data.hasJob === 'Yes' && !data.monthlyIncome.trim()) {
            errors.monthlyIncome = 'Monthly income is required if you have a job'
        }

        if (!data.goal) {
            errors.goal = "Goal weight is required"
        } 

        const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        const expectedSignature = `${formatName(data.fname)} ${formatName(data.lname)}`

        if (data.signature !== expectedSignature) {
            // Check the typed signature matches first and last name
            errors.signature = "Invalid signature, should be your legal first and last name"
        }

        return errors;
    };


    return(
        // Form layout and fields using CSS modules for styling
        <div className = {styles.formContainer}>
            <h1>LET'S DO THIS.</h1>
            <form onSubmit={handleSubmit}>
                
                {/* NAME SECTION */}
                <h3 className={styles.sectionTitle}>Name (required)</h3>
                <div className= {styles.formRow}>
                    <div className= {styles.formGroup}>
                        <label htmlFor='firstname'>First Name</label>
                        {errors.fname && (
                            <div className={styles.errorBox}>
                                {errors.fname}
                            </div>
                        )}
                        <input type='text' value={formData.fname} name='fname' onChange={handleChange}/>
                    </div>
                    <div className= {styles.formGroup}>
                        <label htmlFor='lastname'>Last Name</label>
                        {errors.lname && (
                            <div className={styles.errorBox}>
                                {errors.lname}
                            </div>
                        )}
                        <input type='text' value={formData.lname} onChange={handleChange} name='lname'/>
                    </div>
                </div>
                
                {/* EMAIL */}
                <div className= {styles.formGroup}>
                    <label htmlFor='email'>Email (required)</label>
                    {errors.email && (
                        <div className={styles.errorBox}>
                            {errors.email}
                        </div>
                    )}
                    <input type='text' value={formData.email} onChange={handleChange} name='email'/>
                </div>

                {/* PHONE */}
                <div className= {styles.formGroup}>
                    <label htmlFor='phone'>Phone</label>
                    {errors.phone && (
                        <div className={styles.errorBox}>
                            {errors.phone}
                        </div>
                    )}
                    <input type='text' value={formData.phone} onChange={handleChange} name='phone'/>
                </div>
                
                {/* AGE */}
                <div className= {styles.formGroup}>
                    <label htmlFor='age'>Age (required)</label>
                    {errors.age && (
                        <div className={styles.errorBox}>
                            {errors.age}
                        </div>
                    )}
                    <input type='text' value={formData.age} onChange={handleChange} name='age'/>
                </div>

                {/* HEIGHT */}
                <div className= {styles.formGroup}>
                    <label htmlFor='height'>Height (In feet and inches) (required)</label>
                    {errors.height && (
                        <div className={styles.errorBox}>
                            {errors.height}
                        </div>
                    )}
                    <input type='text' value={formData.height} onChange={handleChange} name='height' placeholder="e.g., 5'10"/>
                </div>
                
                {/* WEIGHT */}
                <div className= {styles.formGroup}>
                    <label htmlFor='weight'>Weight (In pounds) (required)</label>
                    {errors.weight && (
                        <div className={styles.errorBox}>
                            {errors.weight}
                        </div>
                    )}
                    <input type='text' value={formData.weight} onChange={handleChange} name='weight'/>
                </div>

                {/* FINANCIAL COMMITMENT */}
                <div className= {styles.formGroup}>
                    <label htmlFor='commit'>
                        Are you in a position to commit to a financial investment for at least 8 weeks into this training? (required)
                        <span className={styles.priceNote}>(Coaching ranges between $200–$350 per month depending on the plan you choose)</span>
                    </label>
                    <select name='commit' id='commit' value={formData.commit} onChange={handleChange}>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </select>
                </div>

                {/* JOB STATUS */}
                <div className= {styles.formGroup}>
                    <label htmlFor='hasJob'>Do you currently have a job? (required)</label>
                    <select name='hasJob' id='hasJob' value={formData.hasJob} onChange={handleChange}>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </select>
                </div>

                {/* MONTHLY INCOME - Only shown if hasJob is Yes */}
                {formData.hasJob === 'Yes' && (
                    <div className= {styles.formGroup}>
                        <label htmlFor='monthlyIncome'>
                            If yes, how much do you make monthly (approximate)? (required if above is Yes)
                        </label>
                        {errors.monthlyIncome && (
                            <div className={styles.errorBox}>
                                {errors.monthlyIncome}
                            </div>
                        )}
                        <input 
                            type='text' 
                            value={formData.monthlyIncome} 
                            onChange={handleChange} 
                            name='monthlyIncome' 
                            placeholder="e.g., $3,000"
                        />
                    </div>
                )}

                {/* WHATSAPP */}
                <div className= {styles.formGroup}>
                    <label htmlFor='whatsapp'>
                        If you are international, please include your WhatsApp country code and phone number
                    </label>
                    <input 
                        type='text' 
                        value={formData.whatsapp} 
                        onChange={handleChange} 
                        name='whatsapp' 
                        placeholder="e.g., +44 7700 900000"
                    />
                </div>

                {/* GOAL WEIGHT */}
                <div className= {styles.formGroup}>
                    <label htmlFor='goal'>Do you have a goal weight in mind, if so what is it? (required)</label>
                    {errors.goal && (
                        <div className={styles.errorBox}>
                            {errors.goal}
                        </div>
                    )}
                    <input type='text' value={formData.goal} onChange={handleChange} name='goal'/>
                </div>
                
                {/* STUCK FIELD (OPTIONAL) */}
                <label htmlFor='stuck'>Where are you getting stuck right now on your own, and why are you looking to be coached?</label>
                <textarea 
                    name='stuck' 
                    id='stuck' 
                    cols='30' 
                    rows='10' 
                    type='text' 
                    value={formData.stuck} 
                    onChange={handleChange}
                ></textarea>
                
                {/* START TIMING */}
                <label htmlFor='start'>If accepted, how soon are you looking to get started?</label>
                <select name='start' id='start' value={formData.start} onChange={handleChange}>
                    <option value='Immediately'>Immediately</option>
                    <option value='2 Weeks'>2 Weeks</option>
                    <option value='4 Weeks'>4 Weeks</option>
                    <option value='1 Month+'>1 Month+</option>
                </select>

                {/* CALENDAR BOOKING */}
                <h3>Book a Free Interest Call (required)</h3>
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ04E_2Ws90TEHdGtRUFgRE2xixnU78JnOVxxx8kMsMZ9-utCv1wUh6IP-zLd0RuAgct3WvHRnA7?gv=true"  
                    width="100%" 
                    height="600"
                ></iframe>

                {/* LEGAL POLICY SECTION */}
                <h4>Jacob Oestreicher Coaching – TERMS & CONDITIONS</h4>
                <div className={styles.policySection}>
                    <h5>NO REFUNDS POLICY</h5>
                    <p>
                        <strong>All purchases are final. No refunds on packages, memberships, or single sessions.</strong> 
                        Training is a commitment, not a trial. When you book coaching, you are reserving my time, 
                        energy, and personalized program design in advance. That work begins before your first session. 
                        This policy applies whether or not you start or complete the program.
                    </p>

                    <h5>RESCHEDULING & CANCELLATIONS</h5>
                    <p>
                        • 24 hours' notice required to reschedule a session. Less than 24 hours is a late cancel and the session is forfeited.<br/>
                        • No shows are forfeited.<br/>
                        • If I need to cancel, I will reschedule you promptly.<br/>
                        • You may pause once for up to 30 days for travel or illness with written notice before the pause.
                    </p>

                    <h5>COMMITMENT STANDARD</h5>
                    <p>
                        Coaching is results driven and consistency based. Showing up is non-negotiable. Your spot is 
                        reserved on the calendar with programs, assessments, and planning created specifically for you. 
                        Results come from habits over time. If you are serious about showing up and doing the work, 
                        I will meet you there with a clear plan, accountability, and professional coaching.
                    </p>

                    <h5>MEDICAL DISCLAIMER</h5>
                    <p>
                        Before beginning any program with Jacob Oestreicher Coaching, it is essential to consult with 
                        your healthcare provider to ensure you are medically cleared to participate in physical activities 
                        and make lifestyle, nutrition, and exercise changes. You must immediately inform your coach of any 
                        discomfort, pain, significant fatigue, or other unusual symptoms experienced during or after training sessions.
                    </p>
                    <p>
                        While Jacob Oestreicher is a certified fitness professional, he is not a licensed medical doctor 
                        or registered dietician. Jacob Oestreicher and his coaching staff are not liable for any injuries, 
                        health issues, or damages that may occur from following the training programs. You assume full 
                        responsibility and liability for all decisions and actions taken during and after your coaching engagement.
                    </p>
                    <p>
                        The guidance provided is for educational purposes only and should not be considered as medical advice. 
                        Consult with a physician or qualified healthcare professional for any health-related issues. 
                        Distribution or sharing of program materials with non-clients is strictly prohibited.
                    </p>

                    <p className={styles.agreementText}>
                        <strong>By signing below, you confirm that you have read, understood, and agreed to all terms 
                        outlined in this policy, including the no-refund policy.</strong>
                    </p>
                </div>

                {/* SIGNATURE FIELD */}
                <label htmlFor='signature'>Signature (required) - Enter your full name as it appears above</label>
                {errors.signature && (
                    <div className={styles.errorBox}>
                        {errors.signature}
                    </div>
                )}
                <input type='text' name='signature' value={formData.signature} onChange={handleChange} placeholder="First Name Last Name"/>
                
                {/* CHECKBOX FOR SMS/EMAIL AGREEMENT */}
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
                
                {/* SUBMIT BUTTON AND STATUS MESSAGES */}
                <button className = {styles.formButton} type='submit' disabled={loading}>
                    SUBMIT
                </button>
                {loading && (
                    <div className={styles.loadingContainer}>
                        <div className={styles.loader}></div>
                    </div>
                )}
                {!loading && submitStatus === 'success' && (
                    <div className={styles.successBox}>Form submitted successfully!</div>
                )}
                {!loading && submitStatus === 'error' && (
                    <div className={styles.errorBox}>There was a problem submitting the form.</div>
                )}
            </form>
        </div>
    )
}

export default Form