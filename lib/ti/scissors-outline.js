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

var TiScissorsOutline = function (_React$Component) {
    _inherits(TiScissorsOutline, _React$Component);

    function TiScissorsOutline() {
        _classCallCheck(this, TiScissorsOutline);

        return _possibleConstructorReturn(this, (TiScissorsOutline.__proto__ || Object.getPrototypeOf(TiScissorsOutline)).apply(this, arguments));
    }

    _createClass(TiScissorsOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.2 8.8c0.1 0 0.3 0 0.4 0 0.3 0 0.6 0 0.8 0.1 0.2 0.1 0.5 0.2 0.7 0.3 0.4 0.2 0.8 0.4 1.1 0.7 0.2 0.2 0.4 0.4 0.5 0.6 0.1 0.2 0.2 0.2 0.2 0.2s-0.1 0-0.3-0.1c-0.2-0.1-0.4-0.2-0.7-0.3-0.3 0-0.5 0-0.8 0l-0.2 0c-0.2 0-0.4 0-0.6 0.1-0.1 0-0.3 0.1-0.5 0.2-0.3 0.1-0.5 0.3-0.7 0.5-0.1 0.1-0.1 0.1-0.1 0.2 0.7 0.8 1.2 1.8 1.2 3 0 2.4-2 4.4-4.4 4.4-1.6 0-2.9-0.7-3.7-1.9l-2.7 4.4c2.8 3.2 5.3 7.2 5.3 7.2 1.7 2.4-1.3 6.6-1.3 6.6l-5.9-10.8-5.9 10.8s-3.1-4.2-1.3-6.6c0 0 2.5-4 5.3-7.2l-2.7-4.4c-0.8 1.2-2.2 1.9-3.7 1.9-2.4 0-4.4-2-4.4-4.4 0-2.5 2-4.4 4.4-4.4 1.6 0 2.9 0.7 3.7 1.9 1.6 2.4 2.9 5.3 4.6 7.3 1.7-2 3-4.9 4.6-7.3 0.8-1.2 2.1-1.9 3.7-1.9 0.1 0 0.2 0 0.3 0 0.1-0.1 0.3-0.2 0.5-0.3 0.2-0.1 0.4-0.3 0.7-0.4 0.2-0.1 0.5-0.2 0.7-0.2 0.4-0.2 0.8-0.2 1.2-0.2z m-3.4 7.3c0.4 0 0.9-0.2 1.2-0.5 0.7-0.7 0.7-1.9 0-2.6-0.3-0.3-0.8-0.5-1.2-0.5s-0.9 0.2-1.3 0.5l-0.4 0.7c-0.2 0.6-0.1 1.3 0.4 1.9 0.4 0.3 0.8 0.5 1.3 0.5z m-16.6 0c0.5 0 0.9-0.2 1.3-0.5 0.5-0.6 0.6-1.3 0.4-1.9l-0.4-0.7c-0.4-0.3-0.8-0.5-1.3-0.5s-0.9 0.2-1.3 0.5c-0.6 0.7-0.6 1.9 0 2.6 0.4 0.3 0.9 0.5 1.3 0.5z m8.3 6.2c0.3 0 0.6-0.3 0.6-0.6 0-0.4-0.3-0.7-0.6-0.7-0.4 0-0.7 0.3-0.7 0.7 0 0.3 0.3 0.6 0.7 0.6z m11.7-16.8c-0.7 0-1.5 0.1-2.2 0.3l-0.2 0c-0.3 0.1-0.7 0.2-1.2 0.5l-0.4 0.2c-2.3 0.2-4.4 1.4-5.8 3.3 0 0.1-0.1 0.1-0.1 0.2-0.7 1-1.3 2-1.8 3-0.6-1-1.2-2-1.8-3-0.1-0.1-0.1-0.1-0.2-0.2-1.4-2.1-3.8-3.3-6.3-3.3-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8c0.5 0 1-0.1 1.5-0.2-1.7 2.3-2.9 4.2-3.2 4.7-2.9 4.1 0.6 9.4 1.4 10.4 0.6 0.9 1.6 1.4 2.7 1.4 0 0 0.1 0 0.2 0 1.1-0.1 2.1-0.8 2.7-1.8l3-5.5 3 5.5c0.5 1 1.5 1.7 2.7 1.8 0.1 0 0.1 0 0.2 0 1.1 0 2.1-0.5 2.7-1.4 0.7-1 4.2-6.3 1.4-10.4-0.3-0.4-1.6-2.4-3.3-4.7 0.5 0.1 1 0.2 1.6 0.2 4.2 0 7.7-3.5 7.7-7.8 0-0.1 0-0.2 0-0.3 0.8-0.2 1.5-0.6 2-1.3 0.9-1.2 0.9-2.8 0-4l-0.1-0.1-0.1-0.1c-0.1-0.3-0.4-0.7-0.9-1.1-0.6-0.6-1.3-0.9-1.8-1.2-0.4-0.2-0.8-0.3-1-0.4l-0.1 0c-0.6-0.2-1-0.3-1.3-0.3l-0.1 0c0 0-0.1 0-0.2 0-0.2 0-0.4 0-0.7 0z' })
                )
            );
        }
    }]);

    return TiScissorsOutline;
}(React.Component);

exports.default = TiScissorsOutline;
module.exports = exports['default'];