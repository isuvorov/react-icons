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

var IoIosAnalyticsOutline = function (_React$Component) {
    _inherits(IoIosAnalyticsOutline, _React$Component);

    function IoIosAnalyticsOutline() {
        _classCallCheck(this, IoIosAnalyticsOutline);

        return _possibleConstructorReturn(this, (IoIosAnalyticsOutline.__proto__ || Object.getPrototypeOf(IoIosAnalyticsOutline)).apply(this, arguments));
    }

    _createClass(IoIosAnalyticsOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 3.8c-2.2 0-4.3 0.3-6.3 1.2-2 0.8-3.7 2-5.2 3.5s-2.7 3.2-3.5 5.2c-0.9 2-1.2 4.1-1.2 6.3s0.3 4.3 1.2 6.3c0.8 2 2 3.7 3.5 5.2s3.2 2.7 5.2 3.5c2 0.9 4.1 1.3 6.3 1.3s4.3-0.4 6.3-1.3c2-0.8 3.7-2 5.2-3.5s2.7-3.2 3.5-5.2c0.9-2 1.3-4.1 1.3-6.3s-0.4-4.3-1.3-6.3c-0.8-2-2-3.7-3.5-5.2s-3.2-2.7-5.2-3.5c-2-0.9-4.1-1.2-6.3-1.2z m0-1.3c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m-11.6 22.5c-1.9 0-3.2-1.4-3.2-1.5-0.3-0.2-0.2-0.7 0-0.9s0.7-0.2 0.9 0.1c0.1 0 1.2 1.3 2.8 1.1 0.9-0.2 2.1-2.1 3-3.3 0.3-0.5 0.7-1 0.9-1.3 1.3-1.6 2.7-1.8 3.5-1.6 1.9 0.2 3.5 2.2 4.3 3.9 0.5 1.4 1.4 2.2 2.5 2.3 1.1 0 2.4-0.9 3.3-2.4 0.1-0.1 0.2-0.3 0.3-0.5 0.7-1.4 1.9-3.4 4.1-3.4 2.4 0 4 2.7 4.1 2.8 0.2 0.3 0.1 0.7-0.2 0.9s-0.7 0-0.9-0.3c0 0-0.4-0.6-0.9-1.1-0.5-0.5-1.3-1.1-2.1-1.1-1.4 0-2.3 1.5-3 2.8-0.1 0.2-0.2 0.4-0.3 0.5-1.2 2-2.8 3.2-4.5 3-1.6-0.1-2.8-1.2-3.6-3s-2.2-3.1-3.2-3.3c-0.9 0-1.7 0.4-2.4 1.3-0.3 0.3-0.5 0.7-0.8 1.2-1.1 1.5-2.4 3.5-3.9 3.7-0.3 0-0.4 0.1-0.7 0.1z' })
                )
            );
        }
    }]);

    return IoIosAnalyticsOutline;
}(React.Component);

exports.default = IoIosAnalyticsOutline;
module.exports = exports['default'];