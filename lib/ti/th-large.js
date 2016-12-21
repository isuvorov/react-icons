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

var TiThLarge = function (_React$Component) {
    _inherits(TiThLarge, _React$Component);

    function TiThLarge() {
        _classCallCheck(this, TiThLarge);

        return _possibleConstructorReturn(this, (TiThLarge.__proto__ || Object.getPrototypeOf(TiThLarge)).apply(this, arguments));
    }

    _createClass(TiThLarge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 5h-3.3c-1.4 0-2.6 0.6-3.5 1.5s-1.5 2.1-1.5 3.5v3.3c0 1.4 0.6 2.7 1.5 3.6s2.1 1.4 3.5 1.4h3.3c1.4 0 2.7-0.5 3.6-1.4s1.4-2.2 1.4-3.6v-3.3c0-1.4-0.5-2.6-1.4-3.5s-2.2-1.5-3.6-1.5z m16.7 0h-3.3c-1.4 0-2.7 0.6-3.6 1.5s-1.4 2.1-1.4 3.5v3.3c0 1.4 0.5 2.7 1.4 3.6s2.2 1.4 3.6 1.4h3.3c1.4 0 2.6-0.5 3.5-1.4s1.5-2.2 1.5-3.6v-3.3c0-1.4-0.6-2.6-1.5-3.5s-2.1-1.5-3.5-1.5z m-16.7 16.7h-3.3c-1.4 0-2.6 0.5-3.5 1.4s-1.5 2.2-1.5 3.6v3.3c0 1.4 0.6 2.6 1.5 3.5s2.1 1.5 3.5 1.5h3.3c1.4 0 2.7-0.6 3.6-1.5s1.4-2.1 1.4-3.5v-3.3c0-1.4-0.5-2.7-1.4-3.6s-2.2-1.4-3.6-1.4z m16.7 0h-3.3c-1.4 0-2.7 0.5-3.6 1.4s-1.4 2.2-1.4 3.6v3.3c0 1.4 0.5 2.6 1.4 3.5s2.2 1.5 3.6 1.5h3.3c1.4 0 2.6-0.6 3.5-1.5s1.5-2.1 1.5-3.5v-3.3c0-1.4-0.6-2.7-1.5-3.6s-2.1-1.4-3.5-1.4z' })
                )
            );
        }
    }]);

    return TiThLarge;
}(React.Component);

exports.default = TiThLarge;
module.exports = exports['default'];