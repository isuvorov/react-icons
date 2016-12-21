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

var MdOpenInBrowser = function (_React$Component) {
    _inherits(MdOpenInBrowser, _React$Component);

    function MdOpenInBrowser() {
        _classCallCheck(this, MdOpenInBrowser);

        return _possibleConstructorReturn(this, (MdOpenInBrowser.__proto__ || Object.getPrototypeOf(MdOpenInBrowser)).apply(this, arguments));
    }

    _createClass(MdOpenInBrowser, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 16.6l6.6 6.8h-5v10h-3.2v-10h-5z m11.6-10q1.4 0 2.4 1.1t1 2.3v20q0 1.3-1 2.3t-2.4 1.1h-6.6v-3.4h6.6v-16.6h-23.2v16.6h6.6v3.4h-6.6q-1.4 0-2.4-1.1t-1-2.3v-20q0-1.3 1-2.3t2.4-1.1h23.2z' })
                )
            );
        }
    }]);

    return MdOpenInBrowser;
}(React.Component);

exports.default = MdOpenInBrowser;
module.exports = exports['default'];