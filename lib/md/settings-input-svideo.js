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

var MdSettingsInputSvideo = function (_React$Component) {
    _inherits(MdSettingsInputSvideo, _React$Component);

    function MdSettingsInputSvideo() {
        _classCallCheck(this, MdSettingsInputSvideo);

        return _possibleConstructorReturn(this, (MdSettingsInputSvideo.__proto__ || Object.getPrototypeOf(MdSettingsInputSvideo)).apply(this, arguments));
    }

    _createClass(MdSettingsInputSvideo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 25q1 0 1.7 0.7t0.8 1.8-0.8 1.8-1.7 0.7-1.8-0.7-0.7-1.8 0.7-1.8 1.8-0.7z m3.2-8.4q1.1 0 1.8 0.8t0.7 1.7-0.7 1.8-1.8 0.7-1.7-0.7-0.8-1.8 0.8-1.7 1.7-0.8z m-9.1 18.4q6.3 0 10.6-4.4t4.4-10.6-4.4-10.6-10.6-4.4-10.6 4.4-4.4 10.6 4.4 10.6 10.6 4.4z m0-33.4q7.6 0 13 5.4t5.4 13-5.4 13-13 5.4-13-5.4-5.4-13 5.4-13 13-5.4z m-5.9 23.4q1.1 0 1.8 0.7t0.7 1.8-0.7 1.8-1.8 0.7-1.7-0.7-0.8-1.8 0.8-1.8 1.7-0.7z m10.9-14.1q0 1-0.7 1.7t-1.8 0.8h-5q-1.1 0-1.8-0.8t-0.7-1.7 0.7-1.8 1.8-0.7h5q1.1 0 1.8 0.7t0.7 1.8z m-11.6 8.2q0 1.1-0.8 1.8t-1.7 0.7-1.8-0.7-0.7-1.8 0.7-1.7 1.8-0.8 1.7 0.8 0.8 1.7z' })
                )
            );
        }
    }]);

    return MdSettingsInputSvideo;
}(React.Component);

exports.default = MdSettingsInputSvideo;
module.exports = exports['default'];