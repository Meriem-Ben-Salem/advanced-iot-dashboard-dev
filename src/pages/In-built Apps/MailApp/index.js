import React from 'react';
import { Layout, Col, Row } from 'antd';


import Sidebar from '../../../containers/Sidebar';

const { Footer } = Layout;


const MailApp = () => (
  <Layout className="gx-app-layout">
    <Sidebar />
    <Layout>
      <div style={{  overflowY: 'scroll', overflowX: 'hidden'}}>
        <div style = {{margin: '20px'}}>
      
    



        </div>
        <Footer>
        <div className="gx-layout-footer-content">Copyright SOFIA Technologies  By Sofiatech  © 2021</div>
      </Footer>
      </div>
     
    </Layout>
  </Layout>
);

export default MailApp;