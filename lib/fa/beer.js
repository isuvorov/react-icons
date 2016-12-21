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

var FaBeer = function (_React$Component) {
    _inherits(FaBeer, _React$Component);

    function FaBeer() {
        _classCallCheck(this, FaBeer);

        return _possibleConstructorReturn(this, (FaBeer.__proto__ || Object.getPrototypeOf(FaBeer)).apply(this, arguments));
    }

    _createClass(FaBeer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.8 20v-8.6h-5.7v5.7q0 1.2 0.8 2.1t2 0.8h2.9z m22.8 10v4.3h-25.7v-4.3l2.9-4.3h-2.9q-3.5 0-6-2.5t-2.5-6.1v-7.1l-1.5-1.4 0.7-2.9h10.8l0.7-2.8h21.4l0.7 4.2-1.4 0.8v17.8z' })
                )
            );
        }
    }]);

    return FaBeer;
}(React.Component);

exports.default = FaBeer;
module.exports = exports['default'];