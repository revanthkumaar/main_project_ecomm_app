import React from 'react';

import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection.component'

//nested routing to navigate to collection components 

const ShopPage = ({match}) => (

<div className='shop-page'>

  <Route exact path={`${match.path}`} component={CollectionsOverview}/>
  <Route exact path={`${match.path}`} component={CollectionPage}/>

</div>
)


export default ShopPage;




