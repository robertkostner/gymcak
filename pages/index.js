import Link from 'next/link'

const HomePage = () => {
    return <div>
        <p>Welcome to Next.js!</p>
        <p><Link href="/hello"><a>Hello page</a></Link></p>
        </div>
  }
  
  export default HomePage