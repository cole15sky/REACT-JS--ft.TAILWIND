
import Container from 'postcss/lib/container'
import './App.css'
import Navbar from './assets/Components/Navbar'


const container = styled.div`
height:100vh;
`



const App =() =>{
  return
    <Container><Navbar/></Container>;   
};

export default App
