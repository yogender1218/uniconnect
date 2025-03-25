import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { AuthenticationForm } from '../components/AuthenticationForm';
import HotCoins from '../components/HotCoins';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import  HeroText from '@/components/HeroText';
import { CardsCarousel } from '@/components/CardsCarousel';
import { FaqSimple } from '@/components/FaqSimple';
import { GetInTouch } from '@/components/GetInTouch';
import classes from './LoginPage.module.css';
import  EmailBanner  from '@/components/EmailBanner';
import { FeaturesTitle } from '@/components/FeaturesTitle';
import CardSlider from '@/components/CardSlider';
import { Outlet } from 'react-router-dom';
import { MultiLogin } from '@/components/MultiLogin';
import { AuthenticationFormI } from '@/components/AuthenticationFormI';
import { LoginForm } from '@/components/LoginForm';
function InvestorLogin() {
  return (
    <>
    <div className='position'>
      <div className={classes.header}>
        <HeaderMegaMenu></HeaderMegaMenu>
      </div>
     {/* <div className={classes.navbar}>
        <NavbarMinimal></NavbarMinimal>
      </div> */}
      <div className={classes.hero}>
        <LoginForm></LoginForm>
        {/* <TestimonialsSlider></TestimonialsSlider> */}
        {/* <CardsCarousel></CardsCarousel> */}
        {/* <HotCoins></HotCoins> */}
        <FooterLinks></FooterLinks>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default InvestorLogin