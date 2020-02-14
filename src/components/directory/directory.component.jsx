import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'bonés',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'bones'
                },
                {
                  title: 'moletons',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'moletons'
                },
                {
                  title: 'tênis',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'tenis'
                },
                {
                  title: 'elas',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'fem',
                  size: 'large'
                },
                {
                  title: 'eles',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mas',
                  size: 'large'
                }
            ],
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;