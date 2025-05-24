import Header from './components/Header'
import Discipline  from './components/Discipline'
import ApplyImage from './components/ApplyImage'
import ClientWins from './components/ClientWins'
import SellingPoint from './components/SellingPoint'

const App = () => {

	return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header/>
      <Discipline/>
      <ApplyImage/>
      <ClientWins/>
      <SellingPoint/>
    </div>
	)
}

export default App