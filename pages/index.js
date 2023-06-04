import 'normalize.css/normalize.css'
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"

import styles from './asset/css/style.module.css'



function HomePage() {
    return <>
     
       <div className={styles.wrapper}>
       <div className={styles.nav}> <Navigation/></div>
        <div className={styles.hero}><Hero/></div>
       </div>
      
    
    </>
  }
  
  export default HomePage