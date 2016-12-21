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

var FaFortAwesome = function (_React$Component) {
    _inherits(FaFortAwesome, _React$Component);

    function FaFortAwesome() {
        _classCallCheck(this, FaFortAwesome);

        return _possibleConstructorReturn(this, (FaFortAwesome.__proto__ || Object.getPrototypeOf(FaFortAwesome)).apply(this, arguments));
    }

    _createClass(FaFortAwesome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.8 22.5v-5q0-0.4-0.4-0.4h-2.1q-0.4 0-0.4 0.4v5q0 0.4 0.4 0.4h2.1q0.4 0 0.4-0.4z m11.4 0v-5q0-0.4-0.3-0.4h-2.2q-0.3 0-0.3 0.4v5q0 0.4 0.3 0.4h2.2q0.3 0 0.3-0.4z m11.4 0.7v16.8h-14.2v-7.1q0-1.8-1.3-3.1t-3-1.2-3.1 1.2-1.2 3.1v7.1h-14.3v-16.8q0-0.3 0.4-0.3h2.1q0.4 0 0.4 0.3v2.5h2.8v-13.9q0-0.4 0.4-0.4h2.1q0.4 0 0.4 0.4v2.5h2.8v-2.5q0-0.4 0.4-0.4h2.1q0.4 0 0.4 0.4v2.5h2.8v-2.5q0-0.4 0.4-0.4h0.4v-8.7q-0.8-0.5-0.8-1.3 0-0.6 0.5-1t1-0.4 1 0.4 0.4 1q0 0.8-0.7 1.3v0.2h6.1q0.3 0 0.3 0.3v5q0 0.4-0.3 0.4h-6.1v2.8h0.3q0.4 0 0.4 0.4v2.5h2.9v-2.5q0-0.4 0.3-0.4h2.2q0.3 0 0.3 0.4v2.5h2.9v-2.5q0-0.4 0.3-0.4h2.2q0.3 0 0.3 0.4v13.9h2.9v-2.5q0-0.3 0.3-0.3h2.2q0.3 0 0.3 0.3z' })
                )
            );
        }
    }]);

    return FaFortAwesome;
}(React.Component);

exports.default = FaFortAwesome;
module.exports = exports['default'];