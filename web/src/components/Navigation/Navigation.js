import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQuery } from '@styles'

import Wrapper from './Wrapper'
import Item from './Item'

const Container = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;

  @media ${mediaQuery.smallerThan('medium')} {
    flex-direction: column;
    text-align: left;
  }
`

const Navigation = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Container>{children}</Container>
  </Wrapper>
)
Navigation.Wrapper = Wrapper
Navigation.Item = Item

Navigation.propTypes = {
  children: PropTypes.arrayOf(Item),
}

export default Navigation
