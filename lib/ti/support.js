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

var TiSupport = function (_React$Component) {
    _inherits(TiSupport, _React$Component);

    function TiSupport() {
        _classCallCheck(this, TiSupport);

        return _possibleConstructorReturn(this, (TiSupport.__proto__ || Object.getPrototypeOf(TiSupport)).apply(this, arguments));
    }

    _createClass(TiSupport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5.8c-7.8 0-14.2 6.4-14.2 14.2s6.4 14.2 14.2 14.2 14.2-6.4 14.2-14.2-6.4-14.2-14.2-14.2z m10.8 14.2c0 1.8-0.4 3.4-1.2 4.9l-3.2-3.2c0.2-0.5 0.3-1.1 0.3-1.7 0-0.6-0.1-1.2-0.3-1.7l3.2-3.2c0.8 1.5 1.2 3.1 1.2 4.9z m-21.6 0c0-1.8 0.4-3.4 1.2-4.9l3.2 3.2c-0.2 0.5-0.3 1.1-0.3 1.7 0 0.6 0.1 1.1 0.3 1.7l-3.2 3.2c-0.8-1.5-1.2-3.1-1.2-4.9z m5.1-3.4l-3-2.9 2.4-2.4 2.9 3c-0.9 0.6-1.7 1.4-2.3 2.3z m-3 9.7l3-2.9c0.3 0.4 0.6 0.9 1 1.3s0.8 0.7 1.3 1l-2.9 3-2.4-2.4z m6.3-3.9c-0.6-0.7-0.9-1.5-0.9-2.4 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 0.9-0.3 1.7-0.9 2.4-1.3 1.2-3.5 1.2-4.8 0z m11.1-8.7l-3 2.9c-0.6-0.9-1.4-1.7-2.3-2.3l2.9-3 2.4 2.4z m-4 11c0.4-0.4 0.7-0.9 1-1.3l3 2.9-2.4 2.4-2.9-3c0.5-0.3 0.9-0.6 1.3-1z m0.2-14.3l-3.2 3.2c-0.5-0.2-1.1-0.3-1.7-0.3s-1.2 0.1-1.7 0.3l-3.2-3.2c1.5-0.8 3.1-1.2 4.9-1.2 1.8 0 3.4 0.4 4.9 1.2z m-9.8 19.2l3.2-3.2c0.5 0.2 1.1 0.3 1.7 0.3s1.2-0.1 1.7-0.3l3.2 3.2c-1.5 0.8-3.1 1.2-4.9 1.2-1.8 0-3.4-0.4-4.9-1.2z' })
                )
            );
        }
    }]);

    return TiSupport;
}(React.Component);

exports.default = TiSupport;
module.exports = exports['default'];