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

var TiWiFiOutline = function (_React$Component) {
    _inherits(TiWiFiOutline, _React$Component);

    function TiWiFiOutline() {
        _classCallCheck(this, TiWiFiOutline);

        return _possibleConstructorReturn(this, (TiWiFiOutline.__proto__ || Object.getPrototypeOf(TiWiFiOutline)).apply(this, arguments));
    }

    _createClass(TiWiFiOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.3 17.9c0-1.3-0.5-2.4-1.2-3.4-0.1-0.1-0.2-0.2-0.4-0.3-0.2-0.4-0.5-0.6-0.9-0.9-7.4-6.2-18.2-6.2-25.6 0.1-0.4 0.2-1.3 1.2-1.3 1.2-0.7 1-1.2 2.2-1.2 3.5 0 1.3 0.6 2.9 1.3 3.6s9.6 9.6 9.6 9.6c1.1 1.2 2.6 2 4.4 2 1.7 0 2.8-0.2 4.2-1.6 0 0 9.3-9.4 9.3-9.4 1.2-1.2 1.8-2.9 1.8-4.4z m-15.3 12.1c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5z m6.5-5.4c-0.5 0.4-1.1 0.7-1.8 0.7-0.6 0-1.3-0.3-1.8-0.7-1.6-1.7-4.2-1.7-5.8 0-1 0.9-2.6 0.9-3.6 0-1-1-1-2.6 0-3.6 3.6-3.6 9.4-3.6 13 0 1 1 1 2.6 0 3.6z m4.7-4.8c-0.5 0.5-1.1 0.8-1.8 0.8s-1.3-0.3-1.7-0.8c-4.3-4.2-11.1-4.2-15.4 0-0.9 1-2.5 1-3.5 0-1-0.9-1-2.5 0-3.5 6.2-6.2 16.2-6.2 22.4 0 1 1 1 2.6 0 3.5z' })
                )
            );
        }
    }]);

    return TiWiFiOutline;
}(React.Component);

exports.default = TiWiFiOutline;
module.exports = exports['default'];