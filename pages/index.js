import 'normalize.css/normalize.css'
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Head from 'next/head'

import styles from './asset/css/style.module.css'



function HomePage() {
    return <>

        <Head>
                <script 
    	data-appid="648f4d6b462e89637239071d" 
    	src="https://cdn.app.insightify.xyz/v1/648f4d6b462e89637239071d/record.js">
                </script>

         </Head>
       <div className={styles.wrapper}>
       <div className={styles.nav}> <Navigation/></div>
        <div className={styles.hero}><Hero/></div>
       </div>
      
    
    </>
  }
  
  export default HomePage
