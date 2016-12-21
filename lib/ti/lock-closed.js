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

var TiLockClosed = function (_React$Component) {
    _inherits(TiLockClosed, _React$Component);

    function TiLockClosed() {
        _classCallCheck(this, TiLockClosed);

        return _possibleConstructorReturn(this, (TiLockClosed.__proto__ || Object.getPrototypeOf(TiLockClosed)).apply(this, arguments));
    }

    _createClass(TiLockClosed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 16.7h-1.6v-3.4c0-3.6-3-6.6-6.7-6.6s-6.7 3-6.7 6.6v3.4h-1.6c-1.9 0-3.4 1.5-3.4 3.3v11.7c0 1.8 1.5 3.3 3.4 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-11.7c0-1.8-1.5-3.3-3.4-3.3z m-8.3 13.8c-1.2 0-2.2-1-2.2-2.2s1-2.1 2.2-2.1 2.2 0.9 2.2 2.1-1 2.2-2.2 2.2z m3.3-12.2h-6.6v-5c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v5z' })
                )
            );
        }
    }]);

    return TiLockClosed;
}(React.Component);

exports.default = TiLockClosed;
module.exports = exports['default'];