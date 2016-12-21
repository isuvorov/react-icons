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

var TiArrowBackOutline = function (_React$Component) {
    _inherits(TiArrowBackOutline, _React$Component);

    function TiArrowBackOutline() {
        _classCallCheck(this, TiArrowBackOutline);

        return _possibleConstructorReturn(this, (TiArrowBackOutline.__proto__ || Object.getPrototypeOf(TiArrowBackOutline)).apply(this, arguments));
    }

    _createClass(TiArrowBackOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.9 32.6c-2.7-4.2-6.1-5.5-10.2-5.8v2.4c0 0.9-0.4 1.7-1 2.3-1.3 1.3-3.5 1.3-4.7 0l-10.5-10.3c-0.3-0.3-0.5-0.8-0.5-1.2s0.2-0.9 0.5-1.2l10.5-10.3c1.2-1.3 3.4-1.3 4.7 0 0.6 0.6 1 1.4 1 2.3v2.9c7.7 1.5 13.3 8.3 13.3 16.3v1.7c0 0.7-0.5 1.4-1.2 1.6-0.1 0-0.3 0-0.5 0-0.5 0-1-0.2-1.4-0.7z m-11.9-9.2c3.7 0 7.8 0.6 11.3 3.5-1.3-5.4-5.8-9.5-11.5-10.1-0.8-0.1-1.5-0.1-1.5-0.1v-5.9l-9.3 9.2 9.3 9.2v-5.9s1.3 0.1 1.7 0.1z' })
                )
            );
        }
    }]);

    return TiArrowBackOutline;
}(React.Component);

exports.default = TiArrowBackOutline;
module.exports = exports['default'];