import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import  MainPage from './MainPage';
import axios from '../../axios';

export default WithErrorHandler(MainPage, axios);

