import styles from './LoadingModule.module.css'

export default function LoadingModule() {
    return (
    <div className={styles['loading-container']}>
      {/* El spinner es un div vacío al que animaremos con CSS */}
      <div className={styles.spinner} role="status" aria-label="Loading"></div>
      
      {/* El párrafo informativo en inglés */}
      <p className={styles['loading-text']}>Preparing your Dashboard...</p>
      
      {/* Un pequeño toque extra: una frase sutil */}
      <span className={styles['loading-subtext']}>This won't take long.</span>
    </div>
    )
}