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

var TiChartLineOutline = function (_React$Component) {
    _inherits(TiChartLineOutline, _React$Component);

    function TiChartLineOutline() {
        _classCallCheck(this, TiChartLineOutline);

        return _possibleConstructorReturn(this, (TiChartLineOutline.__proto__ || Object.getPrototypeOf(TiChartLineOutline)).apply(this, arguments));
    }

    _createClass(TiChartLineOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 28.3c-1.1 0-2.2-0.4-3.1-1.1-1.1-0.8-1.7-2-1.9-3.3-0.1-1.3 0.3-2.6 1.1-3.7l6.7-8.3c1.6-2.1 4.8-2.5 6.9-0.9l2.8 2.1 3.6-4.6c1-1.2 2.4-1.8 3.9-1.8 1.1 0 2.2 0.4 3.1 1.1 1.1 0.8 1.7 2 1.9 3.3s-0.3 2.7-1.1 3.7l-6.7 8.3c-1.6 2.1-4.8 2.5-6.9 0.9l-2.8-2.1-3.6 4.6c-1 1.1-2.4 1.8-3.9 1.8z m6.7-15c-0.5 0-1 0.3-1.3 0.7l-6.7 8.3c-0.3 0.3-0.4 0.8-0.4 1.2 0.1 0.5 0.3 0.9 0.7 1.1 0.3 0.3 0.7 0.4 1 0.4 0.5 0 1-0.2 1.3-0.6l5.7-7.1 5.3 4c0.7 0.6 1.8 0.4 2.3-0.3l6.7-8.3c0.3-0.3 0.4-0.8 0.4-1.2-0.1-0.5-0.3-0.9-0.7-1.1-0.3-0.3-0.7-0.4-1-0.4-0.5 0-1 0.2-1.3 0.6l-5.7 7.1-5.3-4c-0.3-0.3-0.7-0.4-1-0.4z m15 21.7h-23.4c-0.9 0-1.6-0.7-1.6-1.7s0.7-1.6 1.6-1.6h23.4c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7z' })
                )
            );
        }
    }]);

    return TiChartLineOutline;
}(React.Component);

exports.default = TiChartLineOutline;
module.exports = exports['default'];