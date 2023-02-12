import styles from './BookItemSec.module.css'
import React, { useEffect, useState } from 'react'

export default function BookItemSec({ book }) {
    const [dopInfo, setDopInfo] = useState(false)

    return (
        <div className={styles.wrapper} onClick={() => setDopInfo(!dopInfo)} >
            {dopInfo
                ?
                <div className={styles.dopInfo} >
                    <div className={styles.smth}>
                        Название:
                    </div>
                    <div className={styles.smth}>
                        {book.name}
                    </div>
                    <div className={styles.smth}>
                        Авторы:
                    </div>
                    <div>
                        <div className={styles.smth}>
                            {book.authors.map(aut =>
                                <div>
                                    {aut.name}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.smth}>
                        Выдается в классе:
                    </div>
                    <div className={styles.smth} >
                        {book.class_number}
                    </div>
                    <div className={styles.smth}>
                        Выпущена в {book.release_year} году
                    </div>
                </div>
                :
                <div className={styles.standart} >
                    <div className={styles.name} style={{ textAlign: 'center' }}>
                        {book.name}
                    </div>
                    <div className={styles.class} >
                        {book.class_number}
                    </div>
                </div>
            }
        </div>

    )
}
