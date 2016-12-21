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

var FaCcDiscover = function (_React$Component) {
    _inherits(FaCcDiscover, _React$Component);

    function FaCcDiscover() {
        _classCallCheck(this, FaCcDiscover);

        return _possibleConstructorReturn(this, (FaCcDiscover.__proto__ || Object.getPrototypeOf(FaCcDiscover)).apply(this, arguments));
    }

    _createClass(FaCcDiscover, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.5 17.9q0 0.9-0.7 1.5-0.5 0.4-1.5 0.4h-0.3v-3.8h0.3q1.1 0 1.5 0.5 0.7 0.5 0.7 1.4z m31.1-1.1q0 0.9-1.1 0.9h-0.4v-1.8h0.4q1.1 0 1.1 0.9z m-29.9 1.1q0-1.3-0.9-2.1t-2.3-0.8h-1.6v5.8h1.6q1.3 0 2.1-0.6 1.1-0.9 1.1-2.3z m0.5 2.9h1.1v-5.8h-1.1v5.8z m5.6-1.7q0-0.7-0.4-1.1t-1.3-0.8q-0.5-0.1-0.7-0.3t-0.2-0.4q0-0.3 0.3-0.5t0.6-0.2q0.5 0 0.9 0.5l0.6-0.7q-0.7-0.7-1.7-0.7-0.8 0-1.3 0.5t-0.6 1.2q0 0.6 0.4 0.9t1.1 0.7q0.6 0.2 0.8 0.3 0.3 0.2 0.3 0.6 0 0.4-0.2 0.6t-0.7 0.2q-0.8 0-1.2-0.7l-0.7 0.7q0.7 1.1 2 1.1 0.9 0 1.4-0.6t0.6-1.3z m4.8 1.5v-1.3q-0.6 0.6-1.3 0.6-0.9 0-1.4-0.5t-0.6-1.5q0-0.8 0.6-1.4t1.3-0.6q0.8 0 1.4 0.7v-1.4q-0.7-0.3-1.4-0.3-1.3 0-2.2 0.9t-0.9 2.1 0.9 2.2 2.2 0.9q0.8 0 1.4-0.4z m21.6 10.6v-9.2q-1.1 0.7-2.5 1.5t-4.2 2-5.7 2.4-7.3 2.4-8.9 2h27.5q0.4 0 0.8-0.3t0.3-0.8z m-14.9-13.2q0-1.4-0.9-2.3t-2.3-0.9-2.2 0.9-0.9 2.3 0.9 2.2 2.2 0.9 2.3-0.9 0.9-2.2z m2.7 3l2.5-6h-1.2l-1.6 3.9-1.6-3.9h-1.2l2.5 6h0.6z m3-0.2h3.2v-1h-2.1v-1.5h2.1v-1h-2.1v-1.3h2.1v-1h-3.2v5.8z m6.9 0h1.4l-1.9-2.4q1.3-0.3 1.3-1.7 0-0.8-0.5-1.3t-1.5-0.4h-1.7v5.8h1.1v-2.3h0.2z m3.4-11.9v22.2q0 1-0.6 1.7t-1.7 0.6h-35.7q-1 0-1.6-0.6t-0.7-1.7v-22.2q0-1 0.7-1.7t1.6-0.6h35.7q1 0 1.7 0.6t0.6 1.7z' })
                )
            );
        }
    }]);

    return FaCcDiscover;
}(React.Component);

exports.default = FaCcDiscover;
module.exports = exports['default'];