import React from 'react';
import { css } from '@emotion/react';
import {PropagateLoader} from 'react-spinners';
import SuccessfulOrder from "./succesfulOrder";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function LoadingSpinner(props) {
    const [isLoading, setIsLoading] = React.useState(true);

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
        setIsLoading(false);
    }, 6000);
    const LoadingSpinner = ({text}) => (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {text && <span style={{marginTop: '8px', fontSize: '25px', fontWeight: 'bold'}}>{text}</span>}
            <div style={{position: 'relative', marginTop: '8px'}}>
                <img src={"DineIn1.png"} alt="food" style={{maxWidth: '100%', height: 'auto'}}/>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '100px'
                }}>
                    <PropagateLoader css={override} size={15} color={'#ebc258'}/>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {isLoading && <LoadingSpinner text={props.text} />}
            {!isLoading && <SuccessfulOrder />}
        </div>
    );
}

export default LoadingSpinner;
