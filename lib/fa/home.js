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

var FaHome = function (_React$Component) {
    _inherits(FaHome, _React$Component);

    function FaHome() {
        _classCallCheck(this, FaHome);

        return _possibleConstructorReturn(this, (FaHome.__proto__ || Object.getPrototypeOf(FaHome)).apply(this, arguments));
    }

    _createClass(FaHome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.9 22.1v10.8q0 0.5-0.4 1t-1 0.4h-8.6v-8.6h-5.7v8.6h-8.6q-0.5 0-1-0.4t-0.4-1v-10.8q0 0 0 0t0-0.1l12.9-10.6 12.8 10.6q0 0.1 0 0.1z m5-1.5l-1.4 1.7q-0.2 0.2-0.4 0.2h-0.1q-0.3 0-0.5-0.2l-15.4-12.8-15.5 12.8q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-1.4-1.7q-0.1-0.2-0.1-0.5t0.2-0.5l16.1-13.4q0.7-0.6 1.7-0.6t1.7 0.6l5.4 4.6v-4.4q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v9.1l4.9 4.1q0.2 0.2 0.3 0.5t-0.2 0.5z' })
                )
            );
        }
    }]);

    return FaHome;
}(React.Component);

exports.default = FaHome;
module.exports = exports['default'];