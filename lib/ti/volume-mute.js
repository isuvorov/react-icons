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

var TiVolumeMute = function (_React$Component) {
    _inherits(TiVolumeMute, _React$Component);

    function TiVolumeMute() {
        _classCallCheck(this, TiVolumeMute);

        return _possibleConstructorReturn(this, (TiVolumeMute.__proto__ || Object.getPrototypeOf(TiVolumeMute)).apply(this, arguments));
    }

    _createClass(TiVolumeMute, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.8 8.8c-0.6-0.6-1.7-0.6-2.3 0l-2.6 2.6c-0.6-1.1-1.6-1.7-2.7-1.7-0.7 0-1.5 0.3-2.2 0.8l-4.5 2.9c-1.2 0.9-3.7 1.6-5.2 1.6-2.7 0-5 2.2-5 5v3.3c0 2.1 1.3 3.9 3.1 4.6l-2.6 2.6c-0.6 0.6-0.6 1.7 0 2.3 0.3 0.4 0.8 0.5 1.2 0.5s0.9-0.1 1.2-0.5l4.2-4.2c1.2 0.3 2.4 0.8 3.1 1.3l4.5 3c0.7 0.5 1.5 0.7 2.2 0.7 1.5 0 3.1-1.1 3.1-3.6v-14.3l4.5-4.5c0.7-0.7 0.7-1.7 0-2.4z m-8 4.4c0.1 0 0.1 0 0.2-0.1 0 0.1 0 0.2 0 0.2v2.2l-3.3 3.3v-3.5l3.1-2.1z m-13.1 6.8c0-0.9 0.7-1.7 1.6-1.7 2.1 0 4.9-0.8 6.7-1.9v4.1l-4.7 4.7c-0.7-0.1-1.4-0.2-2-0.2-0.9 0-1.6-0.7-1.6-1.7v-3.3z m5.5 5.7l2.8-2.9v4.1c-0.8-0.5-1.8-0.9-2.8-1.2z m7.8 4.5c-0.1 0-0.1-0.1-0.2-0.1l-3.1-2.1v-6.8l3.3-3.4v12.2c0 0.1 0 0.1 0 0.2z' })
                )
            );
        }
    }]);

    return TiVolumeMute;
}(React.Component);

exports.default = TiVolumeMute;
module.exports = exports['default'];