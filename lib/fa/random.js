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

var FaRandom = function (_React$Component) {
    _inherits(FaRandom, _React$Component);

    function FaRandom() {
        _classCallCheck(this, FaRandom);

        return _possibleConstructorReturn(this, (FaRandom.__proto__ || Object.getPrototypeOf(FaRandom)).apply(this, arguments));
    }

    _createClass(FaRandom, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.9 10.7q-1.4 2.1-3.1 6.1-0.5-1-0.8-1.6t-0.9-1.4-1.2-1.3-1.4-0.7-1.8-0.4h-5q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h5q5.6 0 9.2 5z m25.1 17.9q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3q-0.7 0-1.9 0t-1.8 0.1-1.6-0.1-1.6-0.1-1.4-0.2-1.4-0.4-1.3-0.7-1.3-0.8-1.3-1.2-1.2-1.6q1.3-2.1 3-6.1 0.5 1 0.8 1.6t1 1.4 1.1 1.3 1.4 0.8 1.8 0.3h5.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.2l7.1 7.2q0.2 0.2 0.2 0.5z m0-20q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3h-5.7q-1.1 0-1.9 0.4t-1.6 1-1.1 1.3-1 1.8q-0.7 1.4-1.7 3.8-0.7 1.5-1.2 2.5t-1.2 2.3-1.4 2.2-1.6 1.9-2.1 1.5-2.3 1-2.9 0.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h5q1.1 0 2-0.3t1.5-1 1.1-1.4 1-1.7q0.8-1.4 1.8-3.8 0.6-1.5 1.1-2.5t1.2-2.4 1.4-2.2 1.7-1.9 2-1.5 2.4-0.9 2.8-0.4h5.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.2l7.1 7.2q0.2 0.2 0.2 0.5z' })
                )
            );
        }
    }]);

    return FaRandom;
}(React.Component);

exports.default = FaRandom;
module.exports = exports['default'];