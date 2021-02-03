import Nav from 'components/Nav'
import Meta from 'components/Meta'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
