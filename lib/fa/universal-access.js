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

var FaUniversalAccess = function (_React$Component) {
    _inherits(FaUniversalAccess, _React$Component);

    function FaUniversalAccess() {
        _classCallCheck(this, FaUniversalAccess);

        return _possibleConstructorReturn(this, (FaUniversalAccess.__proto__ || Object.getPrototypeOf(FaUniversalAccess)).apply(this, arguments));
    }

    _createClass(FaUniversalAccess, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.7 14.7q-0.2-0.6-0.7-0.9t-1-0.2q-5.9 1.4-9 1.4t-8.9-1.4q-0.6-0.1-1.1 0.2t-0.7 0.9 0.2 1 0.9 0.7q4.3 1 6.7 1.3 0 3.5-0.3 6t-0.6 3.5-0.9 2.5l-0.2 0.5q-0.2 0.6 0 1.1t0.8 0.8q0.2 0 0.5 0 1 0 1.4-0.9l0.1-0.4q1.2-3.1 1.6-5.8h1q0.3 2.7 1.6 5.8l0.1 0.4q0.4 0.9 1.4 0.9 0.3 0 0.5 0 0.5-0.3 0.8-0.8t0-1.1l-0.2-0.5q-0.6-1.6-0.9-2.5t-0.6-3.5-0.3-6q2.4-0.3 6.7-1.3 0.6-0.1 0.9-0.7t0.2-1z m-7.8-3.3q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m12.8 8.6q0 3.2-1.2 6.1t-3.4 5-5 3.4-6.1 1.2-6.1-1.2-5-3.4-3.4-5-1.2-6.1 1.2-6.1 3.4-5 5-3.4 6.1-1.2 6.1 1.2 5 3.4 3.4 5 1.2 6.1z m-15.7-17.1q-3.5 0-6.7 1.3t-5.4 3.7-3.7 5.4-1.3 6.7 1.3 6.7 3.7 5.4 5.4 3.7 6.7 1.3 6.7-1.3 5.4-3.7 3.7-5.4 1.3-6.7-1.3-6.7-3.7-5.4-5.4-3.7-6.7-1.3z m20 17.1q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z' })
                )
            );
        }
    }]);

    return FaUniversalAccess;
}(React.Component);

exports.default = FaUniversalAccess;
module.exports = exports['default'];