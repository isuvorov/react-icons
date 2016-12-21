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

var TiChartAreaOutline = function (_React$Component) {
    _inherits(TiChartAreaOutline, _React$Component);

    function TiChartAreaOutline() {
        _classCallCheck(this, TiChartAreaOutline);

        return _possibleConstructorReturn(this, (TiChartAreaOutline.__proto__ || Object.getPrototypeOf(TiChartAreaOutline)).apply(this, arguments));
    }

    _createClass(TiChartAreaOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 28.3h-26.6c-1 0-1.7-0.7-1.7-1.6v-5c0-1.2 0.4-2.3 1.1-3.2l6.7-8.3c1.6-2 4.8-2.4 6.9-0.9l2.8 2.1 3.6-4.5c1-1.2 2.4-1.9 3.9-1.9 1.1 0 2.2 0.4 3.1 1.1 1.2 0.9 1.9 2.4 1.9 3.9v16.7c0 0.9-0.7 1.6-1.7 1.6z m-25-3.3h23.4v-15c0-0.5-0.3-1-0.7-1.3-0.3-0.3-0.7-0.4-1-0.4-0.5 0-1 0.3-1.3 0.7l-4.6 5.8c-0.6 0.7-1.6 0.8-2.4 0.3l-4-3.1c-0.7-0.5-1.8-0.4-2.3 0.3l-6.7 8.3c-0.3 0.4-0.4 0.8-0.4 1.1v3.3z m25 10h-26.6c-1 0-1.7-0.7-1.7-1.7s0.7-1.6 1.7-1.6h26.6c1 0 1.7 0.7 1.7 1.6s-0.7 1.7-1.7 1.7z' })
                )
            );
        }
    }]);

    return TiChartAreaOutline;
}(React.Component);

exports.default = TiChartAreaOutline;
module.exports = exports['default'];