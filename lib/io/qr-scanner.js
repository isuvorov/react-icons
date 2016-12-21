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

var IoQrScanner = function (_React$Component) {
    _inherits(IoQrScanner, _React$Component);

    function IoQrScanner() {
        _classCallCheck(this, IoQrScanner);

        return _possibleConstructorReturn(this, (IoQrScanner.__proto__ || Object.getPrototypeOf(IoQrScanner)).apply(this, arguments));
    }

    _createClass(IoQrScanner, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.3 9.7v5.3h-3.8v-5.3c0-2.6 2.2-4.7 4.8-4.7h5.2v3.8h-5.3c-0.6 0-1 0.3-1 0.9z m24-4.7c2.6 0 4.7 2.1 4.7 4.7v5.3h-3.7v-5.3c0-0.6-0.5-0.9-1.1-0.9h-5.2v-3.8h5.3z m1 25.2v-5.2h3.7v5.2c0 2.6-2.1 4.8-4.7 4.8h-5.3v-3.8h5.3c0.6 0 1-0.4 1-1z m-24.1 1h5.3v3.8h-5.2c-2.6 0-4.8-2.2-4.8-4.8v-5.2h3.8v5.2c0 0.6 0.3 1 0.9 1z' })
                )
            );
        }
    }]);

    return IoQrScanner;
}(React.Component);

exports.default = IoQrScanner;
module.exports = exports['default'];