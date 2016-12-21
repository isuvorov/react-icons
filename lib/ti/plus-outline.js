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

var TiPlusOutline = function (_React$Component) {
    _inherits(TiPlusOutline, _React$Component);

    function TiPlusOutline() {
        _classCallCheck(this, TiPlusOutline);

        return _possibleConstructorReturn(this, (TiPlusOutline.__proto__ || Object.getPrototypeOf(TiPlusOutline)).apply(this, arguments));
    }

    _createClass(TiPlusOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-2.8 0-5-2.2-5-5l0.1-5.1-5.1 0.1c-2.8 0-5-2.2-5-5s2.2-5 5-5l5.1-0.1-0.1-4.9c0-2.8 2.2-5 5-5s5 2.2 5 5l0.1 4.9 4.9 0.1c2.8 0 5 2.2 5 5s-2.2 5-5 5l-4.9-0.1-0.1 5.1c0 2.8-2.2 5-5 5z m-1.7-13.3v8.3c0 0.9 0.8 1.7 1.7 1.7s1.7-0.8 1.7-1.7v-8.3h8.3c0.9 0 1.7-0.8 1.7-1.7s-0.8-1.7-1.7-1.7h-8.3v-8.3c0-0.9-0.8-1.7-1.7-1.7s-1.7 0.8-1.7 1.7v8.3h-8.3c-0.9 0-1.7 0.8-1.7 1.7s0.8 1.7 1.7 1.7h8.3z' })
                )
            );
        }
    }]);

    return TiPlusOutline;
}(React.Component);

exports.default = TiPlusOutline;
module.exports = exports['default'];