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

var TiInputChecked = function (_React$Component) {
    _inherits(TiInputChecked, _React$Component);

    function TiInputChecked() {
        _classCallCheck(this, TiInputChecked);

        return _possibleConstructorReturn(this, (TiInputChecked.__proto__ || Object.getPrototypeOf(TiInputChecked)).apply(this, arguments));
    }

    _createClass(TiInputChecked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.7 31.7h-13.4c-2.7 0-5-2.3-5-5v-13.4c0-2.7 2.3-5 5-5h8.4c0.9 0 1.6 0.8 1.6 1.7s-0.7 1.7-1.6 1.7h-8.4c-0.9 0-1.6 0.7-1.6 1.6v13.4c0 0.9 0.7 1.6 1.6 1.6h13.4c0.9 0 1.6-0.7 1.6-1.6v-5c0-1 0.8-1.7 1.7-1.7s1.7 0.7 1.7 1.7v5c0 2.7-2.3 5-5 5z m-4.8-7c-0.5 0-1.1-0.2-1.5-0.6l-4.5-4.5c-0.8-0.8-0.8-2.2 0-3.1 0.9-0.9 2.3-0.9 3.2 0l2.3 2.3 5.8-9c0.6-1.1 2-1.5 3-0.9 1.1 0.6 1.5 1.9 0.9 3l-7.2 11.7c-0.3 0.6-1 1-1.6 1.1-0.1 0-0.2 0-0.4 0z' })
                )
            );
        }
    }]);

    return TiInputChecked;
}(React.Component);

exports.default = TiInputChecked;
module.exports = exports['default'];