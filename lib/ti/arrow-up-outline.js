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

var TiArrowUpOutline = function (_React$Component) {
    _inherits(TiArrowUpOutline, _React$Component);

    function TiArrowUpOutline() {
        _classCallCheck(this, TiArrowUpOutline);

        return _possibleConstructorReturn(this, (TiArrowUpOutline.__proto__ || Object.getPrototypeOf(TiArrowUpOutline)).apply(this, arguments));
    }

    _createClass(TiArrowUpOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-2.8 0-5-2.2-5-5v-7.9c-1.9 1.7-5 1.6-6.9-0.2-1.9-2-1.9-5.2 0-7.1l11.9-11.9 11.9 11.9c1.9 1.9 1.9 5.1 0 7.1-1.9 1.8-5 1.9-6.9 0.2v7.9c0 2.8-2.2 5-5 5z m-1.7-21v16c0 0.9 0.8 1.7 1.7 1.7s1.7-0.8 1.7-1.7v-16l5.5 5.5c0.6 0.6 1.7 0.6 2.3 0 0.7-0.6 0.7-1.7 0-2.3l-9.5-9.6-9.5 9.6c-0.7 0.6-0.7 1.7 0 2.3 0.6 0.6 1.7 0.6 2.3 0l5.5-5.5z' })
                )
            );
        }
    }]);

    return TiArrowUpOutline;
}(React.Component);

exports.default = TiArrowUpOutline;
module.exports = exports['default'];