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

var TiHeartFullOutline = function (_React$Component) {
    _inherits(TiHeartFullOutline, _React$Component);

    function TiHeartFullOutline() {
        _classCallCheck(this, TiHeartFullOutline);

        return _possibleConstructorReturn(this, (TiHeartFullOutline.__proto__ || Object.getPrototypeOf(TiHeartFullOutline)).apply(this, arguments));
    }

    _createClass(TiHeartFullOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.7 15.7c0 2.1 0.3 5.5 3.3 8.5 2.7 2.6 11.5 8.6 11.8 9 0.4 0.1 0.7 0.3 1 0.3s0.7-0.2 1-0.3c0.4-0.4 9.2-6.2 11.9-9 3-3 3.3-6.4 3.3-8.5 0-5-4-9-9-9-2.7 0-5.3 1.5-7 3.8-1.7-2.3-4.3-3.8-7.3-3.8-4.9 0-9 4-9 9z' })
                )
            );
        }
    }]);

    return TiHeartFullOutline;
}(React.Component);

exports.default = TiHeartFullOutline;
module.exports = exports['default'];