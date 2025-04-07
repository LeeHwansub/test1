import styled, {css} from 'styled-components';

export default styled.button`
width: 300px;
  height: 50px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

${props => props.width && css`
      width: ${props.width};`
};

${props => props.background && css`
  background-color: rgba(${props.background[0]},${props.background[1]});`
};

&:hover {
  background-color: darkblue;
  ${props => props.background && css`
    background-color: rgba(${props.background[0]},${props.background[1]}+0.4);`
  }

}
  margin: 10px auto;         // 위아래 여백 추가
  display: block;         // 한 줄에 하나씩 렌더링
`;