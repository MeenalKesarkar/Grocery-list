import {FaTrashAlt} from 'react-icons/fa';
const LineItem = ({item, handleClick, handleDelete}) => {
  return (
     <li className='item'>
            <input type="checkbox" checked = {item.checked} onChange={() => handleClick(item.id)}
        />
        <label 
            style={(item.checked)? {textDecoration: 'line-through'} : null}
            onDoubleClick={() => handleClick(item.id)}>{item.item}
        </label>
        <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button" tabIndex='0'
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem 