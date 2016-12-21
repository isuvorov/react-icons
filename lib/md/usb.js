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

var MdUsb = function (_React$Component) {
    _inherits(MdUsb, _React$Component);

    function MdUsb() {
        _classCallCheck(this, MdUsb);

        return _possibleConstructorReturn(this, (MdUsb.__proto__ || Object.getPrototypeOf(MdUsb)).apply(this, arguments));
    }

    _createClass(MdUsb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 11.6h6.6v6.8h-1.6v3.2c0 1.9-1.5 3.4-3.4 3.4h-5v5.1c1.2 0.6 2.1 1.9 2.1 3.3 0 2-1.7 3.6-3.7 3.6s-3.7-1.6-3.7-3.6c0-1.4 0.9-2.7 2.1-3.3v-5.1h-5c-1.9 0-3.4-1.5-3.4-3.4v-3.4c-1.2-0.6-2-1.8-2-3.2 0-2 1.6-3.7 3.6-3.7s3.7 1.7 3.7 3.7c0 1.4-0.8 2.6-1.9 3.2v3.4h5v-13.2h-3.4l5-6.8 5 6.8h-3.4v13.2h5v-3.2h-1.6v-6.8z' })
                )
            );
        }
    }]);

    return MdUsb;
}(React.Component);

exports.default = MdUsb;
module.exports = exports['default'];