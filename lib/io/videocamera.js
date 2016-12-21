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

var IoVideocamera = function (_React$Component) {
    _inherits(IoVideocamera, _React$Component);

    function IoVideocamera() {
        _classCallCheck(this, IoVideocamera);

        return _possibleConstructorReturn(this, (IoVideocamera.__proto__ || Object.getPrototypeOf(IoVideocamera)).apply(this, arguments));
    }

    _createClass(IoVideocamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.2 14.5v5.1l8.8-2.7v13.8l-8.8-2.7v5c0 0.4-0.3 0.7-0.7 0.7h-24.8c-0.4 0-0.7-0.3-0.7-0.7v-18.5c0-0.4 0.3-0.7 0.7-0.7h16.3v-3c0-0.3-0.5-0.8-0.8-0.8h-13.8v-3.7h13.9c2.8 0 5.1 2.2 5.1 5v2.5h4.1c0.4 0 0.7 0.3 0.7 0.7z m-8.5 12.1c1.5 0 2.8-1.2 2.8-2.8s-1.3-2.7-2.8-2.7-2.9 1.2-2.9 2.7c0 0.8 0.4 1.5 0.9 2.1h-5.3c0.5-0.6 0.8-1.3 0.8-2.1 0-1.5-1.2-2.8-2.8-2.8s-2.8 1.3-2.8 2.8 1.3 2.8 2.8 2.8h9.3z' })
                )
            );
        }
    }]);

    return IoVideocamera;
}(React.Component);

exports.default = IoVideocamera;
module.exports = exports['default'];