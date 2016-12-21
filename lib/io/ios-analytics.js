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

var IoIosAnalytics = function (_React$Component) {
    _inherits(IoIosAnalytics, _React$Component);

    function IoIosAnalytics() {
        _classCallCheck(this, IoIosAnalytics);

        return _possibleConstructorReturn(this, (IoIosAnalytics.__proto__ || Object.getPrototypeOf(IoIosAnalytics)).apply(this, arguments));
    }

    _createClass(IoIosAnalytics, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5 0 1-0.1 2-0.2 2.9-0.1 0.5-0.2 0.9-0.3 1.3-1.8 7.7-8.8 13.3-17 13.3-9.5 0-17.3-7.7-17.5-17.1v-0.4c0-0.7 0.1-1.3 0.2-2 1-8.7 8.3-15.5 17.3-15.5z m16.2 19.4c0.1-0.6 0.1-1.3 0.1-1.9 0-2.2-0.4-4.3-1.3-6.3-0.8-2-2-3.7-3.5-5.2s-3.2-2.7-5.2-3.5c-2-0.9-4.1-1.2-6.3-1.2s-4.3 0.3-6.3 1.2c-2 0.8-3.7 2-5.2 3.5s-2.7 3.2-3.5 5.2c-0.9 2-1.2 4.1-1.2 6.3 1 1.6 2.2 2.7 2.2 2.7h0.1v0c0.1 0.1 1.2 1.3 2.8 1.1 0.9-0.2 2.1-2.1 3-3.3 0.3-0.5 0.7-1 0.9-1.3 1.3-1.6 2.7-1.8 3.5-1.6 1.9 0.2 3.5 2.1 4.3 3.9 0.5 1.4 1.4 2.2 2.5 2.3 1.1 0 2.4-0.8 3.3-2.3 0.1-0.2 0.2-0.3 0.3-0.6 0.7-1.3 1.9-3.4 4.1-3.4 2.4 0 4 2.7 4.1 2.8 0.3 0.3 0.7 0.9 1.3 1.6z' })
                )
            );
        }
    }]);

    return IoIosAnalytics;
}(React.Component);

exports.default = IoIosAnalytics;
module.exports = exports['default'];