import styles from '../styles/Timeline.module.css'

const Timeline = ({ children }) => {
    return (
        <div className={styles.timeline}>
            {children}
        </div>
    )
}

export default Timeline