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

var MdEvStation = function (_React$Component) {
    _inherits(MdEvStation, _React$Component);

    function MdEvStation() {
        _classCallCheck(this, MdEvStation);

        return _possibleConstructorReturn(this, (MdEvStation.__proto__ || Object.getPrototypeOf(MdEvStation)).apply(this, arguments));
    }

    _createClass(MdEvStation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.4 30l6.6-11.6h-3.4v-8.4l-6.6 12.5h3.4v7.5z m16.6-13.4c0.9 0 1.6-0.7 1.6-1.6s-0.7-1.6-1.6-1.6-1.6 0.7-1.6 1.6 0.7 1.6 1.6 1.6z m3-4.6c0.8 0.8 1.1 1.8 1.1 3v15.9c0 2.2-1.8 4.1-4.1 4.1s-4.1-1.9-4.1-4.1v-8.4h-2.5v12.5h-16.8v-26.6c0-1.8 1.6-3.4 3.4-3.4h10c1.8 0 3.4 1.6 3.4 3.4v11.6h1.6c1.8 0 3.4 1.6 3.4 3.4v7.5c0 0.9 0.7 1.6 1.6 1.6s1.6-0.7 1.6-1.6v-12.1c-0.5 0.3-1 0.3-1.6 0.3-2.3 0-4.1-1.8-4.1-4.1 0-1.8 1.1-3.3 2.6-3.9l-3.5-3.5 1.8-1.7z' })
                )
            );
        }
    }]);

    return MdEvStation;
}(React.Component);

exports.default = MdEvStation;
module.exports = exports['default'];