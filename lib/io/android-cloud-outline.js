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

var IoAndroidCloudOutline = function (_React$Component) {
    _inherits(IoAndroidCloudOutline, _React$Component);

    function IoAndroidCloudOutline() {
        _classCallCheck(this, IoAndroidCloudOutline);

        return _possibleConstructorReturn(this, (IoAndroidCloudOutline.__proto__ || Object.getPrototypeOf(IoAndroidCloudOutline)).apply(this, arguments));
    }

    _createClass(IoAndroidCloudOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.2 17c4.1 0.2 7.3 3.5 7.3 7.7 0 4.3-3.5 7.8-7.8 7.8h-20.3c-5.2 0-9.4-4.2-9.4-9.4 0-4.8 3.7-8.8 8.4-9.3 1.9-3.7 5.8-6.3 10.3-6.3 5.8 0 10.4 4.1 11.5 9.5z m-0.5 12.4c2.6 0 4.7-2.1 4.7-4.7s-2.1-4.7-4.7-4.7h-2.4v-0.8c0-4.7-3.8-8.6-8.5-8.6-4 0-7.3 2.7-8.3 6.3h-1.1c-3.5 0-6.3 2.8-6.3 6.2s2.8 6.3 6.3 6.3h20.3z' })
                )
            );
        }
    }]);

    return IoAndroidCloudOutline;
}(React.Component);

exports.default = IoAndroidCloudOutline;
module.exports = exports['default'];