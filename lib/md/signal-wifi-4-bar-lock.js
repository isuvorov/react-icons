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

var MdSignalWifi4BarLock = function (_React$Component) {
    _inherits(MdSignalWifi4BarLock, _React$Component);

    function MdSignalWifi4BarLock() {
        _classCallCheck(this, MdSignalWifi4BarLock);

        return _possibleConstructorReturn(this, (MdSignalWifi4BarLock.__proto__ || Object.getPrototypeOf(MdSignalWifi4BarLock)).apply(this, arguments));
    }

    _createClass(MdSignalWifi4BarLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 24.1v4.4l-5.9 7.4-19.3-24.3 0.5-0.3q0.4-0.4 0.9-0.7t1.4-0.9 1.8-1 2.3-1.1 2.6-1 3-0.8 3.2-0.6 3.6-0.2 3.6 0.2 3.2 0.6 3 0.8 2.6 1 2.3 1.1 1.8 1 1.4 0.9 0.9 0.7l0.5 0.3-3.4 4.4q-0.5-0.1-1.8-0.1-3.5 0-5.9 2.3t-2.3 5.9z m10.7 2.5v-2.5q0-1-0.7-1.7t-1.8-0.8-1.7 0.8-0.8 1.7v2.5h5z m1.8 0q0.6 0 1.1 0.6t0.5 1.2v6.6q0 0.6-0.5 1.1t-1.1 0.5h-8.4q-0.6 0-1.1-0.5t-0.5-1.1v-6.6q0-0.7 0.5-1.2t1.1-0.6v-2.5q0-1.8 1.2-2.9t2.9-1.2 3 1.2 1.3 2.9v2.5z' })
                )
            );
        }
    }]);

    return MdSignalWifi4BarLock;
}(React.Component);

exports.default = MdSignalWifi4BarLock;
module.exports = exports['default'];