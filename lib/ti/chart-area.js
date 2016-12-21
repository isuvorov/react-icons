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

var TiChartArea = function (_React$Component) {
    _inherits(TiChartArea, _React$Component);

    function TiChartArea() {
        _classCallCheck(this, TiChartArea);

        return _possibleConstructorReturn(this, (TiChartArea.__proto__ || Object.getPrototypeOf(TiChartArea)).apply(this, arguments));
    }

    _createClass(TiChartArea, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 10c0-1-0.4-1.9-1.2-2.6-1.5-1.2-3.6-0.9-4.7 0.5l-4.7 5.8-4-3c-1.5-1.1-3.5-0.9-4.6 0.6l-6.7 8.3c-0.5 0.6-0.7 1.3-0.7 2.1v5h26.6v-16.7z m0 21.7h-26.6c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7h26.6c1 0 1.7-0.7 1.7-1.7s-0.7-1.6-1.7-1.6z' })
                )
            );
        }
    }]);

    return TiChartArea;
}(React.Component);

exports.default = TiChartArea;
module.exports = exports['default'];