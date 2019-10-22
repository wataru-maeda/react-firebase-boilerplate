import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Popper as ReactPopper } from 'react-popper';
import { getTarget, targetPropType, mapToCssModules, DOMElement, tagPropType } from './utils';
import Fade from './Fade';

function noop() {}

var propTypes = {
  children: PropTypes.node.isRequired,
  popperClassName: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: tagPropType,
  isOpen: PropTypes.bool.isRequired,
  cssModule: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.object,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  transition: PropTypes.shape(Fade.propTypes)
};
var defaultProps = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
  onClosed: noop,
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps)
};

var PopperContent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handlePlacementChange = _this.handlePlacementChange.bind(_assertThisInitialized(_this));
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = node;
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.handlePlacementChange = function handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({
        placement: data.placement
      });
    }

    return data;
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        target = _this$props.target,
        offset = _this$props.offset,
        fallbackPlacement = _this$props.fallbackPlacement,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        boundariesElement = _this$props.boundariesElement,
        onClosed = _this$props.onClosed,
        fade = _this$props.fade,
        transition = _this$props.transition,
        attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition"]);

    var arrowClassName = mapToCssModules(classNames('arrow', _arrowClassName), cssModule);
    var placement = this.state.placement || attrs.placement;
    var placementFirstPart = placement.split('-')[0];
    var popperClassName = mapToCssModules(classNames(_popperClassName, placementPrefix ? placementPrefix + "-" + placementFirstPart : placementFirstPart), this.props.cssModule);

    var extendedModifiers = _objectSpread({
      offset: {
        offset: offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement: boundariesElement
      },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange
      }
    }, modifiers);

    var popperTransition = _objectSpread({}, Fade.defaultProps, transition, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return React.createElement(Fade, _extends({}, popperTransition, attrs, {
      in: isOpen,
      onExited: this.onClosed,
      tag: tag
    }), React.createElement(ReactPopper, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          placement = _ref.placement,
          arrowProps = _ref.arrowProps;
      return React.createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "x-placement": placement
      }, children, !hideArrow && React.createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(getTarget(this.props.target));

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal(React.createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React.Component);

PopperContent.propTypes = propTypes;
PopperContent.defaultProps = defaultProps;
export default PopperContent;