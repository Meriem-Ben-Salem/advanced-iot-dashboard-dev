import React from 'react';
import { Layout, Col, Row } from 'antd';
import Sidebar from '../../../containers/Sidebar';
import ProjectWidget from '../../../components/Widgets/ProjectWidget';
import Productivity from '../../../components/Widgets/Productivity';
import SocialMedia from '../../../components/Widgets/SocialMedia';
import Newsletter from '../../../components/Widgets/Newsletter';
import NewPhotos from '../../../components/Widgets/NewPhotos';
import FlyingBird from '../../../components/Widgets/FlyingBird';
import DryFruit from '../../../components/Widgets/DryFruit';
import AayurvedaCard from '../../../components/Widgets/AayurvedaCard'
import SmartHomeCard from '../../../components/Widgets/SmartHomeCard';
import PhotosCard from '../../../components/Widgets/PhotosCard';
import WorkStatusCard from '../../../components/Widgets/WorkStatusCard';
import UnreadMessagesCard from '../../../components/Widgets/UnreadMessagesCard';
import UserCard from '../../../components/Widgets/UserCard';
import CampaignCard from '../../../components/Widgets/CampaignCard';
import BuildingCard from '../../../components/Widgets/BuildingCard';
import FriendshipCard from '../../../components/Widgets/FriendshipCard';
import IncreamentCard from '../../../components/Widgets/IncreamentCard';
import ToolTheDay from '../../../components/Widgets/ToolTheDay';

const { Footer } = Layout;


const Widgets = () => (
  <Layout className="gx-app-layout">
    <Sidebar />
    <Layout>
      <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
        <div style={{ margin: '20px' }}>
          <Row>
            <Col
              {...{
                xl: 6,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <ProjectWidget />
            </Col>
            <Col
              {...{
                xl: 6,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <Productivity />
            </Col>
            <Col
              {...{
                xl: 6,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <SocialMedia />
            </Col>

            <Col
              {...{
                xl: 8,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <Newsletter />
            </Col>

            <Col
              {...{
                xl: 8,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <NewPhotos />
            </Col>

            <Col
              {...{
                xl: 8,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <FlyingBird />
            </Col>
            <Col
              {...{
                xl: 4,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            >
              <DryFruit />
            </Col>
            <Col
              {...{
                xl: 4,
                lg: 8,
                md: 8,
                sm: 12,
                xs: 24,
              }}
            >
              <AayurvedaCard />
            </Col>

            <Col
              {...{
                xl: 4,
                lg: 8,
                md: 8,
                sm: 12,
                xs: 24,
              }}
            >
              <ToolTheDay />
            </Col>

            <Col
              {...{
                xl: 4,
                lg: 8,
                md: 8,
                sm: 12,
                xs: 24,
              }}
            >
              <SmartHomeCard />
            </Col>



            <Col
              {...{
                xl: 4,
                lg: 12,
                md: 12,
                sm: 24,
                xs: 24,
              }}
            >
              <PhotosCard />
           
           </Col>
           <Col
              {...{
                xl: 4,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 24,
              }}
            
              >
              <UnreadMessagesCard />
            </Col>
            <Col
            {...{
              xl: 4,
              lg: 12,
              md: 12,
              sm: 24,
              xs: 24,
            }}
          >
            <WorkStatusCard />
          </Col>

          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <UnreadMessagesCard />
          </Col>
          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <UserCard />
          </Col>

          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <IncreamentCard/>
          </Col>

          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <CampaignCard />
          </Col>
          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <BuildingCard />
          </Col>
          
          <Col
            {...{
              xl: 12,
              lg: 24,
              md: 24,
              sm: 24,
              xs: 24,
            }}
          >
            <FriendshipCard />
          </Col>
        </Row>
      </div>
      <Footer>
        <div className="gx-layout-footer-content">Copyright SOFIA Technologies  By Sofiatech © 2021</div>
      </Footer>
      </div>
  </Layout>
  </Layout >
);

export default Widgets;
