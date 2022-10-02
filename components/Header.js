import Link from 'next/link'
import styles from '../styles/header.module.css'


function Header() {
    return (
        <div className={styles.header}>
            <h2>PokeNext</h2>
            <ul>
                <Link href={'/'}>
                    <li><a>Home</a></li>
                </Link>
                <Link href={'/about'}>
                    <li><a>Sobre</a></li>
                </Link>
            </ul>
        </div>
    )
}

export default Header