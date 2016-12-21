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

var MdiFunction = function (_React$Component) {
    _inherits(MdiFunction, _React$Component);

    function MdiFunction() {
        _classCallCheck(this, MdiFunction);

        return _possibleConstructorReturn(this, (MdiFunction.__proto__ || Object.getPrototypeOf(MdiFunction)).apply(this, arguments));
    }

    _createClass(MdiFunction, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 15.5987,5.28811C 14.4983,5.19184 13.5282,6.00582 13.432,7.10618L 13.1788,10L 16,10L 16,12L 13.0038,12L 12.5604,17.0681C 12.3679,19.2689 10.4278,20.8968 8.22702,20.7043C 6.9208,20.59 5.81636,19.8601 5.1746,18.8254L 6.67042,17.3296C 6.90899,18.0735 7.57426,18.6395 8.40133,18.7119C 9.50169,18.8082 10.4718,17.9942 10.568,16.8938L 10.9962,12L 8,12L 8,10L 11.1712,10L 11.4396,6.93188C 11.6321,4.73115 13.5722,3.10319 15.773,3.29573C 17.0792,3.41001 18.1836,4.13994 18.8254,5.1746L 17.3296,6.67041C 17.091,5.92647 16.4257,5.36046 15.5987,5.28811 Z ' })
                )
            );
        }
    }]);

    return MdiFunction;
}(React.Component);

exports.default = MdiFunction;
module.exports = exports['default'];