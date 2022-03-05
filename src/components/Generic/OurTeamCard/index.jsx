import React from 'react';
import { Wrapper, Left, Right } from './style';
import Instagram from '../../../assets/icons/instagram.svg';
import Github from '../../../assets/icons/github.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Youtube from '../../../assets/icons/youtube.svg';

const index = ({ image, name, type, description }) => {
  return (
    <Wrapper>
      <Left>
        <Left.Image
          src={image || 'https://avatars.githubusercontent.com/u/44763931?v=4'}
        />
        <Left.Name>{name || 'Sardor Mukhtorov'}</Left.Name>
        <Left.Type>{type || 'Frontend dasturchi'}</Left.Type>
        <Left.IconWrapper>
          <Left.Icon src={Facebook} />
          <Left.Icon src={Instagram} />
          <Left.Icon src={Youtube} />
          <Left.Icon src={Github} />
        </Left.IconWrapper>
      </Left>
      <Right>
        <Left.Type>{type || 'Frontend dasturchi'}</Left.Type>
        <Right.Description>
          {description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sollicitudin netus in arcu eget nec id sit morbi. Ut id sodales enim pretium, aliquam, eget pellentesque. In arcu, ornare aenean arcu, eget. Ornare aliquet sed morbi nibh quam sed vitae placerat ornare. Volutpat ut ut justo, vulputate vel auctor. Hac laoreet imperdiet cursus blandit luctus curabitur nec elit. Quis et ornare sit viverra ac nullam. Imperdiet ut venenatis velit et, platea leo, mollis vivamus lacus. A consequat accumsan ac id euismod est sapien. Parturient eu facilisis sem ultricies metus, nunc.'}
        </Right.Description>
        <Right.WrapperHash>
          <Right.Hash>#html</Right.Hash>
          <Right.Hash>#css</Right.Hash>
          <Right.Hash>#bootstrap</Right.Hash>
          <Right.Hash>#sass</Right.Hash>
          <Right.Hash>#javascript</Right.Hash>
          <Right.Hash>#reactjs</Right.Hash>
          <Right.Hash>#angular</Right.Hash>
          <Right.Hash>#nodejs</Right.Hash>
          <Right.Hash>#github</Right.Hash>
        </Right.WrapperHash>
      </Right>
    </Wrapper>
  );
};

export default index;
