import styles from './BookItemSec.module.css'
import React, { useState } from 'react'
import MyModal from 'components/UI/modal/MyModal'

export default function BookItemSec(props) {
    const [modal, setModal] = useState(false)

    return (
        <div className="">
            <div {...props} className={styles.wrapper} onClick={() => setModal(true)} >
                <div className={styles.standart} >
                    <div className={styles.name} style={{ textAlign: 'center' }}>
                        {props.book.name}
                    </div>
                    <div className={styles.class} >
                        {props.book.class_number}
                    </div>
                </div>
            </div>
            <MyModal visible={modal} setVisible={setModal} >
                <div className={styles.dopInfo} >
                    <div className={styles.smth}>
                        Название:
                    </div>
                    <div className={styles.smth}>
                        {props.book.name}
                    </div>
                    <div className={styles.smth}>
                        Авторы:
                    </div>
                    <div>
                        <div className={styles.smth}>
                            {props.book.authors.map(aut =>
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
                        {props.book.class_number}
                    </div>
                    <div className={styles.smth}>
                        Выпущена в {props.book.release_year} году
                    </div>
                </div>
            </MyModal>
        </div>


    )
}
