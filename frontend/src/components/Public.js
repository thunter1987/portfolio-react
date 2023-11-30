import { Link } from 'react-router-dom'

const Public = () => {
  const content = (
    <section className='public'>
      <header>
        <h1>
          Welcome to <span className='nowrap'>Tony's Portfolio App Page!</span>
        </h1>
      </header>
      <main className='public__main'>
        <p>A recent graduate of Flatiron School</p>
        <address className='public__addr'>
          Tony Hunter
          <br />
          1234 Any Street
          <br />
          Conroe, TX 77304
          <br />
          <a href='tel:+18325252465'>(832) 525-2465</a>
        </address>
        <br />
        <p>Owner: Tony Hunter</p>
      </main>
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </section>
  )
  return content
}

export default Public
