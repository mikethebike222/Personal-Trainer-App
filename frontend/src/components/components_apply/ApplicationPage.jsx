import Header from '../Header'
import Footer from '../Footer'
import Offer from './Offer'
import Back from './Back'
import Swoosh from './Swoosh'
import Form from './Form'

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