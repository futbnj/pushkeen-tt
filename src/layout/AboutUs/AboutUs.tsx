import styles from './AboutUs.module.css';
import cn from 'classnames';
import {Binance} from './images/Binance';
import Map from './images/Map.png';
import {Nav} from "../../components/Nav/Nav";
import {GQ} from "./images/GQ";
import {Dot} from "./images/Dot";
import {Parallax} from "../../components/Parallax/Parallax";
import {Bubbles} from "../Bubbles/Bubbles";

export const AboutUs = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <p>2021*</p>
                    <div>
                        <p className={styles.lang}> <span>EN/</span>RU</p>
                        <p>2022</p>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.nav}>
                        <p className={cn(styles.pTitle, styles.one)}>New collection</p>
                        <Nav />
                    </div>
                    <div className={styles.block}>
                        <div className={styles.title}>
                            <h1>Bubble Drop</h1>
                            <p className={styles.pTitle}>PUSHKEEN & BACK TO THE ROOTS</p>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.pDescription}>Рассмотрим основные развивающиеся тренды 2022 года в моушн дизайне. </p>
                            <div className={styles.tokensBg}>
                                <Binance />
                                <p className={styles.tokens}>420 tokens</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.aboutWrapper}>
                    <Bubbles />
                    <div className={styles.about}>
                        <div>
                            <Nav />
                        </div>
                        <div className={styles.aboutDiv}>
                            <h3>О проекте</h3>
                            <p className={styles.aboutP}>Затронем тенденции, начиная с фильмов и коммерческой рекламы, до тематических исследований и всего, что между ними. Вы не увидели бы эту статью без бесчисленных вкладов.</p>
                            <GQ />
                            <a href="/">Читать больше в статье </a>
                        </div>
                        <div className={styles.location}>
                            <img src={Map} width="717" height="453"/>
                            <Dot />
                            <p>Команда Bubble </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}