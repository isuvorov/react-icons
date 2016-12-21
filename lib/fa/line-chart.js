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

var FaLineChart = function (_React$Component) {
    _inherits(FaLineChart, _React$Component);

    function FaLineChart() {
        _classCallCheck(this, FaLineChart);

        return _possibleConstructorReturn(this, (FaLineChart.__proto__ || Object.getPrototypeOf(FaLineChart)).apply(this, arguments));
    }

    _createClass(FaLineChart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.8 32.4v2.5h-39.8v-29.8h2.5v27.3h37.3z m-2.5-24.2v8.4q0 0.5-0.4 0.6t-0.7-0.1l-2.3-2.4-12.3 12.3q-0.2 0.2-0.5 0.2t-0.4-0.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q0.2-0.2 0.4-0.2t0.5 0.2l4.5 4.5 9-9-2.3-2.4q-0.3-0.3-0.2-0.6t0.6-0.4h8.4q0.3 0 0.5 0.2t0.2 0.4z' })
                )
            );
        }
    }]);

    return FaLineChart;
}(React.Component);

exports.default = FaLineChart;
module.exports = exports['default'];