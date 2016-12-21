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

var IoCompass = function (_React$Component) {
    _inherits(IoCompass, _React$Component);

    function IoCompass() {
        _classCallCheck(this, IoCompass);

        return _possibleConstructorReturn(this, (IoCompass.__proto__ || Object.getPrototypeOf(IoCompass)).apply(this, arguments));
    }

    _createClass(IoCompass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5c0-3 0.8-5.9 2.1-8.4-1.2-1-2.1-2.4-2.1-4.1 0-2.7 2.3-5 5-5 1.7 0 3.1 0.9 4.1 2.1 2.5-1.3 5.4-2.1 8.4-2.1z m-15 5c0 0.8 0.4 1.6 1 2 1-1.3 2.2-2.5 3.5-3.5-0.4-0.6-1.2-1-2-1-1.4 0-2.5 1.1-2.5 2.5z m25.6 23.1c2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4-7.8 1.6-10.6 4.4-4.4 6.6-4.4 10.6 1.6 7.8 4.4 10.6 6.6 4.4 10.6 4.4 7.8-1.6 10.6-4.4z m-3.1-20.6s-4.2 10.2-5.6 11.9-9.4 8.1-9.4 8.1 4.2-10.3 5.6-11.9 9.4-8.1 9.4-8.1z' })
                )
            );
        }
    }]);

    return IoCompass;
}(React.Component);

exports.default = IoCompass;
module.exports = exports['default'];