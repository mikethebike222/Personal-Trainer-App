import { Routes, Route } from 'react-router-dom'
import Home from './components/components_home/Home'
import ApplicationPage from './components/components_apply/ApplicationPage'


const App = () => {

	return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/application" element={<ApplicationPage/>} />
        </Routes>
	)
}
export default App