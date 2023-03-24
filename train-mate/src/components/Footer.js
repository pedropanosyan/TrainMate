import React from 'react';
import {CDBBtn, CDBIcon, CDBBox} from 'cdbreact';
import {Container} from "react-bootstrap";


export const Footer = () => {
    return (
        <Container className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src='Imagenes/logo2.png'
                            width="70px"
                            height='auto'
                            style={{padding:'10px'}}
                        />
                        <span className="ml-4 h5 mb-0 font-weight-bold" style={{color:'whitesmoke'}}>TrainMate</span>
                    </a>
                    <small className="ml-2" style={{color:'whitesmoke'}}>&copy; TrainMate, 2023. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </Container>
    );
};

export default Footer;