import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://media.gq.com/photos/5eab4aaeeffccbb34a5b0454/16:9/w_2560%2Cc_limit/gq%252520may%2525202020%252520The%252520Future%252520of%252520the%252520Fashion%252520Show%252520Is%252520Here.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxPDFVPNvA-m-pC-QUkz9Kh-EDGpTk3PQyw&usqp=CAU',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i1.wp.com/trapital.co/wp-content/uploads/2020/03/TheWeeknd.jpg?fit=1200%2C800&ssl=1',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://www.nme.com/wp-content/uploads/2019/01/dua-lipa-GettyImages-1085074344.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2018/11/pexels-photo-842811-1024x620.jpeg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
