import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/wrapperComponents/Banner'

import HeroFull from '../components/hero/HeroFull'
import HeroAction from '../components/hero/HeroAction'
import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import FloatingDiv from '../components/floating-div/FloatingDiv'

import '../assets/scss/pages/home.scss'

import woman1 from '../assets/images/woman1.jpeg'
import women1 from '../assets/images/women1.jpeg'
import man2 from '../assets/images/man2.jpeg'
import man3 from '../assets/images/man3.jpeg'
import texture from '../assets/images/texture.jpeg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="We Build Black"></Helmet>

        <div className="home section-one">
          <BackgroundImage image={man2}></BackgroundImage>
          <BackgroundImage image={man2}></BackgroundImage>
          <BackgroundImage image={man2}></BackgroundImage>
          <HeroFull image={man2}>
            <header className="major">
              <h1>Empowering</h1>
              <h1>World Changers & Difference Makers</h1>
            </header>
            <Link to="/templates/landing" className="link primary"></Link>
          </HeroFull>
        </div>

        <Banner>
          <p>We are Black technologists educating and empowering the Black community to achieve socio-economic change.</p>
        </Banner>

        <div className="home section-two">
          <HeroAction
            width={'50%'}
            image={texture}
            title={'We believe that in every community.'}
            buttonText={'About Us'}>
            <p className="inner-text dark">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
            <p className="inner-text dark">
              By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
          </HeroAction>

          <FloatingDiv top={'50%'} left={'55%'} right={'10%'}>
            <HeroAction
              image={woman1}
              color={'#b58600'}
              title={'We work together.'}
              caption={'WE LISTEN. WE ADVISE.'}
              buttonText={'About Us'}>
              <p className="inner-text center">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
              <p className="inner-text center">
                By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
              <button className='center'>About Us</button>
            </HeroAction>
          </FloatingDiv>
        </div>

        <div className="home section-three">
          <HeroAction
            image={man3} />
          <HeroAction
            width={'100%'}
            image={women1}
            title={'We believe that in every community.'}
            buttonText={'About Us'}>
            <p className="inner-text dark">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
            <p className="inner-text dark">
              By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
          </HeroAction>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
