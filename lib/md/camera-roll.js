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

var MdCameraRoll = function (_React$Component) {
    _inherits(MdCameraRoll, _React$Component);

    function MdCameraRoll() {
        _classCallCheck(this, MdCameraRoll);

        return _possibleConstructorReturn(this, (MdCameraRoll.__proto__ || Object.getPrototypeOf(MdCameraRoll)).apply(this, arguments));
    }

    _createClass(MdCameraRoll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 15v-3.4h-3.4v3.4h3.4z m0 15v-3.4h-3.4v3.4h3.4z m-6.8-15v-3.4h-3.2v3.4h3.2z m0 15v-3.4h-3.2v3.4h3.2z m-6.6-15v-3.4h-3.4v3.4h3.4z m0 15v-3.4h-3.4v3.4h3.4z m3.4-21.6h13.2v25h-13.2c0 1.8-1.6 3.2-3.4 3.2h-13.4c-1.8 0-3.2-1.4-3.2-3.2v-25c0-1.8 1.4-3.4 3.2-3.4h1.8v-1.6c0-1 0.7-1.8 1.6-1.8h6.6c1 0 1.8 0.8 1.8 1.8v1.6h1.6c1.8 0 3.4 1.6 3.4 3.4z' })
                )
            );
        }
    }]);

    return MdCameraRoll;
}(React.Component);

exports.default = MdCameraRoll;
module.exports = exports['default'];