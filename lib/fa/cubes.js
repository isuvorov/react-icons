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

var FaCubes = function (_React$Component) {
    _inherits(FaCubes, _React$Component);

    function FaCubes() {
        _classCallCheck(this, FaCubes);

        return _possibleConstructorReturn(this, (FaCubes.__proto__ || Object.getPrototypeOf(FaCubes)).apply(this, arguments));
    }

    _createClass(FaCubes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.7 33.4l7-3.5v-5.7l-7 3v6.2z m-1.2-8.3l7.4-3.1-7.4-3.2-7.4 3.2z m19.8 8.3l7-3.5v-5.7l-7 3v6.2z m-1.1-8.3l7.3-3.1-7.3-3.2-7.4 3.2z m-8.2-5.3l7-3v-4.9l-7 3v4.9z m-1.2-6.9l8.1-3.5-8.1-3.4-8 3.5z m19.8 9.4v7.6q0 0.7-0.3 1.2t-0.9 0.9l-8.2 4.1q-0.5 0.2-1 0.2t-1.1-0.2l-8.1-4.1q-0.1 0-0.2-0.1 0 0.1-0.1 0.1l-8.2 4.1q-0.4 0.2-1 0.2t-1-0.2l-8.2-4.1q-0.6-0.3-1-0.9t-0.3-1.2v-7.6q0-0.7 0.4-1.2t1-0.9l7.9-3.4v-7.3q0-0.7 0.4-1.3t1.1-0.8l8.1-3.5q0.4-0.2 0.9-0.2t0.9 0.2l8.2 3.5q0.6 0.2 1 0.8t0.4 1.3v7.3l7.9 3.4q0.7 0.3 1.1 0.9t0.4 1.2z' })
                )
            );
        }
    }]);

    return FaCubes;
}(React.Component);

exports.default = FaCubes;
module.exports = exports['default'];