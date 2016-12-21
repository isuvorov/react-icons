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

var FaSunO = function (_React$Component) {
    _inherits(FaSunO, _React$Component);

    function FaSunO() {
        _classCallCheck(this, FaSunO);

        return _possibleConstructorReturn(this, (FaSunO.__proto__ || Object.getPrototypeOf(FaSunO)).apply(this, arguments));
    }

    _createClass(FaSunO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.9 20q0-2.6-1.1-5t-2.7-4.1-4.1-2.7-5-1.1-5 1.1-4.1 2.7-2.7 4.1-1.1 5 1.1 5 2.7 4.1 4.1 2.7 5 1.1 5-1.1 4.1-2.7 2.7-4.1 1.1-5z m6.1 6.2q-0.1 0.3-0.4 0.4l-6.5 2.2v6.8q0 0.4-0.3 0.6-0.4 0.2-0.7 0.1l-6.5-2.1-4 5.5q-0.2 0.3-0.6 0.3t-0.6-0.3l-4-5.5-6.5 2.1q-0.3 0.1-0.7-0.1-0.3-0.2-0.3-0.6v-6.8l-6.5-2.2q-0.3-0.1-0.4-0.4-0.1-0.4 0.1-0.7l4-5.5-4-5.5q-0.2-0.3-0.1-0.7 0.1-0.3 0.4-0.4l6.5-2.2v-6.8q0-0.4 0.3-0.6 0.4-0.2 0.7-0.1l6.5 2.1 4-5.5q0.2-0.3 0.6-0.3t0.6 0.3l4 5.5 6.5-2.1q0.3-0.1 0.7 0.1 0.3 0.2 0.3 0.6v6.8l6.5 2.2q0.3 0.1 0.4 0.4 0.1 0.4-0.1 0.7l-4 5.5 4 5.5q0.2 0.3 0.1 0.7z' })
                )
            );
        }
    }]);

    return FaSunO;
}(React.Component);

exports.default = FaSunO;
module.exports = exports['default'];