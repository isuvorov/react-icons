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

var TiArrowForwardOutline = function (_React$Component) {
    _inherits(TiArrowForwardOutline, _React$Component);

    function TiArrowForwardOutline() {
        _classCallCheck(this, TiArrowForwardOutline);

        return _possibleConstructorReturn(this, (TiArrowForwardOutline.__proto__ || Object.getPrototypeOf(TiArrowForwardOutline)).apply(this, arguments));
    }

    _createClass(TiArrowForwardOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.7 33.3c-0.2 0-0.4 0-0.5 0-0.7-0.2-1.2-0.9-1.2-1.6v-1.7c0-8 5.6-14.8 13.3-16.3v-2.9c0-0.9 0.4-1.7 1-2.3 1.3-1.3 3.5-1.3 4.7 0l10.5 10.3c0.3 0.3 0.5 0.7 0.5 1.2s-0.2 0.9-0.5 1.2l-10.5 10.3c-1.2 1.3-3.4 1.3-4.7 0-0.6-0.6-1-1.4-1-2.3v-2.4c-4.1 0.3-7.5 1.6-10.2 5.8-0.4 0.5-0.9 0.7-1.4 0.7z m13.3-9.9c0.4 0 1.7-0.1 1.7-0.1v5.9l9.3-9.2-9.3-9.2v5.9s-0.7 0-1.5 0.1c-5.7 0.6-10.2 4.7-11.5 10.1 3.5-2.9 7.6-3.5 11.3-3.5z' })
                )
            );
        }
    }]);

    return TiArrowForwardOutline;
}(React.Component);

exports.default = TiArrowForwardOutline;
module.exports = exports['default'];