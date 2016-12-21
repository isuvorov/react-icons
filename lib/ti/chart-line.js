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

var TiChartLine = function (_React$Component) {
    _inherits(TiChartLine, _React$Component);

    function TiChartLine() {
        _classCallCheck(this, TiChartLine);

        return _possibleConstructorReturn(this, (TiChartLine.__proto__ || Object.getPrototypeOf(TiChartLine)).apply(this, arguments));
    }

    _createClass(TiChartLine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.9 25.9c0.6 0.5 1.4 0.8 2.1 0.8 1 0 1.9-0.5 2.6-1.3l4.7-5.8 4 3.1c1.5 1 3.5 0.8 4.6-0.6l6.7-8.4c1.2-1.4 0.9-3.5-0.5-4.6-1.5-1.2-3.6-1-4.7 0.5l-4.7 5.8-4-3.1c-1.5-1-3.5-0.8-4.6 0.6l-6.7 8.4c-1.2 1.4-0.9 3.5 0.5 4.6z m0.4 9.1h23.4c0.9 0 1.6-0.7 1.6-1.7s-0.7-1.6-1.6-1.6h-23.4c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.7 1.6 1.7z' })
                )
            );
        }
    }]);

    return TiChartLine;
}(React.Component);

exports.default = TiChartLine;
module.exports = exports['default'];