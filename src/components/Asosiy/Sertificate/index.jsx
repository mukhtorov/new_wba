import React, { useState } from 'react';
import { Wrapper, Left, Right, Title } from './style';
import Sertificate from '../../../assets/imgs/sertificate.png';
import Button from '../../Generic/Button';

const SertificateWrap = () => {
  const [checkSertificate, setCheckSertificate] = useState(false);
  return (
    <>
      <Title>Sertifikat</Title>
      <Wrapper>
        <Left>
          <Left.Img src={Sertificate} />
        </Left>
        <Right isWorkAnimation={checkSertificate}>
          <Right.Back className='Back'>
            <Right.Title>Check Your Sertificate</Right.Title>
            <Right.BackInput placeholder='Type your id code...' />
            <Button
              onClick={() => setCheckSertificate(false)}
              border='#0076F5'
              height='50'
              width='30%'
            >
              Check
            </Button>
          </Right.Back>
          <Right.Front className='Front'>
            <Right.Title>+200 o’quvchilar bizga ishonishgan</Right.Title>
            <Right.Desc>
              Kursni tamomlagan talabalarning o’zlashtirish ko’rsatkichi
              e’tiborga olingan holda sertifikatlar beriladi.
            </Right.Desc>
            <Button
              onClick={() => setCheckSertificate(true)}
              width='50%'
              border='#0076F5'
            >
              Check Your Sertificate
            </Button>
          </Right.Front>
        </Right>
      </Wrapper>
    </>
  );
};

export default SertificateWrap;

/* 
   <Right.CheckCertificate className='show'>
    Salom
   </Right.CheckCertificate>
*/
