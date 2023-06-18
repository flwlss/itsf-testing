import React from 'react';
import styles from '../assets/styles/CustomButton.module.css';

interface ICustomButtonProps {
  title: string;
  onClick: () => void;
  width?: string;
  height?: string
}

const CustomButton = (props: ICustomButtonProps) => {

  const style = {
    width: props.width || '218px',
    height: props.height || '47px'
  }

  return (
    <button
      style={style}
      onClick={props.onClick}
      className={styles.button}>
      {props.title}
    </button>
  )
}

export default CustomButton