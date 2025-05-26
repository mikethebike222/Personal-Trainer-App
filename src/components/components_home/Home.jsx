import Header from '../Header'
import Discipline  from './Discipline'
import ApplyImage from './ApplyImage'
import ClientWins from './ClientWins'
import SellingPoint from './SellingPoint'
import TrainingPlan from './TrainingPlan'
import Footer from '../Footer'

const Home = () => {

	return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header/>
      <Discipline/>
      <ApplyImage/>
      <ClientWins/>
      <SellingPoint/>
      <TrainingPlan/>
      <Footer/>
    </div>
	)
}

export default Home