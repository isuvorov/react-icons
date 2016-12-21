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

var IoMagnet = function (_React$Component) {
    _inherits(IoMagnet, _React$Component);

    function IoMagnet() {
        _classCallCheck(this, IoMagnet);

        return _possibleConstructorReturn(this, (IoMagnet.__proto__ || Object.getPrototypeOf(IoMagnet)).apply(this, arguments));
    }

    _createClass(IoMagnet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5c9 0 15 6.1 15 15.6 0 3.9-0.2 6-1.2 10-1.2 5.2-3 8.9-3 8.9v0c-0.2 0.3-0.5 0.5-0.8 0.5-0.1 0-0.2-0.1-0.3-0.1l-0.2-0.1-3.9-1.5-0.1-0.1c-0.3-0.2-0.4-0.4-0.4-0.7 0-0.1 0-0.2 0.1-0.3v-0.1c0.5-1.2 2.1-4.6 2.8-7.9s1.1-4.9 1.1-8.4c0-5.6-4.1-9.5-9.1-9.5s-9.1 3.9-9.1 9.5c0 3.5 0.3 5.1 1.1 8.4s2.3 6.7 2.8 7.9v0.1c0.1 0.1 0.1 0.2 0.1 0.3 0 0.3-0.1 0.5-0.4 0.7l-0.1 0.1-3.9 1.5-0.2 0.1c-0.1 0-0.2 0.1-0.3 0.1-0.3 0-0.6-0.2-0.8-0.5v0s-1.9-3.7-3.1-8.9c-0.9-4-1.1-6.1-1.1-10 0-9.5 6-15.6 15-15.6z m-6.5 32.2c-0.7-1.5-2.1-4.6-2.8-7.7l-3.3 1c1 4.1 2.4 7.2 2.8 8.1l3.3-1.3v-0.1z m16.3 1.4c0.4-0.9 1.8-4 2.8-8.1l-3.4-1c-0.7 3.1-2 6.2-2.7 7.7v0.1z' })
                )
            );
        }
    }]);

    return IoMagnet;
}(React.Component);

exports.default = IoMagnet;
module.exports = exports['default'];