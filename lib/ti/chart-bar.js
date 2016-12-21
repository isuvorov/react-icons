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

var TiChartBar = function (_React$Component) {
    _inherits(TiChartBar, _React$Component);

    function TiChartBar() {
        _classCallCheck(this, TiChartBar);

        return _possibleConstructorReturn(this, (TiChartBar.__proto__ || Object.getPrototypeOf(TiChartBar)).apply(this, arguments));
    }

    _createClass(TiChartBar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.3 6.7c0-1.9-1.5-3.4-3.3-3.4s-3.3 1.5-3.3 3.4v20h6.6v-20z m8.4 6.6c0-1.8-1.5-3.3-3.4-3.3s-3.3 1.5-3.3 3.3v13.4h6.7v-13.4z m-16.7 5c0-1.8-1.5-3.3-3.3-3.3s-3.4 1.5-3.4 3.3v8.4h6.7v-8.4z m16.7 13.4h-23.4c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.7 1.6 1.7h23.4c0.9 0 1.6-0.7 1.6-1.7s-0.7-1.6-1.6-1.6z' })
                )
            );
        }
    }]);

    return TiChartBar;
}(React.Component);

exports.default = TiChartBar;
module.exports = exports['default'];