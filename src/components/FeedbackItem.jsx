import Card from './shared/Card'
// import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {

  const {deleteFeedback, editFeedbackFunc} = useContext(FeedbackContext)

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
        <button className='close' onClick={()=> deleteFeedback(item.id)}>
          <FaTimes color='red'/>
        </button>
        <button className='edit' onClick={()=> editFeedbackFunc(item)}>
          <FaEdit color='yellow'/>
        </button>
      <p style={{fontSize:'10px', backgroundColor:'purple', width:'170px', borderRadius:'10px', padding:'4px'  }}>ID: {item.id}</p>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Button</button> */} 
    </Card>
    
  );
}

// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired
// }


export default FeedbackItem;
