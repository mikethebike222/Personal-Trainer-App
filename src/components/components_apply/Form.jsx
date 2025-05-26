import styles from './Form.module.css'

const Form = () => {
    return(
        <div className = {styles.formContainer}>
            <h1>LET'S DO THIS.</h1>
            <form>
                <label htmlFor='firstname'>First Name*</label>
                <input type='text' placeholder='Enter First Name' name='firstName'/>
                
                <label htmlFor='lastname'>Last Name*</label>
                <input type='text' placeholder='Enter Last Name'name='lastName'/>
                
                <label htmlFor='email'>Email*</label>
                <input type='text' placeholder='Enter Email'name='email'/>
                
                <label htmlFor='phone'>Phone #*</label>
                <input type='text' placeholder='Enter Phone #'name='phone'/>
                
                <label htmlFor='age'>Age*</label>
                <input type='text' placeholder='Enter Height'name='age'/>
                
                <label htmlFor='height'>Height (In feet and inches)*</label>
                <input type='text' placeholder='Enter Height'name='height'/>
                
                <label htmlFor='weight'>Weight (In pounds)*</label>
                <input type='text' placeholder='Enter Weight'name='weight'/>

                <label htmlFor='commit'>Are you in a position to commit to a financial investment for at least 8 weeks into this training?*</label>
                <input type='text' placeholder='Yes/No'name='commit'/>

                <label htmlFor='goalWeight'>Do you have a goal weight in mind, if so what is it?*</label>
                <input type='text' placeholder='Enter goal weight'name='goalWeight'/>

                <label htmlFor='stuck'>Where are you getting stuck right now on your own, and why are you looking to be coached?</label>
                <input type='text' placeholder='Enter Here'name='stuck'/>

                <label htmlFor='start'>If accepted, how soon are you looking to get started</label>
                <input type='subject' name='start'/> Immediately
                <input type='subject' name='start'/> 2 Weeks
                <input type='subject' name='start'/> 4 Weeks
                <input type='subject' name='start'/> 1 Month +

                <label htmlFor='firstname'>First Name*</label>
                <input type='text' placeholder='Enter First Name' name='firstName'/>
                
                <label htmlFor='lastname'>Last Name*</label>
                <input type='text' placeholder='Enter Last Name'name='lastName'/>
            </form>
        </div>
    )
}

export default Form