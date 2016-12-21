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

var TiDeviceTablet = function (_React$Component) {
    _inherits(TiDeviceTablet, _React$Component);

    function TiDeviceTablet() {
        _classCallCheck(this, TiDeviceTablet);

        return _possibleConstructorReturn(this, (TiDeviceTablet.__proto__ || Object.getPrototypeOf(TiDeviceTablet)).apply(this, arguments));
    }

    _createClass(TiDeviceTablet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 6.7h-15c-0.9 0-1.6 0.7-1.6 1.6v20c0 1 0.7 1.7 1.6 1.7h5.9c0 0.9 0.7 1.7 1.6 1.7s1.7-0.8 1.7-1.7h5.8c1 0 1.7-0.7 1.7-1.7v-20c0-0.9-0.7-1.6-1.7-1.6z m0 21.6h-15v-20h15v20z m1.7-26.6h-18.3c-2.8 0-5 2.2-5 5v25c0 2.7 2.2 5 5 5h18.3c2.8 0 5-2.3 5-5v-25c0-2.8-2.2-5-5-5z m1.7 30c0 0.9-0.8 1.6-1.7 1.6h-18.3c-1 0-1.7-0.7-1.7-1.6v-25c0-0.9 0.7-1.7 1.7-1.7h18.3c0.9 0 1.7 0.7 1.7 1.7v25z' })
                )
            );
        }
    }]);

    return TiDeviceTablet;
}(React.Component);

exports.default = TiDeviceTablet;
module.exports = exports['default'];