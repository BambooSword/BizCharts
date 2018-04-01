/**
 * View Component
 */
import BaseComponent from '../Base';
import PropTypes from 'prop-types';

export default class View extends BaseComponent {
  // 原型链继承可以得到Base 中的context，多余
  // static contextTypes = {
  //   addElement: PropTypes.func,
  //   updateElement: PropTypes.func,
  //   deleteElement: PropTypes.func,
  //   createId: PropTypes.func,
  //   getParentInfo: PropTypes.func,
  //   getViewId: PropTypes.func,
  // }

  static childContextTypes = {
    // 下面这些定义重复，由react 组件传递可获得，多余
    // addElement: PropTypes.func,
    // updateElement: PropTypes.func,
    // deleteElement: PropTypes.func,
    // createId: PropTypes.func,
    getParentInfo: PropTypes.func,
    getViewId: PropTypes.func,
  }

  constructor(props) {
    super(props, 'View');
  }

  getChildContext() {
    return {
      // addElement: this.context.addElement,
      // updateElement: this.context.updateElement,
      // deleteElement: this.context.deleteElement,
      // createId: this.context.createId,
      getParentInfo: this.getParentInfo,
      getViewId: this.getViewId,
    };
  }

  getViewId = () => {
    return this.id;
  }
}
