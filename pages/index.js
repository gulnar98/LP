import 'normalize.css/normalize.css'
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Head from 'next/head'

import styles from './asset/css/style.module.css'



function HomePage() {
    return <>

        <Head>

                            <script 
            	data-appid="648c1e3a462e896372371249" 
            	src="https://cdn.app.insightify.xyz/v1/648c1e3a462e896372371249/record.js">
            </script>

         </Head>
       <div className={styles.wrapper}>
       <div className={styles.nav}> <Navigation/></div>
        <div className={styles.hero}><Hero/></div>
       </div>
      
    
    </>
  }
  
  export default HomePage
