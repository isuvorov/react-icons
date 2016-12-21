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

var TiPinOutline = function (_React$Component) {
    _inherits(TiPinOutline, _React$Component);

    function TiPinOutline() {
        _classCallCheck(this, TiPinOutline);

        return _possibleConstructorReturn(this, (TiPinOutline.__proto__ || Object.getPrototypeOf(TiPinOutline)).apply(this, arguments));
    }

    _createClass(TiPinOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.7 12.6l-6.6-6.7c-1.3-1.2-3.5-1.2-4.8 0-0.3 0.4-0.5 0.8-0.7 1.1-1 2.3-2.2 3.7-3.7 4.5l-0.4 0.2c-1.6 0.8-3.8 1.6-7.8 1.6-0.5 0-0.9 0.1-1.3 0.3-0.8 0.3-1.5 1-1.8 1.8-0.3 0.8-0.3 1.7 0 2.5 0.2 0.5 0.4 0.8 0.7 1.1l5.4 5.4-6.4 8.9 9-6.3 5.3 5.3c0.3 0.4 0.7 0.6 1.1 0.8 0.4 0.2 0.9 0.2 1.3 0.2s0.9-0.1 1.3-0.2c0.8-0.4 1.5-1 1.8-1.8 0.2-0.4 0.2-0.9 0.2-1.3 0-4.1 0.9-6.3 1.7-7.9 0.8-1.6 2.2-2.9 4.6-4 0.4-0.2 0.8-0.4 1.1-0.8 1.3-1.3 1.3-3.4 0-4.7z m-8.7 8c-1.4 2.8-2 5.7-2 9.4l-13.3-13.3c3.5 0 6.3-0.6 9-1.8l0.3-0.2c2.4-1.2 4.2-3.2 5.7-6.4l6.5 6.7c-3.1 1.5-5.1 3.3-6.2 5.6z' })
                )
            );
        }
    }]);

    return TiPinOutline;
}(React.Component);

exports.default = TiPinOutline;
module.exports = exports['default'];