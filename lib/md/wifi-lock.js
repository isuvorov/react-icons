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

var MdWifiLock = function (_React$Component) {
    _inherits(MdWifiLock, _React$Component);

    function MdWifiLock() {
        _classCallCheck(this, MdWifiLock);

        return _possibleConstructorReturn(this, (MdWifiLock.__proto__ || Object.getPrototypeOf(MdWifiLock)).apply(this, arguments));
    }

    _createClass(MdWifiLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.6 26.6v-2.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v2.5h5z m1.8 0c0.9 0 1.6 0.8 1.6 1.8v6.6c0 0.9-0.7 1.6-1.6 1.6h-8.4c-0.9 0-1.6-0.7-1.6-1.6v-6.6c0-1 0.7-1.8 1.6-1.8v-2.5c0-2.2 1.9-4.1 4.1-4.1s4.3 1.9 4.3 4.1v2.5z m-4.3-10.7c-4.6 0-8.2 3.6-8.2 8.2v4.8l-5.9 7.7-20-26.6c5.5-4.2 12.5-6.6 20-6.6s14.5 2.4 20 6.6l-4.5 5.9c-0.4 0-0.9 0-1.4 0z' })
                )
            );
        }
    }]);

    return MdWifiLock;
}(React.Component);

exports.default = MdWifiLock;
module.exports = exports['default'];