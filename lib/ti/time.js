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

var TiTime = function (_React$Component) {
    _inherits(TiTime, _React$Component);

    function TiTime() {
        _classCallCheck(this, TiTime);

        return _possibleConstructorReturn(this, (TiTime.__proto__ || Object.getPrototypeOf(TiTime)).apply(this, arguments));
    }

    _createClass(TiTime, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.7 21.7c0-0.9-0.8-1.7-1.7-1.7h-5c-0.9 0-1.7 0.8-1.7 1.7s0.8 1.6 1.7 1.6h5c0.9 0 1.7-0.7 1.7-1.6z m-6.7-11.7c6.4 0 11.7 5.2 11.7 11.7s-5.3 11.6-11.7 11.6-11.7-5.2-11.7-11.6 5.3-11.7 11.7-11.7z m0-3.3c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m1.7 10c0-0.9-0.8-1.7-1.7-1.7s-1.7 0.8-1.7 1.7v5c0 0.9 0.8 1.6 1.7 1.6s1.7-0.7 1.7-1.6v-5z m-1.7-3.4c4.6 0 8.3 3.8 8.3 8.4s-3.7 8.3-8.3 8.3-8.3-3.7-8.3-8.3 3.7-8.4 8.3-8.4z m0-1.6c-5.5 0-10 4.4-10 10 0 5.5 4.5 10 10 10s10-4.5 10-10c0-5.6-4.5-10-10-10z' })
                )
            );
        }
    }]);

    return TiTime;
}(React.Component);

exports.default = TiTime;
module.exports = exports['default'];