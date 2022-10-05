import './App.scss';
import Card from './Card';
function App() {
  const bgStyle = {
    height: "100vh"
  }
  return (
    <div className='bg-secondary w-100 overflow-auto' style={bgStyle}>
      <div className='d-flex flex-column justify-content-center align-items-center h-100'>
        <div className='row mt-5 mb-3'>
          <div className='mt-5 text-uppercase text-center letterSpacing5 col-12 fw-bold text-primary'>SPLI</div>
          <div className='text-uppercase text-center letterSpacing5 col-12 fw-bold text-primary'>TTER</div>
        </div>
          <Card></Card>
      </div>
    </div>
  );
}

export default App;
