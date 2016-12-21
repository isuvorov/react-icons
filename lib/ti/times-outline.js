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

var TiTimesOutline = function (_React$Component) {
    _inherits(TiTimesOutline, _React$Component);

    function TiTimesOutline() {
        _classCallCheck(this, TiTimesOutline);

        return _possibleConstructorReturn(this, (TiTimesOutline.__proto__ || Object.getPrototypeOf(TiTimesOutline)).apply(this, arguments));
    }

    _createClass(TiTimesOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.7 31.7c-1.4 0-2.6-0.6-3.6-1.5l-3.1-3.1-3.1 3.1c-1.9 1.9-5.2 1.9-7.1 0-0.9-0.9-1.5-2.2-1.5-3.5s0.6-2.6 1.5-3.6l3.1-3.1-3.1-3.1c-0.9-1-1.5-2.2-1.5-3.6s0.6-2.6 1.5-3.5c1.9-1.9 5.2-1.9 7.1 0l3.1 3.1 3.1-3.1c1.9-1.9 5.2-1.9 7.1 0 0.9 0.9 1.5 2.2 1.5 3.5s-0.6 2.6-1.5 3.6l-3.1 3.1 3.1 3.1c0.9 1 1.5 2.2 1.5 3.6s-0.6 2.6-1.5 3.5c-0.9 0.9-2.2 1.5-3.5 1.5z m-6.7-9.3l5.5 5.4c0.6 0.7 1.7 0.7 2.3 0 0.4-0.3 0.5-0.7 0.5-1.1s-0.1-0.9-0.5-1.2l-5.4-5.5 5.4-5.5c0.4-0.3 0.5-0.7 0.5-1.2s-0.1-0.8-0.5-1.1c-0.6-0.7-1.7-0.7-2.3 0l-5.5 5.4-5.5-5.4c-0.6-0.7-1.7-0.7-2.3 0-0.4 0.3-0.5 0.7-0.5 1.1s0.1 0.9 0.5 1.2l5.4 5.5-5.4 5.5c-0.4 0.3-0.5 0.7-0.5 1.2s0.1 0.8 0.5 1.1c0.6 0.7 1.7 0.7 2.3 0l5.5-5.4z' })
                )
            );
        }
    }]);

    return TiTimesOutline;
}(React.Component);

exports.default = TiTimesOutline;
module.exports = exports['default'];