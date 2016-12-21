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

var MdVpnLock = function (_React$Component) {
    _inherits(MdVpnLock, _React$Component);

    function MdVpnLock() {
        _classCallCheck(this, MdVpnLock);

        return _possibleConstructorReturn(this, (MdVpnLock.__proto__ || Object.getPrototypeOf(MdVpnLock)).apply(this, arguments));
    }

    _createClass(MdVpnLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.6 34.9v-3.3c-1.8 0-3.2-1.4-3.2-3.2v-1.8l-8.1-7.9c-0.2 0.9-0.3 1.9-0.3 2.9 0 6.8 5.1 12.5 11.6 13.3z m15-14.9h3.3c0.1 0.5 0.1 1.1 0.1 1.6 0 9.3-7.4 16.8-16.6 16.8s-16.8-7.5-16.8-16.8 7.5-16.6 16.8-16.6c1.7 0 3.4 0.3 5 0.8v4.2c0 1.8-1.6 3.4-3.4 3.4h-3.4v3.2c0 1-0.7 1.8-1.6 1.8h-3.4v3.2h10c1 0 1.8 0.8 1.8 1.8v5h1.6c1.5 0 2.7 0.9 3.2 2.2 2.2-2.3 3.4-5.5 3.4-9 0-0.5 0-1.1 0-1.6z m3.7-13.4v-0.7c0-1.6-1.2-2.9-2.8-2.9s-2.8 1.3-2.8 2.9v0.7h5.6z m1.3 0c1 0 1.8 0.8 1.8 1.8v6.6c0 0.9-0.8 1.6-1.8 1.6h-8.2c-1 0-1.8-0.7-1.8-1.6v-6.6c0-1 0.8-1.8 1.8-1.8v-0.7c0-2.3 1.8-4.3 4.1-4.3s4.1 2 4.1 4.3v0.7z' })
                )
            );
        }
    }]);

    return MdVpnLock;
}(React.Component);

exports.default = MdVpnLock;
module.exports = exports['default'];