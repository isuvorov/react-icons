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

var FaSignOut = function (_React$Component) {
    _inherits(FaSignOut, _React$Component);

    function FaSignOut() {
        _classCallCheck(this, FaSignOut);

        return _possibleConstructorReturn(this, (FaSignOut.__proto__ || Object.getPrototypeOf(FaSignOut)).apply(this, arguments));
    }

    _createClass(FaSignOut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.8 32.1q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h7.2q0.3 0 0.5 0.2t0.2 0.5q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-1.4 0-2.5 1t-1 2.5v15.8q0 1.4 1 2.5t2.5 1h7l0.2 0.1 0.3 0 0.2 0.1 0.1 0.2 0.1 0.3z m20.7-12.1q0 0.6-0.4 1l-12.2 12.1q-0.4 0.5-1 0.5t-1-0.5-0.4-1v-6.4h-10q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.4-1t1-0.5 1 0.5l12.2 12.1q0.4 0.4 0.4 1z' })
                )
            );
        }
    }]);

    return FaSignOut;
}(React.Component);

exports.default = FaSignOut;
module.exports = exports['default'];