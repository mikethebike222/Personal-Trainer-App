// ApplicationPage creates the main components for the application form page and renders them in the correct order.

// Import top-level layout components
import Header from '../Header'
import Footer from '../Footer'
import Offer from './Offer'
import Back from './Back'
import Swoosh from './Swoosh'
import Form from './Form'

// Functional React component for the apply page
const ApplicationPage = () => {

	return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header/>
      <Back/>
      <Offer/>
      <Swoosh/>
      <Form/>
      <Footer/>
    </div>
	)
}

export default ApplicationPage