import React from 'react';
import { LocationPanel } from './style';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'

const DrowerLocation = (props) => {
    const [showLoc, setShowLoc] = props.showLocation;
    const location = props.location;

    return (
        <LocationPanel show={showLoc}>
            <LocationPanel.Close onClick={() => setShowLoc(false)}>
                <div className="wrapper">
                    <a href="#" className="close-button">
                        <div className="in">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                        </div>
                        <div className="out">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                        </div>
                    </a>
                </div>
            </LocationPanel.Close>
            <YMaps>
                <Map
                    defaultState={{
                        center: location,
                        zoom: 9,
                    }}
                    width='100%'
                    height='100%'
                >
                    <Placemark geometry={location} />
                    <ZoomControl options={{ float: 'right' }} />
                </Map>
            </YMaps>
        </LocationPanel>
    );
};

export default DrowerLocation;
