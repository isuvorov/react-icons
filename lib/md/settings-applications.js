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

var MdSettingsApplications = function (_React$Component) {
    _inherits(MdSettingsApplications, _React$Component);

    function MdSettingsApplications() {
        _classCallCheck(this, MdSettingsApplications);

        return _possibleConstructorReturn(this, (MdSettingsApplications.__proto__ || Object.getPrototypeOf(MdSettingsApplications)).apply(this, arguments));
    }

    _createClass(MdSettingsApplications, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 20c0-0.4 0-0.8-0.1-1.2l2.5-1.8c0.2-0.2 0.2-0.6 0.1-0.8l-2.4-4.1c-0.1-0.2-0.5-0.3-0.7-0.2l-2.9 1.1c-0.6-0.4-1.2-0.8-1.9-1.1l-0.5-3.1c-0.1-0.2-0.2-0.4-0.6-0.4h-4.6c-0.4 0-0.5 0.1-0.6 0.4l-0.5 3.2c-0.7 0.3-1.3 0.6-1.9 1l-2.9-1.1c-0.2-0.1-0.5 0.1-0.7 0.3l-2.3 4c-0.2 0.2-0.2 0.6 0 0.8l2.5 1.8c0 0.4 0 0.8 0 1.2s0 0.8 0 1.2l-2.5 1.8c-0.2 0.2-0.2 0.6 0 0.8l2.3 4.1c0.2 0.2 0.5 0.3 0.7 0.2l2.9-1.1c0.6 0.4 1.2 0.8 1.9 1.1l0.5 3.1c0.1 0.2 0.2 0.4 0.6 0.4h4.6c0.4 0 0.5-0.1 0.6-0.4l0.5-3.2c0.7-0.3 1.3-0.6 1.9-1l2.9 1.1c0.2 0.1 0.6-0.1 0.7-0.3l2.4-4c0.1-0.2 0.1-0.6-0.1-0.8l-2.5-1.8c0.1-0.4 0.1-0.8 0.1-1.2z m2.8-15c1.9 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.5 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.5-3.4 3.4-3.4h23.2z m-11.6 11.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z' })
                )
            );
        }
    }]);

    return MdSettingsApplications;
}(React.Component);

exports.default = MdSettingsApplications;
module.exports = exports['default'];