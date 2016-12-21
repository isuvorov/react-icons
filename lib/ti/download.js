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

var TiDownload = function (_React$Component) {
    _inherits(TiDownload, _React$Component);

    function TiDownload() {
        _classCallCheck(this, TiDownload);

        return _possibleConstructorReturn(this, (TiDownload.__proto__ || Object.getPrototypeOf(TiDownload)).apply(this, arguments));
    }

    _createClass(TiDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.8 12.3c-0.3-0.3-0.7-0.4-1.1-0.4s-0.9 0.1-1.2 0.4l-3.8 3.9v-11.2c0-0.9-0.8-1.7-1.7-1.7s-1.7 0.8-1.7 1.7v11.2l-3.8-3.9c-0.3-0.3-0.7-0.4-1.2-0.4s-0.8 0.1-1.1 0.4c-0.7 0.7-0.7 1.7 0 2.4l7.8 7.8 7.8-7.8c0.7-0.7 0.7-1.7 0-2.4z m7.2 14.4c0-0.2 0-0.4-0.1-0.6l-3.3-10c-0.2-0.6-0.9-1.1-1.6-1.1h-0.4c-0.1 0.3-0.3 0.6-0.6 0.9l-2.4 2.4h2.2l2.8 8.4h-23.2l2.8-8.4h2.2l-2.4-2.4c-0.3-0.3-0.5-0.6-0.6-0.9h-0.4c-0.7 0-1.4 0.5-1.6 1.1l-3.3 10c-0.1 0.2-0.1 0.4-0.1 0.6 0 0 0 8.3 0 8.3 0 0.9 0.7 1.7 1.7 1.7h26.6c1 0 1.7-0.8 1.7-1.7 0 0 0-8.3 0-8.3z' })
                )
            );
        }
    }]);

    return TiDownload;
}(React.Component);

exports.default = TiDownload;
module.exports = exports['default'];