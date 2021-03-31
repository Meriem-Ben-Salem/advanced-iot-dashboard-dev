import React, { useEffect, useState } from 'react';
import { Layout, Col, Row, Spin, Modal, Button } from 'antd';
import Sidebar from '../../../containers/Sidebar';
import temperature from "../../../assets/images/temperature.png"
import pressure from "../../../assets/images/pressure.png"
import battery from "../../../assets/images/battery.png"
import humidity from "../../../assets/images/humidity.png"
import  trend from "../../../assets/images/trend.png"
import  staistics from "../../../assets/images/statistics.png"

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
import { CartesianGrid, Legend, Area, ReferenceLine, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getLatestTimeseriesAction, getSeriesTempatureAction, getSeriesPressureAction, getSeriesHumidityAction, getSeriesBatteryAction } from "../../../appRedux/actions/Temperature";
import { useSelector, useDispatch } from 'react-redux'


const { Footer } = Layout;

const data = [
  { name: 'Page A', price: 200 },
  { name: 'Page B', price: 1200 },
  { name: 'Page C', price: 600 },
  { name: 'Page D', price: 1600 },
  { name: 'Page D', price: 1000 },
  { name: 'Page H', price: 2260 },
  { name: 'Page K', price: 800 },
];

const convert = (myDuration) => Math.floor(myDuration / (1000 * 60 * 60)) + ":" + Math.floor(myDuration / (1000 * 60)) % 60 + ":" + Math.floor(myDuration / 1000) % 60;

