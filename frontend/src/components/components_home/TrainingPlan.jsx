// TrainingPlan lists the benefits included with coaching.

import styles from './TrainingPlan.module.css'

const TrainingPlan = () => {
    return (
        <div className={styles.trainingPlanContainer}>
            <h3 className = {styles.trainingPlanHead}> Here is what you get: hypertrophy training plans</h3>
            <div className = {styles.trainingPlanText}>
                <ul>
                    <li>Tailored macronutrient guidance and meal-planning options</li>
                    <li>Supplement recommendations</li>
                    <li>Weekly progress check-ins</li>
                    <li>Daily interactions and video calls as scheduled</li>
                    <li>Technique analysis and training video assessments</li>
                    <li>Regular updates to training programs </li>
                    <li>Commitment to accountability</li>
                    <li>Structured learning and educational support</li>
                    <li>Assurance in your comprehensive fitness strategy</li>
                </ul>
                <p><b>Please note:</b> Bodybuilding show prep is not offered.</p>
            </div>
        </div>
    )
}

export default TrainingPlan