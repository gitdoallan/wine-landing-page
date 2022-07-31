import { FC } from 'react';
import * as S from './styles';

export const Reviews: FC = () => {
  return (
    <S.ReviewsContainer>
      <S.ReviewsTitle>Reviews</S.ReviewsTitle>
      <S.ReviewsContent>
        <S.ReviewsItemContainer>
          <S.ReviewsItem>
            <S.ReviewsItemTitle>Review 1</S.ReviewsItemTitle>
            <S.ReviewsItemContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam tortor,
            </S.ReviewsItemContent>
          </S.ReviewsItem>
        </S.ReviewsItemContainer>
        <S.ReviewsItemContainer>
          <S.ReviewsItem>
            <S.ReviewsItemTitle>Review 2</S.ReviewsItemTitle>
            <S.ReviewsItemContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam tortor,
            </S.ReviewsItemContent>
          </S.ReviewsItem>
        </S.ReviewsItemContainer>
      </S.ReviewsContent>
    </S.ReviewsContainer>
  );
};
