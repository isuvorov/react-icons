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

var TiTickOutline = function (_React$Component) {
    _inherits(TiTickOutline, _React$Component);

    function TiTickOutline() {
        _classCallCheck(this, TiTickOutline);

        return _possibleConstructorReturn(this, (TiTickOutline.__proto__ || Object.getPrototypeOf(TiTickOutline)).apply(this, arguments));
    }

    _createClass(TiTickOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.3 33.3c-1.3 0-2.6-0.5-3.5-1.4l-6.7-6.7c-0.9-0.9-1.4-2.2-1.4-3.5s0.5-2.6 1.4-3.6c1.9-1.9 5.2-1.9 7.1 0l2 2 5.1-9.2c0.9-1.6 2.6-2.6 4.4-2.6 0.8 0 1.7 0.3 2.4 0.7 1.2 0.6 2 1.7 2.4 3 0.3 1.2 0.2 2.6-0.5 3.8l-8.3 15c-0.8 1.3-2.1 2.3-3.7 2.5-0.2 0-0.4 0-0.7 0z m-6.6-13.3c-0.5 0-0.9 0.2-1.2 0.5s-0.5 0.7-0.5 1.2 0.2 0.8 0.5 1.1l6.7 6.7c0.3 0.4 0.8 0.6 1.4 0.5 0.5-0.1 0.9-0.4 1.2-0.9l8.3-15c0.2-0.3 0.3-0.8 0.2-1.2s-0.4-0.8-0.8-1c-0.8-0.5-1.9-0.2-2.3 0.6l-7.3 13.1-5.1-5.1c-0.3-0.3-0.7-0.5-1.1-0.5z' })
                )
            );
        }
    }]);

    return TiTickOutline;
}(React.Component);

exports.default = TiTickOutline;
module.exports = exports['default'];