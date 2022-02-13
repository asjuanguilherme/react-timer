import { ReactComponentElement } from 'react'
import * as S from './styles'

type Props = {
   label?: string;
   onClick?: VoidFunction;
   icon?: ReactComponentElement<any>;
   block?: boolean;
}

const Button = ({label = "", block = false, onClick, icon } : Props) => {
   return (
      <S.Wrapper onClick={ onClick } label={ label } block={ block } icon={ icon }>
        { label }
        { icon }
      </S.Wrapper>
   )
}

export default Button