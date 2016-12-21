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

var IoAndroidBoat = function (_React$Component) {
    _inherits(IoAndroidBoat, _React$Component);

    function IoAndroidBoat() {
        _classCallCheck(this, IoAndroidBoat);

        return _possibleConstructorReturn(this, (IoAndroidBoat.__proto__ || Object.getPrototypeOf(IoAndroidBoat)).apply(this, arguments));
    }

    _createClass(IoAndroidBoat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.1 32.3l-4-10.9c-0.2-0.5-0.1-0.9 0.1-1.3s0.6-0.6 1-0.8l2.9-1v-7.7c0-1.8 1.6-3.3 3.4-3.3h5l1.3-4.2h7.5l1.2 4.2h5c1.8 0 3.4 1.5 3.4 3.3v7.7l2.9 1c0.4 0.2 0.9 0.4 1 0.8s0.3 0.9 0.1 1.3l-4 10.9h0c-2.7 0-5.1-1.6-6.8-3.4-1.6 1.8-3.9 3.4-6.6 3.4s-5-1.5-6.6-3.3c-1.7 1.8-4.1 3.3-6.8 3.3h0z m3.4-21.7v6.6l10-3.2 10 3.2v-6.6h-20z m16.6 21.3s4.7 5 8.4 5h-1.6c-2.4 0-4.6-1-6.8-2.1-4.1 2.2-9.1 2.2-13.2 0-2.1 1.1-4.4 2.1-6.8 2.1h-1.6c3.8 0 8.4-5 8.4-5 4 2.8 9.2 2.8 13.2 0z' })
                )
            );
        }
    }]);

    return IoAndroidBoat;
}(React.Component);

exports.default = IoAndroidBoat;
module.exports = exports['default'];