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

var FaUserSecret = function (_React$Component) {
    _inherits(FaUserSecret, _React$Component);

    function FaUserSecret() {
        _classCallCheck(this, FaUserSecret);

        return _possibleConstructorReturn(this, (FaUserSecret.__proto__ || Object.getPrototypeOf(FaUserSecret)).apply(this, arguments));
    }

    _createClass(FaUserSecret, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.4 34.3l2.1-10-2.1-2.9-2.9-1.4z m5.7 0l2.8-14.3-2.8 1.4-2.2 2.9z m3.5-22.6q0 0 0-0.1-0.3-0.2-2.2-0.2-1.6 0-3.7 0.5-0.2 0-0.5 0t-0.5 0q-2.1-0.5-3.7-0.5-1.9 0-2.1 0.2-0.1 0.1-0.1 0.1 0 0.4 0.1 0.6 0 0.1 0.1 0.2t0.2 0.2q0.1 0.1 0.2 0.5t0.1 0.4 0.2 0.4 0.2 0.4 0.2 0.3 0.3 0.3 0.3 0.2 0.4 0.2 0.4 0.1 0.6 0q0.8 0 1.3-0.2t0.7-0.7 0.3-0.8 0.3-0.6 0.4-0.3h0.3q0.2 0 0.3 0.3t0.3 0.6 0.3 0.8 0.7 0.7 1.4 0.2q0.3 0 0.5 0t0.5-0.1 0.4-0.2 0.3-0.2 0.2-0.3 0.2-0.3 0.2-0.4 0.2-0.4 0.2-0.4 0.1-0.5q0.1-0.1 0.2-0.2t0.2-0.2q0-0.2 0-0.6z m9.3 19.7q0 2.7-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.4 0.1-2.7t0.4-2.8 0.9-2.7 1.4-2.3 2.1-1.7l-2-4.9h4.7q-0.5-1.4-0.5-2.9 0-0.2 0.1-0.7-4.3-0.9-4.3-2.1 0-1.3 4.6-2.2 0.4-1.4 1.2-3t1.6-2.6q0.7-0.8 1.7-0.8 0.6 0 1.8 0.7t1.9 0.7 1.9-0.7 1.9-0.7q0.9 0 1.7 0.8 0.8 1 1.5 2.6t1.2 3q4.7 0.9 4.7 2.2 0 1.2-4.4 2.1 0.2 1.8-0.4 3.6h4.8l-1.9 5q1.5 0.7 2.4 2.2t1.5 3.2 0.7 3.3 0.1 3.4z' })
                )
            );
        }
    }]);

    return FaUserSecret;
}(React.Component);

exports.default = FaUserSecret;
module.exports = exports['default'];