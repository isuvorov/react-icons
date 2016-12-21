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

var MdPieChartOutlined = function (_React$Component) {
    _inherits(MdPieChartOutlined, _React$Component);

    function MdPieChartOutlined() {
        _classCallCheck(this, MdPieChartOutlined);

        return _possibleConstructorReturn(this, (MdPieChartOutlined.__proto__ || Object.getPrototypeOf(MdPieChartOutlined)).apply(this, arguments));
    }

    _createClass(MdPieChartOutlined, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 33.2c6.1-0.8 10.8-5.5 11.6-11.6h-11.6v11.6z m-15-13.2c0 6.8 5.2 12.3 11.8 13.2v-26.4c-6.6 0.8-11.8 6.4-11.8 13.2z m15-13.2v11.6h11.6c-0.8-6.1-5.5-10.8-11.6-11.6z m-1.6-3.4c9.1 0 16.6 7.5 16.6 16.6s-7.5 16.6-16.6 16.6-16.6-7.5-16.6-16.6 7.5-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdPieChartOutlined;
}(React.Component);

exports.default = MdPieChartOutlined;
module.exports = exports['default'];