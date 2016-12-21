'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoArrowShrink = function (_React$Component) {
    _inherits(IoArrowShrink, _React$Component);

    function IoArrowShrink() {
        _classCallCheck(this, IoArrowShrink);

        return _possibleConstructorReturn(this, (IoArrowShrink.__proto__ || Object.getPrototypeOf(IoArrowShrink)).apply(this, arguments));
    }

    _createClass(IoArrowShrink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 7.2l-6.4 6.4 3.9 3.9h-10v-10l3.9 3.9 6.4-6.4z m0 25.6l-2.2 2.2-6.4-6.4-3.9 3.9v-10h10l-3.9 3.9z m-30 0l6.4-6.4-3.9-3.9h10v10l-3.9-3.9-6.4 6.4z m0-25.6l2.2-2.2 6.4 6.4 3.9-3.9v10h-10l3.9-3.9z' })
                )
            );
        }
    }]);

    return IoArrowShrink;
}(React.Component);

exports.default = IoArrowShrink;
module.exports = exports['default'];