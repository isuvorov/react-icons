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

var TiThSmallOutline = function (_React$Component) {
    _inherits(TiThSmallOutline, _React$Component);

    function TiThSmallOutline() {
        _classCallCheck(this, TiThSmallOutline);

        return _possibleConstructorReturn(this, (TiThSmallOutline.__proto__ || Object.getPrototypeOf(TiThSmallOutline)).apply(this, arguments));
    }

    _createClass(TiThSmallOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 26.7h-3.3c-1.9 0-3.4 1.5-3.4 3.3v3.3c0 1.9 1.5 3.4 3.4 3.4h3.3c1.8 0 3.3-1.5 3.3-3.4v-3.3c0-1.8-1.5-3.3-3.3-3.3z m0 6.6h-3.3v-3.3h3.3v3.3z m0-18.3h-3.3c-1.9 0-3.4 1.5-3.4 3.3v3.4c0 1.8 1.5 3.3 3.4 3.3h3.3c1.8 0 3.3-1.5 3.3-3.3v-3.4c0-1.8-1.5-3.3-3.3-3.3z m0 6.7h-3.3v-3.4h3.3v3.4z m0-18.4h-3.3c-1.9 0-3.4 1.5-3.4 3.4v3.3c0 1.8 1.5 3.3 3.4 3.3h3.3c1.8 0 3.3-1.5 3.3-3.3v-3.3c0-1.9-1.5-3.4-3.3-3.4z m0 6.7h-3.3v-3.3h3.3v3.3z m11.7 16.7h-3.4c-1.8 0-3.3 1.5-3.3 3.3v3.3c0 1.9 1.5 3.4 3.3 3.4h3.4c1.8 0 3.3-1.5 3.3-3.4v-3.3c0-1.8-1.5-3.3-3.3-3.3z m0 6.6h-3.4v-3.3h3.4v3.3z m0-18.3h-3.4c-1.8 0-3.3 1.5-3.3 3.3v3.4c0 1.8 1.5 3.3 3.3 3.3h3.4c1.8 0 3.3-1.5 3.3-3.3v-3.4c0-1.8-1.5-3.3-3.3-3.3z m0 6.7h-3.4v-3.4h3.4v3.4z m0-18.4h-3.4c-1.8 0-3.3 1.5-3.3 3.4v3.3c0 1.8 1.5 3.3 3.3 3.3h3.4c1.8 0 3.3-1.5 3.3-3.3v-3.3c0-1.9-1.5-3.4-3.3-3.4z m0 6.7h-3.4v-3.3h3.4v3.3z m11.6 16.7h-3.3c-1.8 0-3.3 1.5-3.3 3.3v3.3c0 1.9 1.5 3.4 3.3 3.4h3.3c1.9 0 3.4-1.5 3.4-3.4v-3.3c0-1.8-1.5-3.3-3.4-3.3z m0 6.6h-3.3v-3.3h3.3v3.3z m0-18.3h-3.3c-1.8 0-3.3 1.5-3.3 3.3v3.4c0 1.8 1.5 3.3 3.3 3.3h3.3c1.9 0 3.4-1.5 3.4-3.3v-3.4c0-1.8-1.5-3.3-3.4-3.3z m0 6.7h-3.3v-3.4h3.3v3.4z m0-18.4h-3.3c-1.8 0-3.3 1.5-3.3 3.4v3.3c0 1.8 1.5 3.3 3.3 3.3h3.3c1.9 0 3.4-1.5 3.4-3.3v-3.3c0-1.9-1.5-3.4-3.4-3.4z m0 6.7h-3.3v-3.3h3.3v3.3z' })
                )
            );
        }
    }]);

    return TiThSmallOutline;
}(React.Component);

exports.default = TiThSmallOutline;
module.exports = exports['default'];