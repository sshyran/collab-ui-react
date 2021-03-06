import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemSection,
} from '@collab-ui/react';
import _ from 'lodash';

/**
 * @category containers
 * @component list-item
 * @variations collab-ui-react
 */

export default class ListItemHeader extends React.PureComponent {
  static displayName = 'ListItemHeader';

  state = {
    id: _.uniqueId(this.props.id && `${this.props.id}-` || 'cui-space-list-item__header-'),
  }

  render() {
    const {
      className,
      children,
      header,
      type,
      ...props
    } = this.props;
    const {
      id
    } = this.state;

    const staticChildren = (
      [
        <ListItemSection key='child-0' position='center'>
          <div className={'cui-list-item__header'}>
            {header}
          </div>
        </ListItemSection>,
        <ListItemSection key='child-1' position='right'>
          {children}
        </ListItemSection>
      ]
    );

    return (
      <ListItem
        className={
          'cui-list-item-header' +
          `${(type && ` cui-list-item-header--${type}`) || ''}` +
          `${(className && ` ${className}`) || ''}`
        }
        id={id}
        tabIndex={-1}
        onClick={() => false}
        onKeyDown={() => false}
        focusable={false}
        {...props}
      >
        {staticChildren}
      </ListItem>
    );
  }
}

ListItemHeader.defaultProps = {
  className: '',
  children: null,
  id: '',
  isReadOnly: true,
  type: ''
};

ListItemHeader.propTypes = {
  /** HTML Class for associated input */
  className: PropTypes.string,
  /** ListItemHeader Children */
  children: PropTypes.node,
  /** ListItem header */
  header: PropTypes.string.isRequired,
  /** HTML ID for associated input */
  id: PropTypes.string,
  /** ListItemHeader Bool */
  isReadOnly: PropTypes.bool,
  /** ListItemHeader type variation */
  type: PropTypes.oneOf(['', 'space']),
};

/**
* @name List Item Header
*
* @category containers
* @component list-item
* @section header
*
* @js
*
import { List, ListItemHeader } from '@collab-ui/react';
import { NavLink } from 'react-router-dom';

export default class SpaceListExamples extends React.PureComponent {

  render() {
    const anchorNode = <NavLink to='/containers/list-item'>More</NavLink>;
    return(
      <div className="medium-4 columns">
        <List>
          <ListItemHeader header='Testing' children={anchorNode} />
        </List>
        <List className='cui--dark' style={{backgroundColor: 'rgba(40,40,40,0.72)'}}>
          <ListItemHeader header='Testing' children={anchorNode}/>
        </List>
      </div>
    );
  }
}
**/