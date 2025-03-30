import React from 'react';
import { SHeaderMegaMenu } from '../components/SHeaderMegaMenu';
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
import { MultiSinup } from '@/components/MultiSinup';
import SDashboard from '@/components/SDashboard';
import SSidebarNav from '@/components/SSidebarNav';
import StudentProfileForm from '@/components/StudentProfileForm';
import ProfileHeader from '@/components/ProfileHeader';
function StudentProfilePage() {
  return (
    <>
    <div className='position'>
      <div className={classes.header}>
        <SHeaderMegaMenu></SHeaderMegaMenu>
      </div>
     {/* <div className={classes.navbar}>
        <NavbarMinimal></NavbarMinimal>
      </div> */}
      <div className={classes.hero}>
        {/* <SSidebarNav></SSidebarNav> */}
        <ProfileHeader></ProfileHeader>
        <StudentProfileForm></StudentProfileForm>

        {/* <TestimonialsSlider></TestimonialsSlider> */}
        {/* <CardsCarousel></CardsCarousel> */}
        {/* <HotCoins></HotCoins> */}
        {/* <FooterLinks></FooterLinks> */}
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default StudentProfilePage