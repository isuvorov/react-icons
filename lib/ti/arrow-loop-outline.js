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

var TiArrowLoopOutline = function (_React$Component) {
    _inherits(TiArrowLoopOutline, _React$Component);

    function TiArrowLoopOutline() {
        _classCallCheck(this, TiArrowLoopOutline);

        return _possibleConstructorReturn(this, (TiArrowLoopOutline.__proto__ || Object.getPrototypeOf(TiArrowLoopOutline)).apply(this, arguments));
    }

    _createClass(TiArrowLoopOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 12c0-0.1 0-0.2 0-0.3 0-1.4-0.6-2.6-1.5-3.6-0.9-0.9-2.2-1.4-3.5-1.4s-2.6 0.5-3.6 1.4l-4.8 4.8c-0.9-0.8-2-1.2-3.3-1.2h-1.7c-6.4 0-11.6 5.2-11.6 11.6s5.2 11.7 11.6 11.7h15c6.5 0 11.7-5.2 11.7-11.7 0-5.5-3.6-10.1-8.3-11.3z m-3.4 19.7h-15c-4.6 0-8.3-3.8-8.3-8.4s3.7-8.3 8.3-8.3h1.7c0.9 0 1.7 0.7 1.7 1.7s-0.8 1.6-1.7 1.6h-1.7c-2.7 0-5 2.3-5 5s2.3 5 5 5h15c2.8 0 5-2.2 5-5s-1.8-5-4.1-5h-3.5l2.1 2.2c0.7 0.6 0.7 1.7 0 2.3-0.3 0.4-0.7 0.5-1.1 0.5s-0.9-0.1-1.2-0.5l-6.2-6.1 6.2-6.2c0.3-0.3 0.7-0.5 1.2-0.5s0.8 0.2 1.1 0.5c0.7 0.6 0.7 1.7 0 2.3l-2.1 2.2h3.5c4.1 0 7.5 3.7 7.5 8.3s-3.8 8.4-8.4 8.4z m1.3-11.7c1.1 0.3 2.1 1.7 2.1 3.3 0 1.9-1.5 3.4-3.4 3.4h-15c-1.8 0-3.3-1.5-3.3-3.4s1.5-3.3 3.3-3.3h1.7c1.4 0 2.6-0.9 3.1-2.2l6.2 6.2c0.6 0.7 1.5 1 2.4 1s1.7-0.3 2.3-1 1-1.4 1-2.3c0-0.6-0.1-1.2-0.4-1.7z' })
                )
            );
        }
    }]);

    return TiArrowLoopOutline;
}(React.Component);

exports.default = TiArrowLoopOutline;
module.exports = exports['default'];