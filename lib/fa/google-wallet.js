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

var FaGoogleWallet = function (_React$Component) {
    _inherits(FaGoogleWallet, _React$Component);

    function FaGoogleWallet() {
        _classCallCheck(this, FaGoogleWallet);

        return _possibleConstructorReturn(this, (FaGoogleWallet.__proto__ || Object.getPrototypeOf(FaGoogleWallet)).apply(this, arguments));
    }

    _createClass(FaGoogleWallet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.6 15.1q0.7 0 1.1 0.6 5.8 7.9 7.9 16.8h-9.7q-2.8-9.6-8-16.3-0.2-0.3-0.1-0.7t0.7-0.4h8.1z m12.2 7.8q-1.1 4.3-2.7 8.6-1.8-6.8-5.6-13 0.9-4.8 0.9-9.8 4.6 7.4 7.4 14.2z m2.1-15.4q5.2 7 8.4 15.2t4 16.8h-9.8q-0.9-14.5-12-32h9.4z m15.1 12.5q0 9.2-2.2 17.7-1.4-12.2-7.8-23.6-0.5-6.6-2.3-12.7-0.1-0.4 0.1-0.6t0.6-0.3h7.8q0.5 0 0.8 0.3t0.5 0.7q2.5 8.9 2.5 18.5z' })
                )
            );
        }
    }]);

    return FaGoogleWallet;
}(React.Component);

exports.default = FaGoogleWallet;
module.exports = exports['default'];