
import type { ReactNode } from 'react'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
    <div className={styles['main-layout']}>
        {children}
    </div>
    )
}