import React from 'react';
import { SHeaderMegaMenu } from '../components/SHeaderMegaMenu';
import classes from './LoginPage.module.css';
import { Outlet } from 'react-router-dom';
import SSidebarNav from '@/components/SSidebarNav';
import CreatePostForm from '@/components/CreatePostForm';
import SRightCard from '@/components/SRightCard';
import SDashboardTabs from '@/components/SDashboardTabs';
import SDashboard from '@/components/SDashboard';
function SDashboardPage() {
  return (
    <>
    <div className='position'>
      <div className={classes.header}>
        <SHeaderMegaMenu></SHeaderMegaMenu>
      </div>
     {/* <div className={classes.navbar}>
        <NavbarMinimal></NavbarMinimal>
      </div> */}
      <div style={{display: "flex",flexDirection: "row",margin:'9vw 0px 2vw 0vw',width:'100%'}}>
        <SSidebarNav></SSidebarNav>
        <div style={{position: "relative",width: "100%",height: "100vh"}}>
        <CreatePostForm></CreatePostForm>
        <SDashboard></SDashboard>
        </div>
       <SRightCard></SRightCard>
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

export default SDashboardPage