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

var GoDeviceCameraVideo = function (_React$Component) {
    _inherits(GoDeviceCameraVideo, _React$Component);

    function GoDeviceCameraVideo() {
        _classCallCheck(this, GoDeviceCameraVideo);

        return _possibleConstructorReturn(this, (GoDeviceCameraVideo.__proto__ || Object.getPrototypeOf(GoDeviceCameraVideo)).apply(this, arguments));
    }

    _createClass(GoDeviceCameraVideo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 7.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m12.5 7.5l-5 5v-2.5c0-1.2-0.8-2.2-2-2.4 1.3-1.4 2-3.2 2-5.1 0-4.1-3.4-7.5-7.5-7.5-3.9 0-7.2 3.1-7.5 6.9-1.3-1.2-3.1-1.9-5-1.9-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h-2.5v5h2.5v5c0 1.4 1.1 2.5 2.5 2.5h15c1.4 0 2.5-1.1 2.5-2.5v-2.5l5 5h2.5v-20h-2.5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5v2.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5h-2.5c0-1.4-1.1-2.5-2.5-2.5z m12.5 15h-5v-5h5v5z m5-4.3l-2.9-2.8c-0.2-0.3-0.5-0.4-0.8-0.4h-7.5c-0.7 0-1.3 0.6-1.3 1.3v7.5c0 0.3 0.1 0.6 0.3 0.8 0 0 1.6 1.5 2.9 2.9h-4.4c-0.7 0-1.3-0.6-1.3-1.2v-12.5c0-0.7 0.6-1.3 1.3-1.3h12.5c0.6 0 1.2 0.6 1.2 1.3v4.4z m-5-8.2c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m12.5 12.5l-2.5-2.5 0-5 2.5-2.5v10z' })
                )
            );
        }
    }]);

    return GoDeviceCameraVideo;
}(React.Component);

exports.default = GoDeviceCameraVideo;
module.exports = exports['default'];