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

var FaHandORight = function (_React$Component) {
    _inherits(FaHandORight, _React$Component);

    function FaHandORight() {
        _classCallCheck(this, FaHandORight);

        return _possibleConstructorReturn(this, (FaHandORight.__proto__ || Object.getPrototypeOf(FaHandORight)).apply(this, arguments));
    }

    _createClass(FaHandORight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.7 30q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m31.4-12.9q0-1.1-0.8-2t-2-0.8h-12.9q0-0.5 0.4-1.1t0.7-1.2 0.7-1.5 0.4-1.9q0-1.5-1-2.2t-2.6-0.7q-0.5 0-2 3.1-0.5 1-0.8 1.5-0.9 1.4-2.5 3.2-1.6 1.8-2.3 2.4-1.5 1.2-3.1 1.2h-0.7v14.3h0.7q1.6 0 3.7 0.7t4.3 1.5 4 0.7q4.3 0 4.3-3.7 0-0.6-0.2-1.3 0.7-0.3 1.1-1.2t0.4-1.6-0.4-1.5q1.2-1.2 1.2-2.7 0-0.6-0.2-1.2t-0.6-1.1h7.4q1.1 0 2-0.8t0.8-2.1z m2.9 0q0 2.4-1.7 4.1t-4 1.7h-3.8q-0.1 1.3-0.8 2.6 0.1 0.5 0.1 1 0 2.2-1.4 3.9 0 3.1-1.9 4.9t-5 1.8q-3 0-7.2-1.5-3.7-1.3-5-1.3h-6.4q-1.2 0-2.1-0.9t-0.8-2v-14.3q0-1.1 0.8-2t2.1-0.8h6.4q0.2 0 0.5-0.1t0.5-0.3 0.5-0.4 0.5-0.5 0.5-0.5 0.4-0.5 0.3-0.4q1.5-1.6 2.3-2.8 0.2-0.5 0.7-1.4t0.8-1.6 0.9-1.4 1.2-1.1 1.6-0.4q2.8 0 4.6 1.5t1.8 4.2q0 1.5-0.5 2.8h8.4q2.3 0 4 1.7t1.7 4z' })
                )
            );
        }
    }]);

    return FaHandORight;
}(React.Component);

exports.default = FaHandORight;
module.exports = exports['default'];