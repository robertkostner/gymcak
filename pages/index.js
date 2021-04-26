import Link from 'next/link';
import Button, {greeting as mujPozdrav} from './../components/Button'

const HomePage = () => {
    return <div>
        <p>Welcome to Next.js!</p>
        <p><Link href="/hello"><a>Hello page</a></Link></p>
        <Button>Čudlík 2</Button>
        <Button />
        <Button children="Čudlík 4" />
        {mujPozdrav("lidi")}
        </div>
  }
  
  export default HomePage