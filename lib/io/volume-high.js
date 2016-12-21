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

var IoVolumeHigh = function (_React$Component) {
    _inherits(IoVolumeHigh, _React$Component);

    function IoVolumeHigh() {
        _classCallCheck(this, IoVolumeHigh);

        return _possibleConstructorReturn(this, (IoVolumeHigh.__proto__ || Object.getPrototypeOf(IoVolumeHigh)).apply(this, arguments));
    }

    _createClass(IoVolumeHigh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.5 31.9l-7.4-6.9h-8.1v-10h8.1l7.4-6.9v23.8z m4.4-4.1l-1.5-1.2c1.3-1.9 2.1-4.1 2.1-6.6s-0.8-4.7-2.1-6.6l1.5-1.2c1.6 2.2 2.6 4.9 2.6 7.8s-1 5.6-2.6 7.8z m5.3 3.6l-1.7-1.2c2.1-2.9 3.4-6.4 3.4-10.2s-1.3-7.3-3.4-10.2l1.7-1.2c2.3 3.2 3.7 7.1 3.7 11.4s-1.4 8.2-3.7 11.4z m3.3-25.2l1.6-1.2c3 4.2 4.9 9.4 4.9 15s-1.9 10.8-4.9 15l-1.6-1.2c2.8-3.8 4.5-8.6 4.5-13.8s-1.7-10-4.5-13.8z' })
                )
            );
        }
    }]);

    return IoVolumeHigh;
}(React.Component);

exports.default = IoVolumeHigh;
module.exports = exports['default'];