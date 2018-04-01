/**
 * Label Component
 */
import invariant from 'invariant';
import BaseComponent from '../Base';
import PropTypes from 'prop-types';

export default class Label extends BaseComponent {
  // 原型链继承
  // static contextTypes = {
  //   addElement: PropTypes.func,
  //   updateElement: PropTypes.func,
  //   deleteElement: PropTypes.func,
  //   createId: PropTypes.func,
  //   getParentInfo: PropTypes.func,
  //   getViewId: PropTypes.func,
  // }

  // 无子代Class，多余
  // static childContextTypes = {
  //   addElement: PropTypes.func,
  //   updateElement: PropTypes.func,
  //   deleteElement: PropTypes.func,
  //   createId: PropTypes.func,
  //   getParentInfo: PropTypes.func,
  //   getViewId: PropTypes.func,
  // }

  constructor(props) {
    super(props, 'Label');
  }

  componentWillMount() {
    const parentInfo = this.context.getParentInfo();
    invariant(parentInfo.name === 'Geom', '`<Label />` must be wrapped in `<Geom />`');

    this.id = this.context.createId();

    this.context.addElement(
      this.name, this.id, this.props,
      parentInfo,
      this.context.getViewId()
    );
  }
}
