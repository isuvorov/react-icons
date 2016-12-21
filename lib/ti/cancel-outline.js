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

var TiCancelOutline = function (_React$Component) {
    _inherits(TiCancelOutline, _React$Component);

    function TiCancelOutline() {
        _classCallCheck(this, TiCancelOutline);

        return _possibleConstructorReturn(this, (TiCancelOutline.__proto__ || Object.getPrototypeOf(TiCancelOutline)).apply(this, arguments));
    }

    _createClass(TiCancelOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 34.2c-7.8 0-14.2-6.4-14.2-14.2s6.4-14.2 14.2-14.2c7.8 0 14.2 6.4 14.2 14.2s-6.4 14.2-14.2 14.2z m0-25c-6 0-10.8 4.8-10.8 10.8s4.8 10.8 10.8 10.8 10.8-4.8 10.8-10.8-4.8-10.8-10.8-10.8z m0 5c3.2 0 5.8 2.6 5.8 5.8 0 0.3 0 0.7-0.1 1l-6.7-6.7c0.3-0.1 0.7-0.1 1-0.1z m0-1.7c-1.5 0-2.8 0.4-4 1.2l10.3 10.3c0.8-1.2 1.2-2.5 1.2-4 0-4.1-3.4-7.5-7.5-7.5z m-5.7 6.5l6.7 6.7c-0.3 0.1-0.7 0.1-1 0.1-3.2 0-5.8-2.6-5.8-5.8 0-0.3 0-0.7 0.1-1z m-0.6-3c-0.8 1.2-1.2 2.5-1.2 4 0 4.1 3.4 7.5 7.5 7.5 1.5 0 2.8-0.4 4-1.2l-10.3-10.3z' })
                )
            );
        }
    }]);

    return TiCancelOutline;
}(React.Component);

exports.default = TiCancelOutline;
module.exports = exports['default'];