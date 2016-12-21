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

var TiKeyboard = function (_React$Component) {
    _inherits(TiKeyboard, _React$Component);

    function TiKeyboard() {
        _classCallCheck(this, TiKeyboard);

        return _possibleConstructorReturn(this, (TiKeyboard.__proto__ || Object.getPrototypeOf(TiKeyboard)).apply(this, arguments));
    }

    _createClass(TiKeyboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 21.7h11.7v3.3h-11.7z m-5 0h3.4v3.3h-3.4z m0-6.7h3.4v1.7h-3.4z m5 5v-1.7h-5v1.7h3.4z m0-5h1.7v1.7h-1.7z m1.7 3.3h1.7v1.7h-1.7z m1.7-3.3h1.6v1.7h-1.6z m1.6 3.3h1.7v1.7h-1.7z m1.7-3.3h1.7v1.7h-1.7z m1.7 3.3h1.6v1.7h-1.6z m1.6-3.3h1.7v1.7h-1.7z m1.7 3.3h1.7v1.7h-1.7z m1.7-3.3h1.6v1.7h-1.6z m1.6 5h3.4v-5h-1.7v3.3h-1.7z m1.7 1.7h-1.7v1.6h-1.6v1.7h5v-1.7h-1.7z m3.3-11.7h-26.6c-1.9 0-3.4 1.5-3.4 3.3v13.4c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-13.4c0-1.8-1.5-3.3-3.4-3.3z m0 16.7h-26.6v-13.4h26.6v13.4z' })
                )
            );
        }
    }]);

    return TiKeyboard;
}(React.Component);

exports.default = TiKeyboard;
module.exports = exports['default'];