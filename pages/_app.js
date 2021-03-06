import React from "react";
import PropTypes from "prop-types";
import '@/styles/globals.css'
import { Header, Nav} from "@/components";
import {wrapper} from "@/modules/store";
import withReduxSaga from 'next-redux-saga';
const App = ({ Component, pageProps }) => {
  return  <>
   <Header/>
  <Nav/><div className='AppMinHeight'>
  <Component />
  </div>

  </>
}
App.propTypes = {
  Component: PropTypes.elementType,
};
export default wrapper.withRedux(withReduxSaga(App));