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

var MdDeviceHub = function (_React$Component) {
    _inherits(MdDeviceHub, _React$Component);

    function MdDeviceHub() {
        _classCallCheck(this, MdDeviceHub);

        return _possibleConstructorReturn(this, (MdDeviceHub.__proto__ || Object.getPrototypeOf(MdDeviceHub)).apply(this, arguments));
    }

    _createClass(MdDeviceHub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 26.6h6.6v8.4h-8.4v-5.1l-6.6-7-6.6 7v5.1h-8.4v-8.4h6.6l6.8-6.6v-5.3c-2-0.7-3.4-2.5-3.4-4.7 0-2.7 2.3-5 5-5s5 2.3 5 5c0 2.2-1.4 4-3.4 4.7v5.3z' })
                )
            );
        }
    }]);

    return MdDeviceHub;
}(React.Component);

exports.default = MdDeviceHub;
module.exports = exports['default'];