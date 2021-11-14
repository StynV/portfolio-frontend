import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap pt-6 max-w-6xl">
        <div className="headerName flex items-center flex-shrink-1" >
          <span className="font-semibold text-xl tracking-tight">Styn Vercauteren</span>
        </div>
        <div className="headerName w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <p>FULLSTACK DEVELOPER</p>
          </div>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className={styles.headerTextRight}>
            <p>Styn.vercauteren@outlook.com</p>
          </div>
        </div>
      </nav>      
    </header>
  )
}
  
export default Header