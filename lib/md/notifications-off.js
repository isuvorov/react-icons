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

var MdNotificationsOff = function (_React$Component) {
    _inherits(MdNotificationsOff, _React$Component);

    function MdNotificationsOff() {
        _classCallCheck(this, MdNotificationsOff);

        return _possibleConstructorReturn(this, (MdNotificationsOff.__proto__ || Object.getPrototypeOf(MdNotificationsOff)).apply(this, arguments));
    }

    _createClass(MdNotificationsOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 24.5l-14.9-15.7c0.4-0.2 0.8-0.4 1.2-0.6h0l0.5-0.2c0.2-0.1 0.5-0.1 0.7-0.2v-1.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v1.2c4.8 1.2 7.5 5.4 7.5 10.6v6.1z m-10 12.1c-1.9 0-3.4-1.4-3.4-3.2h6.8c0 1.8-1.5 3.2-3.4 3.2z m-7-26.4c7.4 7.6 14.7 15.1 22 22.7l-2.1 2.1-3.4-3.4h-22.9v-1.6l3.4-3.4v-8.3c0-2.1 0.5-4.1 1.3-5.7l-4.7-4.6 2.2-2.2z' })
                )
            );
        }
    }]);

    return MdNotificationsOff;
}(React.Component);

exports.default = MdNotificationsOff;
module.exports = exports['default'];