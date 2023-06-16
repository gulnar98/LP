import 'normalize.css/normalize.css'
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Head from 'next/head'

import styles from './asset/css/style.module.css'



function HomePage() {
    return <>

        <Head>
                <script 
                	data-appid="648ca984462e896372376abf" 
                	src="https://cdn.app.insightify.xyz/v1/648ca984462e896372376abf/record.js">
                </script>

         </Head>
       <div className={styles.wrapper}>
       <div className={styles.nav}> <Navigation/></div>
        <div className={styles.hero}><Hero/></div>
       </div>
      
    
    </>
  }
  
  export default HomePage
