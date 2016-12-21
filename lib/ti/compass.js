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

var TiCompass = function (_React$Component) {
    _inherits(TiCompass, _React$Component);

    function TiCompass() {
        _classCallCheck(this, TiCompass);

        return _possibleConstructorReturn(this, (TiCompass.__proto__ || Object.getPrototypeOf(TiCompass)).apply(this, arguments));
    }

    _createClass(TiCompass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 8.3c6.4 0 11.7 5.3 11.7 11.7 0 6.4-5.3 11.7-11.7 11.7-6.4 0-11.7-5.3-11.7-11.7s5.3-11.7 11.7-11.7z m0-3.3c-8.3 0-15 6.7-15 15 0 8.3 6.7 15 15 15 8.3 0 15-6.7 15-15 0-8.3-6.7-15-15-15z m7 8c-0.2-0.2-0.6-0.3-0.8-0.2l-10 2.9c-0.2 0-0.5 0.3-0.5 0.5l-2.9 10c-0.1 0.2 0 0.6 0.2 0.8 0.2 0.1 0.4 0.2 0.6 0.2 0.1 0 0.2 0 0.2 0l10-2.9c0.2 0 0.5-0.3 0.5-0.5l2.9-10c0.1-0.2 0-0.6-0.2-0.8z m-12.2 12.2l2.3-8.1 5.8 5.8-8.1 2.3z' })
                )
            );
        }
    }]);

    return TiCompass;
}(React.Component);

exports.default = TiCompass;
module.exports = exports['default'];