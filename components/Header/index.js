import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      {/*<style>*/}
      {/*  {`*/}
      {/*    .title {*/}
      {/*      color: red;*/}
      {/*    }*/}
      {/*  `}*/}
      {/*</style>*/}
    </div>
  )
}

export default Header
