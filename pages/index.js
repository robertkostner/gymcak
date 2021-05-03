import Link from 'next/link';
import Button, {greeting as mujPozdrav} from '../components/Button.'
import Image from '../components/Image'
import Counter from './../components/Counter'


const HomePage = () => {
    return <div>
        <p>Welcome to Next.js!</p>
        <p><Link href="/hello"><a>Hello page</a></Link></p>
        <p><Link href="/hello2"><a>Hello 2 page</a></Link></p>
        <Button>Čudlík 2</Button>
        <Button />
        <Button children="Čudlík 4" />
        {mujPozdrav("lidi")}
        <Image />
        <Image src="https://homoky-files.fra1.digitaloceanspaces.com/2020/nL2ckrgYNz.png" width={300} isSquare />
        <br />
        <Counter />
        <Counter />
        <Counter />
        </div>
  }
  
  export default HomePage