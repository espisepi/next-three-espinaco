import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic'

const Scene1App = dynamic(() => import('../scenes/scene1/Scene1'))

export default function Scene1() {
  return (
    <div className={styles.container}>
     <h1>HOLA MUNDO</h1>
    <Scene1App />
    </div>
  )
}