const Listing = ({ props, TempList, getListTempRequest }) => {

  //*********************************************useDispatch*********************************************************************//
  const dispatch = useDispatch();

  //*****************************************useSelector TempList*****************************************************************//
  const getLatestTimeserie = useSelector(({ temperature }) => temperature.TempList);

  //*****************************************useSelector TempListSeries*********************************************************//
  const getseries = useSelector(({ temperature }) => temperature.TempListSeries);

  //*****************************************useSelector HumiditySeries*******************************************************//
  const getseriesHumidity = useSelector(({ temperature }) => temperature.HumiditySeries);

  //*****************************************useSelector PressureSeries*****************************************************//
  const getseriesPressure = useSelector(({ temperature }) => temperature.PressureSeries);

  //****************************************************useSelector BatterySeries**************************************************//
  const getseriesBattery = useSelector(({ temperature }) => temperature.BatterySeries);


  //****************************************************getLatestTimeserie data_Temperature**************************************//
  if (getLatestTimeserie && getLatestTimeserie.data_Temperature) {
    console.log("getLatestTimeserie", getLatestTimeserie.data_Temperature[0].value)
  }

  //****************************************************getLatestTimeserie data_Humidity****************************************//
  if (getLatestTimeserie && getLatestTimeserie.data_Humidity) {
    console.log("getLatestTimeserie", getLatestTimeserie.data_Humidity[0].value)
  }

  //****************************************************getLatestTimeserie data_************************************************//
  if (getLatestTimeserie && getLatestTimeserie.data_Pressure) {
    console.log("getLatestTimeserie", getLatestTimeserie.data_Pressure[0].value)
  }

  //****************************************************getLatestTimeserie data_Battery****************************************//
  if (getLatestTimeserie && getLatestTimeserie.data_Battery) {
    console.log("getLatestTimeserie", getLatestTimeserie.data_Battery[0].value)
  }


  //*****************************************************useEffect************************************************************//
  useEffect(() => {
    if (!TempList) {
      const data_Temperature = { keys: 'data_Temperature', startTs: '51678826663', endTs: '1616787416751' }
      const data_Humidity = { keys: 'data_Humidity', startTs: '51678826663', endTs: '1616787416751' }
      const data_Pressure = { keys: 'data_Pressure', startTs: '51678826663', endTs: '1616787416751' }
      const data_Battery = { keys: 'data_Battery', startTs: '51678826663', endTs: '1616787416751' }
      const values = { entityType: "DEVICE", entityId: "5433a250-8bdf-11eb-a73f-dbb53e34e2ac" }
      dispatch(getLatestTimeseriesAction(values));
      dispatch(getSeriesTempatureAction(data_Temperature));
      dispatch(getSeriesHumidityAction(data_Humidity));
      dispatch(getSeriesPressureAction(data_Pressure));
      dispatch(getSeriesBatteryAction(data_Battery));
    }
  }, [TempList]);



  //***********************************************IsModalVisibleTemperature************************************************//
  const [IsModalVisibleTemperature, setIsModalVisibleTemperature] = useState(false);

  //**********************************************IsModalVisibleHumidity**************************************************//
  const [isModalVisibleHumidity, setIsModalVisibleHumidity] = useState(false);

  //**********************************************IsModalVisiblePressure*************************************************//
  const [isModalVisiblePressure, setIsModalVisiblePressure] = useState(false);

  //**********************************************IsModalVisibleBattery*************************************************//
  const [isModalVisibleBattery, setIsModalVisibleBattery] = useState(false);



  //****************************************************showModal*****************************************************//
  const showModalTemperature = (type) => {
    setIsModalVisibleTemperature(true);
  };

  //***********************************************showModalHumidity*************************************************//
  const showModalHumidity = (type) => {
    setIsModalVisibleHumidity(true);
  };

  //***********************************************showModalPressure***********************************************//
  const showModalPressure = (type) => {
    setIsModalVisiblePressure(true);
  };

  //***********************************************showModalBattery**********************************************//
  const showModalBattery = (type) => {
    setIsModalVisibleBattery(true);
  };



  //***********************************************OkTemperature***********************************************//
  const OkTemperature = () => {
    setIsModalVisibleTemperature(false);
  };

  //***********************************************OkHumidity************************************************//
  const OkHumidity = () => {
    setIsModalVisibleHumidity(false);
  };

  //**********************************************OkPressure***********************************************//
  const OkPressure = () => {
    setIsModalVisiblePressure(false);
  };

  //**********************************************OkBattery**********************************************//
  const OkBattery = () => {
    setIsModalVisibleBattery(false);
  };



  return (
    <Layout className="gx-app-layout">
      <Modal title="Temperature" visible={IsModalVisibleTemperature} width={'60%'} onOk={OkTemperature} >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={730} height={250} data={getseries.data_Temperature}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ts" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Modal>



      <Modal title="Humidity" visible={isModalVisibleHumidity} width={'80%'} onOk={OkHumidity} >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={730} height={250} data={getseriesHumidity.data_Humidity}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ts" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Modal>

      <Modal title="Pressure" visible={isModalVisiblePressure} width={'80%'} onOk={OkPressure} >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={730} height={250} data={getseriesPressure.data_Pressure}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ts" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Modal>

      <Modal title="Battery" visible={isModalVisibleBattery} width={'80%'} onOk={OkBattery} >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={730} height={250} data={getseriesBattery.data_Battery}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ts" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Modal>
      <Sidebar />

      <Layout>
        <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
          <div style={{ margin: '20px' }}>
            <Row>
              {getLatestTimeserie ?
                <>
                  <Col lg={12} md={12} sm={12} xl={6} xs={24}>
                    <IconWithTextCard imageUrl={temperature} icon="menu-up" iconColor="black" size={15} showModal={showModalTemperature} title={getLatestTimeserie.data_Temperature ? getLatestTimeserie.data_Temperature[0].value : 'NA'} subTitle="Temperature" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xl={6} xs={24}>
                    <IconWithTextCard imageUrl={humidity} icon="menu-up" iconColor="black" size={15} showModal={showModalHumidity} title={getLatestTimeserie.data_Humidity ? getLatestTimeserie.data_Humidity[0].value : 'NA'} subTitle="Humidity" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xl={6} xs={24}>
                    <IconWithTextCard imageUrl={pressure} icon="menu-up" iconColor="black" size={15} showModal={showModalPressure} title={getLatestTimeserie.data_Pressure ? getLatestTimeserie.data_Pressure[0].value : 'NA'} subTitle="Pressure" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xl={6} xs={24}>
                    <IconWithTextCard imageUrl={battery} icon="menu-up" iconColor="black" size={15} showModal={showModalBattery} title={getLatestTimeserie.data_Battery ? getLatestTimeserie.data_Battery[0].value : 'NA'} subTitle="Battery" />
                  </Col>
                </>
                : <div style={{ textAlign: 'center' }}>
                  <Spin size="large" />
                </div>
              }
              <Col lg={20} md={10} sm={5} xl={20} xs={30}>
                <GrowthCard
                  {...{
                    bgColor: 'white',
                    styleName: 'up',
                    desc: 'Temperature',
                  }}
                >
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart width={730} height={250} data={getseries.data_Temperature}
                      margin={{ top: 5, right: 80, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="ts" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                  </GrowthCard>
                     </Col>
             
            </Row>
          </div>
            <Footer>
              <div className="gx-layout-footer-content">Copyright SOFIA Technologies  By Sofiatech  © 2021</div>
            </Footer>
          </div>
      </Layout>
      </Layout>
  )
};

export default (Listing);
