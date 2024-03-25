import styled from 'styled-components';
// import styles from '../../styles/_tools.scss'
// import '/src/styles/_tools.scss'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border: none;
  border-radius: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;

  // background-color: $color-white;
  background-color: #ffffff;

  &:hover {
    background-color: rgba(255, 127, 15, 0.1);
  }

  &:active {
    background-color: rgba(255, 127, 15, 0.2);
  }

  &:focus {
    background-color: #ffffff;
    border: 0.2rem solid #746ae9;
  }
`;

function TertiaryButtonS() {
  return (
    <Button>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
          fill="#143149"
        />
      </svg>
    </Button>
  );
}

export { TertiaryButtonS };
