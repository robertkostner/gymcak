import Link from 'next/link';
import axios from 'axios';

const HelloPage = ({title}) => {
    return <div>
        <p>Welcome hello to {title}</p>
        <p><Link href="/"><a>Home page</a></Link></p>
        </div>
  }
  
export async function getServerSideProps(context) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await res.data

  console.log("Dotaz do databáze proběhl při dotazu")
  
  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  
  return {
    props: {title: data.title},
  }
}

  export default HelloPage