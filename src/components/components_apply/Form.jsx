import styles from './Form.module.css'

const Form = () => {
    return(
        <div className = {styles.formContainer}>
            <h1>LET'S DO THIS.</h1>
            <form>
                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='firstname'>First Name*</label>
                <input type='text' placeholder='Enter First Name' name='firstName'/>
                </div>
                <div className= {styles.formGroup}>
                <label htmlFor='lastname'>Last Name*</label>
                <input type='text' placeholder='Enter Last Name'name='lastName'/>
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='email'>Email*</label>
                <input type='text' placeholder='Enter Email'name='email'/>
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='phone'>Phone #*</label>
                <input type='text' placeholder='Enter Phone #'name='phone'/>
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='age'>Age*</label>
                <input type='text' placeholder='Enter Height'name='age'/>
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='height'>Height (In feet and inches)*</label>
                <input type='text' placeholder='Enter Height'name='height'/>
                </div>
                </div>

                <div className= {styles.formRow}>
                <div className= {styles.formGroup}>
                <label htmlFor='weight'>Weight (In pounds)*</label>
                <input type='text' placeholder='Enter Weight'name='weight'/>
                </div>

                <div className= {styles.formGroup}>
                <label htmlFor='commit'>Are you in a position to commit to a financial investment for at least 8 weeks into this training?*</label>
                <select name='commit' id='commit'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
                </div>
                </div>
                <div className= {styles.formGroup}>
                <label htmlFor='goalWeight'>Do you have a goal weight in mind, if so what is it?*</label>
                <input type='text' placeholder='Enter goal weight'name='goalWeight'/>
                </div>

                <label htmlFor='stuck'>Where are you getting stuck right now on your own, and why are you looking to be coached?</label>
                <textarea name='stuck' id='stuck' cols='30' rows = '10' placeholder='Enter Here'></textarea>
                
                <label htmlFor='start'>If accepted, how soon are you looking to get started</label>
                <select name='start' id='start'>
                    <option value='immediately'>Immediately</option>
                    <option value='twoWeeks'>2 Weeks</option>
                    <option value='fourWeeks'>4 Weeks</option>
                    <option value='oneMonth'>1 Month +</option>
                </select>

                <h4>Jacob Oestreicher Coaching – DISCLAIMER & CANCELLATION POLICY</h4>
                <p>Cancellation Policy:
Jacob Oestreicher Coaching enforces a strict no-refund policy. Once a client has committed to a coaching program, no refunds will be issued under any circumstances.

Disclaimer:
Before beginning any program with Jacob Oestreicher Coaching, it is essential for clients to consult with their healthcare provider to ensure they are medically cleared to participate in physical activities and make lifestyle, nutrition, and exercise changes. Clients are responsible for following up with their healthcare provider regarding any changes during their coaching program.

Clients must immediately inform their coach of any discomfort, pain, significant fatigue, or other unusual symptoms experienced during or after training sessions. It is crucial to understand that while Jacob Oestreicher is a certified fitness professional, he is not a licensed medical doctor or registered dietician. Therefore, Jacob Oestreicher and his coaching staff are not liable for any injuries, health issues, or damages that may occur from following the training programs. Clients assume full responsibility and liability for all decisions and actions taken during and after their coaching engagement.

The guidance provided by Jacob Oestreicher Coaching is for educational purposes only and should not be considered as medical advice. Clients are advised to consult with a physician or qualified healthcare professional for any health-related issues. It is also the client's responsibility to understand the contents and limitations of the services provided. Distributing or sharing of program materials with non-clients is strictly prohibited.

By signing here with Jacob Oestreicher Coaching, clients confirm they have read, understood, and agreed to the terms outlined in this policy.</p>

                <label htmlFor='signature'>Signature*</label>
                <input type='text' placeholder='Enter Signature' name='signature'/>
            
                <button className = {styles.formButton} type='reset'>Reset</button>
                <button className = {styles.formButton} type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Form