import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import emoji from 'assets/emoji.gif'
import Typical from 'react-typical'

import Icon from 'components/Common/Icon'


const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  min-height: 700px;

  background: linear-gradient(135deg, #000111 0%, #000000 100%);
`

const EditorBlocks = styled.div`
  width: 720px;
  height: 420px;
  border-radius: 10px;

  background: linear-gradient(109.61deg, #4C4F5A 4.26%, #202125 84.84%);
`

const ImgWrapper = styled.img`
  width: 240px;
  height: 240px;
`
const Emoji = styled.div`
  display: block;
  position: relative;
  top: -320px;
  left: 240px;
`

const HeaderBox = styled.div`
  display: grid;
  grid-template-columns: 36px auto 36px;
  align-items: center;
`

const CodeBox = styled.div`
    position: relative;
    width: 290px;
    height: 145px;
    background: #1D1E22;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    z-index: 5;
    
    svg {
        margin: 10px;
        width: 16px; 
        height: 16px;
    }
    h1 {
        font-family: Lato, sans-serif;
        font-weight: 900;
        font-size: 14px;
        letter-spacing: 1.57px;
        color: #C5C8D4;
        margin: 0;
    }
`

const CodeHtml = styled(CodeBox)`
    top: -80px;
    left: -120px;
`
const CodeCss = styled(CodeBox)`
    top: 240px;
    right: -100px;

`
const CodeJs = styled(CodeBox)`
    top: -120px;
    right: -600px;
`
const H1 = styled.h1`
    font-family: Lato, sans-serif;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1.57px;
    color: #C5C8D4;
    margin: 0;
`

const CodeText = styled.div`
  padding: 0px 24px;
  color: white;
  font-weight: 500;
  line-height: 20px;
`

const TypicalText = styled(Typical)`
  display: inline;
`

const CssText = styled.p`
  color: white;
  font-weight: 500;
  line-height: 20px;
  opacity: 0.5;
`


const SectionTop: FunctionComponent = function () {
  return (
    <Layout>
      <EditorBlocks >
        <CodeHtml >
          <HeaderBox>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A" /></svg>
            <h1>HTML</h1>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A" /></svg>
          </HeaderBox>
          <CodeText>
            I'm
            <TypicalText
              steps={[' a Frontend Developer!', 500]}
              wrapper="p"
            />
          </CodeText>
        </CodeHtml>
        <CodeCss>
          <HeaderBox>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A" /></svg>
            <H1>CSS</H1>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A" /></svg>
          </HeaderBox>
          <CodeText>
            <CssText>
              What I do care about is,
            </CssText>
            <TypicalText
              steps={[1500, 'User Experience', 1000, 'Work as a Team', 1000, 'Clean Code and Architecture', 1000, 'Reasonable Product', 1000,]}
              loop={Infinity}
              wrapper="p"
            />
          </CodeText>
        </CodeCss>
        <CodeJs >
          <HeaderBox>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A" /></svg>
            <H1>JS</H1>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A" /></svg>
          </HeaderBox>
          <CodeText>
            <TypicalText
              steps={[2000, 'I am interseted in', 1000, 'I am interseted in React', 1000, 'I am interseted in Recoil', 1000, 'I am interseted in React-Query', 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </CodeText>
        </CodeJs>
        <Emoji>
          <ImgWrapper src={emoji} alt="Otter dancing with a fish" />
        </Emoji>
      </EditorBlocks >

      <></>
      <Icon icon="arrowDown" />
    </Layout >
  )
}

export default SectionTop