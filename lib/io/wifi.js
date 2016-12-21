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

var IoWifi = function (_React$Component) {
    _inherits(IoWifi, _React$Component);

    function IoWifi() {
        _classCallCheck(this, IoWifi);

        return _possibleConstructorReturn(this, (IoWifi.__proto__ || Object.getPrototypeOf(IoWifi)).apply(this, arguments));
    }

    _createClass(IoWifi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 7.5c6.3 0 12.2 2.3 16.7 6.6l0.8 0.7-0.8 0.7-3.3 3.3-0.7-0.7c-3.4-3.2-8-5-12.7-5s-9.3 1.8-12.7 5l-0.7 0.7-3.3-3.3-0.8-0.7 0.8-0.7c4.5-4.3 10.5-6.6 16.7-6.6z m11 12.5l0.9 0.8-0.8 0.8-2.6 2.5-0.7 0.7-0.8-0.7c-1.9-1.7-4.4-2.7-7-2.7s-5.1 1-7 2.7l-0.8 0.7-0.7-0.7-2.6-2.5-0.8-0.8 0.9-0.8c2.9-2.6 6.5-4.1 10.3-4.2h0.7c4.1 0 8 1.5 11 4.2z m-11 12.5l-4.8-4.8-0.9-0.8 0.9-0.8c1.4-0.9 2.5-1.6 4.8-1.6s3.7 0.7 4.8 1.6l0.9 0.8-0.8 0.8-4.1 4z' })
                )
            );
        }
    }]);

    return IoWifi;
}(React.Component);

exports.default = IoWifi;
module.exports = exports['default'];