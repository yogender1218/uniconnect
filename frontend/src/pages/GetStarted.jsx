import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { AuthenticationForm } from '../components/AuthenticationForm';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import  HeroText from '@/components/HeroText';
import { FaqSimple } from '@/components/FaqSimple';
import { GetInTouch } from '@/components/GetInTouch';
import classes from './GetStarted.module.css';
import  EmailBanner  from '@/components/EmailBanner';
import { FeaturesTitle } from '@/components/FeaturesTitle';
import CardSlider from '@/components/CardSlider';
import { Outlet } from 'react-router-dom';
import { NothingFoundBackground } from '@/components/NothingFoundBackground';
function GetStarted() {
  return (
    <>
    <div className='position'>
      <div className={classes.header}>
        <HeaderMegaMenu></HeaderMegaMenu>
      </div>
      <div className={classes.navbar}>
        <NavbarMinimal></NavbarMinimal>
      </div>
      <div className={classes.hero}>
        <ScrollProgress></ScrollProgress>
        <HeroText></HeroText>
        <FeaturesTitle></FeaturesTitle>
        <AuthenticationForm></AuthenticationForm>
        <FaqSimple></FaqSimple>
        <GetInTouch></GetInTouch>
        <EmailBanner></EmailBanner>
        <CardSlider />
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

export default GetStarted