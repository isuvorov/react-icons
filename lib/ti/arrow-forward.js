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

var TiArrowForward = function (_React$Component) {
    _inherits(TiArrowForward, _React$Component);

    function TiArrowForward() {
        _classCallCheck(this, TiArrowForward);

        return _possibleConstructorReturn(this, (TiArrowForward.__proto__ || Object.getPrototypeOf(TiArrowForward)).apply(this, arguments));
    }

    _createClass(TiArrowForward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 9.2c-0.5 0-0.9 0.1-1.2 0.5-0.3 0.3-0.5 0.7-0.5 1.1v4.3c-7.5 0.8-13.3 7.2-13.3 14.9v1.7c3.7-5.7 8.7-6.6 13.3-6.7v4.2c0 0.4 0.2 0.8 0.5 1.1s0.7 0.5 1.2 0.5 0.8-0.1 1.1-0.5l10.5-10.3-10.5-10.3c-0.3-0.4-0.7-0.5-1.1-0.5z' })
                )
            );
        }
    }]);

    return TiArrowForward;
}(React.Component);

exports.default = TiArrowForward;
module.exports = exports['default'];