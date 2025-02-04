import styled from 'styled-components';

export const Button = styled.button`
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #fff;
  width:${(props) => (props.direction === true ? 'max-content' : '15em')};
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 1em;
  font-family: 'Shadows Into Light', cursive;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&&:hover,:focus-visible{
  --_p: 0px;
  outline-color:var(--color);
  outline-offset: .05em;
}

&&:active {
  background:var(--color);
  color: #fff;
}
     @media (min-width: 768px) {
          font-size: 1.5em;
    }
`