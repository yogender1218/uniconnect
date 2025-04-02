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
import {MultiLogin} from '@/components/MultiLogin';
import { MultiSinup } from '@/components/MultiSinup';
import { AuthenticationFormS } from '@/components/AuthenticationFormS';
import { AuthenticationFormP } from '@/components/AuthenticationFormP';
import { AuthenticationFormI } from '@/components/AuthenticationFormI';
import StartupForm from '@/components/StartupForm';
import StartupCard from '@/components/StartupCard';
import StartupButton from '@/components/StartupButton';
import StartupInvestor from '@/components/StartupInvestor';
function GetStarted() {
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
        <ScrollProgress></ScrollProgress>
        <HeroText></HeroText>
        <FeaturesTitle></FeaturesTitle>
        <MultiSinup></MultiSinup>
        <FaqSimple></FaqSimple>
        <GetInTouch></GetInTouch>
         <EmailBanner></EmailBanner>
        <CardSlider />
      </div>
    </div>
    <Outlet />  
    </>
  )
}

export default GetStarted