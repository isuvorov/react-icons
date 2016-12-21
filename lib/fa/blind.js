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

var FaBlind = function (_React$Component) {
    _inherits(FaBlind, _React$Component);

    function FaBlind() {
        _classCallCheck(this, FaBlind);

        return _possibleConstructorReturn(this, (FaBlind.__proto__ || Object.getPrototypeOf(FaBlind)).apply(this, arguments));
    }

    _createClass(FaBlind, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.7 6.9q-1.5 0-2.5-1t-1-2.4q0-1.5 1-2.5t2.5-1 2.4 1 1 2.5q0 1.4-1 2.4t-2.4 1z m12.3 14.4q0 1.1-0.7 1.5t-1.4 0.1-1.1-0.7l-8.2-9.8q-0.1-0.3-0.3-0.4t-0.2 0l-0.1 0.1q-0.2 0.2 0.1 0.4l2.7 3.1 0 8-3.6 10.2q-1.5 4.2-2 5.2-0.4 0.6-0.6 0.7-1.2 0.6-2.3 0-0.7-0.3-1-0.9t-0.2-1.3q0.1-0.4 4.4-13.8l0.1-9.3-1.9 3.7 0.8 4.9q0.1 0.6 0 1t-0.3 0.6-0.4 0.3-0.4 0.2l-0.2 0q-0.4 0.1-0.7 0t-0.6-0.4-0.3-0.5-0.2-0.4 0-0.2l-1-6.7 4.7-8.5q0.5-0.8 2.5-0.8 1.7 0 2.4 0.9l9.5 11.7q0.1 0.1 0.3 0.3l0 0.1 0 0q0.2 0.3 0.2 0.7z m-9 3.3q0.9 2.5 1.9 5t1.6 3.8l0.5 1.2q0.8 2.1 1 2.8 0.2 1.6-0.8 2.2-0.8 0.5-1.5 0.3t-1.1-0.5-0.7-0.7h0q-0.1-0.4-0.2-0.6l-2.8-7.8z m18.4 13.2q0.7 1.1 0.7 1.3 0 0.1-0.1 0.2-0.2 0.1-0.3 0t-0.4-0.6-0.3-0.7q-2.6-3.8-9.5-14.8 0.1 0.1 0.2 0t0.1-0.1l0.1 0q0.2-0.2 0.2-0.4z' })
                )
            );
        }
    }]);

    return FaBlind;
}(React.Component);

exports.default = FaBlind;
module.exports = exports['default'];