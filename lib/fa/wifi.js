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

var FaWifi = function (_React$Component) {
    _inherits(FaWifi, _React$Component);

    function FaWifi() {
        _classCallCheck(this, FaWifi);

        return _possibleConstructorReturn(this, (FaWifi.__proto__ || Object.getPrototypeOf(FaWifi)).apply(this, arguments));
    }

    _createClass(FaWifi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.9 32.2q-0.4 0-1.8-1.5t-1.4-1.8q0-0.6 1.2-1t2-0.4 2 0.4 1.2 1q0 0.4-1.4 1.8t-1.8 1.5z m5.2-5.3q0 0-0.8-0.5t-1.9-0.9-2.5-0.5-2.5 0.5-2 0.9-0.8 0.5q-0.3 0-1.8-1.4t-1.4-1.9q0-0.2 0.1-0.4 1.6-1.5 3.9-2.3t4.5-0.9 4.5 0.9 3.8 2.3q0.2 0.2 0.2 0.4 0 0.4-1.5 1.9t-1.8 1.4z m5.3-5.3q-0.2 0-0.4-0.1-2.7-2.1-4.9-3t-5.2-1q-1.7 0-3.3 0.4t-2.9 1.1-2.2 1.2-1.6 1-0.6 0.4q-0.3 0-1.7-1.4t-1.5-1.8q0-0.3 0.2-0.5 2.6-2.5 6.2-3.9t7.4-1.5 7.4 1.5 6.2 3.9q0.2 0.2 0.2 0.5 0 0.3-1.5 1.8t-1.8 1.4z m5.3-5.2q-0.2 0-0.5-0.2-3.4-3.1-7.2-4.6t-8.1-1.5-8.2 1.5-7.2 4.6q-0.2 0.2-0.4 0.2-0.4 0-1.8-1.5t-1.5-1.8q0-0.2 0.2-0.4 3.6-3.6 8.6-5.6t10.3-2 10.2 2 8.6 5.6q0.2 0.2 0.2 0.4 0 0.4-1.4 1.8t-1.8 1.5z' })
                )
            );
        }
    }]);

    return FaWifi;
}(React.Component);

exports.default = FaWifi;
module.exports = exports['default'];