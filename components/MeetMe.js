import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const MeetMe = () => {
  return (
    <div>
      {/* <Image
        src='photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='john doe avatar'
        width={150}
        height={150}
        className={styles.img}
      /> */}
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_33asonmr.json"
        style={{ height: '300px', width: '300px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
      {/* <p className={styles.p}>
        Content for the modern monkey 
      </p> */}
    </div>
  );
};

export default MeetMe;
