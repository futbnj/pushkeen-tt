import styles from './Nav.module.css';
import cn from 'classnames';

type NavProps = {
    position: number
}

export const Nav = ({position}: NavProps) => {

    return (
        <nav className={styles.nav}>
            <div>
                <div className={cn({
                    [styles.active]: position === 1
                })}>01</div>
                <div>
                    <div className={cn(styles.hr, {
                        [styles.hidden] : position !== 1
                    })} />
                </div>
                <div className={cn({
                    [styles.active]: position === 2
                })}>02</div>
                <div>
                    <div className={cn(styles.hr, {
                        [styles.hidden] : position !== 2
                    })} />
                </div>
                <div className={cn({
                    [styles.active]: position === 3
                })}>03</div>
                <div>
                    <div className={cn(styles.hr, {
                        [styles.hidden] : position !== 3
                    })} />
                </div>
                <div>04</div>
                <div>05</div>
            </div>
        </nav>
    );
}