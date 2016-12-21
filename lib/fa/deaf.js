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

var FaDeaf = function (_React$Component) {
    _inherits(FaDeaf, _React$Component);

    function FaDeaf() {
        _classCallCheck(this, FaDeaf);

        return _possibleConstructorReturn(this, (FaDeaf.__proto__ || Object.getPrototypeOf(FaDeaf)).apply(this, arguments));
    }

    _createClass(FaDeaf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.6 18.6q0 0.5 0.4 1t1 0.4 1-0.4 0.4-1q0-3.3-2.3-5.6t-5.5-2.3-5.6 2.3-2.3 5.6q0 0.6 0.4 1t1 0.4 1-0.4 0.5-1q0-2.1 1.4-3.6t3.6-1.4 3.5 1.4 1.5 3.6z m-5-12.9q-2.6 0-4.9 1t-4.2 2.8-2.7 4.1-1 5q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1q0 1.2-0.4 2.3t-0.8 1.6-1.3 1.7q-0.8 0.8-1.2 1.4t-1 1.4-0.8 2.1-0.2 2.3q0 2.4-1.7 4.1t-4.1 1.6q-0.5 0-1 0.5t-0.4 1 0.4 1 1 0.4q3.6 0 6.1-2.5t2.5-6.1q0-0.9 0.2-1.6t0.6-1.5 0.7-1.1 1-1.2q0.8-0.9 1.2-1.4t1-1.5 0.8-2.1 0.3-2.4q0-2.6-1-5t-2.8-4.1-4.1-2.8-5-1z m-5.4 16.1l5 5-12.9 12.9q-0.3 0.3-0.6 0.3t-0.7-0.3l-3.7-3.7q-0.3-0.3-0.3-0.7t0.3-0.6z m22.8-21.5l3.7 3.7q0.3 0.3 0.3 0.7t-0.3 0.6l-5.2 5.2-0.5 0.6-1.6 1.6q-1.5-3.4-4.4-5.8l6.7-6.6q0.3-0.3 0.6-0.3t0.7 0.3z' })
                )
            );
        }
    }]);

    return FaDeaf;
}(React.Component);

exports.default = FaDeaf;
module.exports = exports['default'];