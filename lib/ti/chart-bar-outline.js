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

var TiChartBarOutline = function (_React$Component) {
    _inherits(TiChartBarOutline, _React$Component);

    function TiChartBarOutline() {
        _classCallCheck(this, TiChartBarOutline);

        return _possibleConstructorReturn(this, (TiChartBarOutline.__proto__ || Object.getPrototypeOf(TiChartBarOutline)).apply(this, arguments));
    }

    _createClass(TiChartBarOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 8.3c-1.3 0-2.4 0.5-3.3 1.3v-2.9c0-2.8-2.2-5-5-5s-5 2.2-5 5v7.9c-0.9-0.8-2-1.3-3.3-1.3-2.8 0-5 2.3-5 5v10h26.6v-15c0-2.7-2.2-5-5-5z m-8.3-3.3c0.9 0 1.7 0.7 1.7 1.7v18.3h-3.4v-18.3c0-1 0.8-1.7 1.7-1.7z m-6.7 20h-3.3v-6.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6v6.7z m16.7 0h-3.3v-11.7c0-0.9 0.7-1.6 1.6-1.6s1.7 0.7 1.7 1.6v11.7z m1.7 10h-23.4c-0.9 0-1.6-0.7-1.6-1.7s0.7-1.6 1.6-1.6h23.4c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7z' })
                )
            );
        }
    }]);

    return TiChartBarOutline;
}(React.Component);

exports.default = TiChartBarOutline;
module.exports = exports['default'];