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

var FaMarsDouble = function (_React$Component) {
    _inherits(FaMarsDouble, _React$Component);

    function FaMarsDouble() {
        _classCallCheck(this, FaMarsDouble);

        return _possibleConstructorReturn(this, (FaMarsDouble.__proto__ || Object.getPrototypeOf(FaMarsDouble)).apply(this, arguments));
    }

    _createClass(FaMarsDouble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.9 10q0-0.3 0.2-0.4t0.5-0.2h5.9q0.6 0 1 0.4t0.4 0.9v6q0 0.3-0.2 0.5t-0.5 0.1h-1.3q-0.3 0-0.5-0.1t-0.2-0.5v-2.8l-5.3 5.3q1.6 2 2.3 4.4t0.2 5.2q-0.7 3.7-3.5 6.4t-6.6 3.3q-4.3 0.6-8-1.7t-5-6.2q-2.4-0.1-4.6-1.2t-3.7-2.8-2.3-4-0.7-4.7q0.2-2.8 1.6-5.3t3.8-3.9 5.2-1.9q2.4-0.3 4.7 0.4t4.1 2.1l5.3-5.2h-2.8q-0.3 0-0.4-0.2t-0.2-0.5v-1.3q0-0.3 0.2-0.5t0.4-0.2h6q0.6 0 0.9 0.4t0.4 0.9v6q0 0.3-0.1 0.5t-0.5 0.2h-1.4q-0.2 0-0.4-0.2t-0.2-0.5v-2.8l-5.3 5.3q1.2 1.6 1.9 3.5 3.8 0.2 6.8 2.6l5.3-5.3h-2.7q-0.3 0-0.5-0.2t-0.2-0.4v-1.4z m-10.6 8.7q0-0.4-0.1-1.2-3.4 0.5-5.6 3.1t-2.3 6q0 0.5 0.1 1.2 3.3-0.5 5.6-3.1t2.3-6z m-18.6 0q0 3.5 2.3 6.1t5.7 3.1q-0.1-0.6-0.1-1.3 0-4.3 2.8-7.6t7.1-4.1q-1.1-2.5-3.4-4t-5.1-1.5q-3.9 0-6.6 2.7t-2.7 6.6z m19.9 17.2q3.8 0 6.6-2.7t2.7-6.6q0-3.4-2.3-6.1t-5.7-3.1q0 0.6 0 1.3 0 4.3-2.8 7.6t-7 4.1q1.1 2.5 3.4 4t5.1 1.5z' })
                )
            );
        }
    }]);

    return FaMarsDouble;
}(React.Component);

exports.default = FaMarsDouble;
module.exports = exports['default'];