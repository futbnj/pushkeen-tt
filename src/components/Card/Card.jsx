import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({img, title, name, isActive = true}) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={img} alt="artwork"/>
            <p className={cn(styles.name, {
                [styles.active]: isActive = true
            })}>{name}</p>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}