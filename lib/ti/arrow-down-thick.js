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

var TiArrowDownThick = function (_React$Component) {
    _inherits(TiArrowDownThick, _React$Component);

    function TiArrowDownThick() {
        _classCallCheck(this, TiArrowDownThick);

        return _possibleConstructorReturn(this, (TiArrowDownThick.__proto__ || Object.getPrototypeOf(TiArrowDownThick)).apply(this, arguments));
    }

    _createClass(TiArrowDownThick, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.7 17.8c-1.3-1.3-3.4-1.3-4.7 0l-2.7 2.6v-12.1c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3v12.1l-2.7-2.6c-1.3-1.3-3.4-1.3-4.7 0s-1.3 3.4 0 4.7l10.7 10.7 10.7-10.7c1.3-1.3 1.3-3.4 0-4.7z' })
                )
            );
        }
    }]);

    return TiArrowDownThick;
}(React.Component);

exports.default = TiArrowDownThick;
module.exports = exports['default'];