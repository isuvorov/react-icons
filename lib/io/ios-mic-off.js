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

var IoIosMicOff = function (_React$Component) {
    _inherits(IoIosMicOff, _React$Component);

    function IoIosMicOff() {
        _classCallCheck(this, IoIosMicOff);

        return _possibleConstructorReturn(this, (IoIosMicOff.__proto__ || Object.getPrototypeOf(IoIosMicOff)).apply(this, arguments));
    }

    _createClass(IoIosMicOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.8 37.5l-20.2-34.4 1.1-0.6 20.2 34.4z m-10.8-9.9c-3.4 0-6.2-2.9-6.2-6.5v-9.2l8.9 15.1c-0.8 0.3-1.8 0.6-2.7 0.6z m6.2-6.5c0 0.8-0.2 1.5-0.4 2.2l-10.6-18.3c1.1-1.6 2.8-2.5 4.8-2.5 3.4 0 6.2 3 6.2 6.6v12z m3.8 0.2c0 2.1-0.7 4.2-1.9 5.8l-0.8-1.3c0.9-1.3 1.4-2.8 1.4-4.5v-6.3h1.3v6.3z m-9.1 9.9v4.9h5.4v1.4h-12.6v-1.4h5.7v-4.9c-5.3-0.4-9.4-4.7-9.4-9.9v-6.3h1.5v6.3c0 4.6 3.9 8.5 8.6 8.5 1.3 0 2.6-0.3 3.7-0.9l0.7 1.3c-1.1 0.5-2.3 0.9-3.6 1z' })
                )
            );
        }
    }]);

    return IoIosMicOff;
}(React.Component);

exports.default = IoIosMicOff;
module.exports = exports['default'];