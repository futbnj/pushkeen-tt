import styles from './Slider.module.css';
import React, {useState} from "react";
import { data } from './data';

type SliderType = {
    rare: boolean
}

export const Slider = ({rare}: SliderType) => {
    const [value, setValue] = useState(0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.images}>
                    <img onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}
                         src = {rare ? data[value === 0 ? 3 : value-1].rare : data[value === 0 ? 3 : value-1].veryRare}
                         alt={data[value === 0 ? 3 : value-1].id}/>
                    <img className={styles.center}
                         src = {rare ? data[value].rare : data[value].veryRare}
                         alt={data[value].id}/>
                    <img onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}
                         src = {rare ? data[value === 3 ? 0 : value+1].rare : data[value === 3 ? 0 : value+1].veryRare}
                         alt={data[value === 3 ? 0 : value+1].id}/>
                </div>

                <div className={styles.titles}>
                    <h4>{data[value === 0 ? 3 : value-1].name}</h4>
                    <h4 className={styles.titleCenter}>{data[value].name}</h4>
                    <h4>{data[value === 3 ? 0 : value+1].name}</h4>
                </div>
            </div>
            <div className={styles.nav}>
                <button className={styles.prev} type="button" onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.272713 7.36313C0.272713 7.084 0.374174 6.80475 0.577096 6.59203L5.7719 1.13777C6.17775 0.711655 6.83521 0.711655 7.24106 1.13777C7.6469 1.56388 7.6469 2.25419 7.24106 2.6803L2.77921 7.36313L7.24025 12.047C7.64609 12.4731 7.64609 13.1634 7.24025 13.5895C6.8344 14.0156 6.17693 14.0156 5.77109 13.5895L0.576285 8.13525C0.373363 7.92219 0.272713 7.64266 0.272713 7.36313Z" fill="#04F1FF"/>
                    </svg>
                </button>
                <h3>{data[value].title}</h3>
                <button className={styles.next} type="button" onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7.36415C8 7.64327 7.88839 7.92252 7.66518 8.13524L1.95089 13.5895C1.50446 14.0156 0.78125 14.0156 0.334821 13.5895C-0.111607 13.1634 -0.111607 12.4731 0.334821 12.047L5.24286 7.36415L0.335714 2.6803C-0.110715 2.25418 -0.110715 1.56388 0.335714 1.13776C0.782143 0.711651 1.50536 0.711651 1.95179 1.13776L7.66607 6.59203C7.88929 6.80508 8 7.08461 8 7.36415Z" fill="black"/>
                    </svg>
                </button>
            </div>
            <div className={styles.row}>
                <div className={styles.quotation}>
                    <p className={styles.qmLeft}>бб</p>
                    <p className={styles.quote}>{data[value].description}</p>
                    <p className={styles.qmRight}>бб</p>
                </div>
                <div className={styles.image}>
                    <div  className={styles.tokens}>
                        <p>60 tokens</p>
                    </div>
                    <div className={styles.tag}>
                        <p>{data[value].tag}</p>
                        <img src={data[value].photo} alt={data[value].id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}