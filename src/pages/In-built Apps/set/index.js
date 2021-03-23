import React, { useEffect } from 'react';
import { Layout, Col, Row } from 'antd';
import {
  LineChart, ResponsiveContainer, Tooltip, Line,
} from 'recharts';

import Sidebar from '../../../containers/Sidebar';
import De from "../../../assets/images/divImg.jpg"
import {
  EcommerceStatus,
  GrowthCard,
  QueriesCard,
  TrafficRaiseCard,
  TotalEncomeCard,
  IconWithTextCard,
  ChartCard,
  GrothChartWidget,
} from '../../../components/Metrics';
import  FriendshipCard from '../../../components/Widget';
import Widget  from '../../../components/Widget';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from "axios";
import { func } from 'prop-types';




const { Footer } = Layout;
const mapDiv={
  width: '400px',
  height: '400px'
}
const mapStyles = {
  width: '100%',
  height: '100%'
};

const data = [
  { name: 'Page A', price: 200 },
  { name: 'Page B', price: 1200 },
  { name: 'Page C', price: 600 },
  { name: 'Page D', price: 1600 },
  { name: 'Page D', price: 1000 },
  { name: 'Page H', price: 2260 },
  { name: 'Page K', price: 800 },
];



useEffect(() => {
  const wsResponse = axios.request({
    method: 'get',
    url: `https://things.sofia-networks.com/api/plugins/telemetry/DEVICE/65d486d0-67c4-11eb-ba20-43ca2020faf8/values/timeseries?useStrictDataTypes=false
    `,
    
}); },  []);

const Set = (props) => (
  
<Layout className="gx-app-layout">
    <Sidebar />
    <Layout>
      <div style={{  overflowY: 'scroll', overflowX: 'hidden'}}>
        <div style = {{margin: '20px'}}>
          
        <Row>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="orders" title="2,380" iconColor="geekblue" subTitle="Orders this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="revenue-new" title="2,380" iconColor="primary" subTitle="Orders this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="visits" title="2,380" iconColor="geekblue" subTitle="Visits this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="queries" title="2,380" iconColor="geekblue" subTitle="Queries this year" />
          </Col>
          </Row>
          <Row>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '92',
                styleName: 'up',
                desc: 'Growth in revenue',
              }}
            >
              <GrothChartWidget
                colorID="color_id_1"
                data={data}
                dataKey="price"
                startColor="#163469"
                endColor="#FE9E15"
              />
            </GrowthCard>
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '38',
                styleName: 'up',
                desc: 'Growth in revenue',
              }}
            >
              <GrothChartWidget
                data={[
                  { name: 'Page A', revenue: 200 },
                  { name: 'Page B', revenue: 1200 },
                  { name: 'Page C', revenue: 600 },
                  { name: 'Page D', revenue: 1600 },
                  { name: 'Page D', revenue: 1000 },
                  { name: 'Page H', revenue: 2260 },
                  { name: 'Page K', revenue: 800 },
                ]}
                dataKey="revenue"
                type="monotone"
                colorID="color_id_2"
                strokeColor="#4D95F3"
                startColor="#4ECDE4"
                endColor="#06BB8A"
              />
            </GrowthCard>
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '38',
                styleName: 'down',
                desc: 'Less orders from past year',
              }}
            >
              <GrothChartWidget
                data={[
                  { name: 'Page A', price: 200 },
                  { name: 'Page B', price: 1200 },
                  { name: 'Page C', price: 600 },
                  { name: 'Page D', price: 1600 },
                  { name: 'Page D', price: 1000 },
                  { name: 'Page H', price: 2260 },
                  { name: 'Page K', price: 800 },
                ]}
                dataKey="price"
                colorID="color_id_3"
                strokeColor="#FEEADA"
                startColor="#e81a24"
                endColor="#FEEADA"
              />
            </GrowthCard>
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '44',
                styleName: 'up',
                desc: 'Traffic raise',
              }}
            >
              <ResponsiveContainer width="100%" height={100}>
                <LineChart
                  data={[
                    { name: 'Page A', traffic: 200 },
                    { name: 'Page B', traffic: 1100 },
                    { name: 'Page C', traffic: 800 },
                    { name: 'Page D', traffic: 1700 },
                    { name: 'Page D', traffic: 600 },
                    { name: 'Page D', traffic: 1800 },
                    { name: 'Page D', traffic: 600 },   
                  ]}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                  }}
                >
                  <Tooltip />
                  <Line
                    dataKey="traffic"
                    stroke="#038FDE"
                    dot={{ stroke: '#FEA931', strokeWidth: 2 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </GrowthCard>
          </Col>
          </Row>
         <Row>
          
           <Col>
           <div style={mapDiv}>
           <Map
                  google={props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={
                    {
                      lat: -1.2884,
                      lng: 36.8233
                    }
                  }
                />
           </div>
               
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
                <Widget styleName="gx-p-lg-1">
      <Row>
        <Col xl={9} lg={10} md={10} sm={10} xs={24}>
          <img className="gx-rounded-lg gx-w-100" alt="..." src={De}/>
        </Col>
        <Col xl={15} lg={14} md={14} sm={14} xs={24}>
          <div className="gx-fnd-content">
            <p className="gx-text-grey">Outdoor Experience</p>
            <h2 className="gx-text-uppercase gx-text-black gx-font-weight-bold gx-fnd-title">A Friendship with high
              waves</h2>
            <p>Had a great time with family on beach this
              weekend.</p>
            <ul className="gx-fnd-gallery-list">
              <li><img alt="..." src={"https://via.placeholder.com/70x70"}
                       className="gx-rounded-lg gx-img-fluid"/></li>
              <li><img alt="..." src={"https://via.placeholder.com/70x70"}
                       className="gx-rounded-lg gx-img-fluid"/></li>
              <li><img alt="..." src={"https://via.placeholder.com/70x70"}
                       className="gx-rounded-lg gx-img-fluid"/></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Widget>
              </Col>
         </Row>
          
        </div>
        <Footer>
        <div className="gx-layout-footer-content">Copyright SOFIA Technologies  By Sofiatech  © 2021</div>
      </Footer>
      </div>
     
    </Layout>
  </Layout>

    );
 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqANOFz4c7Du0O1QABXCRCcVAVIcdQCd0'
  
})(Set);
 
