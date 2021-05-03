import {useState} from 'react'

const CounterPage = ({defaultValue =0 , incrementor = 1}) => {

    const [value, setValue] = useState(defaultValue)

    return <div>
        Počítadlo: {value}
        <button onClick={()=> setValue(value - incrementor)}>Minus 1</button>
        <button onClick={()=> setValue(value + incrementor)}>Plus 1</button>
        </div>
  }

  export default CounterPage