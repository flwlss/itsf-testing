import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/Content.module.css'
import CustomButton from './CustomButton'
import ContentItem from './ContentItem'
import Loader from './Loader';

const Content = () => {

  const [comments, setComments] = useState<Comments[]>([])
  const [photos, setPhotos] = useState<Photos[]>([])
  const [availableCards, setAvailableCards] = useState(3)
  const [commentsPreloader, setCommentsPreloader] = useState(true)
  const [photosPreloader, setPhotosPreloader] = useState(true)

  useEffect(() => {
    (async () => {
      let responseComments = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (responseComments.ok) {
        let json = await responseComments.json();
        console.log(json);
        setComments(json)
        setCommentsPreloader(false)
      } else {
        alert("Ошибка HTTP: " + responseComments.status);
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      let responsePhotos = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (responsePhotos.ok) {
        let json = await responsePhotos.json();
        console.log(json);
        setPhotos(json)
        setPhotosPreloader(false)
      } else {
        alert("Ошибка HTTP: " + responsePhotos.status);
      }
    })()
  }, [])

  return (
    <div className={styles.container}>
      {(commentsPreloader && photosPreloader) && <Loader />}
      {(!commentsPreloader && !photosPreloader) &&
        <div className={styles.itemsWrapper}>
          {comments.map((item) => {
            return (
              <ContentItem
                imgSrc={photos[item.id - 1]?.url}
                key={item.id}
                body={item.body}
                email={item.email} />
            )
          }).splice(0, availableCards)}
        </div>}
      <div className={styles.moreButton}>
        <CustomButton
          title='More'
          onClick={() => {
            setAvailableCards(availableCards + 3)
          }} />
      </div>
    </div>
  )
}

export default Content