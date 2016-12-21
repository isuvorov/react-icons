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

var TiChartPie = function (_React$Component) {
    _inherits(TiChartPie, _React$Component);

    function TiChartPie() {
        _classCallCheck(this, TiChartPie);

        return _possibleConstructorReturn(this, (TiChartPie.__proto__ || Object.getPrototypeOf(TiChartPie)).apply(this, arguments));
    }

    _createClass(TiChartPie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.4 23.3l8.1 8.2c0.7 0.7 1.7 0.6 2.2-0.2 1.4-2.3 2.3-5 2.3-8 0-3.5-1.2-6.8-3.3-9.4l-9.3 9.4z m-4.4 0.7v-12.3c-5.7 0.8-10 5.7-10 11.6 0 6.5 5.2 11.7 11.7 11.7 2.6 0 5-0.9 6.9-2.3l-8.6-8.7z m12.2-13.6c0.7-0.7 0.6-1.7-0.1-2.2-2.1-1.5-4.5-2.5-7.1-3-0.9-0.1-1.7 0.5-1.7 1.5v12.6l8.9-8.9z' })
                )
            );
        }
    }]);

    return TiChartPie;
}(React.Component);

exports.default = TiChartPie;
module.exports = exports['default'];