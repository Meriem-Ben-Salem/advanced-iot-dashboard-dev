import React from 'react';
import {Button} from 'antd';
import Widget from 'components/Widget/index';
import { connect } from 'react-redux';
import { THEME_TYPE_DARK } from '../../util/constants/ThemeSetting';

const IconWithTextCard = (props) => {
  const { imageUrl,icon, title, subTitle ,showModal,size} = props;
  let { iconColor } = props;
  if (props.themeType === THEME_TYPE_DARK) {
    iconColor = 'white';
  }

  return (
    <Widget>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          {/* <i className={`icon icon-${icon} gx-fs-xlxl gx-text-${iconColor} gx-d-flex`} style={{ fontSize: 45 }} /> */}
          <img src={imageUrl} style={{ width:'60px',height:'60px' }} />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">{title}</h1>
          <p className="gx-text-grey gx-mb-0">{subTitle}</p>
        </div>
        <div className="gx-ml-lg-4 gx-ml-3">
        <i onClick={showModal} className={`icon icon-${icon} gx-fs-xlxl gx-text-${iconColor} gx-d-flex`} style={{ fontSize: size?size:20 }} />
        </div>
      </div>
    </Widget>
  );
};

const mapStateToProps = ({ settings }) => {
  const { themeType } = settings;
  return { themeType };
};
export default connect(mapStateToProps, null)(IconWithTextCard);
