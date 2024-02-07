import styled, { css } from "styled-components"

const MenuItem = styled.li`
    margin: 0px 18px;
    display: inline-block;

    &:last-of-type {
      margin-right: 0px;
    }

    &:first-of-type {
      margin-left: 0px;
    }
`

const Link = styled.a`
    text-decoration: none;
    ${props => props.active && css`
        font-weight: 600;
        color: ${props => props.theme.verde};
        text-decoration: underline; 
    `}

`

const Component = ({ link, nome, selected }) => {
  return <MenuItem> <Link active={selected} href={link}>{nome}</Link></MenuItem>
}

export default Component