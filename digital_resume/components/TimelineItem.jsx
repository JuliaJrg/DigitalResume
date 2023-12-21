import styles from '../styles/TimelineItem.module.css'

const TimelineItem = ({ date, title, description }) => {
    return (
        <div className={styles.timeItem}>
            <div className={styles.timelinedate}>{date}</div>
            <div className={styles.timelinecontent}>
                <h3 className={styles.timelinetitle}>{title}</h3>
                <p className={styles.timelinedescription}>{description}</p>
            </div>
        </div>
    )
}

export default TimelineItem