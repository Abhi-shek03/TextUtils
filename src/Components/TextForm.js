import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => { 
        let Upper_text = Text.toUpperCase()
        setText(Upper_text)
        props.showAlert('Converted to uppercase','success')
    }

    const handleLowerClick = () => { 
        let Lower_text = Text.toLowerCase()
        setText(Lower_text)
        props.showAlert('Converted to lowercase','success')
    }

    const handleOnChange = (event) => { 
        setText(event.target.value)
    }

    const [Text, setText] = useState('');
    
    return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2c2c2c':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder="Enter Text Here ..."></textarea>
        </div>
        <button className="btn btn-secondary mx-3 my-3" disabled={Text.length===0} onClick={handleUpperClick}>UPPERCASE</button>
        <button className="btn btn-secondary mx-3 my-3" disabled={Text.length===0} onClick={handleLowerClick}>lowercase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> 
        <h2>Your Text Summary</h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {Text.length} Characters. <br/>{0.008 * Text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read.</p>
        <h2>PREVIEW</h2>
        <p>{Text}</p>
    </div>
    </>
  )
}
