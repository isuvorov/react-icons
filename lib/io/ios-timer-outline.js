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

var IoIosTimerOutline = function (_React$Component) {
    _inherits(IoIosTimerOutline, _React$Component);

    function IoIosTimerOutline() {
        _classCallCheck(this, IoIosTimerOutline);

        return _possibleConstructorReturn(this, (IoIosTimerOutline.__proto__ || Object.getPrototypeOf(IoIosTimerOutline)).apply(this, arguments));
    }

    _createClass(IoIosTimerOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.3 21.3l-0.1-0.2s-7-9.2-6.7-9.4 9.4 6.7 9.4 6.7c0.1 0 0.1 0.1 0.2 0.2 0.4 0.4 0.6 0.9 0.6 1.4 0 1.1-0.9 2-1.9 2-0.7 0-1.1-0.3-1.5-0.8z m1.5-17.5c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3c0-4.5 1.8-8.5 4.8-11.5l0.9 1c-2.7 2.7-4.4 6.4-4.4 10.5 0 8.3 6.7 14.9 15 14.9s14.9-6.6 14.9-14.9c0-7.8-6-14.3-13.7-14.9v7.4h-1.2v-8.7z' })
                )
            );
        }
    }]);

    return IoIosTimerOutline;
}(React.Component);

exports.default = IoIosTimerOutline;
module.exports = exports['default'];