import 'normalize.css/normalize.css'
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Head from 'next/head'

import styles from './asset/css/style.module.css'



function HomePage() {
    return <>

        <Head>
             <script 
            	data-appid="649b18f9462e896372404481" 
            	src="https://cdn.app.insightify.xyz/v1/649b18f9462e896372404481/record.js">
            </script>

         </Head>
       <div className={styles.wrapper}>
       <div className={styles.nav}> <Navigation/></div>
        <div className={styles.hero}><Hero/></div>
       </div>
      
    
    </>
  }
  
  export default HomePage
