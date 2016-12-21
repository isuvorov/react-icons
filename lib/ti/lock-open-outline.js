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

var TiLockOpenOutline = function (_React$Component) {
    _inherits(TiLockOpenOutline, _React$Component);

    function TiLockOpenOutline() {
        _classCallCheck(this, TiLockOpenOutline);

        return _possibleConstructorReturn(this, (TiLockOpenOutline.__proto__ || Object.getPrototypeOf(TiLockOpenOutline)).apply(this, arguments));
    }

    _createClass(TiLockOpenOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.2 28.3c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-1.2 1-2.1 2.2-2.1s2.2 0.9 2.2 2.1z m7.8-21.6c-3.7 0-6.7 3-6.7 6.6v5h-6.6v-1.6h-5c-1.9 0-3.4 1.5-3.4 3.3v11.7c0 1.8 1.5 3.3 3.4 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-11.7c0-1.8-1.5-3.3-3.4-3.3h-1.6v-3.4c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v5c0 1 0.8 1.7 1.7 1.7s1.7-0.7 1.7-1.7v-5c0-3.6-3-6.6-6.7-6.6z m-1.7 25h-16.6v-11.7h16.6l0 11.7z' })
                )
            );
        }
    }]);

    return TiLockOpenOutline;
}(React.Component);

exports.default = TiLockOpenOutline;
module.exports = exports['default'];