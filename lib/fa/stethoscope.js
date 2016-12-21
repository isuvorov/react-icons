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

var FaStethoscope = function (_React$Component) {
    _inherits(FaStethoscope, _React$Component);

    function FaStethoscope() {
        _classCallCheck(this, FaStethoscope);

        return _possibleConstructorReturn(this, (FaStethoscope.__proto__ || Object.getPrototypeOf(FaStethoscope)).apply(this, arguments));
    }

    _createClass(FaStethoscope, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.1 15.7q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m2.8 0q0 1.4-0.8 2.5t-2 1.6v8.8q0 3.5-3 6t-7 2.5-7.1-2.5-2.9-6v-3q-3.7-0.4-6.1-2.8t-2.5-5.7v-11.4q0-0.6 0.4-1t1-0.4q0.2 0 0.4 0 0.4-0.6 1-1t1.5-0.4q1.2 0 2 0.8t0.8 2-0.8 2-2 0.9q-0.8 0-1.4-0.4v8.9q0 2.4 2.1 4.1t5 1.7 5-1.7 2.1-4.1v-8.9q-0.6 0.4-1.4 0.4-1.2 0-2-0.9t-0.8-2 0.8-2 2-0.8q0.8 0 1.5 0.4t1 1q0.2 0 0.4 0 0.6 0 1 0.4t0.4 1v11.4q0 3.3-2.5 5.7t-6.1 2.8v3q0 2.3 2.1 4t5.1 1.7 5-1.7 2.1-4v-8.8q-1.3-0.5-2.1-1.6t-0.7-2.5q0-1.8 1.2-3t3-1.3 3.1 1.3 1.2 3z' })
                )
            );
        }
    }]);

    return FaStethoscope;
}(React.Component);

exports.default = FaStethoscope;
module.exports = exports['default'];