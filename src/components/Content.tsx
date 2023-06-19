import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/Content.module.css'
import CustomButton from './CustomButton'
import ContentItem from './ContentItem'
import Loader from './Loader';

interface Card {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: string
}

const Content = () => {

  const [state, setState] = useState([])
  const [availableCards, setAvailableCards] = useState(3)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    (async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (response.ok) {
        let json = await response.json();
        console.log(json);
        setState(json)
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    })()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 200);
    return () => clearTimeout(timer)
  }, [loader])

  return (
    <div className={styles.container}>
      {loader && <Loader />}
      <div className={styles.itemsWrapper}>
        {state.map((item: Card) => {
          return (
            <ContentItem
              key={item.id}
              body={item.body}
              email={item.email} />
          )
        }).splice(0, availableCards)}
      </div>
      <div className={styles.moreButton}>
        <CustomButton
          title='More'
          onClick={() => {
            setAvailableCards(availableCards + 3)
            setLoader(true)
          }} />
      </div>
    </div>
  )
}

export default Content