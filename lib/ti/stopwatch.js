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

var TiStopwatch = function (_React$Component) {
    _inherits(TiStopwatch, _React$Component);

    function TiStopwatch() {
        _classCallCheck(this, TiStopwatch);

        return _possibleConstructorReturn(this, (TiStopwatch.__proto__ || Object.getPrototypeOf(TiStopwatch)).apply(this, arguments));
    }

    _createClass(TiStopwatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.4 14.8c0.1 0 0.3-0.1 0.4-0.3l0.9-0.8c0.6-0.7 0.6-1.7 0-2.4s-1.7-0.6-2.4 0l-0.8 0.9c-0.1 0-0.1 0.1-0.2 0.2-2.3-2.1-5.3-3.6-8.7-4 0.1 0 0.1 0 0.1-0.1v-1.6h1.6c1 0 1.7-0.8 1.7-1.7s-0.7-1.7-1.7-1.7h-6.6c-0.9 0-1.7 0.8-1.7 1.7s0.8 1.7 1.7 1.7h1.6v1.6c0 0.1 0.1 0.1 0.1 0.1-7.6 0.8-13.4 7.2-13.4 14.9 0 8.3 6.7 15 15 15s15-6.7 15-15c0-3.1-1-6-2.6-8.5z m-12.4 20.2c-6.4 0-11.7-5.2-11.7-11.7s5.3-11.6 11.7-11.6 11.7 5.2 11.7 11.6-5.3 11.7-11.7 11.7z m1.7-13.3v-3.4c0-0.9-0.8-1.6-1.7-1.6s-1.7 0.7-1.7 1.6v5c0 1 0.8 1.7 1.7 1.7h5c0.9 0 1.7-0.7 1.7-1.7s-0.8-1.6-1.7-1.6h-3.3z m-1.7-8.4c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.4 10-10-4.5-10-10-10z m0 18.4c-4.6 0-8.3-3.8-8.3-8.4s3.7-8.3 8.3-8.3 8.3 3.7 8.3 8.3-3.7 8.4-8.3 8.4z' })
                )
            );
        }
    }]);

    return TiStopwatch;
}(React.Component);

exports.default = TiStopwatch;
module.exports = exports['default'];