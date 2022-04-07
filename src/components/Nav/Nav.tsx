import styles from './Nav.module.css';
import cn from 'classnames';

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <div>01</div>
                <hr className={cn(styles.hr)}/>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
            </div>
        </nav>
    );
}