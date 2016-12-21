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

var FaThumbsDown = function (_React$Component) {
    _inherits(FaThumbsDown, _React$Component);

    function FaThumbsDown() {
        _classCallCheck(this, FaThumbsDown);

        return _possibleConstructorReturn(this, (FaThumbsDown.__proto__ || Object.getPrototypeOf(FaThumbsDown)).apply(this, arguments));
    }

    _createClass(FaThumbsDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.7 12.9q0 0.5-0.4 1t-1 0.4q-0.6 0-1-0.4t-0.4-1q0-0.6 0.4-1.1t1-0.4q0.6 0 1 0.4t0.4 1.1z m3.6 11.4v-14.3q0-0.6-0.4-1t-1-0.4h-6.5q-0.6 0-1 0.4t-0.4 1v14.3q0 0.6 0.4 1t1 0.4h6.5q0.5 0 1-0.4t0.4-1z m25.2-3.3q1.2 1.3 1.2 3.3 0 1.7-1.3 3t-3 1.3h-6.2q0.1 0.3 0.2 0.5t0.3 0.5 0.2 0.4q0.4 0.8 0.6 1.3t0.4 1.3 0.2 1.7q0 0.5 0 0.9t-0.1 1-0.2 1.1-0.6 1-0.9 0.9-1.3 0.6-1.9 0.2q-0.5 0-1-0.4-0.4-0.5-0.7-1.1t-0.5-1.2-0.2-1.4q-0.2-0.9-0.3-1.3t-0.4-1.1-0.7-1.1q-0.8-0.7-2.3-2.6-1.1-1.5-2.2-2.7t-1.7-1.4q-0.6 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.4q0.8-0.1 3.6-1 1.7-0.6 2.7-0.9t2.7-0.6 3.2-0.4h2.9q2.9 0.1 4.4 1.8 1.3 1.5 1.1 4 0.8 0.8 1.2 2.1 0.3 1.4 0 2.6 1 1.4 0.9 3.1 0 0.7-0.3 1.7z' })
                )
            );
        }
    }]);

    return FaThumbsDown;
}(React.Component);

exports.default = FaThumbsDown;
module.exports = exports['default'];