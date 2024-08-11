import bgImage from '../../../Img/bg-img1.jpg';
function App() {

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{background:`url(${bgImage})`
    , width: '100vw',
        height: '100vh',}}>

    </div>

  )
}

export default App
