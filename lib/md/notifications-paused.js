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

var MdNotificationsPaused = function (_React$Component) {
    _inherits(MdNotificationsPaused, _React$Component);

    function MdNotificationsPaused() {
        _classCallCheck(this, MdNotificationsPaused);

        return _possibleConstructorReturn(this, (MdNotificationsPaused.__proto__ || Object.getPrototypeOf(MdNotificationsPaused)).apply(this, arguments));
    }

    _createClass(MdNotificationsPaused, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.1 16.3v-2.9h-8.2v2.9h4.6l-4.6 5.7v3h8.2v-3h-4.6z m5.9 10.3l3.4 3.4v1.6h-26.8v-1.6l3.4-3.4v-8.2c0-5.1 2.7-9.4 7.5-10.6v-1.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v1.2c4.8 1.2 7.5 5.5 7.5 10.6v8.2z m-10 10c-1.9 0-3.4-1.4-3.4-3.2h6.8c0 1.8-1.6 3.2-3.4 3.2z' })
                )
            );
        }
    }]);

    return MdNotificationsPaused;
}(React.Component);

exports.default = MdNotificationsPaused;
module.exports = exports['default'];