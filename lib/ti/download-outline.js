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

var TiDownloadOutline = function (_React$Component) {
    _inherits(TiDownloadOutline, _React$Component);

    function TiDownloadOutline() {
        _classCallCheck(this, TiDownloadOutline);

        return _possibleConstructorReturn(this, (TiDownloadOutline.__proto__ || Object.getPrototypeOf(TiDownloadOutline)).apply(this, arguments));
    }

    _createClass(TiDownloadOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 28.3c0-0.1 0-0.3-0.1-0.5l-3.3-10c-0.2-0.7-0.9-1.1-1.6-1.1h-0.9l1.1-1.2c2-1.9 2-5.1 0-7-1.3-1.4-3.4-1.8-5.2-1.2v-2.3c0-2.8-2.2-5-5-5s-5 2.2-5 5v2.3c-1.8-0.6-3.8-0.2-5.2 1.2-1.9 1.9-1.9 5.1 0 7l1.1 1.2h-0.9c-0.7 0-1.4 0.4-1.6 1.1l-3.3 10c-0.1 0.2-0.1 0.4-0.1 0.5 0 0 0 8.4 0 8.4 0 0.9 0.7 1.6 1.7 1.6h26.6c1 0 1.7-0.7 1.7-1.6 0 0 0-8.4 0-8.4z m-22.8-17.5c0.3-0.3 0.7-0.5 1.1-0.5s0.9 0.2 1.2 0.5l3.8 3.8v-9.6c0-0.9 0.8-1.7 1.7-1.7s1.7 0.8 1.7 1.7v9.6l3.8-3.8c0.6-0.6 1.7-0.6 2.3 0 0.7 0.7 0.7 1.7 0 2.4l-7.8 7.8-7.8-7.8c-0.7-0.7-0.7-1.7 0-2.4z m-1 9.2h3.1l5.7 5.7 5.7-5.7h3.1l2.8 8.3h-23.2l2.8-8.3z m20.5 15h-23.4v-5h23.4v5z' })
                )
            );
        }
    }]);

    return TiDownloadOutline;
}(React.Component);

exports.default = TiDownloadOutline;
module.exports = exports['default'];