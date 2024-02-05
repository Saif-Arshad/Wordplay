import React from 'react'
import './App.css';
import Modal from 'react-modal';
import Logo from './Logo/hh-removebg-preview.png'

function App() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      borderRadius:'20px',
      height:"50vh",
      padding:'30px',
      boxSizing:'border-box',
      // background:'#264948',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[search,setsearch]= React.useState("")
  const[item,setitem]= React.useState([])
  const key = "6ccc50bd-bf8a-400f-aa04-1fe7668dcb11"
  let url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${search}?key=${key}`;
   const clickHandler=() => {
      fetch(url)
     .then(response =>response.json())
     .then(res => setitem(res))
      // setitem([])
      // setsearch([])
     if(search.length===0){
      openModal()
     }
     
    }
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

      console.log(item  	);

  
    const changEvent = (e)=>{
      setsearch(e.target.value);
    }

  return (
 <>
<section>
  <header>

      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    <div className="in">
      <input onChange={changEvent} value={search}  type="text" />
      <button  onClick={clickHandler} className='searchbtn'>Search</button>
    </div>
  </header>

    
  {
  item.length > 0 ? (
    <div className="result">
      {item[0].meta.id ? <h1>{item[0].meta.id}</h1> : <p>Name not found</p>}
      {item[0].fl ? <h5>{item[0].fl}</h5> : <p>Type/none not found</p>}
      {item[0].shortdef[0] ? (
        <p>{item[0].shortdef[0]}</p>
      ) : (
        <p>Paragraph not found</p>
      )}
      {item[0].hwi.hw ? (
        <h4>{item[0].hwi.hw}</h4>
      ) : (
        <p>Last not found</p>
      )}
    </div>
  ) : (
    <div className="result2">
      <h1>
        Welcome to Wordplay: <br /> <span>Your trusted source for word definitions, synonyms, antonyms, and more!</span>
      </h1>
    </div>
  )
}



       {/* model jsx  */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={null}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img id='modeImage' src={Logo} alt="" />
        <h1 className='modelHeading'>
        Hey Pal first enter some text to search their meaning
        </h1>
         <button onClick={closeModal} className="svg-button">
          Close
        </button>

      </Modal>

    
</section>

 </>
)}
export default App;
