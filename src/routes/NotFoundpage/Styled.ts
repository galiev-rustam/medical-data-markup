import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  width: 100vm;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h1`
  font-weight: 400;
  font-size: 260px;
  color: #001a3d;
  margin: 0;
`

const SubHeader = styled.h2`
  font-weight: 400;
  font-size: 42px;
  color: #cecece;
  margin: 0;
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 32px;
`

export default {
  Wrapper,
  Header,
  SubHeader,
  Section,
}
