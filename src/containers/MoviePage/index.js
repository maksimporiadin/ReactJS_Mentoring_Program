import MoviePage from './MoviePage';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

import axios from '../../axios';

export default WithErrorHandler(MoviePage, axios);

