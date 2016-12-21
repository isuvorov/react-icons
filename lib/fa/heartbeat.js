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

var FaHeartbeat = function (_React$Component) {
    _inherits(FaHeartbeat, _React$Component);

    function FaHeartbeat() {
        _classCallCheck(this, FaHeartbeat);

        return _possibleConstructorReturn(this, (FaHeartbeat.__proto__ || Object.getPrototypeOf(FaHeartbeat)).apply(this, arguments));
    }

    _createClass(FaHeartbeat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.6 22.9h6.8q-0.1 0.1-0.2 0.2t-0.2 0.2l-0.1 0-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.1 0-0.5-0.4h8.3q0.4 0 0.8-0.3t0.5-0.8l1.6-6.3 4.2 14.9q0.2 0.4 0.6 0.7t0.8 0.3q0.5 0 0.9-0.3t0.5-0.7l3.2-10.8 1.3 2.5q0.4 0.8 1.3 0.8z m11.4-9.6q0 3.2-2.3 6.7h-8.2l-2.5-4.9q-0.2-0.4-0.6-0.6t-0.8-0.2q-1 0.1-1.2 1l-2.9 9.6-4.4-15.3q-0.1-0.4-0.5-0.7t-0.9-0.3-0.9 0.3-0.5 0.7l-2.6 10.4h-9.4q-2.3-3.5-2.3-6.7 0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z' })
                )
            );
        }
    }]);

    return FaHeartbeat;
}(React.Component);

exports.default = FaHeartbeat;
module.exports = exports['default'];